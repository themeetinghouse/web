import React from 'react';
import './VideoPlayerLive.scss';
import moment from 'moment-timezone';
import { ListLivestreamsQuery } from '../../API';
import { Link } from 'components/Link/Link';

type LiveData = NonNullable<
  NonNullable<NonNullable<ListLivestreamsQuery['listLivestreams']>['items']>[0]
>;

interface Props {
  content: any;
}
interface State {
  content: any;
  isLive: boolean;
  liveEvent: LiveData | null;
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      isLive: false,
      liveEvent: null,
    };
  }
  zoomLinks = [
    {
      __typename: 'ZoomItem',
      title: 'Alliston',
      link: 'https://us02web.zoom.us/j/7059846305',
    },
    {
      __typename: 'ZoomItem',
      title: 'Brampton',
      link: 'https://us02web.zoom.us/j/88149318051?pwd=T2l6dVI3THVhanNPbEg5WjdNWjlYdz09',
    },
    {
      __typename: 'ZoomItem',
      title: 'Brantford',
      link: 'https://us02web.zoom.us/j/83338623830?pwd=MTNSWm05bElxT1RDMzNMNmZubzZGQT09',
    },
    {
      __typename: 'ZoomItem',
      title: 'Burlington',
      link: 'https://us02web.zoom.us/j/7042147972',
    },
    {
      __typename: 'ZoomItem',
      title: 'Hamilton Ancaster',
      link: 'https://us02web.zoom.us/j/83813502060?pwd=K2xKWTdaQ3RDT0syWXY4U1pZaklJdz09',
    },
    {
      __typename: 'ZoomItem',
      title: 'Hamilton Downtown',
      link: 'https://us02web.zoom.us/j/82183162495',
    },
    {
      __typename: 'ZoomItem',
      title: 'Hamilton Mountain',
      link: 'https://us02web.zoom.us/j/3421611228',
    },
    {
      __typename: 'ZoomItem',
      title: 'Kitchener',
      link: 'https://us02web.zoom.us/j/86132511938?pwd=VjRFM1VyWEd2SGFmckxFVEx3S0I4QT09',
    },
    {
      __typename: 'ZoomItem',
      title: 'London',
      link: 'https://us02web.zoom.us/j/89883269533',
    },
    {
      __typename: 'ZoomItem',
      title: 'Oakville',
      link: ' https://us02web.zoom.us/j/87155258165?pwd=NXR0ZUJPdm5HNEZRZ25Oc0JhR1pLUT09',
    },
    {
      __typename: 'ZoomItem',
      title: 'Ottawa',
      link: 'https://us02web.zoom.us/j/2988546949',
    },
    {
      __typename: 'ZoomItem',
      title: 'Parry Sound',
      link: 'https://us02web.zoom.us/j/88031639874',
    },
    {
      __typename: 'ZoomItem',
      title: 'Richmond Hill',
      link: 'https://tinyurl.com/RHLL-connect',
    },
    {
      __typename: 'ZoomItem',
      title: 'Sandbanks',
      link: 'https://us02web.zoom.us/j/5484557238',
    },
    {
      __typename: 'ZoomItem',
      title: 'Toronto Downtown',
      link: 'https://us02web.zoom.us/j/88251343983',
    },
    {
      __typename: 'ZoomItem',
      title: 'Toronto East',
      link: 'https://us02web.zoom.us/j/4556316272',
    },
    {
      __typename: 'ZoomItem',
      title: 'Toronto High Park',
      link: 'https://us02web.zoom.us/j/81317030709',
    },
    {
      __typename: 'ZoomItem',
      title: 'Toronto Uptown',
      link: 'https://us02web.zoom.us/j/82132846890?pwd=TE01Ym0vWEZBNUE4QVI0dGh2MmZkQT09',
    },
    {
      __typename: 'ZoomItem',
      title: 'Waterloo',
      link: 'https://tinyurl.com/WATLonline',
    },
  ];
  breakouttwo = [
    {
      __typename: 'ZoomItem',
      title: 'First Name: A - K',
      link: 'https://us02web.zoom.us/j/81730640198',
    },
    {
      __typename: 'ZoomItem',
      title: 'First Name: L - Z',
      link: 'https://us02web.zoom.us/j/84178766161',
    },
  ];
  liveEvent: LiveData = {
    __typename: 'Livestream',
    id: '',
    date: '2020-10-24',
    startTime: '09:00',
    videoStartTime: '09:00',
    endTime: '12:30',
    prerollYoutubeId: 'UYfFdEZ_v2c',
    liveYoutubeId: 'UYfFdEZ_v2c',
    showChat: false,
    showKids: false,
    menu: null,
    zoom: null,
    eventTitle: null,
    externalEventUrl: null,
    titles: [],
    homepageLink: '',
    createdAt: '',
    updatedAt: '',
  };

  tick() {
    const today = moment.tz('America/Toronto').format('YYYY-MM-DD');
    if (today === this.liveEvent.date) {
      const start = this.state.liveEvent?.videoStartTime;
      const end = this.state.liveEvent?.endTime;
      const rightNow = moment().tz('America/Toronto').format('HH:mm');
      if (start && end) {
        const showTime = rightNow >= start && rightNow <= end;
        if (showTime) {
          console.log('ShowLive');
          this.setState({ isLive: true });
        }
      } else {
        this.setState({ isLive: false });
      }
    } else {
      this.setState({ isLive: false });
    }
  }
  interval: any;
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({ liveEvent: this.liveEvent });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="LiveVideoPlayerDiv">
        <div>
          <iframe
            title="Leaders Day Livestream"
            className="LiveVideoPlayerIframe"
            allowFullScreen
            src={
              'https://www.youtube.com/embed/' +
              this.state?.liveEvent?.liveYoutubeId +
              '?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
            }
            frameBorder="0"
            allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <div className="LiveVideoPlayerTitle">Leaders Day Livestream</div>
          <br />
        </div>

        <div className="LiveVideoPlayerExtra">
          <div className="LiveVideoPlayerSeriesNotes">
            <img
              className="button-icon"
              src={`/static/svg/User-white.svg`}
              alt=""
            />
            <Link className="LiveMenuLink" newWindow to={'connect'}>
              Connect
            </Link>
          </div>
        </div>
        <div></div>
        <div
          className="LiveVideoPlayerEpisodeTitle"
          style={{ marginTop: '2vw' }}
        >
          Breakouts 1 and 3
        </div>
        <div className="ZoomGrid" style={{ marginTop: '2vw' }}>
          {this.zoomLinks.map((item, index) => {
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
        <div className="LiveVideoPlayerTitle" style={{ marginTop: '2vw' }}>
          Breakout 2
        </div>
        <div className="ZoomGrid" style={{ marginTop: '2vw' }}>
          {this.breakouttwo.map((item, index) => {
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
      </div>
    );
  }
}
