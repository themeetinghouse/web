
import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter'
import { Modal } from 'react-bootstrap'
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
Amplify.configure(awsconfig);

interface Props {
  data: any
}
interface State {
  videoVisible: boolean
  data: any
  content: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data,
      videoVisible: false,
      content: null
    }
    fetch('./static/content/video-player.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ content: myJson });
      })

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
        <Modal  dialogClassName="modal-video" show={this.state.videoVisible}>
          <Modal.Body id="modal-video-body">
          <RenderRouter content={this.state.content}></RenderRouter>

          </Modal.Body>


        </Modal>
      
       

      </div >)

  }
}