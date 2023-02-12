import React from 'react';
import * as adminQueries from './queries';
import * as customQueries from '../../graphql-custom/customQueries';
import * as mutations from '../../graphql/mutations';
import * as customMutations from '../../graphql-custom/customMutations';
import { API } from '@aws-amplify/api';
import './import-video.scss';
import { v4 as uuidv4 } from 'uuid';
import ImportYoutube from '../../components/ImportYoutube/ImportYoutube';
import { EmptyProps } from '../../utils';
import { Modal, Spinner } from 'reactstrap';
import { DeleteCustomPlaylistMutation } from 'API';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import moment from 'moment';

interface State {
  nextToken: string | undefined | null;
  getVideoQueryId: any;
  videoTypes: any;
  speakers: any;
  selectedSpeaker: any;
  selectedVideoType: any;
  selectedVideo: any;
  videoList: any;
  seriesList: any;
  playlistsList: any;
  toSaveVideo: any;
  toSaveSeries: any;
  toSavePlaylist: any;
  videoEditorValues: any;
  showError: any;
  showAddSeries: boolean;
  showAddCustomPlaylist: boolean;
  getVideosState: any;
  toDeleteVideo: string;
  showDeleteVideo: boolean;
  showAddSpeaker: boolean;
  hiddenSpeaker: boolean;
  showManageSpeaker: boolean;
  toDeletePlaylist: string;
  showDeletePlaylist: boolean;
  addToPlaylists: any;
  removeFromPlaylists: any;
  selectedPlaylist: any;
  speakerFieldValue: string;
  originalSpeakers: any;
  customPlaylistTypes: string[];
}

