
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
  onClose(): void
  content?: any
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
      content: this.props.content
    }
    /* 
      }*/

  }
  componentDidUpdate(prevProps: Props) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      if (this.props.data === null) {
        this.setState({ content: null })
      }
      else if (this.props.data === "search") {
        fetch('/static/content/search.json').then(function (response) {
          return response.json();
        })
          .then((myJson) => {
            this.setState({ content: myJson });
          })

      }
      else {

        fetch('/static/content/video-player.json').then(function (response) {
          return response.json();
        })
          .then((myJson) => {
            this.setState({ content: myJson });
          })

      }
    }
  }

  render() {
    return (
      <div>
        {(this.state.content != null) ?
          <Modal dialogClassName={this.state.content.page.pageConfig.logoColor === "black" ? "modal-video white" : "modal-video "} show={this.props.data !== null}>
            <Modal.Body className={this.state.content.page.pageConfig.logoColor === "black" ? "modal-body white" : "modal-body "}>
              <img className="VideoOverlayClose" src={this.state.content.page.pageConfig.logoColor === "black" ? "/static/Close-black.png" : "/static/Close.png"} alt="Close Window Icon" onClick={() => {
                this.props.onClose()
              }} />
              <RenderRouter data={this.props.data} content={this.state.content}></RenderRouter>
            </Modal.Body>
          </Modal> : null}
      </div >)

  }
}