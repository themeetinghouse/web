import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './RegatherItem.scss';
interface Props {
  content: any;
}
export default function RegatherItem(props: Props): JSX.Element {
  const { content } = props;
  const formRef = useRef<HTMLIFrameElement>(null);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const openForm = () => {
    setIsOpen(true);
    if (isOpen) {
      console.log(isOpen, 'aaaa');
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isOpen]);
  return (
    <>
      <div
        style={isOpen ? { paddingBottom: 200 } : { paddingBottom: 0 }}
        className="RegatherItemContainer"
      >
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
              <div className="RegatherGraphicsContainer">
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
      {isOpen ? (
        <div className="RegatherItemContainer2">
          <div className="RegatherFormOffsetContainer">
            <iframe
              ref={formRef}
              src={'http://127.0.0.1:5500/Form.html'}
              title="The Meeting House - Forms"
              scrolling="yes"
              className="RegatherFormIframe"
            ></iframe>
          </div>
        </div>
      ) : null}
    </>
  );
}
