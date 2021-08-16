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
      className={`GenericModalContainer ${pageConfig.backgroundColor}`}
      isOpen={true}
    >
      <ModalBody className={`GenericModalBody ${pageConfig.backgroundColor}`}>
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
              pageConfig.backgroundColor === 'beige' ||
              pageConfig.backgroundColor === 'white'
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
          className={`GenericModalFooter ${pageConfig.modalFooterBackgroundColor}`}
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
