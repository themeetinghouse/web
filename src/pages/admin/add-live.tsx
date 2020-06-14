import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';

import Amplify from 'aws-amplify';
import { API } from 'aws-amplify'
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import "./add-live.scss"
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
const federated = {
    google_client_id: '',
    facebook_app_id: '579712102531269',
    amazon_client_id: ''
};

const Index = () => (
    <div>
        <Authenticator federated={federated} hide={[Greetings, SignOut]}>
            <AuthIndexApp></AuthIndexApp>
        </Authenticator>
    </div>
)
interface Props {
    authState?: any;
}
interface State {
    videoTypes: any;
    selectedVideoType: any;
    selectedVideo: any;
    videoList: any;
    livestreamList: any;
    playlistsList: any;
    toSaveVideo: any;
    toSaveSeries: any;
    toSavePlaylist: any;
    showError: any;
    getVideosState: any;
    addToPlaylists: any;
    removeFromPlaylists: any;
    selectedPlaylist: any;
    toSaveLive: any;
    showChat: number;
    showKids: number;
}

class AuthIndexApp extends React.Component<Props, State> {

    render() {
        if (this.props.authState === "signedIn") {
            return (
                <div>
                    <IndexApp></IndexApp>
                </div>
            );
        } else {
            return null;
        }
    }
}
class IndexApp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            videoTypes: [],
            selectedVideoType: "",
            selectedVideo: null,
            videoList: [],
            livestreamList: [],
            playlistsList: [],
            toSaveVideo: {},
            toSaveSeries: { id: "", title: "", startDate: "", endDate: "", seriesType: "" },
            toSavePlaylist: { id: "", title: "" },
            showError: "",
            getVideosState: "Starting Up",
            addToPlaylists: [],
            removeFromPlaylists: [],
            selectedPlaylist: '',
            toSaveLive: {},
            showChat: 0,
            showKids: 0
        }
        this.listLivestreams(null)
    }

    async listLivestreams (nextToken: any): Promise<void> {
        try {
            const listLivestreams: any = await API.graphql({
                query: queries.listLivestreams ,
                variables: { nextToken: nextToken, limit: 200 },
                authMode: GRAPHQL_AUTH_MODE.API_KEY
            });
            console.log({ "Success queries.listLivestreams ": listLivestreams })
            this.setState({
                playlistsList: this.state.playlistsList.concat(listLivestreams.data.listLivestreams.items).sort((a: any, b: any) => this.sortById(a,b))
            })
            if (listLivestreams.data.listLivestreams.nextToken != null)
                this.listLivestreams(listLivestreams.data.listLivestreams.nextToken)
        } catch(e) {
            console.error(e)
        }
    } 

    sortById(a: any, b: any): number {
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

    renderLivestreams() {
        return (
            <table className="divTable">
                <thead>
                    <tr className="headRow">
                        <td className="divCell" key={"date"}>Date</td>
                        <td className="divCell" key={"startTime"}>Start Time</td>
                        <td className="divCell" key={"videoStartTime"}>Video Start Time</td>
                        <td className="divCell" key={"endTime"}>End Time</td>
                        <td className="divCell" key={"prerollYoutubeId"}>Preroll Youtube Id</td>
                        <td className="divCell" key={"liveYoutubeId"}>Live Youtube Id</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.livestreamList.map((stream: any) => {

                        return (
                            <tr key={stream.id} className="divRow" >

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    validate(): boolean {
        if (this.state.toSaveLive.date)
            return true
        return false
    }

    async save(): Promise<void> {
        if ((this.state.toSaveVideo.videoTypes === undefined && this.state.toSaveVideo.publishedDate !== undefined) || (this.state.toSaveVideo.videoTypes !== undefined && this.state.toSaveVideo.publishedDate === undefined)) {
            this.setState({ showError: "Must set both videoType and publishedDate" })
        }
        else {
            this.setState({ showError: "Saving" })
            console.log(this.state.toSaveVideo)
            try {
                const updateVideo: any = await API.graphql({
                    query: mutations.updateVideo,
                    variables: { input: this.state.toSaveVideo },
                    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
                });
                console.log({ "Success queries.updateVideo: ": updateVideo });
                this.setState({ showError: "Saved" })
            } catch(e) {
                if (!e.errors[0].message.includes('access'))
                    this.setState({showError: e.errors[0].message});
                else if (e.data)
                    this.setState({ showError: "Saved" })
                console.error(e)
            }
        }
    }

    writeField(field: any, value: any): void {
        const temp = this.state.toSaveLive
        if (field === "showChat" || field === "showKids")
            temp[field] = Boolean(value)
        else
            temp[field] = value

        this.setState({
            toSaveLive: temp
        })
        console.log(this.state.toSaveLive)
    }

    renderEditor() {
        return (
            <div style={{width: '50%'}}>
                <div className="divRow">Date</div>
                <div className="divRow">Start Time</div>
                <div className="divRow">Video Start Time</div>
                <div className="divRow">End Time</div>
                <div className="divRow">Preroll Youtube Id<input /></div>
                <div className="divRow">Live Youtube Id<input /></div>
                <div className="divRow">
                    Show Chat
                </div>
                <div className="divRow">
                    Show Kids Videos
                </div>
                <button onClick={(e: any) => this.save()}>Save</button>
            </div>
        )
    }
    render() {
        return (
            <div>
                <AdminMenu></AdminMenu>
                <div className="videoSelectBox">
                    {this.renderLivestreams()}
                </div>
                {this.renderEditor()}
                <div style={{ color: "#ff0000" }}>{this.state.showError}</div>
            </div >
        );
    }
}
export default Index;  