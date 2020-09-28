
import React from 'react';
import "./VideoPlayer.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import YouTube from 'react-youtube';
import Fade from 'react-bootstrap/Fade';
import { isMobileOnly } from 'react-device-detect';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon
} from "react-share";
import { Link } from 'components/Link/Link';

interface Props {
  content: any;
  data: any;
}
interface State {
  data: any;
  content: any;
  videoPlayer: any;
  watchPageVideoElements: HTMLCollection;
}

export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data,
      videoPlayer: null,
      watchPageVideoElements: document.getElementsByClassName('WatchPageVideo whiteText')
    }
  }

  setVideoPlayer(event: { target: any }): void {
    this.setState({ videoPlayer: event.target })
  }

  pauseVideo(): void {
    if (this.state.videoPlayer?.f)
      this.state.videoPlayer.pauseVideo()
  }

  componentDidUpdate(): void {
    for (let i = 0; i < this.state.watchPageVideoElements.length; i++) {
      this.state.watchPageVideoElements[i].addEventListener('click', () => this.pauseVideo())
    }
  }

  componentWillUnmount(): void {
    for (let i = 0; i < this.state.watchPageVideoElements.length; i++) {
      this.state.watchPageVideoElements[i].removeEventListener('click', () => this.pauseVideo())
    }
  }

  formatVideoDuration(length: string): string {
    let duration = parseInt(length, 10)
    let hours = 0
    if (duration < 60) {
      return length + 'm'
    }
    while (duration > 59) {
      duration -= 60
      hours += 1
    }
    return `${hours.toString()}h ${duration.toString()}m`
  }

  shareButton() {
    return (
      <Dropdown drop={"down"}>
        <Dropdown.Toggle id="share-custom"><img className="button-icon" src="/static/svg/Share.svg" alt="" />Share</Dropdown.Toggle>
        <Fade timeout={1000}>
          <Dropdown.Menu className="ShareMenu">

            <FacebookShareButton
              className="ShareOption"
              // if the data is null (unlikely), window.location.href will work for ~98% of situations. the rest of the time the user is sent to https://www.themeetinghouse.com/teaching
              url={(this.state.data.seriesTitle && this.state.data.id) ? "https://www.themeetinghouse.com/videos/" + this.state.data.seriesTitle.replace(/\s/g, "%20") + "/" + this.state.data.id : window.location.href}
              quote={this.state.data.Youtube ? this.state.data.Youtube.snippet.title + " from The Meeting House" : "Check out this video from The Meeting House"}>
              <Dropdown.Item className="dropitem"><FacebookIcon className="social-share-icon" size={32} round />Facebook</Dropdown.Item>
            </FacebookShareButton>

            <TwitterShareButton
              className="ShareOption"
              url={(this.state.data.seriesTitle && this.state.data.id) ? "https://www.themeetinghouse.com/videos/" + this.state.data.seriesTitle.replace(/\s/g, "%20") + "/" + this.state.data.id : window.location.href}
              title={this.state.data.Youtube ? this.state.data.Youtube.snippet.title + " from The Meeting House" : "Check out this video from The Meeting House"}
              via={"TheMeetingHouse"}
              related={["TheMeetingHouse"]}>
              <Dropdown.Item className="dropitem"><TwitterIcon className="social-share-icon" size={32} round />Twitter</Dropdown.Item>
            </TwitterShareButton>

            <EmailShareButton
              className="ShareOption"
              url={(this.state.data.seriesTitle && this.state.data.id) ? "https://www.themeetinghouse.com/videos/" + this.state.data.seriesTitle.replace(/\s/g, "%20") + "/" + this.state.data.id : window.location.href}
              subject={this.state.data.Youtube ? "Check out " + this.state.data.Youtube.snippet.title + " from The Meeting House" : "Check out this video from The Meeting House"}
              body={"I wanted to share this video with you:"}>
              <Dropdown.Item className="dropitem"><EmailIcon className="social-share-icon" size={32} round />Email</Dropdown.Item>
            </EmailShareButton>

            {isMobileOnly ?

              <div>
                <WhatsappShareButton
                  className="ShareOption"
                  url={(this.state.data.seriesTitle && this.state.data.id) ? "https://www.themeetinghouse.com/videos/" + this.state.data.seriesTitle.replace(/\s/g, "%20") + "/" + this.state.data.id : window.location.href}
                  title={this.state.data.Youtube ? this.state.data.Youtube.snippet.title : "Check out this video from The Meeting House"}>
                  <Dropdown.Item className="dropitem"><WhatsappIcon className="social-share-icon" size={32} round />WhatsApp</Dropdown.Item>
                </WhatsappShareButton>

                <TelegramShareButton
                  className="ShareOption"
                  url={(this.state.data.seriesTitle && this.state.data.id) ? "https://www.themeetinghouse.com/videos/" + this.state.data.seriesTitle.replace(/\s/g, "%20") + "/" + this.state.data.id : window.location.href}
                  title={this.state.data.Youtube ? this.state.data.Youtube.snippet.title : "Check out this video from The Meeting House"}>
                  <Dropdown.Item className="dropitem"><TelegramIcon className="social-share-icon" size={32} round />Telegram</Dropdown.Item>
                </TelegramShareButton>
              </div>
              : null}

          </Dropdown.Menu>
        </Fade>
      </Dropdown>
    )
  }

  render() {
    return (
      <div className="VideoPlayerDiv" >
        <YouTube videoId={this.state.data.id} className="VideoPlayerIframe" opts={{ playerVars: { color: 'white', autoplay: 1, cc_load_policy: 1, controls: 1, modestbranding: 1, rel: 0, origin: 'https://www.themeetinghouse.com/', enablejsapi: 1 } }} onReady={(e) => this.setVideoPlayer(e)}></YouTube>
        <div className="VideoPlayerEpisodeTitle">{this.state.data.episodeTitle}<div className="ShareButtonDesktop">{this.shareButton()}</div></div>
        <div className="VideoPlayerDetails">
          {(this.state.data.seriesTitle != null) ?
            <div className="VideoPlayerSeries">
              <div className="VideoPlayerInfoText">Series</div>
              <div className="VideoPlayerSeriesTitle" >{this.state.data.episodeNumber === null ? null : "E" + this.state.data.episodeNumber + "."} {this.state.data.seriesTitle}</div>
            </div> : null}
          {(this.state.data.publishedDate != null) ?
            <div className="VideoPlayerPublished">
              <div className="VideoPlayerInfoText">Date</div>
              <div className="VideoPlayerPublishedTitle" >{this.state.data.publishedDate}</div>
            </div> : null}
          {(this.state.data.length) ?
            <div className="VideoPlayerDuration">
              <div className="VideoPlayerInfoText">Duration</div>
              <div className="VideoPlayerDurationTitle" >{this.formatVideoDuration(this.state.data.length)}</div>
            </div> : null}
          <div className="VideoPlayerClear"></div>
        </div>
        <div className="VideoPlayerDescription" >{this.state.data.description}</div>
        <div className="VideoPlayerExtra">
          {this.state.data.notesURL != null ? <div className="VideoPlayerSeriesNotes">
            <img className="button-icon" src="/static/svg/Notes-white.svg" alt="" />
            <Link className="DownloadLink" newWindow={this.state.data.notesURL.includes('media')} to={this.state.data.notesURL}>Notes</Link>
          </div> : null}
          {this.state.data.videoURL != null ? <div className="VideoPlayerSeriesVideo">
            <img className="button-icon" src="/static/svg/Watch-white.svg" alt="" />
            <Link className="DownloadLink" to={this.state.data.videoURL}>Download Video</Link>
          </div> : null}
          {this.state.data.audioURL != null ? <div className="VideoPlayerSeriesAudio">
            <img className="button-icon" src="/static/svg/Audio-white.svg" alt="" />
            <Link className="DownloadLink" to={this.state.data.audioURL}>Download Audio</Link>
          </div> : null}
          <div className="VideoPlayerClear"></div>
        </div>
        <div className="ShareButtonMobile">{this.shareButton()}</div>
      </div>
    )

  }
}