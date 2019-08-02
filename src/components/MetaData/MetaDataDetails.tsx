import './MetaData.css'
import React from 'react';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import MetaBoxTeaching from './MetaBoxTeaching';
import { CardDeck } from 'react-bootstrap';
import * as MetaDataTypes from './MetaDataTypes'
interface Props{
    currentYoutubeVideoData:any,
    videoTypes:any
}
interface State {
    currentVideoData:any,
    videoId:any,
    currentYoutubeVideoData:any,
    videoTypes:any

}
export default class MetaDataDetails extends React.Component<Props, State>  {
    constructor(props:Props) {
        super(props);
        this.state = {
            currentYoutubeVideoData: null,
            currentVideoData: null,
            videoTypes: props.videoTypes,
            videoId:null
        }

    }
    search(str:string) {
        const searchVideo = API.graphql(graphqlOperation(queries.searchVideos, { filter: { description: { match: str } } }));
        searchVideo.then((json:any) => {
            console.log("Success queries.searchVideos: " + json)
        }).catch((err:any) => {
            console.log("Error queries.searchVideos: " + err);
        });

    }
    writeYoutube(vid1:any) {
        console.log("Write Youtube: " + vid1);
        const listVideo = API.graphql(graphqlOperation(queries.listVideos, { filter: { YoutubeIdent: { eq: vid1.contentDetails.videoId } } }));
        listVideo.then((json:any) => {
            console.log("Success queries.listVideos: " + json);
            if (json.data.listVideos.items.length === 0) {
                console.log("Do mutations.createVideo")
                delete vid1['id'];
                delete vid1['selected'];
                const createVideo = API.graphql(graphqlOperation(mutations.createVideo, { input: { YoutubeIdent: vid1.contentDetails.videoId, Youtube: vid1 } }));
                createVideo.then((json3:any) => {
                    this.setState({
                        currentVideoData: json3.data.createVideo
                    })
                    console.log("Success mutations.createVideo: " + json3);
                }).catch((err:any) => {
                    console.log("Error mutations.createVideo: " + err);
                });
            } else if (json.data.listVideos.items.length === 1) {
                console.log("Do mutations.updateVideo")
                delete vid1['id'];
                delete vid1['selected'];
                const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, { input: { id: json.data.listVideos.items[0].id, YoutubeIdent: vid1.contentDetails.videoId, Youtube: vid1 } }));
                updateVideo.then((json3:any) => {
                    console.log("Success mutations.updateVideo: " + json3);

                    this.setState({
                        currentVideoData: json3.data.updateVideo
                    })
                }).catch((err:any) => {
                    console.log("Error mutations.updateVideo: " + err);

                });
            }
        }).catch((err:any) => {
            console.log("Error queries.listVideos: " + err);
        });
    }
    onVideoChanged() {
        console.log("onVideoChanged")
        this.writeYoutube(this.state.currentYoutubeVideoData);
    }
    componentDidUpdate(prevProps:Props, prevState:State) {
        if (prevState.currentYoutubeVideoData !== this.state.currentYoutubeVideoData) {
            this.onVideoChanged();
        }
        if (prevState.videoTypes !== this.state.videoTypes) {
            console.log(this.state.currentVideoData.id);
            console.log(this.state.videoTypes);
            this.onMetaDataChange2(this.state.currentVideoData.id, "videoTypes", this.state.videoTypes)
        }
        if (prevProps.videoTypes !== this.props.videoTypes) {
            var videoTypeTemp = [];
            if (this.state.currentVideoData.videoTypes !== null)
                videoTypeTemp = [...this.props.videoTypes, ...this.state.currentVideoData.videoTypes];
            else
                videoTypeTemp = this.props.videoTypes;
            const videoTypeTemp2 = Array.from(new Set(videoTypeTemp));
            this.setState({ videoTypes: videoTypeTemp2 });
        }
    }
    componentWillReceiveProps(nextProps:Props) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.currentYoutubeVideoData !== this.state.currentYoutubeVideoData) {
            this.setState({ currentYoutubeVideoData: nextProps.currentYoutubeVideoData });
        }

    }
    onMetaDataChange2(videoId:any, field:any, value:any) {
        console.log("onMetaDataChange: " + videoId + "|" + field + "|" + value);
        var inputField:any = { input: { id: videoId } }
        inputField.input[field] = value;
        const updateVideo = API.graphql(graphqlOperation(mutations.updateVideo, inputField));
        updateVideo.then((json3:any) => {
            console.log("Success mutations.updateVideo: " + json3);
            this.setState({
                currentVideoData: json3.data.updateVideo
            })
        }).catch((err:any) => {
            console.log("Error mutations.updateVideo: " + err);
            console.log(err);
        });
    }
    shouldShow(type:any) {
        console.log("shouldShow: " + type)
       // console.log("shouldShow: " + (this.state.currentVideoData.videoTypes != null) && this.state.currentVideoData.videoTypes.includes(type))
        return (this.state.currentVideoData.videoTypes != null) && this.state.currentVideoData.videoTypes.includes(type);
    }
    render() {
        console.log("rendering");
        if (this.state.currentVideoData === null || this.state.currentVideoData.videoTypes === []) {
            return (
                <div>No Data</div>
            );
        }
        else {
            return (

                <CardDeck style={{ float: 'left' }}>
                    {
                        MetaDataTypes.constMetaDataTypes.map((item) => {
                            return (
                                <MetaBoxTeaching key={item.name} show={this.shouldShow(item.name)} fieldData={item} currentVideoData={this.state.currentVideoData} onMetaDataChange={(e) => { this.onMetaDataChange2(e.videoId, e.field, e.value) }}></MetaBoxTeaching>
                            );
                        })
                    }
                </CardDeck>
            );
        }

    }
}