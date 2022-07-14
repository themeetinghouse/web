import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import AddToCalendar from 'components/AddToCalendar/AddToCalendar';
import { Link, LinkButton } from 'components/Link/Link';
import ShareDropdown from 'components/Share/ShareDropdown';
import moment from 'moment-timezone';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { ListLivestreamsQuery } from '../../API';
import * as customQueries from '../../graphql-custom/customQueries';
import * as queries from '../../graphql/queries';
import './VideoPlayerLive.scss';

type LiveData = NonNullable<
  NonNullable<NonNullable<ListLivestreamsQuery['listLivestreams']>['items']>[0]
>;

interface Props {
  content: any;
}
interface State {
  content: any;
  listData: any;
  kidData: any;
  isLive: boolean;
  liveEvent: LiveData | null;
  shareOpen: boolean;
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listData: null,
      kidData: null,
      content: props.content,
      isLive: false,
      liveEvent: null,
      shareOpen: false,
    };
    this.getLive();
    const getVideoByVideoType: any = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables: {
        sortDirection: 'DESC',
        limit: 2,
        videoTypes: 'adult-sunday',
        publishedDate: { lt: 'a' },
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
    getVideoByVideoType
      .then((json: any) => {
        console.log('Success customQueries.getVideoByVideoType: ' + json);
        this.setState({
          listData: json.data.getVideoByVideoType.items,
        });
      })
      .catch((e: any) => {
        console.log(e);
      });

    const getVideoByVideoType1: any = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables: {
        sortDirection: 'DESC',
        limit: 1,
        videoTypes: 'ky-kids',
        publishedDate: { lt: 'a' },
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
    const getVideoByVideoType2: any = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables: {
        sortDirection: 'DESC',
        limit: 1,
        videoTypes: 'ky-jrhigh',
        publishedDate: { lt: 'a' },
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
    const getVideoByVideoType3: any = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables: {
        sortDirection: 'DESC',
        limit: 1,
        videoTypes: 'ky-youth',
        publishedDate: { lt: 'a' },
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
    const getVideoByVideoType4: any = API.graphql({
      query: customQueries.getVideoByVideoType,
      variables: {
        sortDirection: 'DESC',
        limit: 1,
        videoTypes: 'preschool',
        publishedDate: { lt: 'a' },
      },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    });
    getVideoByVideoType1
      .then((json1: any) => {
        console.log({ 'Success customQueries.getVideoByVideoType: ': json1 });
        this.setState({
          kidData: json1.data.getVideoByVideoType.items,
        });
        getVideoByVideoType2
          .then((json2: any) => {
            console.log({
              'Success customQueries.getVideoByVideoType: ': json2,
            });
            this.setState({
              kidData: this.state.kidData.concat(
                json2.data.getVideoByVideoType.items
              ),
            });
            getVideoByVideoType3
              .then((json3: any) => {
                console.log({
                  'Success customQueries.getVideoByVideoType: ': json3,
                });
                this.setState({
                  kidData: this.state.kidData.concat(
                    json3.data.getVideoByVideoType.items
                  ),
                });
                getVideoByVideoType4
                  .then((json4: any) => {
                    console.log({
                      'Success customQueries.getVideoByVideoType: ': json4,
                    });
                    this.setState({
                      kidData: this.state.kidData.concat(
                        json4.data.getVideoByVideoType.items
                      ),
                    });
                  })
                  .catch((e: any) => {
                    console.log(e);
                  });
              })
              .catch((e: any) => {
                console.log(e);
              });
          })
          .catch((e: any) => {
            console.log(e);
          });
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  getEvent() {
    let nextSunday;
    if (moment().day() === 0 && moment().isBefore(moment('10:00', 'hh:mm')))
      nextSunday = moment().startOf('day');
    else nextSunday = moment().add(1, 'week').day(0).startOf('day');
    nextSunday = nextSunday.hour(10);
    const event = {
      summary: 'Church at The Meeting House',
      description: 'Join us at The Meeting House on Sunday!',
      start: nextSunday.format(),
      url: 'https://themeetinghouse.com/live',
      end: moment(nextSunday).add(90, 'minutes').format(),
    };
    return event;
  }
  async getLive() {
    const today = moment.tz('America/Toronto').format('YYYY-MM-DD');
    try {
      const json = (await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListLivestreamsQuery>;
      if (json.data?.listLivestreams?.items) {
        for (const item of json.data?.listLivestreams?.items) {
          if (item?.liveYoutubeId && !item?.id.includes('CustomEvent')) {
            const rightNow = moment().tz('America/Toronto').format('HH:mm');
            const showTime =
              item?.startTime &&
              item?.endTime &&
              rightNow >= item.startTime &&
              rightNow <= item.endTime;
            if (showTime) {
              this.setState({ liveEvent: item });
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  tick() {
    const start = this.state.liveEvent?.videoStartTime;
    const end = this.state.liveEvent?.endTime;
    const rightNow = moment().tz('America/Toronto').format('HH:mm');
    if (start && end) {
      const showTime = rightNow >= start && rightNow <= end;
      if (showTime) {
        console.log('ShowLive2');
        this.setState({ isLive: true });
      }
    } else {
      this.setState({ isLive: false });
    }
  }
  interval: any;
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const featuredItem = this.state.liveEvent?.menu?.filter(
      (a) => a?.linkType.toLowerCase() === 'featured'
    );
    if (this.state.liveEvent) {
      return (
        <div className="LiveVideoPlayerDiv">
          {this.state.isLive ? (
            <div>
              {this.state.liveEvent.liveVimeoId ? (
                <iframe
                  src={this.state.liveEvent.liveVimeoId}
                  className="LiveVideoPlayerIframe"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <iframe
                  title="Live Teaching"
                  className="LiveVideoPlayerIframe"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    this.state.liveEvent.liveYoutubeId +
                    '?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              )}
              <div className="LiveVideoPlayerTitle">
                Livestream
                <div className="ShareButtonDesktop">
                  <ShareDropdown
                    bgColor="white-bg"
                    shareType="livestream"
                    buttonType="wide"
                  />
                </div>
              </div>
              <br />
            </div>
          ) : (
            <div>
              <iframe
                title="Teaching Pre-roll"
                className="LiveVideoPlayerIframe"
                allowFullScreen
                src={
                  'https://www.youtube.com/embed/' +
                  this.state.liveEvent.prerollYoutubeId +
                  '?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                }
                frameBorder="0"
                allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="LiveVideoPlayerTitle">Livestream Pre-Show</div>
              <br />
            </div>
          )}
          {this.state.liveEvent.menu && this.state.liveEvent.menu.length > 0 ? (
            <div className="LiveVideoPlayerExtra">
              {featuredItem && featuredItem?.length > 0 && featuredItem[0] ? (
                <LinkButton
                  className="FeaturedButton hide-mobile"
                  newWindow
                  to={featuredItem[0].link}
                >
                  <img
                    className="button-icon"
                    src="/static/svg/New Window.svg"
                    alt=""
                  />
                  {featuredItem[0].title}
                </LinkButton>
              ) : null}
              {this.state.liveEvent.menu
                .filter((a) => a?.linkType.toLowerCase() !== 'featured')
                .map((item, index) => {
                  const href = item?.link;
                  if (!href) return null;

                  const svg =
                    item?.title === 'Notes'
                      ? 'Notes-white'
                      : item?.title === 'Give'
                      ? 'Give-white'
                      : item?.title === 'Music'
                      ? 'Teaching-white'
                      : item?.title === 'Kidmax'
                      ? 'Family Friendly-white'
                      : item?.title === 'Connect'
                      ? 'User-white'
                      : 'New Window-white';

                  return (
                    <div key={index} className="LiveVideoPlayerSeriesNotes">
                      {svg ? (
                        <img
                          className="button-icon"
                          src={`/static/svg/${svg}.svg`}
                          alt=""
                        />
                      ) : null}
                      <Link className="LiveMenuLink" newWindow to={href}>
                        {item?.title}
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : null}
          <div className="ShareButtonMobile">
            <ShareDropdown
              bgColor="white-bg"
              shareType="livestream"
              buttonType="wide"
            />
            {featuredItem && featuredItem?.length > 0 && featuredItem[0] ? (
              <LinkButton
                className="FeaturedButton"
                newWindow
                to={featuredItem[0].link}
              >
                <img
                  className="button-icon"
                  src="/static/svg/New Window.svg"
                  alt=""
                />
                {featuredItem[0].title}
              </LinkButton>
            ) : null}
          </div>
          {this.state.liveEvent.showChat && !isMobile ? (
            <iframe
              title="Live Teaching Chat"
              frameBorder="0"
              className="LiveVideoPlayerIframe"
              src={
                'https://www.youtube.com/live_chat?v=' +
                this.state.liveEvent.liveYoutubeId +
                '&embed_domain=www.themeetinghouse.com'
              }
            ></iframe>
          ) : (
            <div style={{ height: '5vw' }} />
          )}
          {this.state.liveEvent.zoom && this.state.liveEvent.zoom.length > 0 ? (
            <div className="ZoomGrid">
              {this.state.liveEvent.zoom.map((item, index) => {
                const watchText = item?.link.toLowerCase().includes('zoom')
                  ? 'Watch on Zoom'
                  : item?.link.toLowerCase().includes('youtube') ||
                    item?.link.toLowerCase().includes('youtu.be')
                  ? 'Watch on YouTube'
                  : item?.link.toLowerCase().includes('crowdcast')
                  ? 'Watch on Crowdcast'
                  : 'Watch';
                return (
                  <a
                    className="ZoomItem"
                    key={index}
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="ZoomText">{item?.title}</div>
                    <div className="WatchVideoTag">{watchText}</div>
                  </a>
                );
              })}
            </div>
          ) : null}
          {this.state.liveEvent.livestreamSections &&
          this.state.liveEvent.livestreamSections.length ? (
            <div style={{ marginTop: '5vw' }}>
              {this.state.liveEvent?.livestreamSections?.map(
                (liveStreamSection) => (
                  <div
                    style={{ marginBottom: '5vw' }}
                    key={liveStreamSection?.title}
                  >
                    <div className="LiveVideoPlayerTitle">
                      {liveStreamSection?.title}
                      <div className="ZoomGrid" style={{ marginLeft: 0 }}>
                        {liveStreamSection?.links?.map((item, index) => {
                          const watchText = item?.link
                            .toLowerCase()
                            .includes('zoom')
                            ? 'Watch on Zoom'
                            : item?.link.toLowerCase().includes('youtube') ||
                              item?.link.toLowerCase().includes('youtu.be')
                            ? 'Watch on YouTube'
                            : item?.link.toLowerCase().includes('crowdcast')
                            ? 'Watch on Crowdcast'
                            : 'Watch';
                          return (
                            <a
                              className="ZoomItem"
                              key={index}
                              href={item?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="ZoomText">{item?.title}</div>
                              <div className="WatchVideoTag">{watchText}</div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : null}
          {this.state.liveEvent.showKids ? (
            <div>
              <div className="LiveVideoPlayerEpisodeTitle">Preschool</div>
              {this.state.kidData && this.state.kidData[3] ? (
                <iframe
                  title="Preschool Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    this.state.kidData[3].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
              <div className="LiveVideoPlayerEpisodeTitle">Grades 1-5</div>
              {this.state.kidData && this.state.kidData[0] ? (
                <iframe
                  title="Kids Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    this.state.kidData[0].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
              <div className="LiveVideoPlayerEpisodeTitle">Jr. High</div>
              {this.state.kidData && this.state.kidData[1] ? (
                <iframe
                  title="Jr High Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    this.state.kidData[1].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
              <div className="LiveVideoPlayerEpisodeTitle">Youth</div>
              {this.state.kidData && this.state.kidData[2] ? (
                <iframe
                  title="Youth Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    this.state.kidData[2].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
            </div>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="LiveVideoPlayerDiv">
          <iframe
            title="Teaching Pre-roll"
            className="LiveVideoPlayerIframe"
            allowFullScreen
            src={
              'https://www.youtube.com/embed/DdKLazlFz0g?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
            }
            frameBorder="0"
            allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <br />
          <div className="LiveVideoPlayerTitle">
            {this.props.content?.notLiveSettings?.title ?? 'Livestream'}
          </div>
          <div className="LiveVideoPlayerDescription">
            {this.props.content?.notLiveSettings?.notLiveMessage ??
              'We aren&apos;t live right now. Join us on Sundays at 10:00am Eastern.'}
          </div>
          <div className="LiveVideoPlayerExtra">
            {this.props.content?.notLiveSettings?.showConnectButton ? (
              <>
                <img
                  className="button-icon"
                  src={`/static/svg/User-white.svg`}
                  alt="Connect"
                />
                <Link className="LiveMenuLink" newWindow to={'/connect'}>
                  Connect
                </Link>{' '}
              </>
            ) : null}
            {this.props.content?.notLiveSettings?.showAddToCalendar ? (
              <AddToCalendar
                event={this.getEvent()}
                transparentBackground
                style={{
                  marginLeft: this.props.content?.notLiveSettings
                    ?.showConnectButton
                    ? '2vw'
                    : 0,
                }}
                color="white"
                textDecoration="always"
              />
            ) : null}
          </div>
        </div>
      );
    }
  }
}
