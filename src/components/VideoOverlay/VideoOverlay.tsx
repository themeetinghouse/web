import React from 'react';
import RenderRouter from '../RenderRouter/RenderRouter';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import './VideoOverlay.scss';
import { Storage } from 'aws-amplify';
const searchPageContent = Storage.get('savedContent/search.json')
  .then(async (url) => {
    const response = await fetch(url);
    return response.json();
  })
  .catch((e) => console.log(e));

const playerPageContent = Storage.get('savedContent/video-player.json')
  .then(async (url) => {
    const response = await fetch(url);
    return response.json();
  })
  .catch((e) => console.log(e));

const playlistPageContent = Storage.get('savedContent/video-playlist.json')
  .then(async (url) => {
    const response = await fetch(url);
    return response.json();
  })
  .catch((e) => console.log(e));

interface Props {
  data: any;
  onClose(): void;
  whiteBackdrop?: boolean;
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
    if (!!this.props.data) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
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
  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }
  render() {
    const { content } = this.state;
    const { data, onClose } = this.props;
    const logoIsBlack = content?.page?.pageConfig?.logoColor === 'black';
    const isGivePage = content?.page?.name === 'give';

    const modalClasses = {
      modalClass: isGivePage
        ? 'GiveModal'
        : logoIsBlack
        ? 'modal-video white'
        : 'modal-video',
      modalBody: isGivePage
        ? 'modal-body'
        : logoIsBlack
        ? 'modal-body white'
        : 'modal-body',
      modalFooter: logoIsBlack ? 'modal-footer white' : 'modal-footer',
      closeButtonImg: logoIsBlack
        ? '/static/svg/Close-Cancel.svg'
        : '/static/svg/Close-Cancel-White.svg',
    };
    const { modalClass, modalBody, modalFooter, closeButtonImg } = modalClasses;

    return (
      <div>
        {content ? (
          <Modal
            className={modalClass}
            isOpen={!!data}
            modalClassName={
              (content.page.content as any[]).find(
                (item) => item.type === 'form'
              )
                ? 'no-scroll'
                : ''
            }
            backdropClassName={this.props.whiteBackdrop ? 'backdrop-white' : ''}
          >
            <ModalBody className={modalBody}>
              <button
                className="CloseButton"
                onClick={() => {
                  onClose();
                }}
                aria-label="Close modal"
              >
                <img
                  className="VideoOverlayClose"
                  src={closeButtonImg}
                  alt=""
                />
              </button>

              <RenderRouter data={data} content={content}></RenderRouter>
            </ModalBody>
            <ModalFooter className={modalFooter} />
          </Modal>
        ) : null}
      </div>
    );
  }
}
