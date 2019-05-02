import './MetaData.css'
import React, { Container } from 'react';
export default class YoutubeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: "https://www.youtube.com/embed/" + props.videoId
        }
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if ("https://www.youtube.com/embed/" + nextProps.videoId !== this.state.videoId) {
            this.setState({ videoId: "https://www.youtube.com/embed/" + nextProps.videoId });
        }
    }
    render() {
        console.log("Set Youtube Video:" + this.state.videoId)
        return (<iframe src={this.state.videoId} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>);
    }
}