
import React from 'react';
import "./PodcastItem.scss"

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
}

export default class PodcastItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data
    }
  }


  renderPodcast(item: any) {
    return (
      <div className="PodcastItemDiv1">
        <img src={item.icon.src} alt={item.icon.alt} style={{width: 64, height: 64}}></img>
        <div className="PodcastContentContainer">
          <div className="PodcastTitle">{item.title}</div>
          <div className="PodcastText">{item.description}</div>

          <div className="PodcastLinksContainer">
            <a className="PodcastLink"><img className="PodcastIcon" src="/static/svg/iTunes-white.svg" alt="" style={{width: 16, height: 16}}></img>iTunes</a>
            <a className="PodcastLink"><img className="PodcastIcon" src="/static/svg/Subscribe-white.svg" alt="" style={{width: 16, height: 16}}></img>Subscribe</a>
          </div>

        </div>
      </div>
    )  
  }

  renderPodcasts(items: any[]) {
    return (
      items.map((item: any) => this.renderPodcast(item))
    )
  }

  render() {
    if (this.state.data.videoTypes === "adult-sunday") {
      return (
        <div className="PodcastItem">
          <div className="PodcastHeader">Suggested Podcasts</div> 
          {this.renderPodcasts(this.state.content.podcastlist)}
        </div>
      )
    } else {
      return null
    }
  }
}
