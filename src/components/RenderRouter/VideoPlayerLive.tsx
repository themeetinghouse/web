
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
    console.log({ "VideoPlayer": props.data })

  }
  render() {
    return (
      <div className="LiveVideoPlayerDiv" >
        <div className="LiveVideoPlayerEpisodeTitle">Today's Teaching Notes</div>
        <div className="LiveVideoPlayerExtra">
          <div className="LiveVideoPlayerSeriesNotes"><a href="http://media.themeetinghouse.com/podcast/handouts/Oakville.pdf">Oakville Location</a></div>
          <br/>
          <div className="LiveVideoPlayerSeriesNotes"><a href="http://media.themeetinghouse.com/podcast/handouts/Regional.pdf">Regional Locations</a></div>
          <div className="LiveVideoPlayerClear"></div>
        </div>
        <div className="LiveVideoPlayerExtra">
          <div className="LiveVideoPlayerSeriesNotes">Click on one of the locations above to access today's teaching notes. Notes are updated on Sunday and will be available again on Monday on the teaching page.</div>
       </div> 
        {/* <div className="LiveVideoPlayerExtra">
          <div className="LiveVideoPlayerSeriesNotes"><a href="TODO">KidMax Sign-In</a></div>
          <div className="LiveVideoPlayerClear"></div>
        </div>
        <br/>
        <br/>
        <div className="LiveVideoPlayerEpisodeTitle">Oakville Live Feed (Coming Soon)</div>
        <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/test?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    */}      </div>
    )

  }
}