class Index extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      nextToken: '',
      originalSpeakers: {},
      selectedSpeaker: '',
      speakerFieldValue: '',
      hiddenSpeaker: false,
      showAddSeries: false,
      showAddSpeaker: false,
      showManageSpeaker: false,
      showAddCustomPlaylist: false,
      getVideoQueryId: null,
      speakers: [],
      videoTypes: [],
      selectedVideoType: '',
      selectedVideo: null,
      videoList: [],
      seriesList: [],
      playlistsList: [],
      toSaveVideo: {},
      toSaveSeries: {
        id: '',
        title: '',
        startDate: '',
        endDate: '',
        seriesType: '',
      },
      toSavePlaylist: { id: '', title: '' },
      videoEditorValues: {},
      showError: '',
      getVideosState: 'Starting Up',
      toDeleteVideo: '',
      showDeleteVideo: false,
      toDeletePlaylist: '',
      showDeletePlaylist: false,
      addToPlaylists: [],
      removeFromPlaylists: [],
      selectedPlaylist: '',
      customPlaylistTypes: [],
    };
    fetch('/static/data/import-video.json')
      .then(function (response) {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({ videoTypes: myJson });
      })
      .catch((e: any) => {
        console.log({ 'Exception: ': e });
      });
    this.getPlaylistTypes();
    this.listSeries(null);
    this.listCustomPlaylists(null);
  }
  componentDidMount() {
    this.getVideos(null);
    this.getSpeakers();
  }
  importYoutube() {
    const z = new ImportYoutube();
    z.reloadPlaylists();
  }

  async getPlaylistTypes(): Promise<void> {
    try {
      const response = await fetch('/static/data/custom-playlists.json');
      const json = await response.json();
      this.setState({ customPlaylistTypes: json.types });
    } catch (e) {
      console.error(e);
    }
  }

  async listCustomPlaylists(nextToken: any): Promise<void> {
    try {
      const listCustomPlaylists: any = await API.graphql({
        query: adminQueries.listCustomPlaylistsAdmin,
        variables: { nextToken: nextToken, limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      console.log({
        'Success queries.listCustomPlaylist': listCustomPlaylists,
      });
      this.setState({
        playlistsList: this.state.playlistsList
          .concat(listCustomPlaylists.data.listCustomPlaylists.items)
          .sort((a: any, b: any) => this.sortById(a, b)),
      });
      if (listCustomPlaylists.data.listCustomPlaylists.nextToken != null)
        this.listCustomPlaylists(
          listCustomPlaylists.data.listCustomPlaylists.nextToken
        );
    } catch (e) {
      console.error(e);
    }
  }

  listSeries(nextToken: any) {
    const listSeries: any = API.graphql({
      query: customQueries.listSeries,
      variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });

    listSeries
      .then((json: any) => {
        console.log({ 'Success customQueries.listSeries: ': json });
        this.setState({
          seriesList: this.state.seriesList
            .concat(json.data.listSeries.items)
            .sort((a: any, b: any) => this.sortById(a, b)),
        });
        if (json.data.listSeries.nextToken != null)
          this.listSeries(json.data.listSeries.nextToken);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  sortById(a: any, b: any) {
    const nameA = a.id.toUpperCase();
    const nameB = b.id.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
  /* Use this to find duplicate entries with speaker id(name)
  async findDuplicates (userid:string) : Promise<void>{
    try {
      const fetchSpeakers: any = await API.graphql({
        query: adminQueries.listSpeakers,
        variables: { nextToken: null, limit: 9999 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      console.log({ 'Success adminQueries.listSpeakers: ': fetchSpeakers });
      const vids = fetchSpeakers.data.listSpeakers.items.filter(
        (a: any) => a.id === userid
      )[0].videos.items;
      console.log(
        '========================================================================================================================='
      );
      const duplicates: any = [];
      let currentVal;
      for (let i = 0; i < vids.length; i++) {
        currentVal = vids[i].speakerVideosVideoId;
        for (let x = 0; x < vids.length; x++) {
          if (currentVal === vids[x].speakerVideosVideoId && x !== i)
            duplicates.push({
              videoId: currentVal,
              id: vids[x].id,
              title: vids[x].video.episodeTitle,
              date: vids[x].video.publishedDate,
            });
        }
      }
      console.log(duplicates);
      console.log(
        '========================================================================================================================='
      );
    } catch (e) {
      console.error(e);
    }
  }
  // Takes an array of speakerVideo ids and deletes them
  async deleteDuplicates(values : Array<string>){
    try {
      for(let i=0; i<values.length; i++){
          const deleteSpeakerVideo: any = await API.graphql({
            query: customMutations.deleteSpeakerVideos,
            variables: { input: { id: values[i] } },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          });
          console.log(deleteSpeakerVideo);
      }

      this.setState({ showError: 'Saved' });
    } catch (e) {
      if (!e.errors[0].message.includes('access')) console.log('error');
    }
  } */
  async getSpeakers(): Promise<void> {
    try {
      const fetchSpeakers: any = await API.graphql({
        query: adminQueries.listSpeakers,
        variables: { nextToken: null, limit: 9999 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      console.log({ 'Success adminQueries.listSpeakers: ': fetchSpeakers });
      this.setState({ speakers: fetchSpeakers.data.listSpeakers.items });
    } catch (e) {
      console.error(e);
    }
  }

  async updateSpeaker(): Promise<void> {
    try {
      const updateSpeaker: any = await API.graphql({
        query: customMutations.updateSpeaker,
        variables: {
          input: {
            id: this.state.selectedSpeaker,
            hidden: this.state.hiddenSpeaker,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({ 'Success customMutations.updateSpeaker: ': updateSpeaker });
      this.getSpeakers();
    } catch (e) {
      console.error(e);
    }
  }
  getVideos(nextToken: any) {
    if (nextToken == null) {
      const queryId = uuidv4();
      this.setState(
        { getVideoQueryId: queryId, getVideosState: 'Loading Videos' },
        () => {
          this.getVideosQID(nextToken, queryId);
        }
      );
    }
  }
  sortByPublished = (a: any, b: any) => {
    const z = new Date(a.Youtube.snippet.publishedAt);
    const y = new Date(b.Youtube.snippet.publishedAt);
    return z > y ? -1 : z < y ? 1 : 0;
  };
  getVideosQID(nextToken: any, queryId: any) {
    //console.log(this.state.getVideoQueryId)
    if (queryId === this.state.getVideoQueryId) {
      //console.log(this.state.selectedVideoType)
      if (this.state.selectedVideoType === '') {
        const listVideos: any = API.graphql({
          query: customQueries.listVideos,
          variables: {
            nextToken: nextToken,
            sortDirection: 'DESC',
            limit: 200,
            filter: {
              videoTypes: { attributeExists: false },
            },
          },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        });
        listVideos
          .then((json: any) => {
            console.log({ 'Success queries.listVideos: ': json });
            if (queryId === this.state.getVideoQueryId) {
              this.setState({
                videoList: this.state.videoList
                  .concat(json.data.listVideos.items)
                  .sort(this.sortByPublished),
              });
              if (json?.data?.listVideos?.nextToken)
                this.getVideosQID(json.data.listVideos.nextToken, queryId);
              else this.setState({ getVideosState: 'Done' });
            }
          })
          .catch((e: any) => {
            console.log(e);
          });
      } else {
        const getVideoByVideoType: any = API.graphql({
          query: adminQueries.getVideoByVideoTypeAdmin,
          variables: {
            nextToken: nextToken,
            sortDirection: 'DESC',
            limit: 200,
            videoTypes: this.state.selectedVideoType,
            publishedDate: { lt: 'a' },
          },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        });

        getVideoByVideoType
          .then((json: any) => {
            console.log({ 'Success queries.getVideoByVideoType: ': json });
            if (queryId === this.state.getVideoQueryId) {
              this.setState({
                videoList: this.state.videoList
                  .concat(json.data.getVideoByVideoType.items)
                  .sort(this.sortByPublished),
              });
              if (json.data.getVideoByVideoType.nextToken != null)
                this.getVideosQID(
                  json.data.getVideoByVideoType.nextToken,
                  queryId
                );
              else this.setState({ getVideosState: 'Done' });
            }
          })
          .catch((e: any) => {
            console.log(e);
          });
      }
    }
  }
  componentDidUpdate(prevProps: EmptyProps, prevState: State) {
    if (this.state.selectedVideoType !== prevState.selectedVideoType)
      this.getVideos(null);
  }
  renderYoutube() {
    return (
      <div className="youtubeBox">
        {this.state.selectedVideo ? (
          <iframe
            className="youtubeFrame"
            title="Youtube"
            src={'https://www.youtube.com/embed/' + this.state.selectedVideo.id}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : null}
      </div>
    );
  }
  renderHeader() {
    return (
      <div
        style={{ marginBottom: 24, display: 'flex', flexDirection: 'column' }}
      >
        <div
          style={{
            display: 'flex',

            flex: 1,
            marginBottom: 16,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 20, flex: 1 }}>
            Import Videos{' '}
            {this.state.videoList.length ? (
              <span style={{ fontSize: 10 }}>
                &#40;{this.state.videoList.length}&#41;
              </span>
            ) : null}
          </span>
          {this.state.getVideosState === 'Loading Videos' ? (
            <Spinner
              style={{ alignSelf: 'center', marginRight: 16 }}
              size="sm"
            />
          ) : null}
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <select
              className="importvideoDropdown"
              value={this.state.selectedVideoType}
              style={{ marginRight: 8 }}
              onChange={(e: any) => {
                console.log('setting to ', e.target.value);
                this.setState({
                  selectedVideo: null,
                  videoList: [],
                  addToPlaylists: [],
                  removeFromPlaylists: [],
                  selectedPlaylist: '',
                  selectedVideoType: e.target.value,
                });
              }}
            >
              {this.state.videoTypes.map((item: any) => {
                return (
                  <option
                    className="dropdown-option"
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="importVideoHeader">
          <button className="adminButton" onClick={() => this.importYoutube()}>
            Add All New
          </button>
          <button className="adminButton">Add Unlisted</button>

          <button
            className="adminButton"
            onClick={() => {
              this.setState({ showAddSpeaker: true });
            }}
          >
            Add Speaker
          </button>
          <button
            className="adminButton"
            onClick={() => {
              this.setState({ showManageSpeaker: true });
            }}
          >
            Manage Speaker
          </button>
          <button
            className="adminButton"
            onClick={() => {
              this.setState({ showAddSeries: true });
            }}
          >
            Add Series
          </button>
          <button
            className="adminButton"
            onClick={() => {
              this.setState({ showDeleteVideo: true });
            }}
          >
            Delete a Video
          </button>
          <button
            className="adminButton"
            onClick={() => {
              this.setState({ showDeletePlaylist: true });
            }}
          >
            Delete a Playlist
          </button>
          <button
            className="adminButton"
            onClick={() => {
              this.setState({ showAddCustomPlaylist: true });
            }}
          >
            Add Custom Playlist
          </button>
        </div>
      </div>
    );
  }
  renderVideos() {
    const z = this.state.videoTypes.filter(
      (i: any) => i.id === this.state.selectedVideoType
    )[0];
    if (this.state.getVideosState !== 'Done') return null;
    if (this.state.videoList.length === 0) return <div>No Videos Found</div>;
    return (
      <div className="tableContainer">
        <table className="divTable">
          <thead>
            <tr className="headRow">
              {z != null
                ? z.columns != null
                  ? z.columns
                      .filter((i: any) => i.showInTable)
                      .map((item: any) => {
                        return <th key={item.id}>{item.name}</th>;
                      })
                  : null
                : null}
            </tr>
          </thead>
          <tbody>
            {this.state.videoList.map((video: any, index: number) => {
              const rowStyle =
                this.state.selectedVideo?.id === video?.id
                  ? { backgroundColor: 'lightgrey' }
                  : index % 2 === 0
                  ? { backgroundColor: '#efefef' }
                  : {};
              return (
                <tr
                  key={video.id}
                  style={rowStyle}
                  onClick={() => {
                    this.handleVideoSelection(video);
                    this.setState({ originalSpeakers: video.speakers });
                  }}
                >
                  {z != null
                    ? z.columns != null
                      ? z.columns
                          .filter((i: any) => i.showInTable)
                          .map((item: any) => {
                            const list: any = item.id.split('.');
                            let value: any = video;

                            value.Youtube.snippet.publishedAt = moment(
                              value.Youtube.snippet.publishedAt
                            ).format('lll');
                            for (const listItem of list) {
                              if (listItem === 'speakers') {
                                value = [...value.speakers.items];
                              } else value = value[listItem];
                            }
                            if (list[0] !== 'speakers') {
                              return <td key={item.id}>{value}</td>;
                            } else {
                              return (
                                <td key={item.id}>
                                  {value && value.length > 0
                                    ? value.map((item: any) => {
                                        if (item.speaker)
                                          return item?.speaker?.id + ', ';
                                      })
                                    : null}
                                </td>
                              );
                            }
                          })
                      : null
                    : null}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  async handleVideoSelection(video: any): Promise<void> {
    this.setState(
      {
        selectedVideo: null,
        toSaveVideo: null,
        addToPlaylists: [],
        removeFromPlaylists: [],
        selectedPlaylist: '',
      },
      () => {
        this.setState({ selectedVideo: video, toSaveVideo: { id: video.id } });
      }
    );

    try {
      const json: any = await API.graphql({
        query: adminQueries.getVideoAdmin,
        variables: { id: video.id },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({ 'Success customQueries.getVideoCustomPlaylists: ': json });
      if (json.data.getVideo.customPlaylistIDs)
        this.setState({ addToPlaylists: json.data.getVideo.customPlaylistIDs });
    } catch (e: any) {
      console.error(e);
      if (e?.data?.getVideo?.customPlaylistIDs)
        this.setState({ addToPlaylists: e.data.getVideo.customPlaylistIDs });
    }
  }
  async save(): Promise<void> {
    if (
      (this.state.toSaveVideo.videoTypes === undefined &&
        this.state.toSaveVideo.publishedDate !== undefined) ||
      (this.state.toSaveVideo.videoTypes !== undefined &&
        this.state.toSaveVideo.publishedDate === undefined)
    ) {
      this.setState({ showError: 'Must set both videoType and publishedDate' });
    } else {
      this.setState({ showError: 'Saving' });
      this.handleCustomPlaylists();
      const toSaveVid: any = this.state.toSaveVideo;
      if (
        (toSaveVid.publishedDate || this.state.selectedVideo.publishedDate) &&
        this.state.selectedVideo.speakers?.items?.length > 0
      ) {
        const speakerVideoIDs = await this.getSpeakerVideoIds(toSaveVid.id);
        for (let i = 0; i < speakerVideoIDs.length; i++) {
          this.updateSpeakerVideo(
            speakerVideoIDs[i].id,
            toSaveVid.publishedDate ?? this.state.selectedVideo.publishedDate
          );
        }
      }
      if (this.state.toSaveVideo.speakers) {
        const oldSpeakers: any = [
          ...this.state.originalSpeakers.items.filter(
            (a: any) => a.speaker !== null
          ),
        ];
        const newSpeakers: any = [...this.state.toSaveVideo.speakers.items];
        const filtered = newSpeakers.filter((a: any) => {
          return oldSpeakers.indexOf(a) < 0;
        });
        for (let x = 0; x < filtered.length; x++) {
          if (
            filtered[x]?.speaker?.id &&
            (toSaveVid.publishedDate || this.state.selectedVideo.publishedDate)
          ) {
            this.saveSpeakerVideo(
              filtered[x].speaker.id,
              toSaveVid?.publishedDate ??
                this.state.selectedVideo?.publishedDate
            );
          } else {
            this.setState({
              showError: 'Unable to update speaker. Must have date ',
            });
          }
        }
        delete toSaveVid.speakers;
      }
      try {
        const updateVideo: any = await API.graphql({
          query: customMutations.updateVideo,
          variables: { input: toSaveVid },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log({ 'Success queries.updateVideo: ': updateVideo });
        this.setState({ showError: 'Saved' });
      } catch (e: any) {
        if (!e.errors[0].message.includes('access'))
          this.setState({ showError: e.errors[0].message });
        else if (e.data) this.setState({ showError: 'Saved' });
        console.error(e);
      }
    }
    this.setState({
      selectedSpeaker: '',
      selectedVideo: null,
      toSaveVideo: null,
      addToPlaylists: [],
      removeFromPlaylists: [],
      selectedPlaylist: '',
    });
  }

  async deleteSpeakerVideo() {
    const videoToDelete: any = this.state.speakers
      .filter((a: any) => a.id === this.state.selectedSpeaker)?.[0]
      ?.videos?.items.filter(
        (b: any) => b?.speakerVideosVideoId === this.state.selectedVideo?.id
      )?.[0];
    if (videoToDelete && videoToDelete?.id) {
      try {
        const deleteSpeakerVideo: any = await API.graphql({
          query: customMutations.deleteSpeakerVideos,
          variables: { input: { id: videoToDelete.id } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log(deleteSpeakerVideo);
        this.setState({ showError: 'Deleted Speaker from Video' });
      } catch (e: any) {
        if (!e.errors[0].message.includes('access')) console.log('error');
      }
      this.setState({
        selectedVideo: null,
        toSaveVideo: null,
        addToPlaylists: [],
        removeFromPlaylists: [],
        selectedPlaylist: '',
      });
    }
  }
  async getSpeakerVideoIds(id: string) {
    try {
      const getVideoInfo: any = await API.graphql({
        query: customQueries.getSpeakerVideos,
        variables: { id: id },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      return getVideoInfo.data.getVideo.speakers.items;
    } catch (e: any) {
      if (!e.errors[0].message.includes('access')) console.log('error');
    }
  }

  async updateSpeakerVideo(videoid: string, newDate: string) {
    try {
      const updateOneSpeakerVideo: any = await API.graphql({
        query: customMutations.updateSpeakerVideos,
        variables: { input: { id: videoid, videoPublishedDate: newDate } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success customMutations.updateOneSpeakerVideo: ':
          updateOneSpeakerVideo,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async saveSpeakerVideo(speaker: string, publishedDate: string) {
    try {
      const createSpeakerVideo: any = await API.graphql({
        query: customMutations.createSpeakerVideosCustom,
        variables: {
          input: {
            id: uuidv4(),
            speakerVideosVideoId: this.state.toSaveVideo.id,
            speakerVideosSpeakerId: speaker,
            videoPublishedDate: publishedDate,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      this.setState({ showError: 'Saved' });
      console.log({
        'Success mutations.createSpeakerVideo: ': createSpeakerVideo,
      });
    } catch (e: any) {
      if (!e.errors[0].message.includes('access'))
        this.setState({ showError: e.errors[0].message });
      else if (e.data) this.setState({ showError: 'Saved' });
      console.error(e);
    }
  }

  async handleCustomPlaylists(): Promise<void> {
    const toAdd = this.state.addToPlaylists;
    const toRemove = this.state.removeFromPlaylists;

    for (const add of toAdd) {
      for (let i = toRemove.length; i--; ) {
        if (toRemove[i] === add) toRemove.splice(i, 1);
      }
    }

    this.writeField('customPlaylistIDs', toAdd);

    for (const playlist of toAdd) {
      const connectionID = this.state.selectedVideo.id + '-' + playlist;
      try {
        const createCustomPlaylistVideo: any = await API.graphql({
          query: mutations.createCustomPlaylistVideo,
          variables: {
            input: {
              id: connectionID,
              videoID: this.state.selectedVideo.id,
              customPlaylistID: playlist,
            },
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log({
          'Success mutations.createCustomPlaylistVideo':
            createCustomPlaylistVideo,
        });
      } catch (e) {
        console.error(e);
      }
    }

    for (const playlist of toRemove) {
      const connectionID = this.state.selectedVideo.id + '-' + playlist;
      try {
        const deleteCustomPlaylistVideo: any = await API.graphql({
          query: mutations.deleteCustomPlaylistVideo,
          variables: { input: { id: connectionID } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log({
          'Success mutations.deleteCustomPlaylistVideo':
            deleteCustomPlaylistVideo,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  async deletePlaylist() {
    if (this.state.toDeletePlaylist) {
      try {
        const deletePlaylist = (await API.graphql({
          query: mutations.deleteCustomPlaylist,
          variables: { input: { id: this.state.toDeletePlaylist } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<DeleteCustomPlaylistMutation>;
        console.log({ 'Success mutations.deleteVideo: ': deletePlaylist });
        this.setState({
          toDeletePlaylist: '',
          showError: `Deleted: ${deletePlaylist?.data?.deleteCustomPlaylist?.id}`,
          showDeletePlaylist: false,
        });
      } catch (e: any) {
        if (e.data && e.data.deleteCustomPlaylist) {
          this.setState({
            toDeletePlaylist: '',
            showError: `Deleted: ${e.data.deleteCustomPlaylist.id}`,
            showDeletePlaylist: false,
          });
        }
        console.error(e);
      }
    } else {
      this.setState({ showError: 'videoID required for delete operation' });
    }
  }

  async delete() {
    if (this.state.toDeleteVideo) {
      try {
        const deleteVideo: any = await API.graphql({
          query: mutations.deleteVideo,
          variables: { input: { id: this.state.toDeleteVideo } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        console.log({ 'Success mutations.deleteVideo: ': deleteVideo });
        this.setState({
          toDeleteVideo: '',
          showError: `Deleted: ${deleteVideo.data.deleteVideo.id}`,
          showDeleteVideo: false,
        });
      } catch (e: any) {
        if (e.data && e.data.deleteVideo) {
          this.setState({
            toDeleteVideo: '',
            showError: `Deleted: ${e.data.deleteVideo.id}`,
            showDeleteVideo: false,
          });
        }
        console.error(e);
      }
    } else {
      this.setState({ showError: 'videoID required for delete operation' });
    }
  }
  removePlaylist(item: string): void {
    const removedIndex = this.state.addToPlaylists.indexOf(item);
    const temp = this.state.addToPlaylists;
    const temp2 = temp.splice(removedIndex, 1);
    this.setState({
      addToPlaylists: temp,
      removeFromPlaylists: this.state.removeFromPlaylists.concat(temp2),
    });
  }

  writeSeriesField(field: any, value: any) {
    const tempSelectedVideo = this.state.selectedVideo;
    tempSelectedVideo[field] = value;

    const toSaveVideo = this.state.toSaveVideo;
    toSaveVideo[field] = value;

    toSaveVideo['seriesTitle'] = this.state.seriesList.filter(
      (item: any) => item.id === value
    )[0].title;
    this.setState({
      selectedVideo: tempSelectedVideo,
      toSaveVideo: toSaveVideo,
    });
    console.log(toSaveVideo);
  }
  writeField(field: any, value: any) {
    const tempSelectedVideo = this.state.selectedVideo;
    tempSelectedVideo[field] = value;

    const toSaveVideo = this.state.toSaveVideo;
    toSaveVideo[field] = value;
    this.setState({
      selectedVideo: tempSelectedVideo,
      toSaveVideo: toSaveVideo,
    });
  }
  filterSeries = (series: any, videoType: any) => {
    return series.seriesType === videoType;
  };
  renderVideoEditor() {
    const z = this.state.videoTypes.filter(
      (i: any) => i.id === this.state.selectedVideoType
    )[0];

    return (
      <div>
        {this.renderYoutube()}
        <table className="divTable2">
          <tbody>
            {this.state.selectedVideo
              ? z != null
                ? z.columns != null
                  ? z.columns
                      .filter((i: any) => i.showInEditor)
                      .map((item: any) => {
                        const list: any = item.id.split('.');
                        let finalValue: any = this.state.selectedVideo;
                        for (const listItem of list) {
                          finalValue = finalValue[listItem];
                        }

                        return (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                              {item.readOnly ? (
                                item.type === 'Date' ? (
                                  finalValue.split('T')[0]
                                ) : (
                                  finalValue
                                )
                              ) : item.type === 'Int' ? (
                                <input
                                  className="importvideoInput"
                                  type="number"
                                  onChange={(e: any) =>
                                    this.writeField(item.id, e.target.value)
                                  }
                                  value={finalValue}
                                ></input>
                              ) : item.type === 'Date' ? (
                                <input
                                  className="importvideoInput"
                                  type="text"
                                  onChange={(e: any) =>
                                    this.writeField(item.id, e.target.value)
                                  }
                                  value={finalValue}
                                ></input>
                              ) : item.type === 'String' ? (
                                <input
                                  className="importvideoInput"
                                  onChange={(e: any) =>
                                    this.writeField(item.id, e.target.value)
                                  }
                                  type="text"
                                  value={finalValue}
                                ></input>
                              ) : item.type === 'VideoType' ? (
                                <select
                                  className="importvideoDropdown"
                                  onChange={(e: any) =>
                                    this.writeField(item.id, e.target.value)
                                  }
                                >
                                  {this.state.videoTypes.map((item2: any) => {
                                    return (
                                      <option key={item2.id} value={item2.id}>
                                        {item2.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              ) : item.type === 'Speaker' ? (
                                <>
                                  <select
                                    className="importvideoDropdown"
                                    style={{ width: '70%' }}
                                    onChange={(e: any) => {
                                      this.setState({
                                        selectedSpeaker: e.target.value,
                                      });
                                    }}
                                  >
                                    <option key={'nothing'} value={''}>
                                      {''}
                                    </option>
                                    {this.state.speakers
                                      .sort((a: any, b: any) =>
                                        a.id.localeCompare(b.id)
                                      )
                                      .map((item2: any) => {
                                        return (
                                          <option
                                            key={item2.id}
                                            value={item2.id}
                                          >
                                            {item2.name}
                                          </option>
                                        );
                                      })}
                                  </select>
                                  <button
                                    className="adminButton"
                                    onClick={() => {
                                      if (this.state.selectedSpeaker !== '') {
                                        const a =
                                          this.state.selectedVideo.speakers.items.find(
                                            (a: any) => {
                                              return (
                                                a?.speaker?.id ===
                                                this.state.selectedSpeaker
                                              );
                                            }
                                          );
                                        if (!a) {
                                          const speakers: any = {
                                            items: [
                                              ...this.state.selectedVideo
                                                .speakers.items,
                                              {
                                                speaker: {
                                                  id: this.state
                                                    .selectedSpeaker,
                                                },
                                              },
                                            ],
                                          };
                                          return this.writeField(
                                            item.id,
                                            speakers
                                          );
                                        }
                                      }
                                    }}
                                  >
                                    Add
                                  </button>
                                  <button
                                    className="adminButton"
                                    onClick={() => {
                                      if (this.state.selectedSpeaker) {
                                        const speakerInSpeakers =
                                          this.state.originalSpeakers.items.find(
                                            (a: any) => {
                                              return (
                                                a?.speaker?.id ===
                                                this.state.selectedSpeaker
                                              );
                                            }
                                          );
                                        if (speakerInSpeakers) {
                                          const speakers: any = {
                                            items: [
                                              ...this.state.selectedVideo.speakers.items.filter(
                                                (a: any) =>
                                                  a?.speaker?.id !==
                                                  this.state.selectedSpeaker
                                              ),
                                            ],
                                          };
                                          this.writeField(item.id, speakers);
                                          const removeSpeakers = {
                                            ...this.state.toSaveVideo,
                                          };
                                          delete removeSpeakers.speakers;
                                          this.setState({
                                            toSaveVideo: removeSpeakers,
                                          });
                                          this.deleteSpeakerVideo();
                                        }
                                      }
                                    }}
                                  >
                                    Delete
                                  </button>
                                </>
                              ) : item.type === 'Series' ? (
                                <select
                                  className="importvideoDropdown"
                                  onChange={(e: any) =>
                                    this.writeSeriesField(
                                      item.id,
                                      e.target.value
                                    )
                                  }
                                >
                                  <option key="null" value="null">
                                    None Selected
                                  </option>

                                  {this.state.seriesList
                                    .filter((a: any) => {
                                      return this.filterSeries(
                                        a,
                                        this.state.selectedVideo.videoTypes
                                      );
                                    })
                                    .map((item2: any) => {
                                      return (
                                        <option key={item2.id} value={item2.id}>
                                          {item2.id}
                                        </option>
                                      );
                                    })}
                                </select>
                              ) : item.type === 'CustomPlaylist' ? (
                                <div>
                                  <select
                                    className="importvideoDropdown"
                                    onChange={(e: any) =>
                                      this.setState({
                                        selectedPlaylist: e.target.value,
                                      })
                                    }
                                  >
                                    <option key="null" value="null">
                                      None Selected
                                    </option>
                                    {this.state.playlistsList.map(
                                      (item2: any) => {
                                        return (
                                          <option
                                            key={item2.id}
                                            value={item2.id}
                                          >
                                            {item2.id}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                  <button
                                    className="adminButton"
                                    style={{ float: 'right' }}
                                    onClick={() => {
                                      if (
                                        this.state.selectedPlaylist &&
                                        !this.state.addToPlaylists.includes(
                                          this.state.selectedPlaylist
                                        )
                                      ) {
                                        this.setState({
                                          addToPlaylists:
                                            this.state.addToPlaylists.concat(
                                              this.state.selectedPlaylist
                                            ),
                                        });
                                      }
                                    }}
                                  >
                                    Add
                                  </button>

                                  <div>
                                    Selected:{' '}
                                    {this.state.addToPlaylists.map(
                                      (playlist: string) => {
                                        return (
                                          <span
                                            className="PlaylistSelections"
                                            onClick={() =>
                                              this.removePlaylist(playlist)
                                            }
                                            key={playlist}
                                          >
                                            {playlist} &nbsp;
                                          </span>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              ) : (
                                finalValue
                              )}
                            </td>
                          </tr>
                        );
                      })
                  : null
                : null
              : null}
          </tbody>
        </table>
        <div style={{ marginTop: 20 }}>
          {this.state.nextToken !== '' ? (
            <button
              className="adminButton"
              onClick={() => this.getVideosQID(this.state.nextToken, null)}
            >
              Load More
            </button>
          ) : null}
          {this.state.getVideosState === 'Done' &&
          this.state.videoList?.length ? (
            <button className="adminButton" onClick={() => this.save()}>
              Save
            </button>
          ) : null}
          {this.state.selectedVideo && (
            <button
              className="adminButton"
              style={{ marginLeft: 20 }}
              onClick={() => {
                this.writeSeriesField('videoSeriesId', 'hidden-void-series');
                this.writeField('videoTypes', 'hidden');
                this.writeField(
                  'publishedDate',
                  this.state.selectedVideo.publishedDate
                );
                this.save();
              }}
            >
              Move to Hidden
            </button>
          )}
        </div>
      </div>
    );
  }
  updateCustomPlaylistField(field: string, value: string) {
    const toSave = this.state.toSavePlaylist;
    toSave[field] = value;
    if (field === 'title') toSave['id'] = value;
    this.setState({ toSavePlaylist: toSave });
  }

  updateSeriesField(field: any, value: any) {
    const toSaveSeries = this.state.toSaveSeries;
    toSaveSeries[field] = value;
    if (toSaveSeries.seriesType === 'adult-sunday')
      toSaveSeries.id = toSaveSeries.title;
    else toSaveSeries.id = toSaveSeries.seriesType + '-' + toSaveSeries.title;
    this.setState({ toSaveSeries: toSaveSeries });
    console.log(toSaveSeries);
  }
  saveSeries() {
    if (
      this.state.toSaveSeries.title !== '' &&
      this.state.toSaveSeries.seriesType !== ''
    ) {
      const saveSeries: any = API.graphql({
        query: mutations.createSeries,
        variables: { input: this.state.toSaveSeries },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });

      saveSeries
        .then((json: any) => {
          console.log({ 'Success mutations.saveSeries: ': json });
        })
        .catch((e: any) => {
          console.log(e);
        });
      return true;
    }
    return false;
  }
  async savePlaylist(): Promise<void> {
    if (this.state.toSavePlaylist.title) {
      try {
        const savePlaylist: any = await API.graphql({
          query: mutations.createCustomPlaylist,
          variables: { input: this.state.toSavePlaylist },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log({
          'Success mutations.createCustomPlaylist: ': savePlaylist,
        });
        this.setState({ showAddCustomPlaylist: false, toSavePlaylist: {} });
      } catch (e) {
        console.error(e);
        this.setState({ showAddCustomPlaylist: false });
      }
    } else {
      this.setState({ showError: 'Playlist needs title' });
    }
  }
  renderAddSeries() {
    return (
      <Modal isOpen={this.state.showAddSeries}>
        <div>
          <div>id: {this.state.toSaveSeries.id}</div>
          <div>
            Name:{' '}
            <input
              value={this.state.toSaveSeries.title}
              onChange={(item: any) => {
                this.updateSeriesField('title', item.target.value);
              }}
            />
          </div>
          <div>
            Start Date:{' '}
            <input
              value={this.state.toSaveSeries.startDate}
              onChange={(item: any) => {
                this.updateSeriesField('startDate', item.target.value);
              }}
            />
          </div>
          <div>
            End Date:{' '}
            <input
              value={this.state.toSaveSeries.endDate}
              onChange={(item: any) => {
                this.updateSeriesField('endDate', item.target.value);
              }}
            />
          </div>
          <div>
            Series Type:{' '}
            <select
              className="importvideoDropdown"
              value={this.state.toSaveSeries.seriesType}
              onChange={(item: any) => {
                this.updateSeriesField('seriesType', item.target.value);
              }}
            >
              {this.state.videoTypes.map((item: any) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button
            onClick={() => {
              if (this.saveSeries()) this.setState({ showAddSeries: false });
            }}
          >
            Save
          </button>
          <button
            style={{ background: 'red' }}
            onClick={() => {
              this.setState({ showAddSeries: false });
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  }

  async saveSpeaker() {
    if (this.state.speakerFieldValue !== '') {
      const exists = this.state.speakers.find((speaker: any) => {
        return speaker.id === this.state.speakerFieldValue;
      });
      if (!exists) {
        const speakerName: string = this.state.speakerFieldValue
          .trim()
          .replaceAll(' ', '_');
        try {
          const createSpeaker: any = await API.graphql({
            query: mutations.createSpeaker,
            variables: {
              input: {
                id: this.state.speakerFieldValue.trim(),
                name: this.state.speakerFieldValue.trim(),
                hidden: this.state.hiddenSpeaker,
                image: `https://themeetinghouse.com/cache/320/static/photos/teachers/${speakerName}_app.jpg`,
              },
            },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          });
          console.log({
            'Success mutations.createSpeaker: ': createSpeaker,
          });
          this.getSpeakers();
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
  async deleteSpeaker() {
    try {
      const removeSpeaker: any = await API.graphql({
        query: mutations.deleteSpeaker,
        variables: {
          input: {
            id: this.state.selectedSpeaker,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success mutations.deleteSpeaker: ': removeSpeaker,
      });
      this.getSpeakers();
    } catch (e) {
      console.error(e);
    }
  }
  renderAddSpeaker() {
    return (
      <Modal isOpen={this.state.showAddSpeaker}>
        <div>
          <div>
            id:{' '}
            <input
              value={this.state.speakerFieldValue}
              onChange={(item: any) => {
                this.setState({ speakerFieldValue: item.target.value });
              }}
            />
            <input
              style={{ display: 'inline-block', marginRight: '4px' }}
              type="checkbox"
              onChange={() =>
                this.setState({ hiddenSpeaker: !this.state.hiddenSpeaker })
              }
              checked={this.state.hiddenSpeaker}
            ></input>
            Hide Speaker
          </div>
          <button
            onClick={async () => {
              await this.saveSpeaker();
              this.setState({
                showAddSpeaker: false,
                speakerFieldValue: '',
                hiddenSpeaker: false,
              });
            }}
          >
            Save
          </button>

          <button onClick={() => console.log(this.state.hiddenSpeaker)}>
            Check State
          </button>
          <button
            style={{ background: 'red' }}
            onClick={() => {
              this.setState({
                showAddSpeaker: false,
                speakerFieldValue: '',
                hiddenSpeaker: false,
              });
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
  renderManageSpeaker() {
    return (
      <Modal isOpen={this.state.showManageSpeaker}>
        <div>
          <div style={{ margin: '16px' }}>
            <select
              style={{ display: 'inline' }}
              onChange={(e: any) => {
                this.setState({
                  selectedSpeaker: e.target.value,
                });
              }}
            >
              <option key={'nothing'} value={''}>
                {''}
              </option>
              {this.state.speakers
                .sort((a: any, b: any) => a.id.localeCompare(b.id))
                .map((item2: any) => {
                  return (
                    <option key={item2.id} value={item2.name}>
                      {item2.name}
                    </option>
                  );
                })}
            </select>
            <input
              style={{
                display: 'inline-block',
                marginRight: '8px',
                marginLeft: '8px',
              }}
              type="checkbox"
              onChange={() =>
                this.setState({ hiddenSpeaker: !this.state.hiddenSpeaker })
              }
              checked={this.state.hiddenSpeaker}
            ></input>
            Hide Speaker
          </div>
          <button
            onClick={async () => {
              await this.updateSpeaker();
              this.setState({
                showManageSpeaker: false,
                hiddenSpeaker: false,
                speakerFieldValue: '',
              });
            }}
          >
            Save
          </button>

          <button
            onClick={() => {
              this.setState({
                showManageSpeaker: false,
                hiddenSpeaker: false,
                speakerFieldValue: '',
              });
            }}
          >
            Cancel
          </button>
          <button
            style={{ background: 'red' }}
            onClick={async () => {
              await this.deleteSpeaker();
              this.setState({
                showManageSpeaker: false,
                hiddenSpeaker: false,
                speakerFieldValue: '',
              });
            }}
          >
            Delete
          </button>
        </div>
      </Modal>
    );
  }
  renderAddCustomPlaylist() {
    return (
      <Modal isOpen={this.state.showAddCustomPlaylist}>
        <div>
          <div>id: {this.state.toSavePlaylist.id}</div>
          <div>
            Name:{' '}
            <input
              value={this.state.toSavePlaylist.title}
              onChange={(item: any) => {
                this.updateCustomPlaylistField('title', item.target.value);
              }}
            />
          </div>
          <div>
            Playlist Type:{' '}
            <select
              className="importvideoDropdown"
              value={this.state.toSavePlaylist.seriesType}
              onChange={(item: any) => {
                this.updateCustomPlaylistField('seriesType', item.target.value);
              }}
            >
              <option key="null" value="null">
                None Selected
              </option>
              {this.state.customPlaylistTypes.map(
                (item: string, index: number) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                }
              )}
            </select>
          </div>
          <button
            onClick={() => {
              this.savePlaylist();
            }}
          >
            Save
          </button>
          <button
            style={{ background: 'red' }}
            onClick={() => {
              this.setState({
                showAddCustomPlaylist: false,
                toSavePlaylist: {},
              });
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
  renderDeleteVideo() {
    return (
      <Modal isOpen={this.state.showDeleteVideo}>
        <div>
          <div>
            Enter ID:{' '}
            <input
              value={this.state.toDeleteVideo}
              onChange={(item: any) =>
                this.setState({ toDeleteVideo: item.target.value })
              }
            />
          </div>
          <button
            style={{ background: 'orange' }}
            onClick={() => this.delete()}
          >
            DELETE
          </button>
          <button
            style={{ background: 'grey' }}
            onClick={() => {
              this.setState({ showDeleteVideo: false, toDeleteVideo: '' });
            }}
          >
            CANCEL
          </button>
        </div>
      </Modal>
    );
  }
  renderDeletePlaylist() {
    return (
      <Modal isOpen={this.state.showDeletePlaylist}>
        <div>
          <div>
            Enter ID:{' '}
            <input
              value={this.state.toDeletePlaylist}
              onChange={(item) =>
                this.setState({ toDeletePlaylist: item.target.value })
              }
            />
          </div>
          <button
            style={{ background: 'orange' }}
            onClick={() => this.deletePlaylist()}
          >
            DELETE
          </button>
          <button
            style={{ background: 'grey' }}
            onClick={() => {
              this.setState({
                showDeletePlaylist: false,
                toDeletePlaylist: '',
              });
            }}
          >
            CANCEL
          </button>
        </div>
      </Modal>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderVideos()}
        {this.renderVideoEditor()}
        {this.renderAddSpeaker()}
        {this.renderManageSpeaker()}
        {this.renderAddSeries()}
        {this.renderDeleteVideo()}
        {this.renderDeletePlaylist()}
        {this.renderAddCustomPlaylist()}
        <div style={{ color: '#ff0000' }}>{this.state.showError}</div>
      </div>
    );
  }
}
export default Index;
