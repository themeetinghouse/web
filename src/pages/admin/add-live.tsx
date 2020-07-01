import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { EmptyProps } from '../../utils';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify'
import { Modal } from 'reactstrap';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import "./add-live.scss"
import awsmobile from '../../aws-exports';
import isSafari from 'react-device-detect';
import moment from 'moment';

Amplify.configure(awsmobile);
const federated = {
    facebookAppId: '579712102531269'
};

const menuInit = [
    {
        title: 'Give',
        link: 'https://www.themeetinghouse.com/give',
        linkType: 'link',
    },
    {
        title: 'Music',
        link: 'http://media.themeetinghouse.com/podcast/handouts/Music.pdf',
        linkType: 'link',
    },
    {
        title: 'Connect',
        link: 'https://www.themeetinghouse.com/connect',
        linkType: 'link',
    },
    {
        title: 'Notes',
        link: '',
        linkType: 'notes',
    },
    {
        title: 'Kidmax',
        link: 'http://www.kidsandyouth.themeetinghouse.com/blog',
        linkType: 'link',
    },
]

const liveInit = {
    id: '',
    date: '',
    startTime: '06:00',
    videoStartTime: '09:45',
    endTime: '13:00',
    prerollYoutubeId: 'na1g4ht-yNs',
    liveYoutubeId: '',
    showChat: true,
    showKids: true,
    menu: menuInit,
    homepageLink: 'Live'
}

interface LiveMenu {
    [key: string]: any;
    title: string;
    link: string;
    linkType: string;
}

interface LiveObject {
    [key: string]: any;
    id: string;
    date: string;
    startTime: string;
    videoStartTime: string;
    endTime: string;
    prerollYoutubeId: string;
    liveYoutubeId: string;
    showChat: boolean;
    showKids: boolean;
    menu: LiveMenu[];
    homepageLink: string;
}

interface State {
    toDelete: string;
    editMode: boolean;
    notSundayWarning: string;
    alert: string;
    livestreamList: LiveObject[];
    liveObject: LiveObject;
}

class Index extends React.Component<EmptyProps, State> {
    constructor(props: EmptyProps) {
        super(props)
        this.state = {
            toDelete: '',
            editMode: false,
            notSundayWarning: '',
            alert: '',
            livestreamList: [],
            liveObject: liveInit
        }
        this.listLivestreams(null)
    }


    async listLivestreams(nextToken: any): Promise<void> {
        try {
            const listLivestreams: any = await API.graphql({
                query: queries.listLivestreams,
                variables: { nextToken: nextToken, limit: 200 },
                authMode: GRAPHQL_AUTH_MODE.API_KEY
            });
            console.log({ "Success queries.listCustomPlaylist": listLivestreams })
            this.setState({
                livestreamList: this.state.livestreamList.concat(listLivestreams.data.listLivestreams.items).sort((a: any, b: any) => this.sortByDate(a, b))
            })
            if (listLivestreams.data.listLivestreams.nextToken != null)
                this.listLivestreams(listLivestreams.data.listLivestreams.nextToken)
        } catch (e) {
            console.error(e)
        }
    }

    sortByDate(a: any, b: any): number {
        const nameA = a.date.toUpperCase();
        const nameB = b.date.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }

    handleSelection(id: string) {
        const temp = this.state.livestreamList.filter(item => item.id === id)[0]
        this.setState({ liveObject: temp })
        this.setState({ editMode: true })
    }

