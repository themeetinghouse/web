
import React from 'react';
import ListItem from '../../components/RenderRouter/ListItem';
import { Button } from 'reactstrap';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';

Amplify.configure(awsconfig);

interface Props {
  video: any
}
interface State {
  video: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      video: props.video
    }
  }
  handleClick() {
    const VideoPlayer = document.getElementById("VideoPlayer")
    //  console.log("test")
    if (VideoPlayer != null) {
      if (VideoPlayer.classList.toggle("is-videoplayer-open"))

        Analytics.record({
          name: 'pageVisit',
          // Attribute values must be strings
          attributes: { page: 'VideoPlayer', video: 'Unknown' }
        });
      //    console.log("test")
    }
  }
  render() {

    return (<div>
      <div id="VideoPlayer" className="VideoPlayer" style={{ zIndex: 5000, position: "fixed", width: "100%", height: "100%", left: "0vw", top: "0vw" }}>

        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", padding: "20px 50px 20px 20px", overflow: "auto" }}>
          <div onClick={() => this.handleClick()} style={{ color: "#ffffff" }}>X</div>

          <img alt="TBD" style={{ width: "90vw", marginRight: "1vw" }} src="./static/images/teaching-3.png" />

          <div style={{ color: "#ffffff" }}>Water from the Rock</div><Button>Share</Button>
          <div style={{ color: "#C8C8C8" }}>E2. Jesus By John</div>
          <div style={{ color: "#C8C8C8" }}>June 9, 2019</div>
          <div style={{ color: "#C8C8C8" }}>56m</div>
          <div style={{ color: "#C8C8C8" }}>We discuss our human tendency to intellectually spectate rather than truly connect with Jesus through the Holy Spirit. This is some more descriptive text about this lesson/teaching. You would probably want to keep it to around 4 lines or so here.</div>
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
      </div>

    </div>)

  }
}