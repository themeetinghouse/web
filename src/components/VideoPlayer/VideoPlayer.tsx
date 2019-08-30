
import React from 'react';
import ListItem from '../../components/RenderRouter/ListItem';
import { Button } from 'reactstrap';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
Amplify.configure(awsconfig);

interface Props {
  data: any
}
interface State {
  videoVisible: boolean
  data: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data,
      videoVisible: false
    }
  }
  handleClick() {
    this.setState({
      videoVisible: !this.state.videoVisible
    })
    const VideoPlayer = document.getElementById("VideoPlayer")
    if (VideoPlayer != null) {
      Analytics.record({
        name: 'pageVisit',
        attributes: { page: 'VideoPlayer', video: this.state.data.id }
      });

    }
  }

  render() {
    console.log(this.state.videoVisible)
    return (
      <div>

        <div>
          <img onClick={() => this.handleClick()} alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src={this.state.data.Youtube.snippet.thumbnails.default.url} />
          <div style={{ fontWeight: "bold" }}>{this.state.data.episodeTitle}</div>
          <div style={{ fontWeight: "bold" }}>{this.state.data.series != null ? this.state.data.series : null}</div>
          <div>{this.state.data.publishedDate}</div>
        </div>
        <ReactCSSTransitionGroup
          transitionName="showVideoPlayer"
          transitionAppear={false}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={2000}
          transitionEnter={true}
          transitionLeave={true}>
          {this.state.videoVisible ? (
            <div id="VideoPlayer" key="vp1" className="VideoPlayer" style={{ zIndex: 5000, position: "fixed", width: "100%", height: "100%", left: "0vw", top: "0vw" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", padding: "20px 50px 20px 20px", overflow: "auto" }}>
                <div onClick={() => this.handleClick()} style={{ position: "absolute", left: "90vw", color: "#ffffff" }}>X</div>
                <iframe style={{ paddingLeft: "5vw", paddingTop: "10vw", width: "90vw", height: "60vw" }} allowFullScreen src={"https://www.youtube.com/embed/" + this.state.data.id + "?controls=1"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <div style={{ color: "#ffffff" }}>{this.state.data.seriesTitle}</div><Button>Share</Button>
                <div style={{ color: "#C8C8C8" }}>{this.state.data.episodeTitle}</div>
                <div style={{ color: "#C8C8C8" }}>{this.state.data.publishedData}</div>
                <div style={{ color: "#C8C8C8" }}>{this.state.data.duration}</div>
                <div style={{ color: "#C8C8C8" }}>{this.state.data.description}</div>
                <div style={{ color: "#ffffff" }}>Notes</div>
                <div style={{ color: "#ffffff" }}>Download Video</div>
                <div style={{ color: "#ffffff" }}>Download Audio</div>
                <ListItem data={{
                  "type": "list",
                  "style": "horizontal",
                  "selector": "allTeaching",
                  "header1": "Highlights"
                }}></ListItem>
                <ListItem data={{
                  "type": "list",
                  "style": "horizontal",
                  "selector": "sameSeries",
                  "header1": "More from this Series"
                }}></ListItem>
                <ListItem data={{
                  "type": "list",
                  "style": "horizontal",
                  "selector": "sameSeries",
                  "header1": "Related Videos"
                }}></ListItem>
              </div>
            </div>)
            : null
          }
        </ReactCSSTransitionGroup>

      </div >)

  }
}