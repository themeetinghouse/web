
import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter'
import { Modal } from 'react-bootstrap'
import Amplify from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';
import "./VideoOverlay.scss"

Amplify.configure(awsconfig);

interface Props {
  data: any
  onClose(): void
  content?: any
  isPlaylist?: boolean
}
interface State {
  data: any
  content: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data,
      content: this.props.content
    }
  }
  componentDidUpdate(prevProps: Props) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data === null) {
        this.setState({ content: null })
      } else if (this.props.data === "search") {
        fetch('/static/content/search.json').then(function (response) {
          return response.json();
        }).then((myJson) => {
          this.setState({ content: myJson });
        })
      } else if (this.props.isPlaylist) {
        fetch('/static/content/video-playlist.json').then(function (response) {
          return response.json();
        }).then((myJson) => {
          this.setState({ content: myJson });
        })
      } else {
        fetch('/static/content/video-player.json').then(function (response) {
          return response.json();
        }).then((myJson) => {
          this.setState({ content: myJson });
        })
      }
    }
  }

  render() {
    return (
      <div>
        {(this.state.content != null) ?
          <Modal dialogClassName={this.state.content.page.pageConfig.logoColor === "black" ? "modal-video white" : "modal-video "} show={this.props.data !== null} onHide={() => null} style={{ overflowY: this.state.content.page.content.filter((item: any) => item.type === 'form').length > 0 ? "hidden" : "scroll" }}>
            <Modal.Body className={this.state.content.page.pageConfig.logoColor === "black" ? "modal-body white" : "modal-body "}>
              <img className="VideoOverlayClose" src={this.state.content.page.pageConfig.logoColor === "black" ? "/static/svg/Close-Cancel.svg" : "/static/svg/Close-Cancel-White.svg"} alt="Close Window Icon" onClick={() => {
                this.props.onClose()
              }} />
              <RenderRouter data={this.props.data} content={this.state.content}></RenderRouter>
            </Modal.Body>
            <Modal.Footer className={this.state.content.page.pageConfig.logoColor === "black" ? "modal-footer white" : "modal-footer"} />
          </Modal> : null}
      </div >)

  }
}