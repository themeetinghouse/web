import * as queries from '../../graphql/queries';
import * as customqueries from '../../graphql-custom/customQueries';
import * as mutations from '../../graphql/mutations';
import { API, graphqlOperation } from '@aws-amplify/api';

import {
  CreateVideoMutation,
  GetVideoByYoutubeIdentQuery,
  GetYoutubePlaylistItemsQuery,
  GetYoutubePlaylistQuery,
  GetYoutubeVideoContentDetailsQuery,
  GetYoutubeVideoStatisticsQuery,
  UpdateVideoMutation,
} from '../../API';
import { DeepPartial } from '../../utils';
import ignorePlaylist from './ignore-playlists';
import moment from 'moment';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

type YouTubePlaylist = NonNullable<
  GetYoutubePlaylistQuery['getYoutubePlaylist']['items']
>[0];

type YouTubeVideo = DeepPartial<
  NonNullable<
    GetYoutubePlaylistItemsQuery['getYoutubePlaylistItems']['items']
  >[0]
>;

export default class ImportYoutube {
  playlistData: NonNullable<
    GetYoutubePlaylistQuery['getYoutubePlaylist']['items']
  > = [];

  setPlaylists(json: GraphQLResult<GetYoutubePlaylistQuery>) {
    console.log({ 'setting playlists': json });
    this.playlistData = this.playlistData.concat(
      json.data?.getYoutubePlaylist?.items ?? []
    );
  }

  async loadPlaylists(nextPageToken: string) {
    try {
      const playlists = (await API.graphql(
        graphqlOperation(queries.getYoutubePlaylist, {
          nextPageToken: nextPageToken,
        })
      )) as GraphQLResult<GetYoutubePlaylistQuery>;

      this.setPlaylists(playlists);

      if (playlists.data?.getYoutubePlaylist.nextPageToken)
        await this.loadPlaylists(
          playlists.data.getYoutubePlaylist.nextPageToken
        );
      else {
        this.playlistData.forEach(async (item) => {
          if (!ignorePlaylist.includes(item?.id ?? ''))
            await this.loadPlaylist(item, '');
        });
      }
    } catch (e) {
      console.error(e);
      this.playlistData.forEach(async (item) => {
        if (!ignorePlaylist.includes(item?.id ?? ''))
          await this.loadPlaylist(item, '');
      });
    }
  }

  async reloadPlaylists() {
    await this.loadPlaylists('');
  }

  async loadPlaylist(data: YouTubePlaylist, pageToken: string) {
    console.log('loadPlaylist: ' + data?.id);

    try {
      const playlistItems = (await API.graphql(
        graphqlOperation(queries.getYoutubePlaylistItems, {
          playlistId: data?.id,
          pageToken: pageToken,
        })
      )) as GraphQLResult<GetYoutubePlaylistItemsQuery>;

      if (playlistItems.data?.getYoutubePlaylistItems.items)
        playlistItems.data.getYoutubePlaylistItems.items.forEach(
          async (item) => {
            await this.writeYoutube(item);
          }
        );
      if (playlistItems.data?.getYoutubePlaylistItems.nextPageToken)
        await this.loadPlaylist(
          data,
          playlistItems.data.getYoutubePlaylistItems.nextPageToken
        );
    } catch (e) {
      console.error({ 'Error queries.getYoutubePlaylistItems': e });
    }
  }

  async writeYoutube(vid1: YouTubeVideo) {
    try {
      const getVideoByYoutubeIdent = (await API.graphql(
        graphqlOperation(customqueries.getVideoByYoutubeIdent, {
          YoutubeIdent: vid1?.contentDetails?.videoId,
        })
      )) as GraphQLResult<GetVideoByYoutubeIdentQuery>;

      let videoType = '';
      const items = getVideoByYoutubeIdent.data?.getVideoByYoutubeIdent?.items;
      if (items && items.length > 0 && items[0]?.videoTypes)
        videoType = items[0]?.videoTypes;
      if (items?.length === 0 && vid1?.status?.privacyStatus !== 'private') {
        console.log({ 'Write Youtube': vid1 });
        console.log(getVideoByYoutubeIdent);

        if (vid1) {
          delete vid1['id'];
          if (vid1.snippet?.description === '')
            delete vid1.snippet['description'];
          if (vid1.snippet?.localized === null)
            delete vid1.snippet['localized'];
          if (vid1.statistics === null) delete vid1.statistics;
        }

        try {
          const getYoutubeVideoContentDetails = (await API.graphql(
            graphqlOperation(queries.getYoutubeVideoContentDetails, {
              videoId: vid1?.contentDetails?.videoId,
            })
          )) as GraphQLResult<GetYoutubeVideoContentDetailsQuery>;
          let duration = '';
          const items2 =
            getYoutubeVideoContentDetails.data?.getYoutubeVideoContentDetails
              ?.items;
          if (
            items2 &&
            items2.length > 0 &&
            items2[0]?.contentDetails?.duration
          )
            duration = Math.round(
              moment.duration(items2[0]?.contentDetails?.duration).as('minutes')
            ).toString();
          const createVideo = (await API.graphql({
            query: mutations.createVideo,
            variables: {
              input: {
                id: vid1?.contentDetails?.videoId,
                YoutubeIdent: vid1?.contentDetails?.videoId,
                Youtube: vid1,
                length: duration,
              },
            },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          })) as GraphQLResult<CreateVideoMutation>;
          console.log({ 'Success mutations.createVideo': createVideo.data });
        } catch (e: any) {
          /* ignore errors if mutation succeeds */
          if (e.data?.createVideo?.id) {
            console.log({ 'Success mutations.createVideo': e.data });
          } else {
            console.error({ 'Error mutations.createVideo': e });
          }
        }
      } else if (
        moment().diff(vid1?.contentDetails?.videoPublishedAt, 'days') <= 365 &&
        vid1?.status?.privacyStatus !== 'private'
      ) {
        try {
          const getYoutubeVideoStatistics = (await API.graphql(
            graphqlOperation(queries.getYoutubeVideoStatistics, {
              videoId: vid1?.contentDetails?.videoId,
            })
          )) as GraphQLResult<GetYoutubeVideoStatisticsQuery>;
          let viewCount = '';
          const items3 =
            getYoutubeVideoStatistics?.data?.getYoutubeVideoStatistics?.items;
          if (items3 && items3.length > 0 && items3[0]?.statistics?.viewCount)
            viewCount = items3[0]?.statistics?.viewCount;
          if (
            viewCount &&
            (videoType === 'adult-sunday' ||
              videoType === 'adult-sunday-shortcut')
          ) {
            try {
              const updateVideo = (await API.graphql({
                query: mutations.updateVideo,
                variables: {
                  input: {
                    id: vid1?.contentDetails?.videoId,
                    viewCount: viewCount,
                  },
                },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
              })) as GraphQLResult<UpdateVideoMutation>;
              console.log({
                'Success mutations.updateVideo': updateVideo.data,
              });
            } catch (e: any) {
              /* ignore errors if mutation succeeds */
              if (e.data?.updateVideo?.id) {
                console.log({ 'Success mutations.updateVideo': e.data });
              } else {
                console.error({ 'Error mutations.updateVideo': e });
              }
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      console.error({ 'Error queries.getVideoByYoutubeIdent: ': e });
    }
  }
}
