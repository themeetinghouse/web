import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import * as customQueries from '../../graphql-custom/customQueries';

import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
//{ API, graphqlOperation } 
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';

import Amplify from 'aws-amplify';
import { API } from 'aws-amplify'
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import "./import-video.scss"
import awsmobile from '../../aws-exports';
import uuid from 'uuid';
import ImportYoutube from '../../components/ImportYoutube/ImportYoutube'
import { Modal } from 'reactstrap';

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
    getVideoQueryId: any
    videoTypes: any
    selectedVideoType: any
    selectedVideo: any
    videoList: any
    seriesList: any
    toSave: any
    videoEditorValues: any
    showError: any
    showAddSeries: any
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
            showAddSeries: false,
            getVideoQueryId: null,
            videoTypes: [],
            selectedVideoType: "",
            selectedVideo: null,
            videoList: [],
            seriesList: [],
            toSave: {},
            videoEditorValues: {},
            showError: ""
        }
        fetch('../static/data/import-video.json').then(function (response) {
            return response.json();
        })
            .then((myJson) => {
                console.log(myJson)
                this.setState({ videoTypes: myJson })
            }).catch((e) => { console.log({ "Exception: ": e }) })
        this.listSeries(null)
    }
    componentDidMount() {
        this.getVideos(null)
    }
    importYoutube() {
        var z = new ImportYoutube()
        z.reloadPlaylists()

    }
    listSeries(nextToken: any) {
        var listSeries = API.graphql({
            query: queries.listSeriess,
            variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
            authMode: GRAPHQL_AUTH_MODE.API_KEY
        });

        listSeries.then((json: any) => {
            console.log({ "Success queries.listSeries: ": json });
            this.setState({
                seriesList: this.state.seriesList.concat(json.data.listSeriess.items)
            })
            if (json.data.listSeriess.nextToken != null)
                this.listSeries(json.data.listSeriess.nextToken)

        }).catch((e: any) => { console.log(e) })
    }
    getVideos(nextToken: any) {
        if (nextToken == null) {
            var queryId = uuid.v4()
            this.setState({ getVideoQueryId: queryId },
                () => { this.getVideosQID(nextToken, queryId) }
            )

        }
    }
    sortByPublished = (a: any, b: any) => {
        var z = new Date(a.Youtube.snippet.publishedAt)
        var y = new Date(b.Youtube.snippet.publishedAt)
        return z > y ? -1 : z < y ? 1 : 0;
    }
    getVideosQID(nextToken: any, queryId: any) {
        console.log(this.state.getVideoQueryId)
        if (queryId === this.state.getVideoQueryId) {
            var listVideos: any
            console.log(this.state.selectedVideoType)
            if (this.state.selectedVideoType === "") {
                listVideos = API.graphql({
                    query: customQueries.listVideos,
                    variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
                    authMode: GRAPHQL_AUTH_MODE.API_KEY
                });
                listVideos.then((json: any) => {
                    console.log({ "Success queries.listVideos: ": json });
                    if (queryId === this.state.getVideoQueryId) {
                        this.setState({
                            videoList: this.state.videoList.concat(json.data.listVideos.items.filter((a: any) => { return a.videoTypes == null })).sort(this.sortByPublished)
                        })
                        if (json.data.listVideos.nextToken != null)
                            this.getVideosQID(json.data.listVideos.nextToken, queryId)
                    }

                }).catch((e: any) => { console.log(e) })
            }
            else {
                listVideos = API.graphql({
                    query: customQueries.getVideoByVideoType,
                    variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200, videoTypes: this.state.selectedVideoType, publishedDate: { lt: "a" } },
                    authMode: GRAPHQL_AUTH_MODE.API_KEY
                });

                listVideos.then((json: any) => {
                    console.log({ "Success queries.listVideos: ": json });
                    if (queryId === this.state.getVideoQueryId) {
                        this.setState({
                            videoList: this.state.videoList.concat(json.data.getVideoByVideoType.items).sort(this.sortByPublished)
                        })
                        if (json.data.getVideoByVideoType.nextToken != null)
                            this.getVideosQID(json.data.getVideoByVideoType.nextToken, queryId)
                    }

                }).catch((e: any) => { console.log(e) })
            }
        }
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
                <button className="adminButton" onClick={() => this.importYoutube()}>Add All New</button>
                <button className="adminButton">Add Unlisted</button>
                <select className="dropdown" onChange={(e: any) => { this.setState({ selectedVideo: null, videoList: [], selectedVideoType: e.target.value }) }}>
                    {
                        this.state.videoTypes.map((item: any) => {
                            return (<option key={item.id} value={item.id}>{item.name}</option>)
                        })

                    }
                </select>
                <button className="adminButton" onClick={() => { this.setState({ showAddSeries: true }) }}>Add Series</button>
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
                            <tr key={video.id} className="divRow" onClick={(i: any) => { this.setState({ selectedVideo: null, toSave: null }, () => { this.setState({ selectedVideo: video, toSave: { id: video.id } }) }) }}>
                                {z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInTable).map((item: any) => {
                                    var list: any = item.id.split(".")
                                    var value: any = video
                                    for (var listItem of list) {
                                        value = value[listItem]
                                    }
                                    return (<td className="divCell" key={item.id}>{value}</td>)
                                }) : null : null
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
    save() {
        if ((this.state.toSave.videoTypes === undefined && this.state.toSave.publishedDate !== undefined) || (this.state.toSave.videoTypes !== undefined && this.state.toSave.publishedDate === undefined)) {
            this.setState({ showError: "Must set both videoType and publishedDate" })
        }
        else {
            this.setState({ showError: "" })
            console.log(this.state.toSave)
            var updateVideo = API.graphql({
                query: mutations.updateVideo,
                variables: { input: this.state.toSave },
                authMode: GRAPHQL_AUTH_MODE.API_KEY
            });
            updateVideo.then((json: any) => {
                console.log({ "Success queries.updateVideo: ": json });

            }).catch((e: any) => { console.log(e) })
        }


    }
    writeSeriesField(field: any, value: any) {
        var tempSelectedVideo = this.state.selectedVideo
        tempSelectedVideo[field] = value

        var toSave = this.state.toSave
        toSave[field] = value

        toSave["seriesTitle"] = this.state.seriesList.filter((item: any) => item.id == value)[0].title
        this.setState({
            selectedVideo: tempSelectedVideo,
            toSave: toSave
        })
    }
    writeField(field: any, value: any) {
        var tempSelectedVideo = this.state.selectedVideo
        tempSelectedVideo[field] = value

        var toSave = this.state.toSave
        toSave[field] = value
        this.setState({
            selectedVideo: tempSelectedVideo,
            toSave: toSave
        })
    }
    renderVideoEditor() {
        var z = this.state.videoTypes.filter((i: any) => i.id === this.state.selectedVideoType)[0]

        return (
            <div>
                <table className="divTable2">
                    <tbody>
                        {this.state.selectedVideo ? z != null ? z.columns != null ? z.columns.filter((i: any) => i.showInEditor).map((item: any) => {
                            var list: any = item.id.split(".")
                            var finalValue: any = this.state.selectedVideo
                            for (var listItem of list) {
                                finalValue = finalValue[listItem]
                            }

                            return (<tr key={item.id} className="headRow">
                                <td className="divCell">{item.name}</td>
                                <td className="divCellEditor">
                                    {item.readOnly ?
                                        item.type === "Date" ?
                                            finalValue.split("T")[0]
                                            : finalValue
                                        : item.type === "Int" ?
                                            <input className="textEditor" type="number" onChange={(e: any) => this.writeField(item.id, e.target.value)} value={finalValue}></input> :
                                            item.type === "Date" ?
                                                <input className="textEditor" type="text" onChange={(e: any) => this.writeField(item.id, e.target.value)} value={finalValue}></input> :
                                                item.type === "String" ?
                                                    <input className="textEditor" onChange={(e: any) => this.writeField(item.id, e.target.value)} type="text" value={finalValue}></input> :
                                                    item.type === "VideoType" ?
                                                        <select className="dropdown2" onChange={(e: any) => this.writeField(item.id, e.target.value)} >
                                                            {
                                                                this.state.videoTypes.map((item: any) => {
                                                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                                                })
                                                            }
                                                        </select> :
                                                        item.type === "Series" ?

                                                            <select className="dropdown2" onChange={(e: any) => this.writeSeriesField(item.id, e.target.value)} >
                                                                <option key="null" value="null">None Selected</option>

                                                                {
                                                                    this.state.seriesList.map((item: any) => {
                                                                        return (<option key={item.id} value={item.id}>{item.id}</option>)
                                                                    })
                                                                }
                                                            </select> :
                                                            finalValue
                                    }
                                </td>
                            </tr>)
                        }) : null : null : null
                        }
                    </tbody>
                </table >
                <button onClick={(e: any) => this.save()}>Save</button>
            </div>
        )
    }
    renderAddSeries() {
        return <Modal isOpen={this.state.showAddSeries}>
            <div>id: <input />
                Name: <input />
                Start Date: <input />
                End Date: <input />
                <select className="dropdown2"  >
                    {
                        this.state.videoTypes.map((item: any) => {
                            return (<option key={item.id} value={item.id}>{item.name}</option>)
                        })
                    }
                </select>
                <button onClick={() => { this.setState({ showAddSeries: false }) }}></button>
            </div>
        </Modal>
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
                {this.renderAddSeries()}
                <div style={{ color: "#ff0000" }}>{this.state.showError}</div>
            </div >
        );
    }
}
export default Index;  