import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { isMobileOnly } from 'react-device-detect';
import './RegatherItem.scss';
interface Props {
  content: any;
}
export default function RegatherItem(props: Props): JSX.Element {
  const { content } = props;
  const formRef = useRef<HTMLIFrameElement>(null);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [formUrl, setFormUrl] = useState(
    'https://rsvp.themeetinghouse.com/beta1'
  );
  const openForm = () => {
    setIsOpen(true);
    if (isOpen) {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen]);
  useEffect(() => {
    if (window.location.href.includes('transCode')) {
      const transCode = window.location.href?.split('transCode=')?.[1];
      console.log(transCode);
      if (transCode) {
        setFormUrl(
          `https://rsvp.themeetinghouse.com/beta1/cancelReg.php?transCode=${transCode}`
        );
        setIsOpen(true);
      }
    }
  }, []);
  return (
    <>
      <div className={`RegatherItemContainer ${isOpen ? 'open' : ''}`}>
        {Object.keys(content).map((contentItem) => {
          if (contentItem.includes('mainHeader')) {
            return (
              <h1 key={contentItem} className={'RegatherItemH1 MainHeader'}>
                {content[contentItem]}
              </h1>
            );
          } else if (contentItem.includes('header')) {
            return (
              <h1 key={contentItem} className="RegatherItemH1">
                {content[contentItem]}
              </h1>
            );
          } else if (contentItem.includes('subHeader')) {
            return (
              <h1 key={contentItem} className="RegatherItemH2">
                {content[contentItem]}
              </h1>
            );
          } else if (contentItem.includes('button')) {
            const { action, text, type } = content[contentItem];
            return (
              <div
                key={contentItem}
                onClick={action ? () => history.push(action) : () => openForm()}
                className={`RegatherButton ${type}`}
              >
                {text}
              </div>
            );
          } else if (contentItem.includes('text')) {
            return (
              <div key={contentItem} className="RegatherItemText">
                {content[contentItem]}
              </div>
            );
          } else if (contentItem === 'divider' && content[contentItem]) {
            return <hr key={contentItem} className="RegatherItemHR" />;
          } else if (contentItem === 'graphicItems') {
            return (
              <div key={contentItem} className="RegatherGraphicsContainer">
                {content[contentItem].map((item: any, index: number) => {
                  return (
                    <div className="RegatherGraphic" key={index}>
                      <img src={item.image}></img>
                      <div>
                        <div className="RegatherGraphicLabel">{item.title}</div>
                        <div className="RegatherItemText GraphicsText">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
        <div onClick={openForm} className={`RegatherButton solid mobile`}>
          Register Now
        </div>
      </div>

      <div
        style={isOpen ? {} : { display: 'none' }}
        className="RegatherItemContainer2"
      >
        <div className="RegatherFormOffsetContainer">
          <iframe
            ref={formRef}
            src={formUrl}
            title="The Meeting House - Forms"
            scrolling="auto"
            className="RegatherFormIframe"
            style={{ height: 960 }}
          ></iframe>
        </div>
      </div>
      {isMobileOnly ? (
        <Modal className={`modal-container white`} isOpen={isOpen}>
          <ModalBody
            style={{ backgroundColor: '#EFEFF0' }}
            className={`modal-body white`}
          >
            <img
              style={{
                height: '10.4vw',
                verticalAlign: 'middle',
                position: 'absolute',
                marginLeft: 15,
                top: '0.5rem',
              }}
              src="/static/logos/house-black-sm.png"
            ></img>
            <button
              className="CloseButton"
              onClick={() => {
                setIsOpen(false);
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

            <iframe
              ref={formRef}
              src={formUrl}
              title="The Meeting House - Forms"
              scrolling="auto"
              className="RegatherFormIframe"
              style={{ height: 960, marginTop: 72 }}
            ></iframe>
          </ModalBody>
        </Modal>
      ) : null}
    </>
  );
}
