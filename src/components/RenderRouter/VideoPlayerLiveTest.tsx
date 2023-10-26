import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import AddToCalendar from 'components/AddToCalendar/AddToCalendar';
import { Link, LinkButton } from 'components/Link/Link';
import ShareDropdown from 'components/Share/ShareDropdown';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { ListLivestreamsQuery, Livestream, Video } from '../../API';
import * as queries from '../../graphql/queries';
import './VideoPlayerLive.scss';
interface Props {
  content: any;
}

const VideoPlayerLiveTest = (props: Props) => {
  const [kidData] = useState<Video[]>([]);
  const [manualDate, setManualDate] = useState(moment().tz('America/Toronto'));
  const [isLive, setIsLive] = useState(false);
  const [liveEvent, setLiveEvent] = useState<Livestream | null>(null);
  useEffect(() => {
    getLive();
  }, []);

  const getLive = async (date = moment().tz('America/Toronto')) => {
    if (!date.isValid()) {
      return;
    }
    try {
      const json = (await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: date.format('YYYY-MM-DD') } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListLivestreamsQuery>;
      console.log({
        [`${date.format('LLL')}`]: json.data?.listLivestreams?.items,
      });
      const livestreams = json?.data?.listLivestreams?.items ?? [];
      if (livestreams) {
        //setLiveEvents(livestreams as Livestream[]);
        for (const item of livestreams) {
          if (item?.liveYoutubeId && !item?.id.includes('CustomEvent')) {
            const rightNow = date.format('HH:mm');
            const showTime =
              item?.startTime &&
              item?.endTime &&
              rightNow >= item.startTime &&
              rightNow <= item.endTime;
            if (showTime) {
              setLiveEvent(item as Livestream);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  const getEvent = () => {
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
  };
  useEffect(() => {
    const tick = () => {
      const start = liveEvent?.videoStartTime;
      const end = liveEvent?.endTime;
      const isValidDate = manualDate.isValid();
      if (!isValidDate) return;
      const rightNow = manualDate.format('HH:mm');
      console.log('TICK, ' + rightNow + ', ' + start + ', ' + end, {
        //liveEvents,
        liveEvent,
      });
      if (start && end) {
        const showTime = rightNow >= start && rightNow <= end;
        if (showTime) {
          console.log('ShowLive2');
          setIsLive(true);
        }
      } else {
        setIsLive(false);
      }
    };
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [liveEvent, manualDate]);
  const featuredItem = liveEvent?.menu?.filter(
    (a) => a?.linkType.toLowerCase() === 'featured'
  );
  console.log({ isLive });
  return (
    <>
      <div
        style={{
          backgroundColor: '#1a1a1a',
          paddingTop: 20,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          gap: 20,
          display: 'flex',
          flex: 1,
        }}
      >
        <label style={{ color: 'white' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            Manual Date:
          </div>
        </label>
        <input
          type="datetime-local"
          value={manualDate.format('YYYY-MM-DDTHH:mm')}
          style={{
            padding: 4,
          }}
          onChange={(e) => {
            const newDate = moment(e.target.value).tz('America/Toronto');
            setManualDate(newDate);
            getLive(newDate);
          }}
        />
      </div>

      {liveEvent ? (
        <div className="LiveVideoPlayerDiv">
          {isLive ? (
            <div>
              {liveEvent.liveVimeoId ? (
                <iframe
                  src={liveEvent.liveVimeoId}
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
                    liveEvent.liveYoutubeId +
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
                  liveEvent.prerollYoutubeId +
                  '?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                }
                frameBorder="0"
                allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="LiveVideoPlayerTitle">Livestream Pre-Show</div>
              <br />
            </div>
          )}
          {liveEvent.menu && liveEvent.menu.length > 0 ? (
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
              {liveEvent.menu
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
          {liveEvent.showChat && !isMobile ? (
            <iframe
              title="Live Teaching Chat"
              frameBorder="0"
              className="LiveVideoPlayerIframe"
              src={
                'https://www.youtube.com/live_chat?v=' +
                liveEvent.liveYoutubeId +
                '&embed_domain=www.themeetinghouse.com'
              }
            ></iframe>
          ) : (
            <div style={{ height: '5vw' }} />
          )}
          {liveEvent.zoom && liveEvent.zoom.length > 0 ? (
            <div className="ZoomGrid">
              {liveEvent.zoom.map((item, index) => {
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
          {liveEvent.livestreamSections &&
          liveEvent.livestreamSections.length ? (
            <div style={{ marginTop: '5vw' }}>
              {liveEvent?.livestreamSections?.map((liveStreamSection) => (
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
              ))}
            </div>
          ) : null}
          {liveEvent.showKids ? (
            <div>
              <div className="LiveVideoPlayerEpisodeTitle">Preschool</div>
              {kidData && kidData[3] ? (
                <iframe
                  title="Preschool Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    kidData[3].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
              <div className="LiveVideoPlayerEpisodeTitle">Grades 1-5</div>
              {kidData && kidData[0] ? (
                <iframe
                  title="Kids Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    kidData[0].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
              <div className="LiveVideoPlayerEpisodeTitle">Jr. High</div>
              {kidData && kidData[1] ? (
                <iframe
                  title="Jr High Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    kidData[1].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
              <div className="LiveVideoPlayerEpisodeTitle">Youth</div>
              {kidData && kidData[2] ? (
                <iframe
                  title="Youth Video"
                  className="LiveVideoPlayerIframe KidmaxVideo"
                  allowFullScreen
                  src={
                    'https://www.youtube.com/embed/' +
                    kidData[2].id +
                    '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                  }
                  frameBorder="0"
                  allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : (
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
            {props.content?.notLiveSettings?.title ?? 'Livestream'}
          </div>
          <div className="LiveVideoPlayerDescription">
            {props.content?.notLiveSettings?.notLiveMessage ??
              'We aren&apos;t live right now. Join us on Sundays at 10:00am Eastern.'}
          </div>
          <div className="LiveVideoPlayerExtra">
            {props.content?.notLiveSettings?.showConnectButton ? (
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
            {props.content?.notLiveSettings?.showAddToCalendar ? (
              <AddToCalendar
                event={getEvent()}
                transparentBackground
                style={{
                  marginLeft: props.content?.notLiveSettings?.showConnectButton
                    ? '2vw'
                    : 0,
                }}
                color="white"
                textDecoration="always"
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayerLiveTest;
