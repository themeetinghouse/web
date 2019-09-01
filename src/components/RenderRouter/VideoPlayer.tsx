
import React from 'react';
import { Button } from 'reactstrap';
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
    <div style={{ position: "relative", top: 0, left: 0, width: "100%", height: "100%", padding: "20px 50px 20px 20px", overflow: "auto" }}>
      <iframe style={{ paddingLeft: "5vw", paddingTop: "10vw", width: "90vw", height: "60vw" }} allowFullScreen src={"https://www.youtube.com/embed/" + this.state.data.id + "?controls=1"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div style={{ color: "#ffffff" }}>{this.state.content.seriesTitle}</div><Button>Share</Button>
      <div style={{ color: "#C8C8C8" }}>{this.state.content.episodeTitle}</div>
      <div style={{ color: "#C8C8C8" }}>{this.state.content.publishedData}</div>
      <div style={{ color: "#C8C8C8" }}>{this.state.content.duration}</div>
      <div style={{ color: "#C8C8C8" }}>{this.state.content.description}</div>
      <div style={{ color: "#ffffff" }}>Notes</div>
      <div style={{ color: "#ffffff" }}>Download Video</div>
      <div style={{ color: "#ffffff" }}>Download Audio</div>
    </div>
    )

  }
}