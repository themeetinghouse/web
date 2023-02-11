import { API, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  CreateLivestreamMutation,
  CreateLivestreamMutationVariables,
  DeleteLivestreamMutation,
  ListLivestreamsQuery,
  ListLivestreamsQueryVariables,
  UpdateLivestreamMutation,
} from 'API';
import moment from 'moment';
import React, { ReactNode } from 'react';
import { isSafari } from 'react-device-detect';
import { Modal, ModalHeader, Spinner } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { EmptyProps } from '../../utils';
import './livestream.scss';

const menuInit = [
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
  prerollYoutubeId: 'DdKLazlFz0g',
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
  shouldDeleteModal: boolean;
  loadAll: boolean;
  showModal: boolean;
  isLoading: boolean;
  alert: string;
  nextToken: string | null | undefined;
  livestreamList: Livestreams;
  liveObject: NewLivestream;
  customEvent: boolean;
  lastZoomData: ZoomItem[] | null;
  disableAsyncButtons: boolean;
  sectionModal: boolean;
  modalErrorText: string;
}
const LivestreamModal = ({
  editMode,
  toggleModal,
  open,
  children,
  liveObject,
}: {
  editMode: boolean;
  toggleModal: () => void;
  open: boolean;
  children: ReactNode;
  liveObject: NewLivestream;
}) => {
  console.log({ liveObject });
  const modalTitle = `${
    editMode
      ? liveObject?.eventTitle
      : liveObject?.eventTitle !== ''
      ? liveObject?.eventTitle
      : 'Create Livestream'
  }`;
  return (
    <Modal
      style={{ display: 'flex', flexDirection: 'column' }}
      size="lg"
      isOpen={open}
    >
      <ModalHeader toggle={toggleModal}>{modalTitle}</ModalHeader>
      {children}
    </Modal>
  );
};
const RenderLivestreams = ({
  delete: deleteLivestream,
  livestreams,
  handleSelection,
}: {
  delete: (id: string) => void;
  livestreams: Livestreams;
  handleSelection: (id: string) => void;
}) => {
  return (
    <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column' }}>
      {livestreams.map((livestream) => {
        const isCustom = livestream?.id.includes('CustomEvent');
        return (
          <div
            key={livestream?.id}
            style={{
              flex: 1,
              border: '1px solid lightgrey',
              borderRadius: 4,
              fontSize: 12,
              fontFamily: 'Graphik Web',
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {isCustom ? (
                <div
                  style={{
                    transform: 'rotate(180deg)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'sideways',
                    backgroundColor: '#ffc60b',
                    color: '#000',
                    fontFamily: 'Graphik Web',
                    justifyContent: 'center',
                    display: 'flex',
                    fontSize: 10,
                    padding: 6,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Custom
                </div>
              ) : (
                <div
                  style={{
                    transform: 'rotate(180deg)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'sideways',
                    backgroundColor: '#00ae42',
                    justifyContent: 'center',
                    display: 'flex',
                    color: '#000',
                    fontFamily: 'Graphik Web',
                    fontSize: 10,
                    padding: 6,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Stream
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flex: 1,
                  padding: 8,
                }}
              >
                <div
                  style={{
                    flexDirection: 'column',
                    flex: 1,
                    width: 0,
                    display: 'flex',
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700 }}>
                    {livestream?.eventTitle}
                  </div>
                  <div>
                    {moment(livestream?.date).format('ddd, MMM Do YYYY')}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      display: 'flex',
                      flex: 1,
                      alignItems: 'flex-end',
                    }}
                  >
                    {isCustom
                      ? livestream?.externalEventUrl
                      : livestream?.liveYoutubeId}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Graphik Web',
                      fontWeight: 400,
                      fontSize: 12,
                    }}
                  >
                    <img
                      width={15}
                      height={15}
                      style={{ marginRight: 4 }}
                      alt="Clock Icon"
                      src={'/static/svg/Clock-Time.svg'}
                    ></img>
                    Start Time: {livestream?.startTime}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Graphik Web',
                      fontWeight: 400,
                      fontSize: 12,
                    }}
                  >
                    <img
                      width={15}
                      height={15}
                      style={{ marginRight: 4 }}
                      alt="Clock Icon"
                      src={'/static/svg/Clock-Time.svg'}
                    ></img>
                    Video Start Time: {livestream?.videoStartTime}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Graphik Web',
                      fontWeight: 400,
                      fontSize: 12,
                    }}
                  >
                    <img
                      width={15}
                      height={15}
                      style={{ marginRight: 4 }}
                      alt="Clock Icon"
                      src={'/static/svg/Clock-Time.svg'}
                    ></img>
                    End Time: {livestream?.endTime}
                  </div>
                </div>

                <div style={{ flex: 1, paddingLeft: 16 }}>
                  <img
                    width={15}
                    height={15}
                    style={{ marginRight: 4 }}
                    alt="Clock Icon"
                    src={'/static/svg/Announcement.svg'}
                  ></img>
                  Banner Message:
                  <span
                    style={{
                      display: 'block',
                      marginLeft: 19,
                    }}
                  >
                    {livestream?.homepageLink}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',

                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeft: '1px solid lightgrey',
                }}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteLivestream(livestream?.id ?? '');
                  }}
                  style={{
                    padding: 4,
                    backgroundColor: '#FFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    flex: 1,
                    borderBottom: '1px solid lightgrey',
                  }}
                >
                  <img
                    width={20}
                    height={20}
                    alt="Delete Icon"
                    src={'/static/svg/Delete.svg'}
                  ></img>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelection(livestream?.id ?? '');
                  }}
                  style={{
                    padding: 4,
                    flex: 1,
                    backgroundColor: '#FFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    width={20}
                    height={20}
                    alt="Edit Icon"
                    src="/static/svg/More.svg"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
class Index extends React.Component<EmptyProps, State> {
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      toDelete: '',
      loadAll: false,
      showModal: false,
      isLoading: true,
      shouldDeleteModal: false,
      editMode: false,
      alert: '',
      livestreamList: [],
      liveObject: { ...liveInit },
      customEvent: false,
      lastZoomData: null,
      disableAsyncButtons: false,
      sectionModal: false,
      nextToken: null,
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
    const liveStreams: Livestream[] = [];
    let next;
    const loadNext = async (nextToken: string | null | undefined) => {
      const filter = this.state.loadAll
        ? {}
        : {
            date: { gt: moment().subtract(6, 'months').format('YYYY-MM-DD') },
          };
      const variables: ListLivestreamsQueryVariables = {
        filter,
        limit: 200,
        nextToken,
      };
      const listLivestreams = (await API.graphql({
        query: queries.listLivestreams,
        variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListLivestreamsQuery>;
      console.log(
        { 'Success queries.listLivestreams': listLivestreams },
        liveStreams.length
      );
      liveStreams.push(
        ...(listLivestreams.data?.listLivestreams?.items as Livestream[])
      );
      next = listLivestreams.data?.listLivestreams?.nextToken;
      if (next && this.state.loadAll) {
        await loadNext(next);
      }
    };
    try {
      await loadNext(next);
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        livestreamList: liveStreams.sort((a, b) =>
          (b?.date as string)?.localeCompare(a?.date as string)
        ),
        isLoading: false,
      });
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
        showModal: true,
      });
    }
  }

  validate(): boolean {
    let test = true;

    if (this.state.liveObject) {
      const { livestreamList } = this.state;

      const {
        zoom,
        menu,
        endTime,
        eventTitle,
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
      } else {
        if (!this.state.liveObject?.externalEventUrl) {
          this.setState({
            alert: `error: custom live event must have an externalEventUrl`,
          });
          test = false;
        }
      }

      if (prerollYoutubeId === '' && startTime !== videoStartTime) {
        this.setState({
          alert:
            'error: startTime must equal videoStartTime if there is no preroll video',
        });
        test = false;
      }
      if (eventTitle === '') {
        this.setState({
          alert: 'error: event must have at title',
        });
        test = false;
      }
      if (startTime === '') {
        this.setState({
          alert: 'error: startTime must set',
        });
        test = false;
      }
      if (videoStartTime === '') {
        this.setState({
          alert: 'error: videoStartTime must set',
        });
        test = false;
      }
      if (endTime === '') {
        this.setState({
          alert: 'error: endTime must set',
        });
        test = false;
      }
      if (date === '') {
        this.setState({
          alert: 'error: date must set',
        });
        test = false;
      }
    }
    return test;
  }

  submit(): void {
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
            showModal: false,
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
            showModal: false,
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
            alert: 'deleted: ' + json?.data?.deleteLivestream?.id,
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

  renderMenuEditor(menuItem: MenuItem, index: number) {
    return (
      <div
        key={index}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          marginBottom: 8,
        }}
      >
        <label>Menu item {index + 1}</label>
        <span style={{ fontSize: 9, fontWeight: 400 }}>
          linkType: link, zoom, or custom
        </span>
        <input
          placeholder="title"
          className="livestream-input"
          type="text"
          value={menuItem?.title ?? ''}
          onChange={(e) =>
            this.handleMenuChange(index, 'title', e.target.value)
          }
        />
        <input
          placeholder="url"
          className="livestream-input"
          type="text"
          value={menuItem?.link ?? ''}
          onChange={(e) =>
            this.handleMenuChange(index, 'link', e.target.value.trim())
          }
        />
        <input
          placeholder="type"
          className="livestream-input"
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
      <div
        key={index}
        style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        <label>
          Zoom item {index + 1} [
          <span style={{ color: 'red' }}>{zoomItem?.title.length}/30</span>]
        </label>
        <input
          placeholder="title"
          maxLength={30}
          className="livestream-input"
          type="text"
          value={zoomItem?.title ?? ''}
          onChange={(e) =>
            this.handleZoomChange(index, 'title', e.target.value)
          }
        />
        <input
          placeholder="url"
          className="livestream-input"
          type="text"
          value={zoomItem?.link ?? ''}
          onChange={(e) =>
            this.handleZoomChange(index, 'link', e.target.value.trim())
          }
        />
      </div>
    );
  }
  renderMenu() {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          position: 'fixed',
          right: 0,
        }}
      >
        {!this.state.customEvent ? (
          <>
            <button
              style={{
                padding: 8,
                backgroundColor: 'white',
                fontWeight: 700,
                border: '3px solid black',
              }}
              onClick={() => this.addMenuItem()}
            >
              + menu item
            </button>
            <button
              style={{
                padding: 8,
                backgroundColor: 'white',
                fontWeight: 700,
                border: '3px solid black',
              }}
              onClick={() => this.deleteMenuItem()}
            >
              - menu item
            </button>
            {this.state.lastZoomData ? (
              <button
                style={{
                  padding: 8,
                  backgroundColor: 'white',
                  fontWeight: 700,
                  border: '3px solid black',
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
                  padding: 8,
                  backgroundColor: 'white',
                  fontWeight: 700,
                  border: '3px solid black',
                }}
                onClick={() => this.setState({ sectionModal: true })}
              >
                Headings + Links
              </button>
            ) : null}
            {this.state.liveObject?.zoom ? (
              <button
                style={{
                  padding: 8,
                  backgroundColor: 'white',
                  fontWeight: 700,
                  border: '3px solid black',
                }}
                onClick={() => this.addZoomItem()}
              >
                + zoom item
              </button>
            ) : null}
            {this.state.liveObject?.zoom ? (
              <button
                style={{
                  padding: 8,
                  backgroundColor: 'white',
                  fontWeight: 700,
                  border: '3px solid black',
                }}
                onClick={() => this.deleteZoomItem()}
              >
                - zoom item
              </button>
            ) : null}
          </>
        ) : null}
        <button
          style={{
            padding: 8,
            backgroundColor: 'white',
            fontWeight: 700,
            border: '3px solid black',
          }}
          onClick={() => {
            this.setState({ liveObject: { ...liveInit } });
            this.setState({
              customEvent: !this.state.customEvent,
              alert: '',
            });
          }}
        >
          {this.state.customEvent ? 'Regular Event' : 'Custom Event'}
        </button>
        <button
          style={{
            padding: 8,
            backgroundColor: 'darkgrey',
            color: 'black',
            fontWeight: 700,
            border: '3px solid black',
          }}
          disabled={this.state.disableAsyncButtons}
          type="button"
          onClick={(e) => this.submit()}
        >
          Save Livestream
        </button>
        <button
          style={{
            padding: 8,
            backgroundColor: 'darkgrey',
            color: 'black',
            fontWeight: 700,
            border: '3px solid black',
          }}
          disabled={this.state.disableAsyncButtons}
          type="button"
          onClick={(e) => this.setState({ showModal: false })}
        >
          Dismiss
        </button>
      </div>
    );
  }
  renderEditor() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
          columnGap: 16,
          padding: '10px 32px 16px',
        }}
      >
        <div
          style={{
            flex: 1,
            rowGap: 16,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            Event Title
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              ({this.state.liveObject?.eventTitle?.length}/100 characters)
            </span>
            <input
              style={{ flex: 1 }}
              maxLength={100}
              className="livestream-input"
              type="text"
              required
              value={this.state.liveObject?.eventTitle ?? ''}
              onChange={(e) => this.handleChange('eventTitle', e.target.value)}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Banner Message
              <span
                style={{ cursor: 'pointer', marginLeft: 4 }}
                onClick={() =>
                  this.setState({
                    alert:
                      'The message to display on the banner when event is live. dynamo field: homepageLink',
                  })
                }
              >
                ⓘ
              </span>
            </div>
            <span style={{ fontSize: 9, fontWeight: 400 }}>
              ({this.state.liveObject?.homepageLink?.length}/45 characters)
            </span>

            <input
              style={{ flex: 1 }}
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
          {!this.state.customEvent ? (
            <>
              <label style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  Preroll Youtube ID
                  <span
                    style={{ cursor: 'pointer', marginLeft: 4 }}
                    onClick={() =>
                      this.setState({
                        alert: 'dynamoField: prerollYoutubeID',
                      })
                    }
                  >
                    ⓘ
                  </span>
                </div>
                <small style={{ fontSize: 9, fontWeight: 400 }}>
                  Video to display before Video Start Time
                </small>
                <input
                  style={{ flex: 1 }}
                  className="livestream-input"
                  type="text"
                  value={this.state.liveObject?.prerollYoutubeId ?? ''}
                  onChange={(e) =>
                    this.handleChange('prerollYoutubeId', e.target.value.trim())
                  }
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  Live Youtube ID
                  <span
                    style={{ cursor: 'pointer', marginLeft: 4 }}
                    onClick={() =>
                      this.setState({
                        alert:
                          'The youtube video to display when live. dynamo field: liveYoutubeId',
                      })
                    }
                  >
                    ⓘ
                  </span>
                </div>
                <small style={{ fontSize: 9, fontWeight: 400 }}>
                  The youtube video to display when live
                </small>
                <input
                  style={{ flex: 1 }}
                  className="livestream-input"
                  type="text"
                  required
                  value={this.state.liveObject?.liveYoutubeId ?? ''}
                  onChange={(e) =>
                    this.handleChange('liveYoutubeId', e.target.value.trim())
                  }
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  Live Vimeo ID
                  <span
                    style={{ cursor: 'pointer', marginLeft: 4 }}
                    onClick={() =>
                      this.setState({
                        alert:
                          'The vimeo video to display when live. dynamo field: liveVimeoId',
                      })
                    }
                  >
                    ⓘ
                  </span>
                </div>

                <small style={{ fontSize: 9, fontWeight: 400 }}>
                  The vimeo video to display when live
                </small>
                <input
                  style={{ flex: 1 }}
                  className="livestream-input"
                  type="text"
                  value={this.state.liveObject?.liveVimeoId ?? ''}
                  onChange={(e) =>
                    this.handleChange('liveVimeoId', e.target.value.trim())
                  }
                />
              </label>
            </>
          ) : (
            <label style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                Event URL
                <span
                  style={{ cursor: 'pointer', marginLeft: 4 }}
                  onClick={() =>
                    this.setState({
                      alert:
                        'An external link to the event. i.e. zoom link, google meet link etc.... dynamo field: externalEventUrl',
                    })
                  }
                >
                  ⓘ
                </span>
              </div>
              <small style={{ fontSize: 9, fontWeight: 400 }}>
                External link to the event
              </small>
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
          )}
        </div>
        <div
          style={{
            flex: 1,
            rowGap: 16,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span>Date</span>
              <small style={{ fontSize: 9, fontWeight: 400 }}>
                When the event occurs
              </small>
              <input
                className="livestream-input"
                type="date"
                required
                style={{ flex: 1 }}
                value={this.state.liveObject?.date ?? ''}
                onChange={(e) => this.handleChange('date', e.target.value)}
              />
            </div>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <span>Start Time</span>

              <span
                style={{ cursor: 'pointer', marginLeft: 4 }}
                onClick={() =>
                  this.setState({
                    alert: 'dynamo field: startTime',
                  })
                }
              >
                ⓘ
              </span>
            </div>
            <small style={{ fontSize: 9, fontWeight: 400 }}>
              When the event should display on the website
            </small>
            <input
              style={{ flex: 1 }}
              className="livestream-input"
              type="time"
              required
              value={this.state.liveObject?.startTime ?? ''}
              onChange={(e) => this.handleChange('startTime', e.target.value)}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              Video Start Time
              <span
                style={{ cursor: 'pointer', marginLeft: 4 }}
                onClick={() =>
                  this.setState({
                    alert: 'dynamo field: videoStartTime',
                  })
                }
              >
                ⓘ
              </span>
            </div>
            <small style={{ fontSize: 9, fontWeight: 400 }}>
              When the video is scheduled to start
            </small>
            <input
              style={{ flex: 1 }}
              className="livestream-input"
              type="time"
              required
              value={this.state.liveObject?.videoStartTime ?? ''}
              onChange={(e) =>
                this.handleChange('videoStartTime', e.target.value)
              }
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              End Time{' '}
              <span
                style={{ cursor: 'pointer', marginLeft: 4 }}
                onClick={() =>
                  this.setState({
                    alert:
                      'If there are no more upcoming events the yellow live bar will not display on homepage. \ndynamo field: endTime',
                  })
                }
              >
                ⓘ
              </span>
            </div>
            <small style={{ fontSize: 9, fontWeight: 400 }}>
              The end time for the event
            </small>
            <input
              style={{ flex: 1 }}
              className="livestream-input"
              type="time"
              required
              value={this.state.liveObject?.endTime ?? ''}
              onChange={(e) => this.handleChange('endTime', e.target.value)}
            />
          </label>
          {!this.state.customEvent ? (
            <>
              <label>
                Show Chat
                <input
                  style={{ marginLeft: 4 }}
                  type="checkbox"
                  checked={this.state.liveObject?.showChat ?? false}
                  onChange={() =>
                    this.handleChange(
                      'showChat',
                      !this.state.liveObject?.showChat
                    )
                  }
                />
              </label>

              <label>
                Show Kids
                <input
                  style={{ marginLeft: 4 }}
                  type="checkbox"
                  checked={this.state.liveObject?.showKids ?? false}
                  onChange={() =>
                    this.handleChange(
                      'showKids',
                      !this.state.liveObject?.showKids
                    )
                  }
                />
              </label>
            </>
          ) : null}
        </div>
        {!this.state.customEvent && this.state.liveObject?.menu?.length ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: 16,
            }}
          >
            <h5 style={{ paddingBottom: 16 }}>Menu Links</h5>
            <div
              style={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: 16,
                columnGap: 16,
              }}
            >
              {this.state.liveObject?.menu?.map((item, index) =>
                this.renderMenuEditor(item as MenuItem, index)
              )}
            </div>
          </div>
        ) : null}

        {!this.state.customEvent &&
        this.state.liveObject?.zoom &&
        this.state.liveObject?.zoom?.length ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginTop: 16,
            }}
          >
            <h5 style={{ paddingBottom: 16 }}>Zoom Links</h5>
            <div
              style={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: 16,
                columnGap: 16,
              }}
            >
              {this.state.liveObject.zoom.map((item, index) =>
                this.renderZoomEditor(item as ZoomItem, index)
              )}
            </div>
          </div>
        ) : null}
      </form>
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
  renderShouldDelete() {
    const liveToDelete = this.state.livestreamList.find(
      (live) => live?.id === this.state.toDelete
    );
    const liveToDeleteTitle = liveToDelete?.eventTitle;
    const liveToDeleteId = liveToDelete?.id;

    return (
      <Modal isOpen={this.state.shouldDeleteModal}>
        <div>
          <p>
            Are you sure you want to delete <strong>{liveToDeleteTitle}</strong>
          </p>
          <p>
            dynamo id <strong>{liveToDeleteId}</strong>
          </p>
        </div>
        <button
          style={{ backgroundColor: 'red' }}
          onClick={async () => {
            await this.delete();
            if (!this.state.alert.includes('error'))
              this.setState({ shouldDeleteModal: false });
          }}
        >
          DELETE
        </button>
        <button onClick={() => this.setState({ shouldDeleteModal: false })}>
          Cancel
        </button>
      </Modal>
    );
  }
  renderAlert() {
    return (
      <Modal isOpen={Boolean(this.state.alert)}>
        <div
          style={{
            padding: 16,
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
      <div className="LivestreamAdminContainer">
        {isSafari ? (
          <div>This page does not support Safari :(</div>
        ) : (
          <div style={{ overflowX: 'hidden' }}>
            <div className="videoSelectBox">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontFamily: 'Graphik Web',
                    flexDirection: 'row',
                    display: 'flex',
                    flex: 1,
                  }}
                >
                  Livestreams
                  {!this.state.loadAll ? (
                    <span
                      style={{
                        marginLeft: 16,
                        fontWeight: 400,
                        display: 'flex',
                        fontSize: 12,
                        alignItems: 'center',
                      }}
                    >
                      In the last 6 months
                    </span>
                  ) : null}
                  {this.state.isLoading ? (
                    <div
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        marginRight: 16,
                      }}
                    >
                      <Spinner size="sm" />
                    </div>
                  ) : null}
                </span>
                <label
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Load All
                  <input
                    onChange={() => {
                      this.setState(
                        { loadAll: !this.state.loadAll, isLoading: true },
                        this.listLivestreams
                      );
                    }}
                    style={{ marginLeft: 4, marginRight: 8 }}
                    checked={this.state.loadAll}
                    type="checkbox"
                  />
                </label>

                <button
                  type="button"
                  onClick={() =>
                    this.setState({
                      showModal: true,
                      editMode: false,
                      liveObject: liveInit,
                    })
                  }
                  style={{
                    backgroundColor: '#FFF',
                    border: '3px solid black',
                    fontSize: 12,
                    fontFamily: 'Graphik Web',
                    fontWeight: 700,
                    padding: 6,
                  }}
                >
                  <img
                    src="/static/svg/Plus-Expand.svg"
                    style={{ width: 15, height: 15, marginRight: 8 }}
                  />
                  Create
                </button>
              </div>
              <RenderLivestreams
                delete={(id) =>
                  this.setState({ shouldDeleteModal: true, toDelete: id })
                }
                livestreams={this.state.livestreamList}
                handleSelection={(id) => this.handleSelection(id)}
              ></RenderLivestreams>
            </div>
            <LivestreamModal
              editMode={this.state.editMode}
              liveObject={this.state.liveObject}
              toggleModal={() =>
                this.setState({ showModal: !this.state.showModal })
              }
              open={this.state.showModal}
            >
              {this.renderEditor()}
              {this.renderMenu()}
            </LivestreamModal>
            {this.renderShouldDelete()}
            {this.renderSectionModal()}
            {this.renderAlert()}
          </div>
        )}
      </div>
    );
  }
}
export default Index;
