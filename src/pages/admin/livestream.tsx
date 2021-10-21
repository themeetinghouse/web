import React from 'react';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { EmptyProps } from '../../utils';
import Amplify, { API } from 'aws-amplify';
import { Modal } from 'reactstrap';
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
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

Amplify.configure(awsmobile);

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
  liveVimeoId: '',
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

type NewLivestream = NonNullable<CreateLivestreamMutationVariables['input']>;

interface State {
  toDelete: string;
  editMode: boolean;
  alert: string;
  livestreamList: Livestreams;
  liveObject: NewLivestream;
  customEvent: boolean;
  lastZoomData: ZoomItem[] | null;
  disableAsyncButtons: boolean;
  sectionModal: boolean;
  modalErrorText: string;
}

class Index extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      toDelete: '',
      editMode: false,
      alert: '',
      livestreamList: [],
      liveObject: { ...liveInit },
      customEvent: false,
      lastZoomData: null,
      disableAsyncButtons: false,
      sectionModal: false,
      modalErrorText: '',
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
            <td className="divCell" key={'liveVimeoId'}>
              Live Vimeo Id
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
                <td className="divCell" key={'liveVimeoId'}>
                  {livestream?.liveVimeoId}
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

      if (!this.state.customEvent) {
        // custom live events may overlap

        livestreamList?.forEach((item) => {
          if (
            !item?.externalEventUrl && // skip custom live events
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
      }

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
          delete input['liveVimeoId'];
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
              ...(this.state.livestreamList?.filter(
                (item) => item?.id !== json.data?.updateLivestream?.id
              ) ?? []),
            ],
          });
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      const input = { ...this.state.liveObject };
      input.id = `Live-${uuidv4()}`;
      if (this.state.customEvent) {
        delete input['showChat'];
        delete input['showKids'];
        delete input['zoom'];
        delete input['liveYoutubeId'];
        delete input['liveVimeoId'];
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

  handleChange(
    field: string,
    data: string | boolean | MenuItem[] | ZoomItem[]
  ): void {
    this.setState((prevState) => {
      return { liveObject: { ...prevState.liveObject, [field]: data } };
    });
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
    const temp = this.state.liveObject?.zoom;
    if (temp) {
      temp.pop();
      this.handleChange('zoom', temp as ZoomItem[]);
    }
  }
  addHeadingItem(): void {
    const temp = this.state.liveObject?.zoom;
    if (temp) {
      temp.push({ title: '', link: '' });
      this.handleChange('livestreamSections', temp as ZoomItem[]);
    }
  }
  addZoomItem(): void {
    const temp = this.state.liveObject?.zoom;
    if (temp) {
      temp.push({ title: '', link: '' });
      this.handleChange('zoom', temp as ZoomItem[]);
    }
  }

  deleteMenuItem(): void {
    const temp = this.state.liveObject?.menu;
    if (temp) {
      temp.pop();
      this.handleChange('menu', temp as MenuItem[]);
    }
  }

  addMenuItem(): void {
    const temp = this.state.liveObject?.menu;
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
        />
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
          onChange={(e) =>
            this.handleMenuChange(index, 'link', e.target.value.trim())
          }
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
  createLiveStreamSectionZoomLink(index: number) {
    const tempObj = this.state.liveObject?.livestreamSections;
    if (tempObj?.[index] && tempObj[index]?.links) {
      tempObj?.[index]?.links?.push({
        link: '',
        title: ``,
      });
    }
    console.log({ tempObj });
    this.setState({
      liveObject: {
        ...this.state.liveObject,
        livestreamSections: tempObj,
      },
    });
  }
  createliveStreamSection() {
    const title = ``;
    const sections = [
      ...(this.state.liveObject?.livestreamSections ?? []),
      {
        title: title,
        links: [],
      },
    ];
    this.setState({
      liveObject: { ...this.state.liveObject, livestreamSections: sections },
    });
  }
  deleteLiveStreamSectionLink(index: number, linkIndex: number) {
    const newLiveObject: any = { ...this.state.liveObject };
    newLiveObject.livestreamSections[index].links =
      newLiveObject?.livestreamSections?.[index]?.links?.filter(
        (link: any, ind: number) => ind !== linkIndex
      );
    this.setState({
      liveObject: newLiveObject,
    });
  }
  deleteLiveStreamSection(index: number) {
    const newLiveObject = {
      ...this.state.liveObject,
      livestreamSections: this.state.liveObject.livestreamSections?.filter(
        (a, i) => index !== i
      ),
    };
    this.setState({
      liveObject: newLiveObject,
    });
  }
  changeZoomTitle(event: any, index: number, linkIndex: number) {
    console.log(event, index);
    const newLiveObject: any = this.state.liveObject;
    newLiveObject.livestreamSections[index].links[linkIndex].title =
      event.target.value;
    this.setState({ liveObject: newLiveObject });
  }
  changeZoomLink(event: any, index: number, linkIndex: number) {
    const newLiveObject: any = this.state.liveObject;
    newLiveObject.livestreamSections[index].links[linkIndex].link =
      event.target.value;
    this.setState({ liveObject: newLiveObject });
  }
  changeSectionTitle(event: any, index: number) {
    const newLiveObject: any = this.state.liveObject;
    newLiveObject.livestreamSections[index].title = event.target.value;
    this.setState({ liveObject: newLiveObject });
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
        />
        <input
          placeholder="url"
          className="menu-input"
          type="text"
          value={zoomItem?.link ?? ''}
          onChange={(e) =>
            this.handleZoomChange(index, 'link', e.target.value.trim())
          }
        />
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
                Date
                <input
                  className="livestream-input"
                  type="date"
                  required
                  value={this.state.liveObject?.date ?? ''}
                  onChange={(e) => this.handleChange('date', e.target.value)}
                />
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
                  value={this.state.liveObject?.startTime ?? ''}
                  onChange={(e) =>
                    this.handleChange('startTime', e.target.value)
                  }
                />
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
                  value={this.state.liveObject?.videoStartTime ?? ''}
                  onChange={(e) =>
                    this.handleChange('videoStartTime', e.target.value)
                  }
                />
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
                  value={this.state.liveObject?.endTime ?? ''}
                  onChange={(e) => this.handleChange('endTime', e.target.value)}
                />
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
                  value={this.state.liveObject?.homepageLink ?? ''}
                  onChange={(e) =>
                    this.handleChange('homepageLink', e.target.value)
                  }
                />
              </label>
              <label>
                externalEventUrl <br />
                <input
                  maxLength={300}
                  className="livestream-input"
                  type="text"
                  required
                  value={this.state.liveObject?.externalEventUrl ?? ''}
                  onChange={(e) =>
                    this.handleChange('externalEventUrl', e.target.value.trim())
                  }
                />
              </label>
              <label style={{ width: '230px' }}>
                eventTitle <br />
                <input
                  maxLength={100}
                  className="livestream-input"
                  type="text"
                  required
                  value={this.state.liveObject?.eventTitle ?? ''}
                  onChange={(e) =>
                    this.handleChange('eventTitle', e.target.value)
                  }
                />
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
                  Date
                  <br />
                  <input
                    className="livestream-input"
                    type="date"
                    required
                    value={this.state.liveObject?.date ?? ''}
                    onChange={(e) => this.handleChange('date', e.target.value)}
                  />
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
                    value={this.state.liveObject?.startTime ?? ''}
                    onChange={(e) =>
                      this.handleChange('startTime', e.target.value)
                    }
                  />
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
                    value={this.state.liveObject?.videoStartTime ?? ''}
                    onChange={(e) =>
                      this.handleChange('videoStartTime', e.target.value)
                    }
                  />
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
                    value={this.state.liveObject?.endTime ?? ''}
                    onChange={(e) =>
                      this.handleChange('endTime', e.target.value)
                    }
                  />
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
                    value={this.state.liveObject?.prerollYoutubeId ?? ''}
                    onChange={(e) =>
                      this.handleChange(
                        'prerollYoutubeId',
                        e.target.value.trim()
                      )
                    }
                  />
                </label>
                <label>
                  liveYoutubeId
                  <br />
                  <input
                    className="livestream-input"
                    type="text"
                    required
                    value={this.state.liveObject?.liveYoutubeId ?? ''}
                    onChange={(e) =>
                      this.handleChange('liveYoutubeId', e.target.value.trim())
                    }
                  />
                </label>
                <label>
                  liveVimeoId
                  <br />
                  <input
                    className="livestream-input"
                    type="text"
                    value={this.state.liveObject?.liveVimeoId ?? ''}
                    onChange={(e) =>
                      this.handleChange('liveVimeoId', e.target.value.trim())
                    }
                  />
                </label>
                <label>
                  bannerMessage{' '}
                  <span style={{ fontSize: 10 }}>
                    ({this.state.liveObject?.homepageLink?.length}/45
                    characters)
                  </span>
                  <br />
                  <input
                    maxLength={45}
                    className="livestream-input"
                    type="text"
                    required
                    value={this.state.liveObject?.homepageLink ?? ''}
                    onChange={(e) =>
                      this.handleChange('homepageLink', e.target.value)
                    }
                  />
                </label>
                <br />
                <label style={{ width: '230px' }}>
                  eventTitle <br />
                  <input
                    maxLength={100}
                    className="livestream-input"
                    type="text"
                    required
                    value={this.state.liveObject?.eventTitle ?? ''}
                    onChange={(e) =>
                      this.handleChange('eventTitle', e.target.value)
                    }
                  />
                </label>
                <br />
                <input
                  type="checkbox"
                  checked={this.state.liveObject?.showChat ?? false}
                  onChange={() =>
                    this.handleChange(
                      'showChat',
                      !this.state.liveObject?.showChat
                    )
                  }
                />
                <label> show Chat</label>
                <input
                  type="checkbox"
                  checked={this.state.liveObject?.showKids ?? false}
                  onChange={() =>
                    this.handleChange(
                      'showKids',
                      !this.state.liveObject?.showKids
                    )
                  }
                />
                <label> show Kids</label>
              </div>
              <div style={{ flex: 2 }}>
                {this.state.liveObject?.menu?.map((item, index) =>
                  this.renderMenuEditor(item as MenuItem, index)
                )}
              </div>
              <div style={{ flex: 2 }}>
                {this.state.liveObject?.zoom
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
              {this.state.liveObject ? (
                <button
                  style={{
                    background: 'green',
                    border: 0,
                    height: 50,
                    fontSize: 12,
                    padding: 5,
                  }}
                  onClick={() => this.setState({ sectionModal: true })}
                >
                  Headings + zoom links
                </button>
              ) : null}
              {this.state.liveObject?.zoom ? (
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
              {this.state.liveObject?.zoom ? (
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
  validateModal() {
    const sectionValidateCount =
      this.state.liveObject.livestreamSections?.filter(
        (section) => !!!section?.title
      ).length ?? 0;
    const zoomLinkValidateCount =
      this.state.liveObject.livestreamSections?.filter((section) => {
        return section?.links?.some((link) => !!!link?.title || !!!link?.link);
      }).length ?? 0;
    return sectionValidateCount + zoomLinkValidateCount < 1;
  }
  renderSectionModal() {
    return (
      <Modal isOpen={this.state.sectionModal}>
        <div style={{ margin: 32 }}>
          <div
            style={{ display: 'flex', flexDirection: 'row', marginBottom: 32 }}
          >
            <h5 style={{ flex: 1 }}>Link Grids with Headings</h5>
            <button onClick={() => this.createliveStreamSection()}>+</button>
          </div>

          {this.state.liveObject.livestreamSections?.map((section, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    marginBottom: 4,
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <input
                    onChange={(e) => this.changeSectionTitle(e, index)}
                    style={{ flex: 1 }}
                    placeholder="Heading Title"
                    value={section?.title}
                  />
                  <button
                    style={{ marginLeft: 16 }}
                    onClick={() => this.deleteLiveStreamSection(index)}
                  >
                    -
                  </button>
                  <button
                    style={{ marginLeft: 4 }}
                    onClick={() => this.createLiveStreamSectionZoomLink(index)}
                  >
                    +
                  </button>
                </div>

                <div style={{ marginLeft: 16 }}>
                  {section?.links?.map((zoomLink, linkIndex) => {
                    return (
                      <div
                        style={{
                          marginBottom: 4,
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                        key={linkIndex}
                      >
                        <div style={{ flexDirection: 'column' }}>
                          <input
                            style={{ marginBottom: 4 }}
                            onChange={(e) =>
                              this.changeZoomTitle(e, index, linkIndex)
                            }
                            placeholder="Link Title"
                            value={zoomLink?.title ?? ''}
                          />
                          <input
                            style={{ marginBottom: 4 }}
                            onChange={(e) =>
                              this.changeZoomLink(e, index, linkIndex)
                            }
                            placeholder="URL"
                            value={zoomLink?.link ?? ''}
                          />
                        </div>
                        <div
                          style={{
                            flexDirection: 'column',
                            marginTop: 16,
                            marginLeft: 16,
                          }}
                        >
                          <button
                            onClick={() =>
                              this.deleteLiveStreamSectionLink(index, linkIndex)
                            }
                          >
                            -
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <p style={{ color: 'red' }}>{this.state.modalErrorText}</p>
          <button
            style={{ marginTop: 4 }}
            onClick={() => {
              if (this.validateModal()) {
                this.setState({ modalErrorText: '', sectionModal: false });
              } else
                this.setState({ modalErrorText: 'All fields must be filled.' });
            }}
          >
            Close
          </button>
        </div>
      </Modal>
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
      <div>
        {isSafari ? (
          <div>This page does not support Safari :(</div>
        ) : (
          <div style={{ overflowX: 'hidden' }}>
            <div className="videoSelectBox">
              {this.renderLivestreams()}
              {this.renderDelete()}
            </div>
            {this.renderEditor()}
            {this.renderSectionModal()}
            {this.renderAlert()}
          </div>
        )}
      </div>
    );
  }
}
export default Index;
