import React from 'react';
import { Collapse } from 'reactstrap';
import './FAQItem.scss';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { ScaledImage } from 'components/ScaledImage';
import { ItemImage } from 'components/types';
import { Link, LinkButton } from 'components/Link/Link';
import { Storage } from 'aws-amplify';
interface Props {
  content: any;
}

interface FAQItemProps extends Props {
  history: RouteComponentProps['history'];
}
interface State {
  content: any;
  isOpen: any;
}
function IsLinkFromStorage({
  type,
  item,
  id,
}: {
  type: 'link' | 'button';
  item: any;
  id: string;
}) {
  const [link, setLink] = React.useState('');
  React.useEffect(() => {
    (async () => {
      if (item.navigateTo.includes('editor/pdfs')) {
        const newLink = await Storage.get(item.navigateTo);
        setLink(newLink);
      } else {
        setLink(item.navigateTo.action);
      }
    })();
  }, [item.navigateTo]);
  return type === 'button' ? (
    <div key={id}>
      <LinkButton className="contentButton" to={link}>
        {item.title}
      </LinkButton>
    </div>
  ) : item.type === 'link' ? (
    <div key={id}>
      <Link className="oneImageA" to={link} newWindow={item.openNewBrowser}>
        {item.title}
      </Link>
    </div>
  ) : null;
}
class ContentItem extends React.Component<FAQItemProps, State> {
  constructor(props: FAQItemProps) {
    super(props);
    this.state = {
      content: props.content,
      isOpen: [],
    };
  }

  toggle = (id: any) => {
    const list = this.state.isOpen;
    list[id] = !list[id];
    this.setState({ isOpen: list });
  };

  renderList(image1: any) {
    return this.props.content.list
      ? this.props.content.list.map((item: any, id: any) => {
          return item.type === 'question' ? (
            <div key={id}>
              <div
                onClick={() => {
                  this.toggle(id);
                }}
                className={
                  this.state.content.style === 'white'
                    ? 'FAQQuestion whiteText'
                    : 'FAQQuestion'
                }
              >
                <div className={image1 ? 'FAQFullWidth' : 'FAQPartialWidth'}>
                  {item.question}
                </div>
                <div className={image1 ? 'FAQFloatLeft' : 'FAQFloatRight'}>
                  +
                </div>
                <div style={{ clear: 'both' }}></div>
              </div>
              <Collapse isOpen={this.state.isOpen[id]}>
                <div
                  className={
                    this.state.content.style === 'white'
                      ? 'FAQAnswer whiteText'
                      : 'FAQAnswer'
                  }
                >
                  {item.answer.map((item: any, index: any) => {
                    return (
                      <div key={index}>
                        {item} <div>&nbsp;</div>
                      </div>
                    );
                  })}
                </div>
              </Collapse>
              <div>
                <hr></hr>
              </div>
            </div>
          ) : item.type === 'button' ? (
            <IsLinkFromStorage type="button" item={item} id={id} />
          ) : item.type === 'link' ? (
            <IsLinkFromStorage type="link" item={item} id={id} />
          ) : item.type === 'text' ? (
            <div key={id} className={item.class}>
              {item.title}
            </div>
          ) : item.type === 'event' ? (
            <div className="oneImageEventDetails" key={id}>
              <div>{item.date}</div>
              <div>{item.location}</div>
            </div>
          ) : null;
        })
      : null;
  }
  render() {
    let image1: ItemImage | undefined;
    if (this.state.content.image1) {
      image1 =
        this.state.content.image1[
          Math.floor(Math.random() * this.state.content.image1.length)
        ];
    }

    return (
      <div className="FAQItem faq">
        <div className="faqPosition">
          <div className={image1 ? 'faqGreyBox right' : 'faqGreyBox full'}>
            <h1
              className={
                this.state.content.style === 'white'
                  ? 'faqH1 whiteText'
                  : 'faqH1'
              }
            >
              {this.props.content.header1}
            </h1>
            <h2
              className={
                this.state.content.style === 'white'
                  ? 'faqH2 whiteText'
                  : 'faqH2'
              }
            >
              {this.state.content.header2}
            </h2>
            <div
              className={
                this.state.content.style === 'white'
                  ? 'faqText whiteText'
                  : 'faqText'
              }
            >
              {this.props.content.text1}
            </div>
            {this.renderList(image1)}
          </div>
          <ScaledImage
            image={image1}
            className="faqImage right"
            breakpointSizes={{
              320: 320,
              480: 480,
              640: 640,
              1280: 1280,
              1920: 1920,
              2560: 2560,
            }}
          />
        </div>
      </div>
    );
  }
}
export default function ContentItemWrapper(props: Props) {
  const history = useHistory();
  return <ContentItem {...props} history={history} />;
}
