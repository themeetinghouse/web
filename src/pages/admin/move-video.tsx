import React from 'react';
import * as customQueries from '../../graphql-custom/customQueries';
import * as mutations from '../../graphql/mutations';
import { API } from '@aws-amplify/api';
import './import-video.scss';
//import { v4 as uuidv4 } from 'uuid';
//import ImportYoutube from '../../components/ImportYoutube/ImportYoutube';
import { EmptyProps } from '../../utils';
import {
  ListSeriesQuery,
  ListVideosQuery,
  UpdateSeriesInput,
  UpdateSeriesMutation,
  // UpdateVideoInput,
  // UpdateVideoMutation,
} from 'API';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
//import { Modal } from 'reactstrap';
//import { DeleteCustomPlaylistMutation } from 'API';
//import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

type Videos = NonNullable<
  NonNullable<GraphQLResult<ListVideosQuery>['data']>['listVideos']
>['items'];
type Series = NonNullable<
  NonNullable<GraphQLResult<ListSeriesQuery>['data']>['listSeries']
>['items'];
interface State {
  error: string;
  allVideos: Videos;
  allSeries: Series;
}

class Index extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = { error: '', allVideos: [], allSeries: [] };
  }
  async getAll(nextToken: string | null): Promise<Videos> {
    const listVideos = API.graphql({
      query: customQueries.listVideos,
      variables: {
        nextToken: nextToken,
        sortDirection: 'DESC',
        limit: 200,
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as GraphQLResult<ListVideosQuery>;
    try {
      console.log('next');
      const z = await listVideos;
      const r = z.data?.listVideos?.items as Videos;
      if (z.data?.listVideos?.nextToken)
        return [...r, ...(await this.getAll(z.data?.listVideos?.nextToken))];
      else return [...r];
    } catch (e) {
      return [];
      console.log(e);
    }
  }
  async getAllSeries(nextToken: string | null): Promise<Series> {
    const listSeries = API.graphql({
      query: customQueries.listSeries,
      variables: {
        nextToken: nextToken,
        sortDirection: 'DESC',
        limit: 200,
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as GraphQLResult<ListSeriesQuery>;
    try {
      console.log('next');
      const z = await listSeries;
      const r = z.data?.listSeries?.items as Series;
      if (z.data?.listSeries?.nextToken)
        return [
          ...r,
          ...(await this.getAllSeries(z.data?.listSeries?.nextToken)),
        ];
      else return [...r];
    } catch (e) {
      return [];
      console.log(e);
    }
  }

  async updateSeries() {
    console.log('CLEANUP');
    const b = this.state.allSeries.map((a) => {
      return {
        id: a?.id,
        seriesType: a?.seriesType,
        endDate: a?.endDate,
      };
    });
    console.log(b);
    const BBQ = b.filter((a) => a.seriesType == 'bbq');

    console.log(BBQ);

    const all = BBQ.map(async (z) => {
      if (z && z.id) {
        const r: UpdateSeriesInput = {
          id: z.id,
          seriesType: 'hidden-' + z.seriesType,
        };
        return API.graphql({
          query: mutations.updateSeries,
          variables: { input: r },

          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        }) as GraphQLResult<UpdateSeriesMutation>;
      }
    });
    console.log('WAITING');
    try {
      const t = await Promise.all(all);
      console.log(t);
    } catch (zz) {
      console.log(zz);
    }
    console.log('DONE');
  }
  /*  async update() {
    console.log('CLEANUP');
    const b = this.state.allVideos.map((a) => {
      return {
        id: a?.id,
        videoTypes: a?.videoTypes,
        publishedDate: a?.publishedDate,
      };
    });
    const SundayTeaser = b.filter(
      (a) =>
        a.videoTypes == 'adult-sunday-teaser' &&
        new Date(a?.publishedDate ?? '') <= new Date('2021/12/04')
    );
    const SundayShortcut = b.filter(
      (a) =>
        a.videoTypes == 'adult-sunday-shortcut' &&
        new Date(a?.publishedDate ?? '') <= new Date('2021/12/04')
    );

    const AfterParty = b.filter(
      (a) =>
        a.videoTypes == 'after-party' &&
        new Date(a?.publishedDate ?? '') <= new Date('2021/12/04')
    );
    const Livestream = b.filter(
      (a) =>
        a.videoTypes == 'livestream-services' &&
        new Date(a?.publishedDate ?? '') <= new Date('2021/12/04')
    );

    const BBQ = b.filter((a) => a.videoTypes == 'bbq');
    const XMAS1 = b.filter((a) => a.videoTypes == 'Christmas-shorts');
    const XMAS2 = b.filter((a) => a.videoTypes == 'Christmas-funny');
    const HCH = b.filter((a) => a.videoTypes == ' Home Church Hangouts');
    const HC101 = b.filter((a) => a.videoTypes == 'HC101');
    const HC102 = b.filter((a) => a.videoTypes == 'HC101');
    const RE = b.filter((a) => a.videoTypes == 'regather-external');

    const Sunday = b.filter(
      (a) =>
        a.videoTypes == 'adult-sunday' &&
        new Date(a?.publishedDate ?? '') <= new Date('2021/12/04')
    );
    console.log({ SundayTeaser: SundayTeaser });
    console.log({ SundayShortcut: SundayShortcut });
    console.log({ AfterParty: AfterParty });
    console.log({ BBQ: BBQ });
    console.log({ XMAS1: XMAS1 });
    console.log({ XMAS2: XMAS2 });
    console.log({ HCH: HCH });
    console.log({ HC101: HC101 });
    console.log({ HC102: HC102 });
    console.log({ RE: RE });
    console.log({ Livestream: Livestream });
    console.log({ Sunday: Sunday });

    const all = RE.map(async (z) => {
      if (z && z.id) {
        const r: UpdateVideoInput = {
          id: z.id,
          videoTypes: 'hidden-' + z.videoTypes,
        };
        return API.graphql({
          query: customMutations.updateVideo,
          variables: { input: r },

          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        }) as GraphQLResult<UpdateVideoMutation>;
      }
    });
    console.log('WAITING');
    try {
      const t = await Promise.all(all);
      console.log(t);
    } catch (zz) {
      console.log(zz);
    }
    console.log('DONE');
  }*/
  render() {
    return (
      <div>
        <div
          onClick={async () => {
            this.setState(
              { allSeries: await this.getAllSeries(null) },
              async () => {
                await this.updateSeries();
              }
            );
          }}
        >
          HELLO
        </div>
      </div>
    );
  }
}
export default Index;
