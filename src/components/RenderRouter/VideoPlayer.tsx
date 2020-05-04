
import React from 'react';
import "./VideoPlayer.scss";
import Dropdown from 'react-bootstrap/Dropdown';

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
      <Dropdown.Toggle id="share-custom">Pow! Zoom!</Dropdown.Toggle>
      <Dropdown.Menu className="ShareMenu">
      <Dropdown.Item as="button">Action</Dropdown.Item>
      <Dropdown.Item as="button">Another action</Dropdown.Item>
      <Dropdown.Item as="button">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
  }

  render() {
    return (
      <div className="VideoPlayerDiv" >
        <iframe title="Youtube Player" className="VideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.data.id + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
       <div className="VideoPlayerEpisodeTitle">{this.state.data.episodeTitle}</div>
       <div className="ShareButton">{this.shareButton()}</div>
        <div className="VideoPlayerDetails">
          {(this.state.data.seriesTitle != null) ?
            <div className="VideoPlayerSeries">
              <div className="VideoPlayerInfoText">Series</div>
              <div className="VideoPlayerSeriesTitle" >E{this.state.data.episodeNumber}. {this.state.data.seriesTitle}</div>
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
          {this.state.data.videoURL != 'a' ? <div className="VideoPlayerSeriesVideo"><img className="button-icon" src="/static/svg/Watch-white.svg" alt=""/><a className="DownloadLink" href={this.state.data.videoURL}>Download Video</a></div> : null}
          {this.state.data.audioURL != 'a' ? <div className="VideoPlayerSeriesAudio"><img className="button-icon" src="/static/svg/Audio-white.svg" alt=""/><a className="DownloadLink"href={this.state.data.audioURL}>Download Audio</a></div> : null}
          <div className="VideoPlayerClear"></div>
        </div>
      </div>
    )

  }
}
