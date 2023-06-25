import { CSSProperties, useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ScaledImage } from 'components/ScaledImage';
import { Link, LinkButton } from 'components/Link/Link';
import { ItemImage } from '../types';
import './ContentItem.scss';
import DataLoader, { LocationData, LocationQuery } from './DataLoader';
import AddToCalendar, { Event } from '../AddToCalendar/AddToCalendar';
import FadeImage from 'components/ScaledImage/FadeImage';
import React from 'react';
import { Storage } from 'aws-amplify';

type ContentList = Array<
  | {
      type: 'button';
      navigateTo: string;
      buttonColor?: string;
      title: string;
    }
  | {
      type: 'link';
      navigateTo: string;
      title: string;
      openNewBrowser?: boolean;
    }
  | { type: 'text'; title: string }
  | {
      type: 'event';
      date?: string;
      location: string;
    }
  | {
      type: 'arrow';
      navigateTo: string;
      title: string;
      openNewBrowser?: boolean;
    }
  | {
      type: 'downArrow';
    }
>;
function ContentImage({
  className,
  image,
  noShowOnStartup,
  style,
}: {
  className: string;
  image: any;
  noShowOnStartup?: boolean;
  style?: CSSProperties;
}) {
  const [image1, setImage1] = React.useState({
    src: '',
    alt: '',
  });
  console.log({ image1 });
  React.useEffect(() => {
    if (image?.src?.includes('editor')) {
      const imageKey = image.src[0] === '/' ? image.src.slice(1) : image.src;
      Storage.get(imageKey).then(async (url) => {
        console.log({ url });
        setImage1({
          src: url,
          alt: image.alt,
        });
      });
    } else {
      setImage1({
        src: image.src,
        alt: image.alt,
      });
    }
  }, [image]);
  if (!image1.src) return null;
  console.log({ testImage: image1 });

  return (
    <FadeImage
      noShowOnStartup={noShowOnStartup}
      imageSrc={image1.src}
      alt={image1.alt}
      className={className}
      style={style}
    />
  );
}
interface BannerImage {
  src: string;
  alt: string;
  linkto?: string;
}

interface ContentType extends LocationQuery {
  style: string;
  image1?: ItemImage[];
  header1?: string;
  header2?: string;
  text1?: string;
  linkToNextArrow?: boolean;
  text2?: string;
  text3?: string;
  text4?: string;
  list?: ContentList;
  reverse?: boolean;
  pieChart?: {
    raised: number;
    goal: number;
    text: string;
  };
  images?: BannerImage[];
  filterField?: string;
  filterValue?: string;
  calendar?: Event;
}

interface Props extends RouteComponentProps {
  content: ContentType;
  nextItem: number;
}
function ContentButton({
  buttonClass,
  item,
  onMouseEnter,
  hideArrow,
}: {
  buttonClass: string;
  onMouseEnter?: () => void;
  item: {
    navigateTo: string;
    title: string;
    openNewBrowser?: boolean;
  };
  hideArrow?: boolean;
}) {
  const [link, setLink] = React.useState(item.navigateTo);
  React.useEffect(() => {
    (async () => {
      if (item.navigateTo.includes('editor/pdfs')) {
        const newLink = await Storage.get(item.navigateTo);
        setLink(newLink);
      } else {
        setLink(item.navigateTo);
      }
    })();
  }, [item.navigateTo]);
  return (
    <LinkButton
      newWindow={item.navigateTo.includes('http')}
      onMouseEnter={onMouseEnter}
      to={link}
      className={buttonClass}
    >
      {item.title}
      {!hideArrow ? (
        <img
          className="madarrow"
          alt=""
          src="/static/svg/ArrowRight black.svg"
        />
      ) : null}
    </LinkButton>
  );
}
function ContentLink({
  buttonClass,
  item,
}: {
  buttonClass: string;
  onMouseEnter?: () => void;
  item: {
    navigateTo: string;
    title: string;
    openNewBrowser?: boolean;
  };
}) {
  const [link, setLink] = React.useState(item.navigateTo);
  React.useEffect(() => {
    (async () => {
      if (item.navigateTo.includes('editor/pdfs')) {
        const newLink = await Storage.get(item.navigateTo);
        setLink(newLink);
      } else {
        setLink(item.navigateTo);
      }
    })();
  }, [item.navigateTo]);
  return (
    <Link
      className={buttonClass}
      newWindow={
        item.openNewBrowser ||
        item.navigateTo.includes('http') ||
        item.navigateTo.includes('https') ||
        item.navigateTo.includes('www')
      }
      to={link}
    >
      {item.title}
    </Link>
  );
}

