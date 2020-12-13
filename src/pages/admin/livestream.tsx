import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { EmptyProps } from '../../utils';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import { Modal } from 'reactstrap';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import './livestream.scss';
import awsmobile from '../../aws-exports';
import isSafari from 'react-device-detect';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

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
  menu: menuInit,
  homepageLink: 'Live',
  zoom: [],
  eventTitle:"",
  externalEventUrl:""
};

interface LiveMenu {
  [key: string]: any;
  title: string;
  link: string;
  linkType: string;
}

interface ZoomItem {
  [key: string]: any;
  title: string;
  link: string;
}

interface LiveObject {
  [key: string]: any;
  id: string;
  date: string;
  startTime: string;
  videoStartTime: string;
  endTime: string;
  prerollYoutubeId?: string;
  liveYoutubeId?: string;
  showChat?: boolean;
  showKids?: boolean;
  menu?: LiveMenu[];
  homepageLink: string;
  zoom?: ZoomItem[];
  eventTitle: string;
  externalEventUrl: string;
}

interface State {
  toDelete: string;
  editMode: boolean;
  notSundayWarning: string;
  alert: string;
  livestreamList: LiveObject[];
  liveObject: LiveObject;
  customEvent:boolean;
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
      liveObject: liveInit,
      customEvent:false
    };
    this.listLivestreams();
  }

  defaultAfterPartyMenu() {
    return [
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
  }

  defaultMenu() {
    return [
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
  }

  async listLivestreams(): Promise<void> {
    try {
      const listLivestreams: any = await API.graphql({
        query: queries.listLivestreams,
        variables: { limit: 52 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      });
      console.log({ 'Success queries.listCustomPlaylist': listLivestreams });
      this.setState({
        livestreamList: this.state.livestreamList
          .concat(listLivestreams.data.listLivestreams.items)
          .sort((a: any, b: any) => this.sortByDate(a, b)),
      });
    } catch (e) {
      console.error(e);
    }
  }

  sortByDate(a: any, b: any): number {
    const nameA = a.date;
    const nameB = b.date;
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  }

  handleSelection(id: string) {
    const temp = this.state.livestreamList.filter((item) => item.id === id)[0];
    console.log(temp)
    if(temp.externalEventUrl !== null && temp.externalEventUrl !== "")
      this.setState({customEvent: true})
    else{
      this.setState({customEvent:false})
    }
    this.setState({ liveObject: temp });
    this.setState({ editMode: true });
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
              Homepage Link
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
          {this.state.livestreamList.map((livestream: LiveObject) => {
            return (
              <tr
                key={livestream.id}
                className="divRow"
                onClick={() => this.handleSelection(livestream.id)}
              >
                <td className="divCell" key={'id'}>
                  {livestream.id}
                </td>
                <td className="divCell" key={'date'}>
                  {livestream.date}
                </td>
                <td className="divCell" key={'startTime'}>
                  {livestream.startTime}
                </td>
                <td className="divCell" key={'videoStartTime'}>
                  {livestream.videoStartTime}
                </td>
                <td className="divCell" key={'endTime'}>
                  {livestream.endTime}
                </td>
                <td className="divCell" key={'prerollYoutubeId'}>
                  {livestream.prerollYoutubeId}
                </td>
                <td className="divCell" key={'liveYoutubeId'}>
                  {livestream.liveYoutubeId}
                </td>
                <td className="divCell" key={'homepageLink'}>
                  {livestream.homepageLink}
                </td>
                <td className="divCell" key={'showChat'}>
                  {livestream.showChat?.toString()}
                </td>
                <td className="divCell" key={'showKids'}>
                  {livestream.showKids?.toString()}
                </td>
                <td className="divCell" key={'externalEventUrl'}>
                {livestream.externalEventUrl}
                </td>
                <td className="divCell" key={'eventTitle'}>
                {livestream.eventTitle}
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
    if(this.state.liveObject.zoom)
    this.state.liveObject.zoom.forEach((zoomItem) => {
      if (zoomItem.title === '') {
        this.setState({ alert: 'error: zoom item titles cannot be empty' });
        test = false;
      }

      if (zoomItem.link === '') {
        this.setState({ alert: `error: zoom item link cannot be empty` });
        test = false;
      }
    });
    if(this.state.liveObject.menu)
    this.state.liveObject.menu.forEach((menuItem) => {
      if (menuItem.link === '') {
        this.setState({ alert: 'error: need a valid link' });
        test = false;
      }

      if (menuItem.title === '') {
        this.setState({ alert: 'error: menu titles cannot be empty' });
        test = false;
      }
    });

    if (this.state.liveObject.endTime < this.state.liveObject.videoStartTime) {
      this.setState({ alert: 'error: endTime is before videoStartTime' });
      test = false;
    }

    if (this.state.liveObject.endTime < this.state.liveObject.startTime) {
      this.setState({ alert: 'error: endTime is before startTime' });
      test = false;
    }

    if (
      this.state.liveObject.videoStartTime < this.state.liveObject.startTime
    ) {
      this.setState({ alert: 'error: videoStartTime is before startTime' });
      test = false;
    }

    this.state.livestreamList.forEach((item) => {
      if (
        item.date === this.state.liveObject.date &&
        item.id !== this.state.liveObject.id
      ) {
        if (
          item.startTime <= this.state.liveObject.startTime &&
          item.endTime >= this.state.liveObject.startTime
        ) {
          this.setState({
            alert: `error: live event overlaps with ${item.id}`,
          });
          test = false;
        }
        if (
          item.startTime <= this.state.liveObject.endTime &&
          item.endTime >= this.state.liveObject.endTime
        ) {
          this.setState({
            alert: `error: live event overlaps with ${item.id}`,
          });
          test = false;
        }
      }
    });

    if (
      this.state.liveObject.prerollYoutubeId === '' &&
      this.state.liveObject.startTime !== this.state.liveObject.videoStartTime
    ) {
      this.setState({
        alert:
          'error: startTime must equal videoStartTime if there is no preroll video',
      });
      test = false;
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
    if (this.state.editMode) {
      try {
        const temp = {...this.state.liveObject}
        if(this.state.customEvent){
          delete temp['showChat']
          delete temp['showKids']
          delete temp['zoom'];
          delete temp['liveYoutubeId']
          delete temp['prerollYoutubeId']
          delete temp['menu']
        }
        delete temp['createdAt'];
        delete temp['updatedAt'];
        console.log(temp)
        const response: any = await API.graphql({
          query: mutations.updateLivestream,
          variables: { input: temp },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        this.setState({
          alert: 'updated: ' + response.data.updateLivestream.id,
        });
        this.setState({liveObject:liveInit, editMode:false})
        this.setState({customEvent:false})

      } catch (e) {
        console.error(e);
      } 
    } else {
      const temp = {...this.state.liveObject}
      if(this.state.customEvent){
        delete temp['showChat']
        delete temp['showKids']
        delete temp['zoom'];
        delete temp['liveYoutubeId']
        delete temp['prerollYoutubeId']
        delete temp['menu']
        temp.id = `CustomEvent-${uuidv4()}`;
      }
      console.log(temp)
      try {
        const response: any = await API.graphql({
          query: mutations.createLivestream,
          variables: { input: temp },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        this.setState({
          alert: 'created: ' + response.data.createLivestream.id,
        });
        this.setState({liveObject:liveInit, editMode:false})
        this.setState({customEvent:false})

      } catch (e) {
        console.error(e);
      } 
    }
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
    data: string | boolean | LiveMenu[] | ZoomItem[]
  ): void {
    const temp = this.state.liveObject;
    temp[field] = data;
    this.setState({ liveObject: temp });
    if(!this.state.customEvent){
    temp['id'] =
      this.state.liveObject.homepageLink +
      '-' +
      this.state.liveObject.date +
      '-' +
      this.state.liveObject.liveYoutubeId;
    }
    this.setState({ liveObject: temp });
    if(!this.state.customEvent)
      this.sundayCheck(field);
    else{
      this.setState({notSundayWarning:''})
    }
  }

  handleMenuChange(
    index: number,
    field: 'link' | 'title' | 'linkType',
    data: string
  ): void {
    const temp = this.state.liveObject;
    if(temp.menu){
      temp.menu[index][field] = data;
      this.setState({ liveObject: temp });
    }
  }

  handleZoomChange(index: number, field: string, data: string): void {
    const temp = this.state.liveObject;
    if(temp.zoom){
      temp.zoom[index][field] = data;
      this.setState({ liveObject: temp });
    }

  }

  deleteZoomItem(): void {
    const temp = this.state.liveObject.zoom;
    if(temp) {
      temp.pop();
      this.handleChange('zoom', temp);
    }

  }

  addZoomItem(): void {
    const temp = this.state.liveObject.zoom;
    if(temp){
      temp.push({ title: '', link: '' });
      this.handleChange('zoom', temp);
    }

  }

  deleteMenuItem(): void {
    const temp = this.state.liveObject.menu;
    if(temp){
      temp.pop();
      this.handleChange('menu', temp);
    }

  }

  addMenuItem(): void {
    const temp = this.state.liveObject.menu;
    if(temp){
      temp.push({ title: '', link: '', linkType: 'link' });
      this.handleChange('menu', temp);
    }

  }

  async delete() {
    if (this.state.toDelete !== '') {
      try {
        const response: any = await API.graphql({
          query: mutations.deleteLivestream,
          variables: { input: { id: this.state.toDelete } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        this.setState({
          alert: 'deleted: ' + response.data.deleteLivestream.id,
          toDelete: '',
        });
        this.setState({liveObject:liveInit, customEvent:false})
      } catch (e) {
        console.error(e);
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
          style={{ border: 0, background: 'orange' }}
          onClick={() => this.delete()}
        >
          DELETE
        </button>
      </div>
    );
  }

  renderMenuEditor(menuItem: LiveMenu, index: number) {
    return (
      <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Menu item {index + 1}</label>
        <input
          placeholder="title"
          className="menu-input"
          type="text"
          value={menuItem.title}
          onChange={(e) =>
            this.handleMenuChange(index, 'title', e.target.value)
          }
        />
        <input
          placeholder="url"
          className="menu-input"
          type="text"
          value={menuItem.link}
          onChange={(e) => this.handleMenuChange(index, 'link', e.target.value)}
        />
        <input
          placeholder="type"
          className="menu-input"
          type="text"
          value={menuItem.linkType}
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
          <span style={{ color: 'red' }}>{zoomItem.title.length}/30</span>]
        </label>
        <input
          placeholder="title"
          maxLength={30}
          className="menu-input"
          type="text"
          value={zoomItem.title}
          onChange={(e) =>
            this.handleZoomChange(index, 'title', e.target.value)
          }
        ></input>
        <input
          placeholder="url"
          className="menu-input"
          type="text"
          value={zoomItem.link}
          onChange={(e) => this.handleZoomChange(index, 'link', e.target.value)}
        ></input>
      </div>
    );
  }

  renderEditor() {
    return (
      <>
      <button 
        style={{marginTop:"16px", marginBottom:"16px"}} onClick={()=> {
          this.setState({liveObject:liveInit})
         this.setState({customEvent: !this.state.customEvent, alert:'', notSundayWarning:''})
        }}>{!this.state.customEvent ? "Add Custom Event" : "Add Live Event"}</button>
        {this.state.customEvent ? 
          <form
          style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}
            onSubmit={(e) => this.submit(e)}
          >
            <div style={{width:"220px"}}>
            <label>
              Date{' '}
              <span style={{ color: 'red' }}>
                {this.state.notSundayWarning}
              </span>
              <input
                className="livestream-input"
                type="date"
                required
                value={this.state.liveObject.date}
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
                })}>
                ⓘ
              </span>
              <input
                className="livestream-input"
                type="time"
                required
                value={this.state.liveObject.startTime}
                onChange={(e) => this.handleChange('startTime', e.target.value)}
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
                value={this.state.liveObject.videoStartTime}
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
              value={this.state.liveObject.endTime}
              onChange={(e) => this.handleChange('endTime', e.target.value)}
            ></input>
          </label>
          <button type="submit">Save Livestream</button>
          </div>
          <div style={{width:"230px"}}>
          <label>
              homepageLink{' '}
              <span style={{ fontSize: 10 }}>
              ({this.state.liveObject.homepageLink.length}/12 characters)
              </span>
              <br />
              <input
              maxLength={12}
              className="livestream-input"
              type="text"
              required
              value={this.state.liveObject.homepageLink}
              onChange={(e) =>
                this.handleChange('homepageLink', e.target.value)
              }
              ></input>
          </label>
          <label>
              externalEventUrl{' '}
              <br />
              <input
              maxLength={300}
              className="livestream-input"
              type="text"
              required
              value={this.state.liveObject.externalEventUrl}
              onChange={(e) =>
                this.handleChange('externalEventUrl', e.target.value)
              }
              ></input>
          </label>
          <label style={{width:"230px"}}>
              eventTitle{' '}
              <br />
              <input
              maxLength={100}
              className="livestream-input"
              type="text"
              required
              value={this.state.liveObject.eventTitle}
              onChange={(e) =>
                this.handleChange('eventTitle', e.target.value)
              }
              ></input>
          </label>
          </div>
        </form>
      :
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
                value={this.state.liveObject.date}
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
                value={this.state.liveObject.startTime}
                onChange={(e) => this.handleChange('startTime', e.target.value)}
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
                value={this.state.liveObject.videoStartTime}
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
                value={this.state.liveObject.endTime}
                onChange={(e) => this.handleChange('endTime', e.target.value)}
              ></input>
            </label>
            <button type="submit">Save Livestream</button>
          </div>
          <div style={{ flex: 1 }}>
            <label>
              prerollYoutubeID
              <br />
              <input
                className="livestream-input"
                type="text"
                value={this.state.liveObject.prerollYoutubeId ?? ""}
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
                value={this.state.liveObject.liveYoutubeId ?? ""}
                onChange={(e) =>
                  this.handleChange('liveYoutubeId', e.target.value)
                }
              ></input>
            </label>
            <label>
              homepageLink{' '}
              <span style={{ fontSize: 10 }}>
                ({this.state.liveObject.homepageLink.length}/12 characters)
              </span>
              <br />
              <input
                maxLength={12}
                className="livestream-input"
                type="text"
                required
                value={this.state.liveObject.homepageLink}
                onChange={(e) =>
                  this.handleChange('homepageLink', e.target.value)
                }
              ></input>
            </label>
            <br />
            <label style={{width:"230px"}}>
              eventTitle{' '}
              <br />
              <input
              maxLength={100}
              className="livestream-input"
              type="text"
              required
              value={this.state.liveObject.eventTitle ?? ""}
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
                this.handleChange('showChat', !this.state.liveObject.showChat)
              }
            ></input>
            <label> show Chat</label>
            <input
              type="checkbox"
              checked={this.state.liveObject.showKids ?? false}
              onChange={() =>
                this.handleChange('showKids', !this.state.liveObject.showKids)
              }
            ></input>
            <label> show Kids</label>
          </div>
          <div style={{ flex: 2 }}>
            {this.state.liveObject.menu?.map((item, index) =>
              this.renderMenuEditor(item, index)
            )}
          </div>
          <div style={{ flex: 2 }}>
            {this.state.liveObject.zoom
              ? this.state.liveObject.zoom.map((item, index) =>
                  this.renderZoomEditor(item, index)
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
            onClick={() => this.handleChange('menu', this.defaultMenu())}
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
              this.handleChange('menu', this.defaultAfterPartyMenu())
            }
          >
            After Party Menu
          </button>
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
}
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
              <button onClick={() => console.log(this.state.liveObject)}>Check object state</button>
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
