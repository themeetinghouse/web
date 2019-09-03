
import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter'
import { Modal } from 'react-bootstrap'
import Amplify from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
import "./VideoOverlay.scss"

/*Analytics.record({
  name: 'pageVisit',
  attributes: { page: 'VideoPlayer', video: this.state.data.id }
});
*/
Amplify.configure(awsconfig);

interface Props {
  data: any
  onClose():void
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

  

  render() {
    console.log(this.state.videoVisible)
    return (
      <div>
        <Modal dialogClassName="modal-video" show={this.props.data!=null}>
          <Modal.Body id="modal-video-body">
            <img style={{ cursor: "pointer", position: "fixed", zIndex: 1000, top: "2vw", left: "95vw" }} src="/static/Close.png" alt="Close Window Icon" onClick={() => {
              this.props.onClose()}} />
            <RenderRouter data={this.props.data} content={this.state.content}></RenderRouter>
          </Modal.Body>
        </Modal>
      </div >)

  }
}