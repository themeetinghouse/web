import React from 'react';
import './VideoPlayer.scss';
import YouTube from 'react-youtube';
import { Link } from 'components/Link/Link';
import ShareDropdown from 'components/Share/ShareDropdown';

interface Props {
  content: any;
  data: any;
}
interface State {
  data: any;
  content: any;
  videoPlayer: any;
  watchPageVideoElements: HTMLCollection;
  shareOpen: boolean;
}

export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data,
      videoPlayer: null,
      watchPageVideoElements: document.getElementsByClassName(
        'WatchPageVideo whiteText'
      ),
      shareOpen: false,
    };
  }

  setVideoPlayer(event: { target: any }): void {
    this.setState({ videoPlayer: event.target });
  }

  pauseVideo(): void {
    if (this.state.videoPlayer?.f) this.state.videoPlayer.pauseVideo();
  }
  updateTags(): void {
    const pageTitle = `
    ${this.state.data.seriesTitle} - E${this.state.data.episodeNumber}. ${this.state.data.episodeTitle}`;
    if (document.title !== pageTitle) document.title = pageTitle;
    const metaTags = document.getElementsByTagName('meta');
    const descriptionMetaTag = Array.from(metaTags).find(
      (tag, index) => tag.name === 'description'
    );
    if (descriptionMetaTag)
      descriptionMetaTag.content = this.state.data.description;
  }
  componentDidUpdate(): void {
    this.updateTags();
    for (let i = 0; i < this.state.watchPageVideoElements.length; i++) {
      this.state.watchPageVideoElements[i].addEventListener('click', () =>
        this.pauseVideo()
      );
    }
  }

  componentWillUnmount(): void {
    for (let i = 0; i < this.state.watchPageVideoElements.length; i++) {
      this.state.watchPageVideoElements[i].removeEventListener('click', () =>
        this.pauseVideo()
      );
    }
  }

  formatVideoDuration(length: string): string {
    let duration = parseInt(length, 10);
    let hours = 0;
    if (duration < 60) {
      return length + 'm';
    }
    while (duration > 59) {
      duration -= 60;
      hours += 1;
    }
    return `${hours.toString()}h ${duration.toString()}m`;
  }

  render() {
    return (
      <div className="VideoPlayerDiv">
        <YouTube
          videoId={this.state.data.id}
          className="VideoPlayerIframe"
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              color: 'white',
              autoplay: 1,
              cc_load_policy: 1,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              origin: 'https://www.themeetinghouse.com/',
              enablejsapi: 1,
            },
          }}
          onReady={(e) => this.setVideoPlayer(e)}
        ></YouTube>
        <div className="VideoPlayerEpisodeTitle">
          {this.state.data.episodeTitle}
          <div className="ShareButtonDesktop">
            <ShareDropdown
              shareType="teaching"
              buttonType={'wide'}
              bgColor={'white-bg'}
              data={this.state.data}
            />
          </div>
        </div>
        <div className="VideoPlayerDetails">
          {this.state.data.seriesTitle != null ? (
            <div className="VideoPlayerSeries">
              <div className="VideoPlayerInfoText">Series</div>
              <div className="VideoPlayerSeriesTitle">
                {this.state.data.episodeNumber === null
                  ? null
                  : 'E' + this.state.data.episodeNumber + '.'}{' '}
                {this.state.data.seriesTitle}
              </div>
            </div>
          ) : null}
          {this.state.data.publishedDate != null ? (
            <div className="VideoPlayerPublished">
              <div className="VideoPlayerInfoText">Date</div>
              <div className="VideoPlayerPublishedTitle">
                {this.state.data.publishedDate}
              </div>
            </div>
          ) : null}
          {this.state.data.length ? (
            <div className="VideoPlayerDuration">
              <div className="VideoPlayerInfoText">Duration</div>
              <div className="VideoPlayerDurationTitle">
                {this.formatVideoDuration(this.state.data.length)}
              </div>
            </div>
          ) : null}
          <div className="VideoPlayerClear"></div>
        </div>
        <div className="VideoPlayerDescription">
          {this.state.data.description}
        </div>
        <div className="VideoPlayerExtra">
          {this.state.data.notesURL != null ? (
            <div className="VideoPlayerSeriesNotes">
              <img
                className="button-icon"
                src="/static/svg/Notes-white.svg"
                alt=""
              />
              <Link
                className="DownloadLink"
                newWindow={this.state.data.notesURL.includes('media')}
                to={this.state.data.notesURL}
              >
                Notes
              </Link>
            </div>
          ) : null}
          {this.state.data.videoURL != null ? (
            <div className="VideoPlayerSeriesVideo">
              <img
                className="button-icon"
                src="/static/svg/Watch-white.svg"
                alt=""
              />
              <Link className="DownloadLink" to={this.state.data.videoURL}>
                Download Video
              </Link>
            </div>
          ) : null}
          {this.state.data.audioURL != null ? (
            <div className="VideoPlayerSeriesAudio">
              <img
                className="button-icon"
                src="/static/svg/Audio-white.svg"
                alt=""
              />
              <Link className="DownloadLink" to={this.state.data.audioURL}>
                Download Audio
              </Link>
            </div>
          ) : null}
          <div className="VideoPlayerClear"></div>
        </div>
        <div className="ShareButtonMobile">
          <ShareDropdown
            shareType="teaching"
            buttonType={'wide'}
            bgColor={'white-bg'}
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}
