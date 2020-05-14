
import React from 'react';
import "./VideoPlayer.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton
} from "react-share";
import {
  FacebookIcon,
  EmailIcon,
  TwitterIcon
} from "react-share";

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
    console.log({"VideoPlayer":props.data})

  }

  shareButton() {
    return (
    <Dropdown>
      <Dropdown.Toggle id="share-custom"><img className="button-icon" src="/static/svg/Share.svg" alt=""/>Share</Dropdown.Toggle>
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

          </Dropdown.Menu>
        </Fade>
    </Dropdown>
    )
  }

  render() {
    return (
      <div className="VideoPlayerDiv" >
        <iframe title="Youtube Player" className="VideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.data.id + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
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
          {(this.state.data.duration != null) ?
            <div className="VideoPlayerDuration">
              <div className="VideoPlayerInfoText">Duration</div>
              <div className="VideoPlayerDurationTitle" >{this.state.data.duration}</div>
            </div> : null}
          <div className="VideoPlayerClear"></div>
        </div>
        <div className="VideoPlayerDescription" >{this.state.data.description}</div>
        <div className="VideoPlayerExtra">
          {this.state.data.notesURL != null ? <div className="VideoPlayerSeriesNotes"><img className="button-icon" src="/static/svg/Notes-white.svg" alt=""/><a className="DownloadLink" href={this.state.data.notesURL}>Notes</a></div> : null}
          {this.state.data.videoURL != null ? <div className="VideoPlayerSeriesVideo"><img className="button-icon" src="/static/svg/Watch-white.svg" alt=""/><a className="DownloadLink" href={this.state.data.videoURL}>Download Video</a></div> : null}
          {this.state.data.audioURL != null ? <div className="VideoPlayerSeriesAudio"><img className="button-icon" src="/static/svg/Audio-white.svg" alt=""/><a className="DownloadLink"href={this.state.data.audioURL}>Download Audio</a></div> : null}
          <div className="VideoPlayerClear"></div>
        </div>
        <div className="ShareButtonMobile">{this.shareButton()}</div>
      </div>
    )

  }
}
