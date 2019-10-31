import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as customQueries from '../../graphql-custom/customQueries';

//import * as queries from '../../graphql/queries';
//import * as mutations from '../../graphql/mutations';
//{ API, graphqlOperation } 
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';

import Amplify from 'aws-amplify';
import { API } from 'aws-amplify'
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import "./import-video.scss"
import awsmobile from '../../aws-exports';
//import { Button } from 'reactstrap';
//import ImportYoutube from '../../components/ImportYoutube/ImportYoutube'
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
    authState?: any
}
interface State {
    videoTypes: any
    selectedVideoType: any
    selectedVideo: any
    videoList: any
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
            selectedVideoType: "unlisted",
            selectedVideo: null,
            videoList: []
        }
        fetch('../static/data/import-video.json').then(function (response) {
            return response.json();
        })
            .then((myJson) => {
                console.log(myJson)
                this.setState({ videoTypes: myJson })
            }).catch((e) => { console.log({ "Exception: ": e }) })

    }
    componentDidMount() {
        this.getVideos(null)
    }
    getVideos(nextToken: any) {
        const listVideos = API.graphql({
            query: customQueries.getVideoByVideoType,
            variables: { nextToken: nextToken, sortDirection: "DESC", limit: 20, videoTypes: this.state.selectedVideoType, publishedDate: { lt: "a" } },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        listVideos.then((json: any) => {
            console.log({ "Success queries.listVideos: ": json });
            this.setState({
                videoList: this.state.videoList.concat(json.data.getVideoByVideoType.items)
            })
            if (json.data.getVideoByVideoType.nextToken != null)
                this.getVideos(json.data.getVideoByVideoType.nextToken)

        }).catch((e: any) => { console.log(e) })
    }
    componentDidUpdate(prevProps: Props, prevState: State) {
        if (this.state.selectedVideoType !== prevState.selectedVideoType)
            this.getVideos(null)
    }
    renderYoutube() {
        return (
            <div className="youtubeBox">
                {this.state.selectedVideo ?

                    <iframe className="youtubeFrame" title="Youtube" src={"https://www.youtube.com/embed/" + this.state.selectedVideo.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    : null}
            </div>
        );

    }
    renderHeader() {
        return (
            <div className="header">
                <button className="adminButton">Add All New</button>
                <button className="adminButton">Add Unlisted</button>
                <select className="dropdown" onChange={(e: any) => { this.setState({ selectedVideo: null, videoList: [], selectedVideoType: e.target.value }) }}>
                    {
                        this.state.videoTypes.map((item: any) => {
                            return (<option key={item.id} value={item.id}>{item.name}</option>)
                        })

                    }
                </select>
            </div>
        )
    }
    renderVideos() {
        let z = this.state.videoTypes.filter((i: any) => i.id === this.state.selectedVideoType)[0]
        return (
            <table className="divTable">
                <thead>
                    <tr className="headRow">

                        {z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInTable).map((item: any) => {
                            return (<td className="divCell" key={item.id}>{item.name}</td>)
                        }) : null : null
                        }

                    </tr>
                </thead>
                <tbody>
                    {this.state.videoList.map((video: any) => {

                        return (
                            <tr key={video.id} className="divRow" onClick={(i: any) => { this.setState({ selectedVideo: video }) }}>
                                {z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInTable).map((item: any) => {
                                    return (<td className="divCell" key={item.id}>{video[item.id]}</td>)
                                }) : null : null
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    renderVideoEditor() {
        let z = this.state.videoTypes.filter((i: any) => i.id === this.state.selectedVideoType)[0]

        return (
            <table className="divTable">
                <tbody>
                    {this.state.selectedVideo ? z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInEditor).map((item: any) => {
                        return (<tr key={item.id} className="headRow">
                            <td className="divCell">{item.name}</td>
                            <td className="divCellEditor">
                                {item.readOnly ?
                                    this.state.selectedVideo[item.id]
                                    :item.type === "String" ?
                                        <input className="textEditor" type="text" value={this.state.selectedVideo[item.id]}></input> :
                                        this.state.selectedVideo[item.id]
                                }
                            </td>
                        </tr>)
                    }) : null : null : null
                    }
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <div>
                <AdminMenu></AdminMenu>
                {this.renderHeader()}
                <div className="videoSelectBox">
                    {this.renderVideos()}
                    {this.renderYoutube()}
                </div>
                {this.renderVideoEditor()}
            </div >
        );
    }
}
export default Index;  