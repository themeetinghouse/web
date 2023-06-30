import React, { EventHandler, SyntheticEvent, CSSProperties } from 'react';
import { Button } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import AddToCalendar, { Event } from '../AddToCalendar/AddToCalendar';
import './HeroItem.scss';
import Select from 'react-select';
import DataLoader, { LocationQuery } from './DataLoader';
import moment from 'moment';
import { ScaledImage } from 'components/ScaledImage';
import { Link, LinkButton } from 'components/Link/Link';
import { TMHLocation, TMHLocationMeeting } from 'API';
import { Storage } from 'aws-amplify';
import FadeImage from 'components/ScaledImage/FadeImage';
function RenderLinkButton({
  buttonInfo,
  buttonClass,
}: {
  buttonInfo: any;
  buttonClass?: string;
}) {
  if (!buttonInfo) return null;
  const [link, setLink] = React.useState(buttonInfo.action);
  React.useEffect(() => {
    (async () => {
      if (buttonInfo.action.includes('editor/pdfs')) {
        const newLink = await Storage.get(buttonInfo.action);
        setLink(newLink);
      } else {
        setLink(buttonInfo.action);
      }
    })();
  }, [buttonInfo.action]);
  const customStyle = buttonInfo.buttonColor ?? '';
  return buttonInfo.text ? (
    <LinkButton
      aria-label={buttonInfo.description}
      className={`${buttonClass} ${customStyle}`}
      to={link}
    >
      {buttonInfo.text}
    </LinkButton>
  ) : null;
}
function RenderLink({
  link1Action,
  link1Text,
  link1AriaLabel,
  linkClass,
}: {
  link1Action: string;
  link1Text: string;
  link1AriaLabel?: string;
  linkClass?: string;
}) {
  const [link, setLink] = React.useState(link1Action);
  React.useEffect(() => {
    (async () => {
      if (link1Action.includes('editor/pdfs')) {
        const newLink = await Storage.get(link1Action);
        setLink(newLink);
      } else {
        setLink(link1Action);
      }
    })();
  }, [link1Action]);
  console.log('newButton', { link1Action });
  return (
    <Link className={linkClass} to={link} aria-label={link1AriaLabel}>
      {link1Text}
    </Link>
  );
}
function HeroImage({
  className,
  content,
}: {
  className: string;
  content: any;
}) {
  const [image1, setImage1] = React.useState({
    src: '',
    alt: '',
  });
  React.useEffect(() => {
    const image =
      content.image1[Math.floor(Math.random() * content.image1.length)];
    if (image?.src?.includes('editor')) {
      const imageKey = image.src[0] === '/' ? image.src.slice(1) : image.src;
      Storage.get(imageKey).then(async (url) => {
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
  }, [content]);
  if (!image1.src) return null;
  function fadeIn(style: CSSStyleDeclaration) {
    style.transition = 'opacity 1s';
    style.opacity = '1';
    return style;
  }
  let onLoad: EventHandler<SyntheticEvent<HTMLImageElement>> | undefined;
  let style: CSSProperties | undefined;
  if (
    className === 'heroImage' ||
    className === 'partial' ||
    className === 'partialConnectImage' ||
    className === 'partialNoFooterImage'
  ) {
    onLoad = (event) => fadeIn(event.currentTarget.style);
    style = { opacity: 0 };
  }
  return image1.src.includes('.svg') ? (
    <img src={image1.src} alt={image1.alt} className={className} />
  ) : (
    <FadeImage
      imageSrc={image1.src}
      alt={image1.alt}
      className={className}
      style={style}
      onLoad={onLoad}
      breakpointSizes={{
        320: 320,
        480: 480,
        640: 640,
        1280: 1280,
        1920: 1920,
        2560: 2560,
      }}
    />
  );
}
interface Props extends RouteComponentProps {
  content: LocationQuery;
  data: any;
}
interface State {
  content: any;
  locationData: TMHLocation[];
  arrowOpacity: any;
  currentLocation: TMHLocation | null;
}
class HeroItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      locationData: [],
      arrowOpacity: 1,
      currentLocation: null,
    };
    this.navigate = this.navigate.bind(this);
    this.setData = this.setData.bind(this);
  }
  async componentDidUpdate(prevProps: Props) {
    console.log({ prevProps });
    if (prevProps.content !== this.props.content) {
      this.setState({ content: this.props.content });
    }
    if (prevProps.content.filterValue !== this.state.currentLocation?.id) {
      const query = this.props.content;
      if (query.class === 'locations' || query.class === 'region') {
        if (query.style === 'locationPage') {
          console.log('location', query);
          if (!query.filterValue) return;
          const data = await DataLoader.getTMHLocation(query.filterValue);
          if (data.data?.getTMHLocation) {
            this.setState({ currentLocation: data.data.getTMHLocation });
          }
        } else {
          console.log('REGION');
          const data = await DataLoader.listTMHLocations();
          this.setData(data as TMHLocation[]);
        }
      }
    }
  }
  async componentDidMount() {
    const query = this.props.content;
    if (query.class === 'locations' || query.class === 'region') {
      if (query.style === 'locationPage') {
        console.log('location', query);
        if (!query.filterValue) return;
        const data = await DataLoader.getTMHLocation(query.filterValue);
        if (data.data?.getTMHLocation) {
          this.setState({
            currentLocation: data.data.getTMHLocation as TMHLocation,
          });
        }
      } else {
        console.log('REGION');
        const data = await DataLoader.listTMHLocations();
        this.setData(data as TMHLocation[]);
      }
    }
  }

  setData(data: TMHLocation[]) {
    this.setState({
      locationData: this.state.locationData.concat(data),
    });
  }
  getNextMeetingDate(meeting: TMHLocationMeeting) {
    const now = moment();
    const past = moment(meeting?.date, 'YYYY-MM-DD');
    const daysSinceLastMeeting = now.diff(past, 'days');
    const daysToAdd =
      meeting.frequency === 'WEEKLY'
        ? 7
        : meeting.frequency === 'BIWEEKLY'
        ? 14
        : meeting.frequency === 'MONTHLY'
        ? 28
        : 7; //defaults to weekly
    for (let i = 0; i < daysSinceLastMeeting; i += daysToAdd) {
      if (meeting.frequency === 'WEEKLY') {
        past.add(daysToAdd, 'days');
      } else if (meeting.frequency === 'BIWEEKLY') {
        past.add(daysToAdd, 'days');
      } else if (meeting.frequency === 'MONTHLY') {
        past.add(daysToAdd, 'days');
      } else {
        past.add(7, 'days');
      }
    }
    const startingDateTime = moment(
      past.format('YYYY-MM-DD') + ' ' + meeting.startTime,
      'YYYY-MM-DD HH:mm:ss'
    );
    const endingDateTime = moment(
      past.format('YYYY-MM-DD') + ' ' + meeting.endTime,
      'YYYY-MM-DD HH:mm:ss'
    );
    return { startingDateTime, endingDateTime };
  }

  getCalendarEventForMeeting(
    location: TMHLocation,
    meeting: TMHLocationMeeting
  ): Event {
    const { startingDateTime, endingDateTime } =
      this.getNextMeetingDate(meeting);
    const event = {
      title: meeting?.name ?? '',
      description: '',
      summary: meeting?.description ?? '',
      location: location.location?.name ?? '',
      start: startingDateTime.format('YYYYMMDDTHHmmssZ'),
      end: endingDateTime.format('YYYYMMDDTHHmmssZ'),
    };
    return event;
  }

  locationChange(item: any) {
    this.props.history.push('/communities/' + item.value);
  }
  navigate() {
    this.props.history.push('spirituality', 'as');
  }
  navigateTo(location: string) {
    if (location.includes('.')) {
      window.location.href = location;
    } else {
      this.props.history.push(location, 'as');
    }
  }
  smoothScrollTo(endX: any, endY: any, duration: any) {
    const startX = window.scrollX || window.pageXOffset,
      startY = window.scrollY || window.pageYOffset,
      distanceX = endX - startX,
      distanceY = endY - startY,
      startTime = new Date().getTime();

    // Easing function
    const easeInOutQuart = function (
      time: any,
      from: any,
      distance: any,
      duration: any
    ) {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = window.setInterval(function () {
      const time = new Date().getTime() - startTime,
        newX = easeInOutQuart(time, startX, distanceX, duration),
        newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        window.clearInterval(timer);
      }
      window.scrollTo(newX, newY);
    }, 1000 / 60); // 60 fps
  }
  scrollToNextPage() {
    const pos = window.outerHeight;
    if ('scrollBehavior' in document.documentElement.style) {
      //Checks if browser supports scroll function
      window.scroll({
        top: pos,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      this.smoothScrollTo(0, pos, 500); //polyfill below
    }
  }

  private fadeIn(style: CSSStyleDeclaration) {
    style.transition = 'opacity 1s';
    style.opacity = '1';
  }

  downArrowScroll() {
    //console.log(window.scrollY)
    const downArrow = document.getElementById('downArrow');
    if (downArrow)
      downArrow.style.opacity = (1 - window.scrollY / 250).toString();
  }

  renderEmailSignup() {
    return (
      <div>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <div id="mc_embed_signup" className="signupContainer">
          <form
            action="https://themeetinghouse.us8.list-manage.com/subscribe/post?u=3c4d56c1d635f336d8656e9dd&amp;id=3cb55a9826"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll" className="signupButtons">
              <div className="emailWrapper">
                <img
                  className="contactIcon"
                  alt="Contac Icon"
                  src="/static/svg/Contact.svg"
                ></img>
                <input
                  aria-label="Email Address"
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                />
              </div>
              <input
                aria-label="Subscribe"
                type="submit"
                value="Sign Me Up"
                name="subscribe"
                className="heroButton"
                id="mc-embedded-subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderHeroImage(className: string) {
    const image1 =
      this.state.content.image1[
        Math.floor(Math.random() * this.state.content.image1.length)
      ];
    let onLoad: EventHandler<SyntheticEvent<HTMLImageElement>> | undefined;
    let style: CSSProperties | undefined;
    if (className === 'heroImage') {
      onLoad = (event) => this.fadeIn(event.currentTarget.style);
      style = { opacity: 0 };
    }
    return image1.src.includes('.svg') ? (
      <img src={image1.src} alt={image1.alt} className={className} />
    ) : (
      <ScaledImage
        image={image1}
        className={className}
        style={style}
        onLoad={onLoad}
        breakpointSizes={{
          320: 320,
          480: 480,
          640: 640,
          1280: 1280,
          1920: 1920,
          2560: 2560,
        }}
      />
    );
  }

  renderButton(buttonInfo: any, className: string): any {
    if (!buttonInfo) return null;
    return buttonInfo.text ? (
      <Button
        aria-label={buttonInfo.description}
        className={className}
        onClick={() => {
          this.navigateTo(buttonInfo.action);
        }}
      >
        {buttonInfo.text}
      </Button>
    ) : null;
  }

  renderButtonContainer(): any {
    return (
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          gridAutoFlow: 'column',
          gap: '24px',
          marginTop: 24,
        }}
      >
        {this.state.content.button1
          ? this.renderButton(
              this.state.content.button1,
              `heroButton ${this.state.content.button1.white ? 'white' : ''}`
            )
          : null}
        {this.state.content.button2
          ? this.renderButton(
              this.state.content.button2,
              `heroButton ${this.state.content.button2.white ? 'white' : ''}`
            )
          : null}
      </div>
    );
  }
  renderSecondaryCTA(buttonInfo: any) {
    if (!buttonInfo) return null;
    return (
      <Link
        to={buttonInfo.action}
        className="secondaryCTA"
        style={{
          marginTop: 20,
        }}
        aria-label={buttonInfo.description}
      >
        {buttonInfo.icon ? (
          <img
            className="calendarImage"
            src={buttonInfo.icon}
            alt={`${buttonInfo.text} Icon`}
          />
        ) : null}
        {buttonInfo.text}
      </Link>
    );
  }

  render() {
    window.onscroll = () => {
      this.downArrowScroll();
    };
    const activeLocation = this.state.locationData.filter(
      (loc) => loc.id == this.state.content.filterValue
    )[0];
    if (this.state.content.style === 'full') {
      console.log({ content: this.state.content });
      return (
        <div className="headerItem heroItem">
          <div
            className="heroImageGradient"
            onClick={() => {
              this.scrollToNextPage();
            }}
          ></div>
          {/*this.renderHeroImage('heroImage')*/}
          <HeroImage className="heroImage" content={this.props.content} />
          <div className="heroBlackBox">
            <h1 className="heroH1">{this.state.content.header1}</h1>
            {this.state.content.header2 && (
              <h2 className="heroH2">{this.state.content.header2}</h2>
            )}
            {this.state.content.hideHr ? null : <hr className="heroHr"></hr>}
            {this.state.content.autoSite ? (
              <>
                <h1 className="heroH1">{activeLocation?.name}</h1>
                <h2 className="heroH2">
                  {/* {activeLocation?.location?.address}*/}
                </h2>
                <div className="heroText1">{/* serviceTimeDescription*/}</div>
              </>
            ) : null}
            {this.state.content.class == 'region' ? (
              <div style={{ width: '32vw' }}>
                {this.state.locationData.map((z) => {
                  return (
                    <div key={z.id} className="heroHover">
                      <div
                        style={{
                          width: '32vw',
                          borderBottomWidth: 1,
                          borderBottomStyle: 'solid',
                          borderColor: '#ffffff',
                        }}
                      >
                        <a href={'/' + z.id}>
                          <span
                            className="heroText1"
                            style={{ display: 'inline-block', width: '27vw' }}
                          >
                            {z.regionShortName}
                          </span>
                        </a>
                        <span
                          className="heroText1"
                          style={{
                            display: 'inline-block',
                            width: '2vw',
                          }}
                        >
                          <a href={'mailto:' + z.pastorEmail}>
                            <button className="calendarButton contactPastor">
                              <img
                                className="calendarImageRegion"
                                src="/static/svg/Contact-white.svg"
                                alt="Contact Icon"
                              />
                            </button>
                          </a>
                        </span>
                        <span
                          className="heroText1"
                          style={{
                            display: 'inline-block',
                            width: '3vw',
                          }}
                        >
                          {z?.meetings?.[0] ? (
                            <AddToCalendar
                              textDecoration="always"
                              color="white"
                              isIcon={true}
                              event={this.getCalendarEventForMeeting(
                                z,
                                z?.meetings?.[0]
                              )}
                            />
                          ) : null}
                        </span>
                      </div>
                      <div className="heroText1">
                        <a href={'/' + z.id}>
                          <span
                            className="heroText1"
                            style={{
                              display: 'inline-block',
                              width: '32vw',
                            }}
                          >
                            {/*z.serviceTimeDescription*/}
                          </span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
            <div className="heroText1">{this.state.content.text1}</div>
            <div className="heroText2">{this.state.content.text2}</div>
            <div className="heroText2">{this.state.content.text3}</div>
            <div className="heroText2">{this.state.content.text4}</div>
            <div className="heroText2">{this.state.content.text5}</div>
            <div className="heroText2">{this.state.content.text6}</div>
            <div className="heroText2">{this.state.content.text7}</div>
            <div className="contactPastorLink">
              <RenderLinkButton
                buttonInfo={this.state.content.button1}
                buttonClass="heroButton"
              />
              {moment().weekday() === 0 && this.state.locationData.length ? ( // Is Sunday
                <Link
                  to={'/live'}
                  className="calendarButton"
                  style={{ color: 'white', paddingLeft: 0, paddingRight: 32 }}
                  aria-label="Watch Livestream"
                >
                  <img
                    height={25}
                    className="calendarImage"
                    src="/static/svg/Youtube.svg"
                    alt="Play Icon"
                  />
                  Watch Live
                </Link>
              ) : moment().format('YYYY-MM-DD') === '2021-04-02' &&
                this.state.locationData.length ? ( // Is good friday
                <Link
                  to={this.state.content.customLiveLink ?? '/live'}
                  className="calendarButton"
                  style={{ color: 'white', paddingLeft: 0, paddingRight: 32 }}
                  aria-label="Watch Livestream"
                >
                  <img
                    height={25}
                    className="calendarImage"
                    src="/static/svg/Youtube.svg"
                    alt="Play Icon"
                  />
                  Watch Live
                </Link>
              ) : this.state.content.addToCalendar ? (
                this.state.locationData.length === 1 &&
                this.state.currentLocation &&
                this.state.currentLocation?.meetings?.[0] ? (
                  <AddToCalendar
                    style={{ marginRight: 25 }}
                    textDecoration="always"
                    color="white"
                    event={this.getCalendarEventForMeeting(
                      this.state.currentLocation,
                      this.state.currentLocation.meetings[0]
                    )}
                  />
                ) : null
              ) : this.state.content.secondaryCTA ? (
                this.renderSecondaryCTA(this.state.content.secondaryCTA)
              ) : null}
              {this.state.content.contactPastor ? (
                this.state.locationData.length === 1 ? (
                  <a href={'mailto:' + this.state.locationData[0].pastorEmail}>
                    <button className="calendarButton contactPastor">
                      <img
                        className="calendarImage"
                        src="/static/svg/Contact-white.svg"
                        alt="Contact Icon"
                      />
                      Contact Pastor
                    </button>
                  </a>
                ) : null
              ) : null}
            </div>
            {this.state.content.link1Text ? (
              <div className="heroAContainer">
                <RenderLink
                  linkClass="heroBlackBoxA inverted"
                  link1Text={this.state.content.link1Text}
                  link1Action={this.state.content.link1Action}
                  link1AriaLabel={this.state.content.link1AriaLabel}
                />
              </div>
            ) : null}
            <br />
          </div>
          {this.state.content.showSpecial ? (
            <div className="covidButton">
              <Button
                onClick={() => {
                  this.navigateTo(this.state.content.showSpecialNavigateTo);
                }}
                className="covidButtonDetail"
              >
                {this.state.content.showSpecialText}
              </Button>
            </div>
          ) : null}
          <div>
            <img
              id="downArrow"
              style={{ opacity: this.state.arrowOpacity, cursor: 'pointer' }}
              src="/static/svg/DownArrow.svg"
              className="downarrow animated bounce"
              alt="Down Arrow"
              onClick={() => {
                this.scrollToNextPage();
              }}
            />{' '}
          </div>
        </div>
      );
    } else if (this.state.content.style === 'locationPage') {
      console.log({ a1: this.state.content });
      return (
        <div className="headerItem heroItem">
          <div
            className="heroImageGradient"
            onClick={() => {
              this.scrollToNextPage();
            }}
          ></div>
          <HeroImage className="heroImage" content={this.props.content} />
          {this.state.content.showSpecial ? (
            <div className="covidButton">
              <Button
                onClick={() => {
                  this.navigateTo(this.state.content.showSpecialNavigateTo);
                }}
                className="covidButtonDetail"
              >
                {this.state.content.showSpecialText}
              </Button>
            </div>
          ) : null}
          <div className="heroBlackBox">
            {this.state.content.header1 ? (
              <h1 className="heroH1">{this.state.content.header1}</h1>
            ) : null}
            {this.state.content.header2 && (
              <h2 className="heroH2">{this.state.content.header2}</h2>
            )}
            {this.state.content.hideHr || this.state.content.autoSite ? null : (
              <hr className="heroHr"></hr>
            )}
            {this.state.content.autoSite ? (
              <>
                <h1
                  className="heroH1"
                  style={{
                    letterSpacing: '-0.5px',
                  }}
                >
                  {this.state.currentLocation?.name}
                </h1>
                {this.state.content.hideHr ? null : (
                  <hr className="heroHr"></hr>
                )}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${this.state.currentLocation?.location?.latitude},${this.state.currentLocation?.location?.longitude}`}
                  style={{
                    fontSize: 16,
                    color: '#FFF',
                    textDecoration: 'underline',
                    textDecorationThickness: 1.5,
                    textUnderlineOffset: 4,
                  }}
                >
                  {this.state.currentLocation?.location?.name}
                </a>
                {this.state.currentLocation?.meetings
                  ?.sort((meetingA, meetingB) => {
                    if (!meetingA || !meetingB) return 0;
                    const today = moment();
                    const meetingADate = this.getNextMeetingDate(meetingA);
                    const meetingBDate = this.getNextMeetingDate(meetingB);
                    if (!meetingADate || !meetingBDate) return 0;
                    return (
                      meetingADate.startingDateTime.diff(today) -
                      meetingBDate.startingDateTime.diff(today)
                    );
                  })
                  .map((meeting) => {
                    console.log({ meeting });
                    if (!meeting) return;
                    const nextMeetingDate = this.getNextMeetingDate(meeting);
                    console.log({ nextMeetingDate });
                    const numMeetings =
                      this.state.currentLocation?.meetings?.length ?? 0;
                    return (
                      <>
                        <div
                          className="heroText2"
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 16,
                            marginBottom: 16,
                          }}
                        >
                          <span
                            style={{
                              flexDirection: 'column',
                              display: 'flex',
                              marginRight: 8,
                              flex: 1,
                            }}
                          >
                            <span
                              style={{
                                fontSize: 14,
                                fontWeight: 600,
                              }}
                            >
                              {meeting?.name}
                            </span>
                            <span
                              style={{
                                fontSize: 14,
                                color: '#C8C8C8',
                              }}
                            >
                              {meeting?.description ? (
                                <span
                                  style={{
                                    fontSize: 14,
                                    fontWeight: 300,
                                    color: '#C8C8C8',
                                  }}
                                >
                                  {meeting?.description}
                                </span>
                              ) : null}
                              <span
                                style={{
                                  display: 'block',
                                }}
                              >
                                {meeting?.frequency === 'WEEKLY'
                                  ? `Every ${nextMeetingDate.startingDateTime.format(
                                      'dddd h:mm a'
                                    )}`
                                  : `Meets on ${nextMeetingDate.startingDateTime.format(
                                      'LLLL'
                                    )}
                                      `}
                              </span>
                            </span>
                          </span>
                          {numMeetings > 1 &&
                          this.state.currentLocation &&
                          this.state.content.addToCalendar ? (
                            <AddToCalendar
                              textDecoration="always"
                              color="white"
                              isIcon={true}
                              event={this.getCalendarEventForMeeting(
                                this.state.currentLocation,
                                meeting
                              )}
                            />
                          ) : null}
                        </div>
                      </>
                    );
                  })}
              </>
            ) : null}
            <div className="heroText1">{this.state.content.text1}</div>
            <div className="contactPastorLink">
              {this.state.currentLocation?.meetings?.length === 1 &&
              this.state.currentLocation?.meetings?.[0] &&
              this.state.content.addToCalendar ? (
                <AddToCalendar
                  style={{ marginRight: 25 }}
                  textDecoration="always"
                  color="white"
                  event={{
                    summary:
                      this.state.currentLocation?.meetings?.[0]?.name ?? '',
                    description:
                      this.state.currentLocation?.meetings?.[0]?.description ??
                      '',
                    location: this.state.currentLocation?.location?.name ?? '',
                    start: this.getNextMeetingDate(
                      this.state.currentLocation
                        ?.meetings?.[0] as TMHLocationMeeting
                    ).startingDateTime.format('YYYYMMDDTHHmmssZ'),
                    end: this.getNextMeetingDate(
                      this.state.currentLocation
                        ?.meetings?.[0] as TMHLocationMeeting
                    ).endingDateTime.format('YYYYMMDDTHHmmssZ'),
                    url: 'https://themeetinghouse.com/live',
                  }}
                />
              ) : null}
              {this.state.currentLocation?.pastorEmail &&
              this.state.content.contactPastor ? (
                <a href={'mailto:' + this.state.currentLocation?.pastorEmail}>
                  <button className="calendarButton contactPastor">
                    <img
                      className="calendarImage"
                      src="/static/svg/Contact-white.svg"
                      alt="Contact Icon"
                    />
                    Contact Pastor
                  </button>
                </a>
              ) : null}
            </div>
            <br />
          </div>
          <div>
            <img
              id="downArrow"
              style={{ opacity: this.state.arrowOpacity, cursor: 'pointer' }}
              src="/static/svg/DownArrow.svg"
              className="downarrow animated bounce"
              alt="Down Arrow"
              onClick={() => {
                this.scrollToNextPage();
              }}
            />{' '}
          </div>
        </div>
      );
    } else if (this.state.content.style === 'partialNoFooter') {
      return (
        <div className="partialNoFooter">
          <HeroImage
            className="partialNoFooterImage"
            content={this.props.content}
          />
          <div className="partialNoFooterBox">
            <h1 className="heroH1">{this.state.content.header1}</h1>
            {this.state.content.header2 && (
              <h2 className="heroH2">{this.state.content.header2}</h2>
            )}
            <hr className="partialNoFooterBoxHr"></hr>
            <div className="heroText1">{this.state.content.text1}</div>
            <div className="heroText1">{this.state.content.text2}</div>
            <div className="heroText2">{this.state.content.text3}</div>
            <div className="heroText2">{this.state.content.text4}</div>
            <div className="heroText2">{this.state.content.text5}</div>
            <div className="heroText2">{this.state.content.text6}</div>
            <div className="heroText2">{this.state.content.text7}</div>
            {this.state.content.showLocationSearch ? (
              <div>
                {this.state.locationData && (
                  <Select
                    onChange={(item) => {
                      this.locationChange(item);
                    }}
                    styles={{
                      placeholder: (styles) => {
                        return { ...styles, color: '#484848' };
                      },
                      menuPortal: (styles) => ({ ...styles, zIndex: 999 }), //  >= dialog's z-index
                    }}
                    aria-label="Church Search By City"
                    placeholder="Select city"
                    className="partialNoFooterLocationDropDown"
                    classNamePrefix="react-select-custom"
                    options={this.state.locationData
                      ?.filter((tmhLocation) => tmhLocation?.showInLocationList)
                      .map((item) => {
                        return { label: item.name, value: item.id };
                      })}
                  />
                )}
              </div>
            ) : null}
            {this.renderButton(this.state.content.button1, 'heroItemButton')}
            <RenderLink
              link1Action={this.state.content.link1Action}
              link1Text={this.state.content.link1Text}
              linkClass="inverted"
              link1AriaLabel={this.state.content.link1AriaLabel}
            />
            {this.state.content.addToCalendar ? (
              <Button className="heroItemButton" onClick={this.navigate}>
                <img
                  src="/static/svg/Calendar, Add To.svg"
                  alt="Calendar Icon"
                />
                Add To Calendar
              </Button>
            ) : null}
            {this.state.content.register ? (
              <Button className="heroItemButton" onClick={this.navigate}>
                <img src="/static/svg/Register-white.svg" alt="Register Icon" />
                Register
              </Button>
            ) : null}
            {this.state.content.contactPastor ? (
              <Button className="heroItemButton" onClick={this.navigate}>
                <img src="/static/svg/Contact.svg" alt="Contact Icon" />
                Contact Pastor
              </Button>
            ) : null}
          </div>
        </div>
      );
    } else if (this.state.content.style === 'partial') {
      return (
        <div className="headerItem divPartial">
          <HeroImage className="partial" content={this.props.content} />
          <div className="heroPartialBlackBox">
            <h1 className="heroH1">{this.state.content.header1}</h1>
            {this.state.content.header2 && (
              <h2 className="heroH2">{this.state.content.header2}</h2>
            )}
            <hr className="heroHr"></hr>
            <div className="heroText1">{this.state.content.text1}</div>
            <div className="heroText2">{this.state.content.text2}</div>
            <div className="heroText2">{this.state.content.text3}</div>
            <div className="heroText2">{this.state.content.text4}</div>
            <div className="heroText2">{this.state.content.text5}</div>
            <div className="heroText2">{this.state.content.text6}</div>
            <div className="heroText2">{this.state.content.text7}</div>
            {this.state.content.showLocationSearch ? (
              <div>
                {this.state.locationData && (
                  <Select
                    menuPortalTarget={document.querySelector('body')}
                    styles={{
                      placeholder: (styles) => {
                        return { ...styles, color: '#484848' };
                      },
                      menuPortal: (styles) => ({ ...styles, zIndex: 999 }), //  >= dialog's z-index
                    }}
                    onChange={(item) => {
                      this.locationChange(item);
                    }}
                    aria-label="Church Search By City"
                    placeholder="Select city"
                    className="partialLocationDropDown"
                    classNamePrefix="react-select-custom"
                    options={this.state.locationData
                      ?.filter((tmhLocation) => tmhLocation?.showInLocationList)
                      .map((item) => {
                        return { label: item.name, value: item.id };
                      })
                      .sort((a, b) => {
                        return a.label.localeCompare(b.label);
                      })}
                  />
                )}
              </div>
            ) : null}
            {this.renderButton(this.state.content.button1, 'heroButton')}

            {this.state.content.link1Text ? (
              <div className="heroAContainer">
                <RenderLink
                  linkClass="HeroItemA2 inverted"
                  link1Action={this.state.content.link1Action}
                  link1AriaLabel={this.state.content.link1AriaLabel}
                  link1Text={this.state.content.link1Text}
                />
              </div>
            ) : null}
            {this.state.content.addToCalendar ? (
              <Button className="heroItemButton" onClick={this.navigate}>
                <img src="/static/Calendar.png" alt="Calendar Icon" />
                Add To Calendar
              </Button>
            ) : null}
            {this.state.content.register ? (
              <Button className="heroItemButton" onClick={this.navigate}>
                <img src="/static/Register.png" alt="Register Icon" />
                Register
              </Button>
            ) : null}
            {this.state.content.contactPastor ? (
              <Button className="heroItemButton" onClick={this.navigate}>
                <img src="/static/Contact.png" alt="Contact Icon" />
                Contact Pastor
              </Button>
            ) : null}
          </div>
        </div>
      );
    } else if (this.state.content.style === 'connect') {
      return (
        <>
          <div className="partialConnect">
            <HeroImage
              className="partialConnectImage"
              content={this.props.content}
            />
            <div className="partialConnectBox">
              <h1 className="heroH1">{this.state.content.header1}</h1>
              {this.state.content.header2 && (
                <h2 className="heroH2">{this.state.content.header2}</h2>
              )}
              <hr className="heroHr"></hr>
              <div className="heroText1">{this.state.content.text1}</div>
              <div className="heroText2">{this.state.content.text2}</div>
              <div className="heroText2">{this.state.content.text3}</div>
              <div className="heroText2">{this.state.content.text4}</div>
              <div className="heroText2">{this.state.content.text5}</div>
              <div className="heroText2">{this.state.content.text6}</div>
              <div className="heroText2">{this.state.content.text7}</div>
              {!this.state.content.button1
                ? this.renderEmailSignup()
                : this.renderButtonContainer()}
            </div>
          </div>

          {this.state.content.hasFooter ? (
            <div style={{ height: '5vw' }}></div>
          ) : null}
        </>
      );
    } else return null;
  }
}

export default withRouter(HeroItem);
