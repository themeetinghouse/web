import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';
import { isMobileOnly } from 'react-device-detect';
import moment from 'moment-timezone';
import './RegatherItem.scss';
interface Props {
  content: any;
}
export default function RegatherItem(props: Props): JSX.Element {
  const { content } = props;
  const formRef = useRef<HTMLIFrameElement>(null);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(!isMobileOnly);
  const registrationOpen = moment().weekday() > 0 && moment().weekday() < 5;
  const [formUrl, setFormUrl] = useState(
    'https://rsvp.themeetinghouse.com/beta1/'
  );
  const openForm = () => {
    if (registrationOpen) {
      setIsOpen(true);
      if (isOpen) {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
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
            const checkedText =
              text.includes('Register Now') && !registrationOpen
                ? 'Registration Closed'
                : text;
            const disabled =
              text.includes('Register Now') && !registrationOpen ? true : false;

            return (
              <button
                key={contentItem}
                onClick={action ? () => history.push(action) : () => openForm()}
                className={`RegatherButton ${type} ${
                  disabled ? 'disabled' : ''
                }`}
                disabled={disabled}
              >
                {checkedText}
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
        style={
          isOpen
            ? !registrationOpen
              ? { height: 'unset' }
              : {}
            : { display: 'none' }
        }
        className="RegatherItemContainer2"
      >
        <div className="RegatherFormOffsetContainer">
          {registrationOpen ? (
            <iframe
              ref={formRef}
              src={formUrl}
              title="The Meeting House - Forms"
              scrolling="auto"
              className="RegatherFormIframe"
              style={{ height: 960 }}
            ></iframe>
          ) : (
            <div
              style={{
                padding: '68px 80px',
                width: '60vw',
                backgroundColor: '#EFEFF0',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h2 className="RegatherItemH2">Registration is closed</h2>
              <p style={{ marginTop: 24 }}>
                Registration for this week is now closed. If you’d like to
                attend next Sunday, please register Monday – Thursday.
              </p>
              <p>Please join us on the livestream Sunday at 10am.</p>
              <button
                onClick={() => history.push('/live')}
                className={`RegatherButton solid`}
                style={{ backgroundColor: '#1a1a1a', alignSelf: 'center' }}
              >
                Watch Livestream
              </button>
            </div>
          )}
        </div>
      </div>
      {isMobileOnly ? (
        <Modal className={`GenericModalContainer white`} isOpen={isOpen}>
          <ModalBody
            style={{ backgroundColor: '#1A1A1A' }}
            className={`GenericModalBody white`}
          >
            <img
              onClick={() => history.push('/')}
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
