import './MetaData.css'
import React from 'react';
import YoutubeComponent from './YoutubeComponent'
import MetaDataDetails from './MetaDataDetails'
import * as queries from '../../graphql/queries';
import { Modal, Button } from 'react-bootstrap';
import { API, graphqlOperation } from 'aws-amplify';
import * as MetaDataTypes from './MetaDataTypes'

function decodeHtml(html:any) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
interface Props{
  
}
interface State {
    isOpen:boolean,
    tableData:any,
    tableHeader:any,
    currentVideoListType:any,
    youtubeData:any,
    videoId:any,
    closeCaptions:any,
    closeCaptionItems:any,
    selectedCaption:any,
    metaDataPopup:boolean,
    currentYoutubeVideoData:any,
    videoTypes:any
}
export default class MetaData extends React.Component<Props, State>  {

    youtubePlaylistHeader = ["Thumb", "Title", "publishedAt", "Description"];
    youtubePlaylistItemsHeader = ["Thumb", "Title", "publishedAt", "Description"];


    constructor(props:Props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.loadCaptionItem = this.loadCaptionItem.bind(this);
        this.state = {
            isOpen: false,
            currentVideoListType: "loading",
            tableHeader: [],
            tableData: [],
            youtubeData: null,
            videoId: "vuFBqx6lsos",
            closeCaptions: [],
            closeCaptionItems: [],
            selectedCaption: null,
            metaDataPopup: false,
            currentYoutubeVideoData: null,
            videoTypes: []
        };
        this.reloadPlaylists();
    }

    reloadPlaylists() {
        this.setState(
            {
                tableData: [],
                youtubeData: null
            });
        this.loadPlaylists("");
    }
    loadPlaylists(nextPageToken:any) {


        const playlists = API.graphql(graphqlOperation(queries.getYoutubePlaylist, { nextPageToken: nextPageToken }));
        playlists.then((json:any) => {

            //if (this.state.currentVideoListType === "youtubePlaylist") {
            this.setPlaylists(json);
            console.log(json)
            this.loadPlaylists(json.data.getYoutubePlaylist.nextPageToken)
            // }
            this.setState({
                currentVideoListType: "youtubePlaylist"
            });


        }).catch((err:any) => {
            console.log(err);
        });


    }
    setPlaylists(json:any) {

        console.log("setPlaylists: " + json);
        this.setState(
            {
                tableData: this.state.tableData.concat(json.data.getYoutubePlaylist.items),

                tableHeader: this.youtubePlaylistHeader,
                youtubeData: this.state.tableData.concat(json.data.getYoutubePlaylist.items)
            }
        )
    }

    setPlaylistItems(json:any) {
        console.log(json);
        this.setState(
            {
                tableData: json.data.getYoutubePlaylistItems.items,
                currentVideoListType: "youtubePlaylistItems",
                tableHeader: this.youtubePlaylistItemsHeader
            });
    }
    setCaptionItems(json:any) {
        console.log(json);
        if (json.data.getYoutubeCaptionlist.items.length > 0) {
            this.setState(
                {
                    selectedCaption: this.state.videoId + "|" + json.data.getYoutubeCaptionlist.items[0].snippet.trackKind + "|" + json.data.getYoutubeCaptionlist.items[0].snippet.language + "|" + json.data.getYoutubeCaptionlist.items[0].snippet.name,
                    closeCaptionItems: json.data.getYoutubeCaptionlist.items
                });
            this.loadCaption(this.state.videoId + "|" + json.data.getYoutubeCaptionlist.items[0].snippet.trackKind + "|" + json.data.getYoutubeCaptionlist.items[0].snippet.language + "|" + json.data.getYoutubeCaptionlist.items[0].snippet.name);
        }
    }
    setCaption(json:any) {
        console.log("SetCaption: " + json)
        if (json.data.downloadYoutubeCaption.transcript != null) {
            this.setState({
                closeCaptions: json.data.downloadYoutubeCaption.transcript.text
            });
        } else {
            this.setState({
                closeCaptions: [{ content: "none" }]
            });
        }
    }

    loadCaptionItem(event:any) {
        console.log("loadCaptionItem: " + event);
        this.loadCaption(event.target.value);
    }
    loadCaption(captionData:any) {
        console.log("loadCaption:" + captionData);
        var values = captionData.split("|");
        var name = values[3] == null ? "" : values[3];
        const captionItem = API.graphql(graphqlOperation(queries.downloadYoutubeCaption, { videoId: values[0], tlang: values[2], trackKind: values[1], name: name }));
        captionItem.then((json:any) => {
            console.log("Success queries.downloadYoutubeCaption:" + json)
            this.setCaption(json);

        }).catch((err:any) => {
            console.log("Error queries.downloadYoutubeCaption:" + err);
        });

    }

