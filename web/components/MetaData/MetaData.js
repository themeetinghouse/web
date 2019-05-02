import './MetaData.css'
import React, { Container } from 'react';
import YoutubeComponent from './YoutubeComponent'
import MetaDataDetails from './MetaDataDetails'
import ReactDOM from 'react-dom';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import { Modal, Header, Footer, Button } from 'react-bootstrap';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as MetaDataTypes from './MetaDataTypes'

//import Background from ''';



function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
export default class MetaData extends React.Component {

    youtubePlaylistHeader = ["Thumb", "Title", "publishedAt", "Description"];
    youtubePlaylistItemsHeader = ["Thumb", "Title", "publishedAt", "Description"];


    constructor(props) {
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
    loadPlaylists(nextPageToken) {
        this.state.currentVideoListType = "youtubePlaylist";

        const playlists = API.graphql(graphqlOperation(queries.getYoutubePlaylist, { nextPageToken: nextPageToken }));
        playlists.then(json => {
            if (this.state.currentVideoListType == "youtubePlaylist") {
                this.setPlaylists(json);
                this.loadPlaylists(json.data.getYoutubePlaylist.nextPageToken)
            }
        }).catch(err => {
            console.log(err);
        });
    }
    setPlaylists(json) {

        console.log("setPlaylists: " + json);
        this.setState(
            {
                tableData: this.state.tableData.concat(json.data.getYoutubePlaylist.items),

                tableHeader: this.youtubePlaylistHeader,
                youtubeData: this.state.tableData.concat(json.data.getYoutubePlaylist.items)
            }
        )
    }

    setPlaylistItems(json) {
        console.log(json);
        this.setState(
            {
                tableData: json.data.getYoutubePlaylistItems.items,
                currentVideoListType: "youtubePlaylistItems",
                tableHeader: this.youtubePlaylistItemsHeader
            });
    }
    setCaptionItems(json) {
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
    setCaption(json) {
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

    loadCaptionItem(event) {
        console.log("loadCaptionItem: " + event);
        this.loadCaption(event.target.value);
    }
    loadCaption(captionData) {
        console.log("loadCaption:" + captionData);
        var values = captionData.split("|");
        var name = values[3] == null ? "" : values[3];
        const captionItem = API.graphql(graphqlOperation(queries.downloadYoutubeCaption, { videoId: values[0], tlang: values[2], trackKind: values[1], name: name }));
        captionItem.then(json => {
            console.log("Success queries.downloadYoutubeCaption:" + json)
            this.setCaption(json);

        }).catch(err => {
            console.log("Error queries.downloadYoutubeCaption:" + err);
        });

    }

    loadPlaylist(data) {
        console.log("loadPlaylist: " + data.id);
        this.clearSelected();
        data.selected = "selected";
        const playlistItems = API.graphql(graphqlOperation(queries.getYoutubePlaylistItems, { playlistId: data.id }));
        playlistItems.then(json => {
            console.log("Success queries.getYoutubePlaylistItems: " + json)
            this.setPlaylistItems(json);
        }).catch(err => {
            console.log("Error queries.getYoutubePlaylistItems: " + err)
        });
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    clearSelected() {
        this.state.tableData.map((value, index) => {
            value.selected = "";
        });
    }
    loadVideo(data) {
        console.log(data.contentDetails.videoId);
        this.clearSelected();
        data.selected = "selected";
        this.setState(
            {
                videoId: data.contentDetails.videoId,
                currentYoutubeVideoData: data,

            });
        const closedCaptionList = API.graphql(graphqlOperation(queries.getYoutubeCaptionlist, { videoId: data.contentDetails.videoId }));
        closedCaptionList.then(json => {
            this.setCaptionItems(json);
        });
    }
    addMetaData() {
        this.setState({
            metaDataPopup: true
        });
    }
    handleMetaDataClose(e) {
        if (e!=null)
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
        if (this.state.currentVideoListType == "youtubePlaylist") {
            return (
                <table id="videoListTable" className="sortable darkTable">
                    <thead>
                        <tr id="videoListTableHeadTR">
                            {this.state.tableHeader.map((value, index) => {
                                return <th>{value}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody id="videoListTableBody">
                        {this.state.tableData.map((value, index) => {
                            return (<tr className={value.selected} onClick={() => { this.loadPlaylist(value) }}>
                                <td><img src={value.snippet.thumbnails.default.url}></img></td>
                                <td>{value.snippet.title}</td>
                                <td>{value.snippet.publishedAt}</td>
                                <td>{value.snippet.description}</td>

                            </tr>);
                        })}
                    </tbody>
                </table>
            );
        }
        else if (this.state.currentVideoListType == "youtubePlaylistItems") {
            return (
                <table id="videoListTable" className="sortable darkTable">
                    <thead>
                        <tr id="videoListTableHeadTR">
                            {this.state.tableHeader.map((value, index) => {
                                return <th>{value}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody id="videoListTableBody">
                        {this.state.tableData.map((value, index) => {
                            return (<tr className={value.selected} onClick={() => { this.loadVideo(value) }}>
                                <td><img src={value.snippet.thumbnails.default.url}></img></td>
                                <td>{value.snippet.title}</td>
                                <td>{value.contentDetails.videoPublishedAt}</td>
                                <td>{value.snippet.description}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            );
        }
        else if (this.state.currentVideoListType == "loading") {
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
                        <input type="text" id="searchInput" style={{ backgroundImage: "url(" + "'./static/searchicon.png'" + ")" }} onkeyup="searchTable()" placeholder="Search.." />
                        <select id="listOfViews" className="configure">
                            <option value="youtube">Youtube</option>
                        </select>
                        <div className="configure"><a onClick={(e) => { this.goBack() }} href="#">Back</a></div>
                        <div className="configure"><a href="#">Refresh</a></div>
                        <div className="configure"><a href="#">Configure</a></div>
                        <div className="configure addVideo">+</div>
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
                                <select style={{ float: "right" }} onChange={this.loadCaptionItem}>
                                    {
                                        this.state.closeCaptionItems.map((value, index) => {

                                            return (<option selected={this.state.selectedCaption == this.state.videoId + "|" + value.snippet.trackKind + "|" + value.snippet.language}>{this.state.videoId}|{value.snippet.trackKind}|{value.snippet.language}|{value.snippet.name}</option>)
                                        })
                                    }
                                </select>

                                {
                                    this.state.closeCaptions.map((value, index) => {
                                        return (<div>{decodeHtml(value.content)}</div>)
                                    })

                                }
                            </div>
                        </div>
                    </div>
                    <div className="middleMenu">
                        <div className="middleMenuLeft">
                            <a href="">Previous</a>
                            <a href="">Next</a>
                        </div>
                        <div className="middleMenuRight">
                            <a href="#" onClick={() => { this.addMetaData() }}>Add Metadata</a>
                        </div>
                    </div>

                </div>
                <MetaDataDetails currentYoutubeVideoData={this.state.currentYoutubeVideoData} videoTypes={this.state.videoTypes}></MetaDataDetails>


                <Modal show={this.state.metaDataPopup} onHide={() => { this.handleMetaDataClose() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Metadata</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><div>Please select a type to add</div>
                        {
                            MetaDataTypes.constMetaDataTypes.map((item) => {
                                return (
                                    <Button onClick={(e) => { this.handleMetaDataClose(e) }} value={item.name}>{item.title}</Button>
                                );
                            })
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => { this.handleMetaDataClose() }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
    }
}
