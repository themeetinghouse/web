import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { EmptyProps } from '../../utils';
import Amplify, { API } from 'aws-amplify';
import { Modal } from 'reactstrap';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import awsmobile from '../../aws-exports';
import isSafari from 'react-device-detect';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {
  CreateLivestreamMutation,
  CreateLivestreamMutationVariables,
  DeleteLivestreamMutation,
  ListLivestreamsQuery,
  ListLivestreamsQueryVariables,
  UpdateLivestreamMutation,
} from 'API';
import './livestream.scss';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269',
};

const menuInit = [
  {
    title: 'Give',
    link: '/give',
    linkType: 'link',
  },
  {
    title: 'Music',
    link: 'https://media.themeetinghouse.com/podcast/handouts/Music.pdf',
    linkType: 'link',
  },
  {
    title: 'Connect',
    link: '/connect',
    linkType: 'link',
  },
  {
    title: 'Notes',
    link: '/notes',
    linkType: 'link',
  },
  {
    title: 'Kidmax',
    link: '/kidmax',
    linkType: 'link',
  },
];

const afterPartyMenu = [
  {
    title: 'Give',
    link: '/give',
    linkType: 'link',
  },
  {
    title: 'Connect',
    link: '/connect',
    linkType: 'link',
  },
  {
    title: 'Notes',
    link: '/notes',
    linkType: 'link',
  },
];

const liveInit = {
  id: '',
  date: '',
  startTime: '06:00',
  videoStartTime: '10:00',
  endTime: '13:00',
  prerollYoutubeId: 'na1g4ht-yNs',
  liveYoutubeId: '',
  showChat: true,
  showKids: true,
  menu: [...menuInit],
  homepageLink: 'Live',
  zoom: [],
  eventTitle: '',
  externalEventUrl: '',
};

type Livestreams = NonNullable<
  ListLivestreamsQuery['listLivestreams']
>['items'];

type Livestream = NonNullable<Livestreams>[0];

type MenuItem = NonNullable<NonNullable<Livestream>['menu']>[0];

type ZoomItem = NonNullable<NonNullable<Livestream>['zoom']>[0];

type NewLivestream = CreateLivestreamMutationVariables['input'];

interface State {
  toDelete: string;
  editMode: boolean;
  notSundayWarning: string;
  alert: string;
  livestreamList: Livestreams;
  liveObject: NewLivestream;
  customEvent: boolean;
  lastZoomData: ZoomItem[] | null;
  disableAsyncButtons: boolean;
}

