
import React from 'react';
import "./VideoPlayerLive.scss"

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
  render() {
    return (
      <div className="VideoPlayerDiv" >
        <iframe title="Youtube Player" className="VideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/test?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        <div className="VideoPlayerEpisodeTitle">Sunday Morning Live</div>
        <div className="VideoPlayerExtra">
          <div className="VideoPlayerSeriesNotes"><a href="http://media.themeetinghouse.com/podcast/handouts/oakville-notes.pdf">Oakville Notes</a></div>
          <div className="VideoPlayerSeriesNotes"><a href="http://media.themeetinghouse.com/podcast/handouts/regional-notes.pdf">Regional Notes</a></div>
          <div className="VideoPlayerClear"></div>
        </div>
      </div>
    )

  }
}
