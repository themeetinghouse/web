
import React from 'react';
import { Button } from 'reactstrap';
import "./VideoPlayer.scss"

interface Props {
  content: any,
  data:any
}
interface State {
  data:any,
  content: any,
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
    console.log(props.data)

  }
  render() {
    return (
    <div className="VideoPlayerDiv" >
      <iframe title="Youtube Player" className="VideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.data.id + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div className="VideoPlayerSeriesTitle" >{this.state.data.seriesTitle}</div><Button>Share</Button>
      <div className="VideoPlayerEpisodeTitle" >{this.state.data.episodeNumber}. {this.state.data.episodeTitle}</div>
      <div className="VideoPlayerEpisodeTitle" >{this.state.data.publishedData}</div>
      <div className="VideoPlayerEpisodeTitle" >{this.state.data.duration}</div>
      <div className="VideoPlayerEpisodeTitle" >{this.state.data.description}</div>
      <div className="VideoPlayerSeriesTitle" >Notes</div>
      <div className="VideoPlayerSeriesTitle" >Download Video</div>
      <div className="VideoPlayerSeriesTitle" >Download Audio</div>
    </div>
    )

  }
}
