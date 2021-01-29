import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import './VideoOverlay.scss';

const searchPageContent = fetch('/static/content/search.json').then(function (
  response
) {
  return response.json();
});

const playerPageContent = fetch('/static/content/video-player.json').then(
  function (response) {
    return response.json();
  }
);

const playlistPageContent = fetch('/static/content/video-playlist.json').then(
  function (response) {
    return response.json();
  }
);

interface Props {
  data: any;
  onClose(): void;
  content?: any;
  isPlaylist?: boolean;
}
interface State {
  content: any;
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: this.props.content,
    };
  }
  componentDidUpdate(prevProps: Props) {
    if (this.props.data !== prevProps.data) {
      if (this.props.data === null) {
        this.setState({ content: null });
      } else if (this.props.isPlaylist) {
        playlistPageContent.then((myJson) => {
          this.setState({ content: myJson });
        });
      } else if (this.props.data === 'search') {
        searchPageContent.then((myJson) => {
          this.setState({ content: myJson });
        });
      } else {
        playerPageContent.then((myJson) => {
          this.setState({ content: myJson });
        });
      }
    }
  }

  render() {
    const { content } = this.state;
    const { data, onClose } = this.props;
    const logoIsBlack = content?.page?.pageConfig?.logoColor === 'black';
    return (
      <div>
        {content ? (
          <Modal
            className={logoIsBlack ? 'modal-video white' : 'modal-video'}
            isOpen={!!data}
            modalClassName={
              (content.page.content as any[]).find(
                (item) => item.type === 'form'
              )
                ? 'no-scroll'
                : ''
            }
          >
            <ModalBody
              className={logoIsBlack ? 'modal-body white' : 'modal-body'}
            >
              <button
                className="CloseButton"
                onClick={() => {
                  onClose();
                }}
                aria-label="Close modal"
              >
                <img
                  className="VideoOverlayClose"
                  src={
                    logoIsBlack
                      ? '/static/svg/Close-Cancel.svg'
                      : '/static/svg/Close-Cancel-White.svg'
                  }
                  alt=""
                />
              </button>

              <RenderRouter data={data} content={content}></RenderRouter>
            </ModalBody>
            <ModalFooter
              className={logoIsBlack ? 'modal-footer white' : 'modal-footer'}
            />
          </Modal>
        ) : null}
      </div>
    );
  }
}
