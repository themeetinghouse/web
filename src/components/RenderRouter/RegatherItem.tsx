import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { isMobileOnly } from 'react-device-detect';
import './RegatherItem.scss';
interface Props {
  content: any;
}
export default function RegatherItem(props: Props): JSX.Element {
  const { content } = props;
  const formRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(!isMobileOnly);
  const [formUrl, setFormUrl] = useState('');

  const checkIfIsCancel = () => {
    if (window.location.href.includes('transCode')) {
      const transCode = window.location.href?.split('transCode=')?.[1];
      if (transCode) {
        return true;
      }
    }
    return false;
  };

  const isCancel = checkIfIsCancel();

  const openForm = () => {
    setIsOpen(true);
    if (isOpen) {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isCancel) {
      setFormUrl(
        `https://rsvp.themeetinghouse.com/regather210910/cancelReg.php?transCode=${
          window.location.href?.split('transCode=')?.[1]
        }`
      );
      if (isMobileOnly) {
        setIsOpen(true);
      } else formRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setFormUrl('https://rsvp.themeetinghouse.com/regather210910/');
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
              <h1
                key={contentItem}
                className={`RegatherItemH1 ${
                  content[contentItem] === 'Livestream'
                    ? 'LivestreamHeader'
                    : ''
                }`}
              >
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
              <button
                key={contentItem}
                onClick={action ? () => navigate(action) : () => openForm()}
                className={`RegatherButton ${type}`}
              >
                {text}
              </button>
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
      </div>

      <div
        style={isOpen ? { height: 'unset' } : { display: 'none' }}
        className="RegatherItemContainer2"
      >
        <div className="RegatherFormOffsetContainer">
          <iframe
            ref={formRef}
            src={formUrl}
            title="The Meeting House - Forms"
            scrolling="auto"
            className="RegatherFormIframe"
            style={{ height: 1000 }}
          ></iframe>
        </div>
      </div>
      {isMobileOnly ? (
        <Modal className={`GenericModalContainer white`} isOpen={isOpen}>
          <ModalBody
            style={{ backgroundColor: '#1A1A1A' }}
            className={`GenericModalBody white`}
          >
            <img
              onClick={() => navigate('/')}
              style={{
                height: '10.4vw',
                position: 'absolute',
                marginLeft: 16,
                top: 14,
              }}
              src="/static/logos/house-white-sm.png"
            ></img>
            <button
              className="CloseButton"
              style={{ position: 'absolute', right: '16px' }}
              onClick={() => {
                setIsOpen(false);
                setFormUrl('https://rsvp.themeetinghouse.com/regather210910/');
              }}
              aria-label="Close modal"
            >
              <img
                src={'/static/svg/Close-Cancel-White.svg'}
                alt="Close Page"
              />
            </button>
            <div
              style={{
                marginTop: 74,
                minHeight: 'calc(100vh - 74px)',
                backgroundColor: '#EFEFF0',
              }}
            >
              <iframe
                ref={formRef}
                src={formUrl}
                title="The Meeting House - Forms"
                scrolling="auto"
                className="RegatherFormIframe"
                style={{ height: '125vh' }}
              ></iframe>
            </div>
          </ModalBody>
        </Modal>
      ) : null}
    </>
  );
}
