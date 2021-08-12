import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import RenderRouter from './RenderRouter';
import './GenericModalPage.scss';

type Props = {
  content: any;
  onClose: () => void;
  data?: any;
};
export default function GenericModalPage(props: Props): JSX.Element {
  const { content, onClose } = props;
  const { page } = content;
  const { pageConfig } = page;
  return (
    <Modal
      className={`modal-container ${pageConfig.backgroundColor}`}
      isOpen={true}
    >
      <ModalBody className={`modal-body ${pageConfig.backgroundColor}`}>
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
              true
                ? '/static/svg/Close-Cancel.svg'
                : '/static/svg/Close-Cancel-White.svg'
            }
            alt=""
          />
        </button>

        <RenderRouter data={{ id: undefined }} content={content}></RenderRouter>
      </ModalBody>
      {pageConfig.showModalFooter ? (
        <ModalFooter
          className={`modal-footer ${pageConfig.modalFooterBackgroundColor}`}
        >
          <p>{pageConfig.modalFooterContent.text1}</p>
          <a
            style={{ textDecoration: 'none' }}
            href={`mailto:${pageConfig.modalFooterContent.text2}`}
          >
            {pageConfig.modalFooterContent.text2}
          </a>
        </ModalFooter>
      ) : null}
    </Modal>
  );
}