    renderLivestreams() {
        return (
            <table className="divTable">
                <thead>
                    <tr className="headRow">
                        <td className="divCell" key={"id"}>ID</td>
                        <td className="divCell" key={"date"}>Date</td>
                        <td className="divCell" key={"startTime"}>Start Time</td>
                        <td className="divCell" key={"videoStartTime"}>Video Start Time</td>
                        <td className="divCell" key={"endTime"}>End Time</td>
                        <td className="divCell" key={"prerollYoutubeId"}>Preroll Youtube Id</td>
                        <td className="divCell" key={"liveYoutubeId"}>Live Youtube Id</td>
                        <td className="divCell" key={"homepageLink"}>Homepage Link</td>
                        <td className="divCell" key={"showChat"}>showChat</td>
                        <td className="divCell" key={"showKids"}>showKids</td>

                    </tr>
                </thead>
                <tbody>
                    {this.state.livestreamList.map((livestream: LiveObject) => {
                        return (
                            <tr key={livestream.id} className="divRow" onClick={() => this.handleSelection(livestream.id)}>
                                <td className="divCell" key={"id"}>{livestream.id}</td>
                                <td className="divCell" key={"date"}>{livestream.date}</td>
                                <td className="divCell" key={"startTime"}>{livestream.startTime}</td>
                                <td className="divCell" key={"videoStartTime"}>{livestream.videoStartTime}</td>
                                <td className="divCell" key={"endTime"}>{livestream.endTime}</td>
                                <td className="divCell" key={"prerollYoutubeId"}>{livestream.prerollYoutubeId}</td>
                                <td className="divCell" key={"liveYoutubeId"}>{livestream.liveYoutubeId}</td>
                                <td className="divCell" key={"homepageLink"}>{livestream.homepageLink}</td>
                                <td className="divCell" key={"showChat"}>{livestream.showChat.toString()}</td>
                                <td className="divCell" key={"showKids"}>{livestream.showKids.toString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    validate(): boolean {

        let test = true;

        this.state.liveObject.menu.forEach(menuItem => {
            if (menuItem.linkType === 'link' && (menuItem.link === '' || menuItem.title === '')) {
                this.setState({ alert: 'error: linkType \'link\' need a valid link and title' })
                test = false
            }

            if (menuItem.title === '') {
                this.setState({ alert: 'error: menu titles cannot be empty' })
                test = false
            }

            if (menuItem.linkType !== 'notes' && menuItem.linkType !== 'link') {
                this.setState({ alert: `error: invalid linkType ${menuItem.linkType}` })
                test = false
            }
        })

        if (this.state.liveObject.endTime < this.state.liveObject.videoStartTime) {
            this.setState({ alert: 'error: endTime is before videoStartTime' })
            test = false
        }

        if (this.state.liveObject.endTime < this.state.liveObject.startTime) {
            this.setState({ alert: 'error: endTime is before startTime' })
            test = false
        }

        if (this.state.liveObject.videoStartTime < this.state.liveObject.startTime) {
            this.setState({ alert: 'error: videoStartTime is before startTime' })
            test = false
        }

        this.state.livestreamList.forEach(item => {
            if (item.date === this.state.liveObject.date && item.id !== this.state.liveObject.id) {
                if (item.startTime <= this.state.liveObject.startTime && item.endTime >= this.state.liveObject.startTime) {
                    this.setState({ alert: `error: live event overlaps with ${item.id}` })
                    test = false
                }
                if (item.startTime <= this.state.liveObject.endTime && item.endTime >= this.state.liveObject.endTime) {
                    this.setState({ alert: `error: live event overlaps with ${item.id}` })
                    test = false
                }
            }
        })

        if (this.state.liveObject.homepageLink.length > 12) {
            this.setState({ alert: 'error: hompage link cannot be longer than 12 characters' })
            test = false
        }

        return test
    }

    submit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (this.validate()) {
            this.save()
        }
    }

    async save(): Promise<void> {
        if (this.state.editMode) {
            try {
                const temp = this.state.liveObject
                delete temp['createdAt']
                delete temp['updatedAt']

                const response: any = await API.graphql({
                    query: mutations.updateLivestream,
                    variables: { input: temp },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                this.setState({ alert: 'updated: ' + response.data.updateLivestream.id })
            } catch (e) {
                console.error(e)
            }
        } else {
            try {
                const response: any = await API.graphql({
                    query: mutations.createLivestream,
                    variables: { input: this.state.liveObject },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                this.setState({ alert: 'created: ' + response.data.createLivestream.id })
            } catch (e) {
                console.error(e)
            }
        }
    }

    sundayCheck(field: string) {
        if (field === 'date' && moment(this.state.liveObject.date).day() !== 0) {
            this.setState({ notSundayWarning: 'not a Sunday' })
        } else if (field === 'date') {
            this.setState({ notSundayWarning: '' })
        }
    }

    handleChange(field: string, data: string | boolean | LiveMenu[]): void {
        const temp = this.state.liveObject
        temp[field] = data;
        this.setState({ liveObject: temp })
        temp['id'] = this.state.liveObject.homepageLink + '-' + this.state.liveObject.date + '-' + this.state.liveObject.liveYoutubeId
        this.setState({ liveObject: temp })
        this.sundayCheck(field)
    }

    handleMenuChange(index: number, field: string, data: string): void {
        const temp = this.state.liveObject
        temp.menu[index][field] = data;
        this.setState({ liveObject: temp })
    }

    deleteMenuItem(): void {
        const temp = this.state.liveObject.menu
        temp.pop()
        this.handleChange('menu', temp)
    }

    addMenuItem(): void {
        const temp = this.state.liveObject.menu
        temp.push({ title: '', link: '', linkType: '' })
        this.handleChange('menu', temp)
    }

    async delete() {
        if (this.state.toDelete !== '') {
            try {
                const response: any = await API.graphql({
                    query: mutations.deleteLivestream,
                    variables: { input: { id: this.state.toDelete } },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                this.setState({ alert: 'deleted: ' + response.data.deleteLivestream.id, toDelete: '' })
            } catch (e) {
                console.error(e)
            }
        } else {
            this.setState({ alert: 'error: id required to delete' })
        }
    }

    renderDelete() {
        return (
            <div>
                <input placeholder="enter id..." type="text" style={{ width: 300 }} value={this.state.toDelete} onChange={(e) => this.setState({ toDelete: e.target.value })}></input>
                <button style={{ border: 0, background: 'orange' }} onClick={() => this.delete()} >DELETE</button>
            </div>
        )
    }

    renderMenuEditor(menuItem: LiveMenu, index: number) {
        return (
            <div key={index}>
                <label>Menu item {index + 1}</label>
                <input className="menu-input" type="text" value={menuItem.title} onChange={(e) => this.handleMenuChange(index, 'title', e.target.value)}></input>
                <input className="menu-input" type="text" value={menuItem.link} onChange={(e) => this.handleMenuChange(index, 'link', e.target.value)}></input>
                <input className="menu-input" type="text" value={menuItem.linkType} onChange={(e) => this.handleMenuChange(index, 'linkType', e.target.value)}></input>
            </div>
        )
    }

    renderEditor() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <form style={{ display: 'flex', flexDirection: 'row', width: 850 }} onSubmit={(e) => this.submit(e)}>
                    <div style={{ flex: 1 }}>
                        <label>Date <span style={{ color: 'red' }}>{this.state.notSundayWarning}</span></label><br />
                        <input className="livestream-input" type="date" required value={this.state.liveObject.date} onChange={(e) => this.handleChange('date', e.target.value)}></input>
                        <label>startTime <span style={{ cursor: 'pointer' }} onClick={() => this.setState({ alert: 'When the link appears on the homepage' })}>ⓘ</span></label><br />
                        <input className="livestream-input" type="time" required value={this.state.liveObject.startTime} onChange={(e) => this.handleChange('startTime', e.target.value)}></input>
                        <label>videoStartTime <span style={{ cursor: 'pointer' }} onClick={() => this.setState({ alert: 'When the video is scheduled to start' })}>ⓘ</span></label><br />
                        <input className="livestream-input" type="time" required value={this.state.liveObject.videoStartTime} onChange={(e) => this.handleChange('videoStartTime', e.target.value)}></input>
                        <label>endTime <span style={{ cursor: 'pointer' }} onClick={() => this.setState({ alert: 'When the link disappears from the homepage' })}>ⓘ</span></label><br />
                        <input className="livestream-input" type="time" required value={this.state.liveObject.endTime} onChange={(e) => this.handleChange('endTime', e.target.value)}></input>
                        <button type="submit">Save Livestream</button><br />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label>prerollYoutubeID</label><br />
                        <input className="livestream-input" type="text" value={this.state.liveObject.prerollYoutubeId} onChange={(e) => this.handleChange('prerollYoutubeId', e.target.value)}></input>
                        <label>liveYoutubeId</label><br />
                        <input className="livestream-input" type="text" required value={this.state.liveObject.liveYoutubeId} onChange={(e) => this.handleChange('liveYoutubeId', e.target.value)}></input>
                        <label>homepageLink</label><br />
                        <input className="livestream-input" type="text" required value={this.state.liveObject.homepageLink} onChange={(e) => this.handleChange('homepageLink', e.target.value)}></input>

                        <input type="checkbox" checked={this.state.liveObject.showChat} onChange={() => this.handleChange('showChat', !this.state.liveObject.showChat)}></input>
                        <label> show Chat</label><br />
                        <input type="checkbox" checked={this.state.liveObject.showKids} onChange={() => this.handleChange('showKids', !this.state.liveObject.showKids)}></input>
                        <label> show Kids</label><br />
                    </div>
                    <div style={{ flex: 2 }}>
                        {this.state.liveObject.menu.map((item, index) => this.renderMenuEditor(item, index))}
                    </div>
                </form>
                <button style={{ background: 'green', border: 0, height: 50 }} onClick={() => this.addMenuItem()}>+ menu item</button>
                <button style={{ background: 'red', border: 0, height: 50 }} onClick={() => this.deleteMenuItem()}>- menu item</button>
            </div>
        )
    }
    renderAlert() {
        return (
            <Modal isOpen={Boolean(this.state.alert)}>
                <div>{this.state.alert}</div>
                <button onClick={() => this.setState({ alert: '' })}>OK</button>
            </Modal>
        )
    }
    render() {
        return (
            <AmplifyAuthenticator federated={federated}>
                <div>
                    <AdminMenu></AdminMenu>
                    {isSafari ?
                        <div>This page does not support Safari :(</div>
                        : <div style={{ overflowX: 'hidden' }}>
                            <div className="videoSelectBox">
                                {this.renderLivestreams()}
                                {this.renderDelete()}
                            </div>
                            {this.renderEditor()}
                            {this.renderAlert()}
                        </div>
                    }
                </div >
            </AmplifyAuthenticator>
        );
    }
}
export default Index;  