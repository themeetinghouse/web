
import React from 'react';
import { Button } from 'reactstrap';
import "./VideoPlayer.scss"

interface Props {
  content: any,
  data:any
}
interface State {
  data:any,
  content: any,
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
    console.log(props.data)
    
  }
  render() {
    return (
    <div style={{ position: "relative", top: 0, left: 0, width: "100%", height: "100%", padding: "0", overflow: "auto" }}>
      <iframe title="Youtube Player" style={{ marginLeft: "10vw", paddingTop: "2vw", width: "80vw", height: "45vw" }} allowFullScreen src={"https://www.youtube.com/embed/" + this.state.data.id + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div style={{ color: "#ffffff" }}>{this.state.data.seriesTitle}</div><Button>Share</Button>
      <div style={{ color: "#C8C8C8" }}>{this.state.data.episodeNumber}. {this.state.data.episodeTitle}</div>
      <div style={{ color: "#C8C8C8" }}>{this.state.data.publishedData}</div>
      <div style={{ color: "#C8C8C8" }}>{this.state.data.duration}</div>
      <div style={{ color: "#C8C8C8" }}>{this.state.data.description}</div>
      <div style={{ color: "#ffffff" }}>Notes</div>
      <div style={{ color: "#ffffff" }}>Download Video</div>
      <div style={{ color: "#ffffff" }}>Download Audio</div>
    </div>
    )

  }
}