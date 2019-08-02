
import React from 'react';

interface Props{
  data:any
}
interface State {
  data:any
}
export default class VideoItem extends React.Component<Props, State> {
    constructor(props:Props) {
      super(props);
      this.state = {
        data: props.data
      }
    }
    parallaxDetail=[200, 250];
    render() {
      if (this.state.data.style === "oneVideo") return (
        <div className="VideoItem oneVideo" style={{ position: "static", paddingBottom:"5vw" }}>
          <div style={{ position: "relative", zIndex: 100 }}>
            <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <h2>{this.state.data.header2}</h2>
          <div>{this.state.data.text1}</div>
          <img src={this.state.data.video1} alt={this.state.data.video1Alt} />
        </div>
        </div>
      )
      else if (this.state.data.style === "oneVideoWithPlaylist") return (
        <div className="VideoItem oneVideoWithPlaylist" style={{ position: "static", paddingBottom:"5vw" }}>
          <div style={{ position: "relative", zIndex: 100 }}>
            <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
  
          <h2>{this.state.data.header2}</h2>
          <div>{this.state.data.text1}</div>
          <img src={this.state.data.video1} alt={this.state.data.video1Alt}/>
          <div>Playlist TBD</div>
        </div>
        </div>
      )
      return (null)
    }
  }