    loadPlaylist(data:any) {
        console.log("loadPlaylist: " + data.id);
        this.clearSelected();
        data.selected = "selected";
        const playlistItems = API.graphql(graphqlOperation(queries.getYoutubePlaylistItems, { playlistId: data.id }));
        playlistItems.then((json:any) => {
            console.log("Success queries.getYoutubePlaylistItems: " + json)
            this.setPlaylistItems(json);
        }).catch((err:any) => {
            console.log("Error queries.getYoutubePlaylistItems: " + err)
        });
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    clearSelected() {
        this.state.tableData.forEach((value:any) => {
            value.selected = "";
        });
    }
    loadVideo(data:any) {
        console.log(data.contentDetails.videoId);
        this.clearSelected();
        data.selected = "selected";
        this.setState(
            {
                videoId: data.contentDetails.videoId,
                currentYoutubeVideoData: data,

            });
        const closedCaptionList = API.graphql(graphqlOperation(queries.getYoutubeCaptionlist, { videoId: data.contentDetails.videoId }));
        closedCaptionList.then((json:any) => {
            this.setCaptionItems(json);
        });
    }
    addMetaData() {
        this.setState({
            metaDataPopup: true
        });
    }
    handleMetaDataClose(e:any) {
        if (e != null)
            this.setState({
                videoTypes: this.state.videoTypes.concat(e.target.value),
                metaDataPopup: false
            });
        else
            this.setState({
                metaDataPopup: false
            });
    }
    VideoListTable() {
        if (this.state.currentVideoListType === "youtubePlaylist") {
            return (
                <table id="videoListTable" className="sortable darkTable">
                    <thead>
                        <tr id="videoListTableHeadTR">
                            {this.state.tableHeader.map((value:any) => {
                                return <th>{value}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody id="videoListTableBody">
                        {this.state.tableData.map((value:any) => {
                            return (<tr className={value.selected} onClick={() => { this.loadPlaylist(value) }}>
                                <td><img alt="thumbnail" src={value.snippet.thumbnails.default.url}></img></td>
                                <td>{value.snippet.title}</td>
                                <td>{value.snippet.publishedAt}</td>
                                <td>{value.snippet.description}</td>

                            </tr>);
                        })}
                    </tbody>
                </table>
            );
        }
        else if (this.state.currentVideoListType === "youtubePlaylistItems") {
            return (
                <table id="videoListTable" className="sortable darkTable">
                    <thead>
                        <tr id="videoListTableHeadTR">
                            {this.state.tableHeader.map((value:any) => {
                                return <th>{value}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody id="videoListTableBody">
                        {this.state.tableData.map((value:any) => {
                            return (<tr className={value.selected} onClick={() => { this.loadVideo(value) }}>
                                <td><img alt="thumbnail" src={value.snippet.thumbnails.default.url}></img></td>
                                <td>{value.snippet.title}</td>
                                <td>{value.contentDetails.videoPublishedAt}</td>
                                <td>{value.snippet.description}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            );
        }
        else if (this.state.currentVideoListType === "loading") {
            return (
                <table id="videoListTable" className="sortable darkTable">
                    <thead>
                        <tr id="videoListTableHeadTR">Loading</tr>
                    </thead>
                    <tbody><tr>
                        <td>Loading</td>
                    </tr>
                    </tbody>
                </table>
            )
        }

    }
    goBack() {
        console.log("goBack()");
        this.reloadPlaylists()
    }
    render() {
        return (
            <div className="navbar-custom">

                <div className="menu">
                    <div>
                        <input type="text" id="searchInput" style={{ float:"left",backgroundImage: "url('/static/searchicon.png')" }} //onKeyUp={this.searchTable()} 
                        placeholder="Search.." />
                        <select id="listOfViews" style={{width:"100px"}} className="configure">
                            <option value="youtube">Youtube</option>
                        </select>
                        <div className="configure"><Button className="p-0 m-0" size="sm" variant="link" onClick={() => { this.goBack() }}>Back</Button></div>
                        <div className="configure"><Button className="p-0 m-0"  size="sm" variant="link">Refresh</Button></div>
                        <div className="configure"><Button className="p-0 m-0"  size="sm" variant="link">Configure</Button></div>
                        <div className="configure addVideo"><Button className="p-0 m-0"  size="sm" variant="link">+</Button></div>
                    </div>
                    <div className="tableFixHead" >
                        {this.VideoListTable()}
                    </div>
                </div>

                <div className="youtubeTable workArea">
                    <div className="mediaZone">
                        <div className="youtubeDiv">
                            <YoutubeComponent videoId={this.state.videoId}></YoutubeComponent>
                        </div>
                        <div className="closedCaptions">
                            <div className="closedCaptionDiv">
                                <select className="p-0" style={{ float: "right" }} onChange={this.loadCaptionItem}>
                                    {
                                        this.state.closeCaptionItems.map((value:any) => {
                                            return (<option selected={this.state.selectedCaption === this.state.videoId + "|" + value.snippet.trackKind + "|" + value.snippet.language}>{this.state.videoId}|{value.snippet.trackKind}|{value.snippet.language}|{value.snippet.name}</option>)
                                        })
                                    }
                                </select>
                                {
                                    this.state.closeCaptions.map((value:any) => {
                                        return (<div>{decodeHtml(value.content)}</div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="middleMenu">
                        <div className="middleMenuLeft">
                            <Button  className="p-0 m-0" size="sm" variant="link">Previous</Button>
                            <Button  className="p-0 m-0" size="sm" variant="link">Next</Button>
                        </div>
                        <div className="middleMenuRight">
                            <Button  className="p-0 m-0" size="sm" variant="link" onClick={() => { this.addMetaData() }}>Add Metadata</Button>
                        </div>
                    </div>

                </div>
                <MetaDataDetails currentYoutubeVideoData={this.state.currentYoutubeVideoData} videoTypes={this.state.videoTypes}></MetaDataDetails>


                <Modal show={this.state.metaDataPopup} onHide={() => { this.handleMetaDataClose(null) }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Metadata</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><div>Please select a type to add</div>
                        {
                            MetaDataTypes.constMetaDataTypes.map((item) => {
                                return (
                                    <Button onClick={(e:any) => { this.handleMetaDataClose(e) }} value={item.name}>{item.title}</Button>
                                );
                            })
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => { this.handleMetaDataClose(null) }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}