function ContentItem({ content, nextItem }: Props) {
  const [data, setData] = useState<LocationData[]>();

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const loadLocations = async () => {
      if (content.style === 'youth') {
        const query = content as LocationQuery;
        const data = await DataLoader.getLocations(query);
        setData(data);
      }
    };
    loadLocations();
  });

  const renderList = (boxColor = 'grey') => {
    if (!content.list) {
      return null;
    }

    return content.list.map((item, id) => {
      switch (item.type) {
        case 'button':
          return (
            <div key={id}>
              <ContentButton
                hideArrow
                buttonClass={`contentButton ${item.buttonColor ?? ''}`}
                item={item}
              />
            </div>
          );

        case 'link':
          return (
            <div className="oneImageAContainer" key={id}>
              <ContentLink
                item={item}
                buttonClass={`oneImageA ${
                  boxColor === 'black' ? 'inverted' : ''
                }`}
              />
            </div>
          );

        case 'text':
          return <div key={id}>{item.title}</div>;

        case 'event':
          return (
            <div className="oneImageEventDetails" key={id}>
              <div>{item.date}</div>
              <div>{item.location}</div>
            </div>
          );

        case 'arrow':
          return (
            <ContentButton
              onMouseEnter={() => {
                // needed to display last image if mismatched number of links and images
                if (content?.image1?.length && id > content?.image1?.length - 1)
                  setCurrentImage(content?.image1?.length - 1);
                else setCurrentImage(id);
              }}
              item={item}
              buttonClass="madAContainer"
            />
          );
        case 'downArrow':
          return (
            <img
              onClick={() => {
                if (nextItem)
                  document.getElementById(`item-${nextItem}`)?.scrollIntoView();
              }}
              className="downArrow"
              src="/static/svg/DownArrow.svg"
              width={25}
              height={25}
            />
          );
        default:
          return null;
      }
    });
  };
  const image1 = content.image1?.length
    ? content.image1[Math.floor(Math.random() * content.image1.length)]
    : undefined;
  console.log('selectedImage', content.image1);
  const heroBreakpoints = {
    320: 320,
    480: 480,
    640: 640,
    1280: 640,
    1920: 960,
    2560: 1280,
  };

  switch (content.style) {
    case 'oneImageYellow':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageYellowBox">
              <h1 className="oneImageH1 black">{content.header1}</h1>
              <h2 className="oneImageH2 black">{content.header2}</h2>
              <div className="oneImageText black">{content.text1}</div>
              <div className="oneImageText black">{content.text2}</div>
              <div className="oneImageText black">{content.text3}</div>
              <div className="oneImageText black">{content.text4}</div>
              <div className="oneImageList">{renderList()}</div>
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="black"
                  textDecoration="always"
                />
              )}
            </div>
            <ContentImage image={image1} className="oneImageImage" />
          </div>
        </div>
      );
    case 'oneImageRight':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition right">
            <div className="oneImageGreyBox right">
              <h1 className="oneImageH1">{content.header1}</h1>
              <h2 className="oneImageH2">{content.header2}</h2>
              <div className="oneImageText">{content.text1}</div>
              <div className="oneImageList">{renderList()}</div>
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="black"
                  textDecoration="always"
                />
              )}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage right"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );
    case 'oneImage':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreyBox">
              <h1 className="oneImageH1">{content.header1}</h1>
              <h2 className="oneImageH2">{content.header2}</h2>
              <div className="oneImageText">{content.text1}</div>
              <div className="oneImageText">{content.text2}</div>
              <div className="oneImageText">{content.text3}</div>
              <div className="oneImageText">{content.text4}</div>
              <div className="oneImageList">{renderList()}</div>
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="black"
                  textDecoration="always"
                />
              )}
            </div>
            <ContentImage image={image1} className="oneImageImage" />
          </div>
        </div>
      );

    case 'greenImage':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreenBox">
              <h1 className="oneImageH1">{content.header1}</h1>
              <h2 className="oneImageH2">{content.header2}</h2>
              <div className="oneImageText">{content.text1}</div>
              {renderList()}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'oneImageBlack':
      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageBlackBox">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList('black')}
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="white"
                  textDecoration="always"
                />
              )}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'oneImageBlackRight':
      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList('black')}
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="white"
                  textDecoration="always"
                />
              )}
            </div>
            <ContentImage
              image={image1}
              className="oneImageImage right secondImg extramrg"
            />
          </div>
        </div>
      );
    case 'oneImageBlackRightExtended':
      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox rightExtend">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList('black')}
              {content.calendar && (
                <AddToCalendar
                  className="one-image-calendar"
                  event={content.calendar}
                  color="white"
                  textDecoration="always"
                />
              )}
            </div>
            <ContentImage
              image={image1}
              className="oneImageImage right secondImg extramrg"
            />
          </div>
        </div>
      );
    case 'goRegionalEventsOneImageBlackRight':
      return (
        <div className="ContentItem oneImage goRegionalEventsMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList()}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage right secondImg"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'oneImageGreenRight':
      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageGreenBox right">
              <h1 className="oneImageH1 white">{content.header1}</h1>
              <h2 className="oneImageH2 white">{content.header2}</h2>
              <div className="oneImageText white">{content.text1}</div>
              {renderList()}
            </div>
            <ScaledImage
              image={image1}
              className="oneImageImage right secondImg bottom"
              breakpointSizes={heroBreakpoints}
            />
          </div>
        </div>
      );

    case 'greyTwoText':
      return (
        <div className="ContentItem greyTwoText">
          <div className="greyTwoTextH1">{content.header1}</div>
          <div className="greyTwoTextText">
            <div className="greyTwoTextJustText">{content.text1}</div>
            {renderList()}
          </div>
          <div className="greyTwoClear" />
        </div>
      );
    case 'youth':
      return data ? (
        <div className="ContentItem greyTwoText">
          <div className="greyTwoTextH1">{data[0].youth.age}</div>
          <div className="greyTwoTextText">
            <div className="greyTwoTextJustText">{data[0].youth.time}</div>
            <div className="greyTwoTextJustText">
              <a href={data[0].youth.location.googleMapLink}>
                {data[0].youth.location.name}
              </a>
              <div style={{ color: 'red' }}>
                Currently online due to Covid - email for details
              </div>
            </div>
            <div className="greyTwoTextJustText">
              <a href={'mailto:' + data[0].youth.mainContact.email}>
                {data[0].youth.mainContact.name}
              </a>{' '}
              | {data[0].youth.mainContact.phone}
            </div>

            <div className="greyTwoTextJustText">
              <div style={{ flexDirection: 'row' }}>
                <a href={data[0].youth.facebook}>
                  <img
                    className="FooterSocialImg"
                    src="/static/svg/Facebook.svg"
                    alt={'Facebook Logo'}
                    width={24}
                    height={24}
                  />
                </a>

                <a href={data[0].youth.instagram}>
                  <img
                    className="FooterSocialImg"
                    src="/static/svg/Instagram.svg"
                    alt={'Instagram Logo'}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="greyTwoClear" />
        </div>
      ) : (
        <div></div>
      );

    case 'pieChart':
      const raised = content.pieChart?.raised as number;
      const goal = content.pieChart?.goal as number;

      return (
        <div className="ContentItem pie-chart-flex">
          <div className="pie">
            <PieChart
              startAngle={270}
              lineWidth={25}
              data={[
                {
                  value: raised,
                  color: '#ffc60b',
                },
                {
                  value: Math.max(goal - raised, 0),
                  color: '#646469',
                },
              ]}
            />
            <div className="pieText">
              <div className="amount">
                ${content.pieChart?.raised.toLocaleString()}
              </div>
              <div className="text">{content.pieChart?.text}</div>
            </div>
          </div>
          <div className="greyTwoTextTextPieChart">
            <div className="greyTwoTextJustText">{content.text1}</div>
            {renderList()}
          </div>
        </div>
      );

    case 'banner-cards':
      return content.images?.length === 2 ? (
        <div className="ContentItem bannerCards">
          {content.images.map((img: BannerImage, index) => {
            return img.linkto ? (
              <Link to={img.linkto} newWindow={img.linkto.includes('http')}>
                <img
                  className="bannerCardImage"
                  key={index}
                  src={img.src}
                  alt={img.alt}
                />
              </Link>
            ) : (
              <img
                className="bannerCardImage"
                key={index}
                src={img.src}
                alt={img.alt}
              />
            );
          })}
        </div>
      ) : null;

    case 'greenTwoText':
      return (
        <div className="ContentItem greenTwoText">
          <div className="greenTwoTextH1">{content.header1}</div>
          <div className="greenTwoTextText">
            {content.text1}
            {renderList()}
          </div>
          <div className="greenTwoClear" />
        </div>
      );
    case 'mad':
      return (
        <div className="ContentItem">
          <div className="madPosition">
            <div
              className={`madContainer ${content.reverse ? 'madReverse' : ''}`}
            >
              <div className="madContainerDiv1">
                <h1 className="madH1">{content.header1}</h1>
                <div className="madText">{content.text1}</div>
                <div className="madList">{renderList()}</div>
              </div>

              <div
                className={`madContainerDiv2 ${
                  content.reverse ? 'madReverse' : ''
                }`}
              >
                <div
                  className={`madrec ${content.reverse ? 'madReverse' : ''}`}
                ></div>
                <div
                  className={`madImage ${content.reverse ? 'madReverse' : ''}`}
                >
                  {content?.image1?.map((image, index) => {
                    const shouldShow =
                      (content?.image1?.length &&
                        content.image1.length === 1) ||
                      index === currentImage;
                    const fadeStyle: CSSProperties = shouldShow
                      ? {
                          opacity: 1,
                          position: 'absolute',
                          top: 0,
                        }
                      : {
                          opacity: 0,
                          position: 'absolute',
                          top: 0,
                        };
                    if (content.reverse) fadeStyle.left = '4vw';
                    return (
                      <ContentImage
                        key={image.src}
                        image={image1}
                        className="madImage"
                        style={fadeStyle}
                        noShowOnStartup
                      />
                      // <FadeImage
                      //   noShowOnStartup
                      //   key={image.src}
                      //   imageSrc={image.src ?? ''}
                      //   alt={image.alt ?? ''}
                      //   style={fadeStyle}
                      //   className="madImage"
                      //   breakpointSizes={heroBreakpoints}
                      // />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
export default withRouter(ContentItem);