class Index extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      toDelete: '',
      editMode: false,
      notSundayWarning: '',
      alert: '',
      livestreamList: [],
      liveObject: { ...liveInit },
      customEvent: false,
      lastZoomData: null,
      disableAsyncButtons: false,
    };
  }

  async componentDidMount() {
    await this.listLivestreams();

    const lastLocalTeaching = this.state.livestreamList?.find(
      (livestream) =>
        // has zoom links
        livestream?.zoom?.length &&
        // has several zoom links
        livestream?.zoom?.length > 12 &&
        // is a sunday
        moment(livestream?.date).isoWeekday() === 7 &&
        // must include oakville
        livestream.zoom.some(
          (zoomItem) => zoomItem?.title.toLowerCase() === 'oakville'
        )
    );

    this.setState({ lastZoomData: lastLocalTeaching?.zoom ?? null });
  }

  async listLivestreams(): Promise<void> {
    const variables: ListLivestreamsQueryVariables = {
      filter: {
        date: { gt: moment().subtract(1, 'years').format('YYYY-MM-DD') },
      },
    };

    try {
      const listLivestreams = (await API.graphql({
        query: queries.listLivestreams,
        variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListLivestreamsQuery>;
      console.log({ 'Success queries.listLivestreams': listLivestreams });
      this.setState({
        livestreamList: (
          listLivestreams.data?.listLivestreams?.items ?? []
        ).sort((a, b) => (b?.date as string)?.localeCompare(a?.date as string)),
      });
    } catch (e) {
      console.error(e);
    }
  }

  handleSelection(id?: string) {
    const liveObject = this.state.livestreamList?.filter(
      (item) => item?.id === id
    )[0];
    console.debug(liveObject);
    if (liveObject) {
      this.setState({
        customEvent: !!liveObject.externalEventUrl,
        liveObject,
        editMode: true,
      });
    }
  }

  renderLivestreams() {
    return (
      <table className="divTable">
        <thead>
          <tr className="headRow">
            <td className="divCell" key={'id'}>
              ID
            </td>
            <td className="divCell" key={'date'}>
              Date
            </td>
            <td className="divCell" key={'startTime'}>
              Start Time
            </td>
            <td className="divCell" key={'videoStartTime'}>
              Video Start Time
            </td>
            <td className="divCell" key={'endTime'}>
              End Time
            </td>
            <td className="divCell" key={'prerollYoutubeId'}>
              Preroll Youtube Id
            </td>
            <td className="divCell" key={'liveYoutubeId'}>
              Live Youtube Id
            </td>
            <td className="divCell" key={'homepageLink'}>
              Banner Message
            </td>
            <td className="divCell" key={'showChat'}>
              showChat
            </td>
            <td className="divCell" key={'showKids'}>
              showKids
            </td>
            <td className="divCell" key={'externalEventUrl'}>
              externalEventUrl
            </td>
            <td className="divCell" key={'eventTitle'}>
              title
            </td>
          </tr>
        </thead>
        <tbody>
          {this.state.livestreamList?.map((livestream) => {
            return (
              <tr
                key={livestream?.id}
                className="divRow"
                onClick={() => this.handleSelection(livestream?.id)}
              >
                <td className="divCell" key={'id'}>
                  {livestream?.id}
                </td>
                <td className="divCell" key={'date'}>
                  {livestream?.date}
                </td>
                <td className="divCell" key={'startTime'}>
                  {livestream?.startTime}
                </td>
                <td className="divCell" key={'videoStartTime'}>
                  {livestream?.videoStartTime}
                </td>
                <td className="divCell" key={'endTime'}>
                  {livestream?.endTime}
                </td>
                <td className="divCell" key={'prerollYoutubeId'}>
                  {livestream?.prerollYoutubeId}
                </td>
                <td className="divCell" key={'liveYoutubeId'}>
                  {livestream?.liveYoutubeId}
                </td>
                <td className="divCell" key={'homepageLink'}>
                  {livestream?.homepageLink}
                </td>
                <td className="divCell" key={'showChat'}>
                  {livestream?.showChat?.toString()}
                </td>
                <td className="divCell" key={'showKids'}>
                  {livestream?.showKids?.toString()}
                </td>
                <td className="divCell" key={'externalEventUrl'}>
                  {livestream?.externalEventUrl}
                </td>
                <td className="divCell" key={'eventTitle'}>
                  {livestream?.eventTitle}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  validate(): boolean {
    let test = true;

    if (this.state.liveObject) {
      const { livestreamList } = this.state;

      const {
        zoom,
        menu,
        endTime,
        videoStartTime,
        startTime,
        date,
        id,
        prerollYoutubeId,
      } = this.state.liveObject;

      if (zoom) {
        zoom.forEach((zoomItem) => {
          if (zoomItem?.title === '') {
            this.setState({ alert: 'error: zoom item titles cannot be empty' });
            test = false;
          }

          if (zoomItem?.link === '') {
            this.setState({ alert: `error: zoom item link cannot be empty` });
            test = false;
          }
        });
      }
      if (menu)
        menu.forEach((menuItem) => {
          if (menuItem?.link === '') {
            this.setState({ alert: 'error: need a valid link' });
            test = false;
          }

          if (menuItem?.title === '') {
            this.setState({ alert: 'error: menu titles cannot be empty' });
            test = false;
          }
        });

      if (endTime && videoStartTime && endTime < videoStartTime) {
        this.setState({ alert: 'error: endTime is before videoStartTime' });
        test = false;
      }

      if (endTime && startTime && endTime < startTime) {
        this.setState({ alert: 'error: endTime is before startTime' });
        test = false;
      }

      if (videoStartTime && startTime && videoStartTime < startTime) {
        this.setState({ alert: 'error: videoStartTime is before startTime' });
        test = false;
      }

      livestreamList?.forEach((item) => {
        if (
          item?.date === date &&
          item?.id !== id &&
          startTime &&
          endTime &&
          item?.startTime &&
          item?.endTime
        ) {
          if (item.startTime <= startTime && item.endTime >= startTime) {
            this.setState({
              alert: `error: live event overlaps with ${item?.id}`,
            });
            test = false;
          }
          if (item.startTime <= endTime && item.endTime >= endTime) {
            this.setState({
              alert: `error: live event overlaps with ${item?.id}`,
            });
            test = false;
          }
        }
      });

      if (prerollYoutubeId === '' && startTime !== videoStartTime) {
        this.setState({
          alert:
            'error: startTime must equal videoStartTime if there is no preroll video',
        });
        test = false;
      }
    }
    return test;
  }

  submit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (this.validate()) {
      this.save();
    }
  }

  async save(): Promise<void> {
    this.setState({ disableAsyncButtons: true });
    if (this.state.editMode) {
      try {
        const input = { ...this.state.liveObject };
        if (this.state.customEvent) {
          delete input['showChat'];
          delete input['showKids'];
          delete input['zoom'];
          delete input['liveYoutubeId'];
          delete input['prerollYoutubeId'];
          delete input['menu'];
        } else {
          delete input['externalEventUrl'];
        }
        delete (input as any)['createdAt'];
        delete (input as any)['updatedAt'];
        console.log(input);
        const json = (await API.graphql({
          query: mutations.updateLivestream,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<UpdateLivestreamMutation>;
        if (json.data?.updateLivestream) {
          this.setState({
            alert: 'updated: ' + json.data.updateLivestream.id,
            liveObject: { ...liveInit },
            editMode: false,
            customEvent: false,
            livestreamList: [
              json.data?.updateLivestream,
              ...(this.state.livestreamList ?? []),
            ],
          });
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      const input = { ...this.state.liveObject };
      if (this.state.customEvent) {
        delete input['showChat'];
        delete input['showKids'];
        delete input['zoom'];
        delete input['liveYoutubeId'];
        delete input['prerollYoutubeId'];
        delete input['menu'];
        input.id = `CustomEvent-${uuidv4()}`;
      } else {
        delete input['externalEventUrl'];
      }
      console.log(input);
      try {
        const json = (await API.graphql({
          query: mutations.createLivestream,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<CreateLivestreamMutation>;
        if (json.data?.createLivestream) {
          this.setState({
            alert: 'created: ' + json.data?.createLivestream?.id,
            liveObject: { ...liveInit },
            editMode: false,
            customEvent: false,
            livestreamList: [
              json.data?.createLivestream,
              ...(this.state.livestreamList ?? []),
            ],
          });
        }
      } catch (e) {
        console.error(e);
      }
    }
    this.setState({ disableAsyncButtons: false });
  }

  sundayCheck(field: string) {
    if (field === 'date' && moment(this.state.liveObject.date).day() !== 0) {
      this.setState({ notSundayWarning: 'not a Sunday' });
    } else if (field === 'date') {
      this.setState({ notSundayWarning: '' });
    }
  }

  handleChange(
    field: string,
    data: string | boolean | MenuItem[] | ZoomItem[]
  ): void {
    this.setState((prevState) => {
      return { liveObject: { ...prevState.liveObject, [field]: data } };
    });
    if (!this.state.customEvent) {
      const firstString = this.state.liveObject?.homepageLink
        ?.toLowerCase()
        .includes('after party')
        ? 'After Party'
        : 'Live';
      const id =
        firstString +
        '-' +
        this.state.liveObject.date +
        '-' +
        this.state.liveObject.liveYoutubeId;
      this.setState((prevState) => {
        return { liveObject: { ...prevState.liveObject, id } };
      });
    }
    this.setState({ notSundayWarning: '' });
  }

  handleMenuChange(
    index: number,
    field: 'link' | 'title' | 'linkType',
    data: string
  ): void {
    const { menu } = this.state.liveObject;

    if (menu?.[index]) {
      menu[index] = { ...menu[index], [field]: data } as MenuItem;
      this.setState((prevState) => {
        return { liveObject: { ...prevState.liveObject, menu } };
      });
    }
  }

  handleZoomChange(index: number, field: string, data: string): void {
    const { zoom } = this.state.liveObject;
    if (zoom?.[index]) {
      zoom[index] = { ...zoom[index], [field]: data } as ZoomItem;
      this.setState((prevState) => {
        return { liveObject: { ...prevState.liveObject, zoom } };
      });
    }
  }

  deleteZoomItem(): void {
    const temp = this.state.liveObject.zoom;
    if (temp) {
      temp.pop();
      this.handleChange('zoom', temp as ZoomItem[]);
    }
  }

  addZoomItem(): void {
    const temp = this.state.liveObject.zoom;
    if (temp) {
      temp.push({ title: '', link: '' });
      this.handleChange('zoom', temp as ZoomItem[]);
    }
  }

  deleteMenuItem(): void {
    const temp = this.state.liveObject.menu;
    if (temp) {
      temp.pop();
      this.handleChange('menu', temp as MenuItem[]);
    }
  }

  addMenuItem(): void {
    const temp = this.state.liveObject.menu;
    if (temp) {
      temp.push({ title: '', link: '', linkType: 'link' });
      this.handleChange('menu', temp as MenuItem[]);
    }
  }

  async delete() {
    if (this.state.toDelete !== '') {
      this.setState({ disableAsyncButtons: true });
      try {
        const json = (await API.graphql({
          query: mutations.deleteLivestream,
          variables: { input: { id: this.state.toDelete } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<DeleteLivestreamMutation>;
        if (json.data?.deleteLivestream) {
          this.setState({
            livestreamList:
              this.state.livestreamList?.filter(
                (item) => item?.id !== json.data?.deleteLivestream?.id
              ) ?? [],
            alert: 'deleted: ' + json.data.deleteLivestream.id,
            toDelete: '',
            liveObject: { ...liveInit },
            customEvent: false,
            editMode: false,
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.setState({ disableAsyncButtons: false });
      }
    } else {
      this.setState({ alert: 'error: id required to delete' });
    }
  }

  renderDelete() {
    return (
      <div>
        <input
          placeholder="enter id..."
          type="text"
          style={{ width: 300 }}
          value={this.state.toDelete}
          onChange={(e) => this.setState({ toDelete: e.target.value })}
        ></input>
        <button
          disabled={this.state.disableAsyncButtons}
          style={{ border: 0, background: 'orange' }}
          onClick={() => this.delete()}
        >
          DELETE
        </button>
      </div>
    );
  }

  renderMenuEditor(menuItem: MenuItem, index: number) {
    return (
      <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Menu item {index + 1}</label>
        <input
          placeholder="title"
          className="menu-input"
          type="text"
          value={menuItem?.title ?? ''}
          onChange={(e) =>
            this.handleMenuChange(index, 'title', e.target.value)
          }
        />
        <input
          placeholder="url"
          className="menu-input"
          type="text"
          value={menuItem?.link ?? ''}
          onChange={(e) => this.handleMenuChange(index, 'link', e.target.value)}
        />
        <input
          placeholder="type"
          className="menu-input"
          type="text"
          value={menuItem?.linkType ?? ''}
          onChange={(e) =>
            this.handleMenuChange(index, 'linkType', e.target.value)
          }
        />
      </div>
    );
  }

  renderZoomEditor(zoomItem: ZoomItem, index: number) {
    return (
      <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Zoom item {index + 1} [
          <span style={{ color: 'red' }}>{zoomItem?.title.length}/30</span>]
        </label>
        <input
          placeholder="title"
          maxLength={30}
          className="menu-input"
          type="text"
          value={zoomItem?.title ?? ''}
          onChange={(e) =>
            this.handleZoomChange(index, 'title', e.target.value)
          }
        ></input>
        <input
          placeholder="url"
          className="menu-input"
          type="text"
          value={zoomItem?.link ?? ''}
          onChange={(e) => this.handleZoomChange(index, 'link', e.target.value)}
        ></input>
      </div>
    );
  }

  renderEditor() {
    return (
      <>
        <button
          style={{ marginTop: '16px', marginBottom: '16px' }}
          onClick={() => {
            this.setState({ liveObject: { ...liveInit } });
            this.setState({
              customEvent: !this.state.customEvent,
              alert: '',
              notSundayWarning: '',
            });
          }}
        >
          {!this.state.customEvent ? 'Add Custom Event' : 'Add Live Event'}
        </button>
        {this.state.customEvent ? (
          <form
            style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}
            onSubmit={(e) => this.submit(e)}
          >
            <div style={{ width: '220px' }}>
              <label>
                Date{' '}
                <span style={{ color: 'red' }}>
                  {this.state.notSundayWarning}
                </span>
                <input
                  className="livestream-input"
                  type="date"
                  required
                  value={this.state.liveObject.date ?? ''}
                  onChange={(e) => this.handleChange('date', e.target.value)}
                ></input>
              </label>
              <label>
                startTime{' '}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    this.setState({
                      alert: 'When the link appears on the homepage',
                    })
                  }
                >
                  ⓘ
                </span>
                <input
                  className="livestream-input"
                  type="time"
                  required
                  value={this.state.liveObject.startTime ?? ''}
                  onChange={(e) =>
                    this.handleChange('startTime', e.target.value)
                  }
                ></input>
              </label>
              <label>
                videoStartTime{' '}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    this.setState({
                      alert: 'When the video is scheduled to start',
                    })
                  }
                >
                  ⓘ
                </span>
                <input
                  className="livestream-input"
                  type="time"
                  required
                  value={this.state.liveObject.videoStartTime ?? ''}
                  onChange={(e) =>
                    this.handleChange('videoStartTime', e.target.value)
                  }
                ></input>
              </label>
              <label>
                endTime{' '}
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    this.setState({
                      alert: 'When the link disappears from the homepage',
                    })
                  }
                >
                  ⓘ
                </span>
                <input
                  className="livestream-input"
                  type="time"
                  required
                  value={this.state.liveObject.endTime ?? ''}
                  onChange={(e) => this.handleChange('endTime', e.target.value)}
                ></input>
              </label>
              <button type="submit" disabled={this.state.disableAsyncButtons}>
                Save Livestream
              </button>
            </div>
            <div style={{ width: '230px' }}>
              <label>
                bannerMessage{' '}
                <span style={{ fontSize: 10 }}>
                  ({this.state.liveObject?.homepageLink?.length}/45 characters)
                </span>
                <br />
                <input
                  maxLength={45}
                  className="livestream-input"
                  type="text"
                  required
                  value={this.state.liveObject.homepageLink ?? ''}
                  onChange={(e) =>
                    this.handleChange('homepageLink', e.target.value)
                  }
                ></input>
              </label>
              <label>
                externalEventUrl <br />
                <input
                  maxLength={300}
                  className="livestream-input"
                  type="text"
                  required
                  value={this.state.liveObject.externalEventUrl ?? ''}
                  onChange={(e) =>
                    this.handleChange('externalEventUrl', e.target.value)
                  }
                ></input>
              </label>
              <label style={{ width: '230px' }}>
                eventTitle <br />
                <input
                  maxLength={100}
                  className="livestream-input"
                  type="text"
                  required
                  value={this.state.liveObject.eventTitle ?? ''}
                  onChange={(e) =>
                    this.handleChange('eventTitle', e.target.value)
                  }
                ></input>
              </label>
            </div>
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <form
              style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}
              onSubmit={(e) => this.submit(e)}
            >
              <div style={{ flex: 1 }}>
                <label>
                  Date{' '}
                  <span style={{ color: 'red' }}>
                    {this.state.notSundayWarning}
                  </span>
                  <br />
                  <input
                    className="livestream-input"
                    type="date"
                    required
                    value={this.state.liveObject.date ?? ''}
                    onChange={(e) => this.handleChange('date', e.target.value)}
                  ></input>
                </label>
                <label>
                  startTime{' '}
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      this.setState({
                        alert: 'When the link appears on the homepage',
                      })
                    }
                  >
                    ⓘ
                  </span>
                  <br />
                  <input
                    className="livestream-input"
                    type="time"
                    required
                    value={this.state.liveObject.startTime ?? ''}
                    onChange={(e) =>
                      this.handleChange('startTime', e.target.value)
                    }
                  ></input>
                </label>
                <label>
                  videoStartTime{' '}
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      this.setState({
                        alert: 'When the video is scheduled to start',
                      })
                    }
                  >
                    ⓘ
                  </span>
                  <br />
                  <input
                    className="livestream-input"
                    type="time"
                    required
                    value={this.state.liveObject.videoStartTime ?? ''}
                    onChange={(e) =>
                      this.handleChange('videoStartTime', e.target.value)
                    }
                  ></input>
                </label>
                <label>
                  endTime{' '}
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      this.setState({
                        alert: 'When the link disappears from the homepage',
                      })
                    }
                  >
                    ⓘ
                  </span>
                  <br />
                  <input
                    className="livestream-input"
                    type="time"
                    required
                    value={this.state.liveObject.endTime ?? ''}
                    onChange={(e) =>
                      this.handleChange('endTime', e.target.value)
                    }
                  ></input>
                </label>
                <button disabled={this.state.disableAsyncButtons} type="submit">
                  Save Livestream
                </button>
              </div>
              <div style={{ flex: 1 }}>
                <label>
                  prerollYoutubeID
                  <br />
                  <input
                    className="livestream-input"
                    type="text"
                    value={this.state.liveObject.prerollYoutubeId ?? ''}
                    onChange={(e) =>
                      this.handleChange('prerollYoutubeId', e.target.value)
                    }
                  ></input>
                </label>
                <label>
                  liveYoutubeId
                  <br />
                  <input
                    className="livestream-input"
                    type="text"
                    required
                    value={this.state.liveObject.liveYoutubeId ?? ''}
                    onChange={(e) =>
                      this.handleChange('liveYoutubeId', e.target.value)
                    }
                  ></input>
                </label>
                <label>
                  bannerMessage{' '}
                  <span style={{ fontSize: 10 }}>
                    ({this.state.liveObject.homepageLink?.length}/45 characters)
                  </span>
                  <br />
                  <input
                    maxLength={45}
                    className="livestream-input"
                    type="text"
                    required
                    value={this.state.liveObject.homepageLink ?? ''}
                    onChange={(e) =>
                      this.handleChange('homepageLink', e.target.value)
                    }
                  ></input>
                </label>
                <br />
                <label style={{ width: '230px' }}>
                  eventTitle <br />
                  <input
                    maxLength={100}
                    className="livestream-input"
                    type="text"
                    required
                    value={this.state.liveObject.eventTitle ?? ''}
                    onChange={(e) =>
                      this.handleChange('eventTitle', e.target.value)
                    }
                  ></input>
                </label>
                <br />
                <input
                  type="checkbox"
                  checked={this.state.liveObject.showChat ?? false}
                  onChange={() =>
                    this.handleChange(
                      'showChat',
                      !this.state.liveObject.showChat
                    )
                  }
                ></input>
                <label> show Chat</label>
                <input
                  type="checkbox"
                  checked={this.state.liveObject.showKids ?? false}
                  onChange={() =>
                    this.handleChange(
                      'showKids',
                      !this.state.liveObject.showKids
                    )
                  }
                ></input>
                <label> show Kids</label>
              </div>
              <div style={{ flex: 2 }}>
                {this.state.liveObject.menu?.map((item, index) =>
                  this.renderMenuEditor(item as MenuItem, index)
                )}
              </div>
              <div style={{ flex: 2 }}>
                {this.state.liveObject.zoom
                  ? this.state.liveObject.zoom.map((item, index) =>
                      this.renderZoomEditor(item as ZoomItem, index)
                    )
                  : null}
              </div>
            </form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                style={{
                  background: 'green',
                  border: 0,
                  height: 50,
                  fontSize: 12,
                  padding: 5,
                }}
                onClick={() => this.addMenuItem()}
              >
                + menu item
              </button>
              <button
                style={{
                  background: 'red',
                  border: 0,
                  height: 50,
                  fontSize: 12,
                  padding: 5,
                }}
                onClick={() => this.deleteMenuItem()}
              >
                - menu item
              </button>
              <button
                style={{ border: 0, height: 50, fontSize: 12, padding: 5 }}
                onClick={() =>
                  this.handleChange('menu', [...menuInit] as MenuItem[])
                }
              >
                Default Menu
              </button>
              <button
                style={{
                  background: 'grey',
                  border: 0,
                  height: 50,
                  fontSize: 12,
                  padding: 5,
                }}
                onClick={() =>
                  this.handleChange('menu', [...afterPartyMenu] as MenuItem[])
                }
              >
                After Party Menu
              </button>
              {this.state.lastZoomData ? (
                <button
                  style={{
                    background: 'black',
                    color: 'white',
                    border: 0,
                    height: 50,
                    fontSize: 12,
                    padding: 5,
                  }}
                  onClick={() =>
                    this.handleChange('zoom', [
                      ...(this.state.lastZoomData as ZoomItem[]),
                    ])
                  }
                >
                  Local Teaching
                </button>
              ) : null}
              {this.state.liveObject.zoom ? (
                <button
                  style={{
                    background: 'lightgreen',
                    border: 0,
                    height: 50,
                    fontSize: 12,
                    padding: 5,
                  }}
                  onClick={() => this.addZoomItem()}
                >
                  + zoom item
                </button>
              ) : null}
              {this.state.liveObject.zoom ? (
                <button
                  style={{
                    background: 'mediumvioletred',
                    border: 0,
                    height: 50,
                    fontSize: 12,
                    padding: 5,
                  }}
                  onClick={() => this.deleteZoomItem()}
                >
                  - zoom item
                </button>
              ) : null}
            </div>
          </div>
        )}
      </>
    );
  }
  renderAlert() {
    return (
      <Modal isOpen={Boolean(this.state.alert)}>
        <div
          style={{
            color: this.state.alert.includes('error') ? 'red' : 'black',
          }}
        >
          {this.state.alert}
        </div>
        <button onClick={() => this.setState({ alert: '' })}>OK</button>
      </Modal>
    );
  }
  render() {
    return (
      <AmplifyAuthenticator federated={federated}>
        <div>
          <AdminMenu></AdminMenu>
          {isSafari ? (
            <div>This page does not support Safari :(</div>
          ) : (
            <div style={{ overflowX: 'hidden' }}>
              <div className="videoSelectBox">
                {this.renderLivestreams()}
                {this.renderDelete()}
              </div>
              {this.renderEditor()}
              {this.renderAlert()}
            </div>
          )}
        </div>
      </AmplifyAuthenticator>
    );
  }
}
export default Index;
