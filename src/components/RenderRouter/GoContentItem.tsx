import { Fragment } from 'react';
import './GoContentItem.scss';
import { GoItem, GoLink, GoText } from '../types';
import { Link, LinkButton } from '../Link/Link';

interface Props {
  content: GoItem | GoLink;
}
export default function GoContentItem({ content }: Props) {
  const renderGoText = (items: GoText['body']) => {
    return items?.map((item, index) => {
      return (
        <Fragment key={index}>
          {item.fontWeight === 'normal' ? (
            <span>{item.text}</span>
          ) : (
            <b>{item.text}</b>
          )}

          {item.newParagraph ? (
            <Fragment>
              <br />
              <br />
            </Fragment>
          ) : null}
        </Fragment>
      );
    });
  };

  switch (content.style) {
    case 'goItem':
      return (
        <div className="GoContentItem">
          <div className="GoContentH1">{content.header1}</div>
          <div className="GoContentH2">{content.header2}</div>
          <div className="GoContentText">{renderGoText(content.body)}</div>
        </div>
      );

    case 'goSubItems':
      return (
        <div className="GoSubItems">
          {content.items?.map((item, index) => {
            return (
              <div key={index} className="GoContentText GoSubItem">
                <div className="GoContentSubH1">{item.header1}</div>
                <div className="GoContentSubH2">{item.header2}</div>
                {renderGoText(item.body)}
              </div>
            );
          })}
        </div>
      );

    case 'link':
      return (
        <div className="GoLink">
          <Link to={content.navigateTo} newWindow={content.newWindow}>
            {content.title}
          </Link>
        </div>
      );
    case 'button':
      return (
        <div className="GoLink">
          <LinkButton
            className="GoButton inverted"
            to={content.navigateTo}
            newWindow={content.newWindow}
          >
            {content.title}
          </LinkButton>
        </div>
      );
  }
}
