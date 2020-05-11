
import React from 'react';
import "./PodcastItem.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';

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
        <img className="PodcastIcon" src={item.icon.src} alt={item.icon.alt} style={{width: 64, height: 64}}></img>
        <div className="PodcastContentContainer">
          <div className="PodcastTitle">{item.title}</div>
          <div className="PodcastText">{item.description}</div>

          <div className="PodcastLinksContainer">
            {item.apple ? <a className="ApplePodcast" href={item.apple} rel="noopener noreferrer" target="_blank"><img className="AppleBadge" src="/static/US_UK_Apple_Podcasts_Listen_Badge_RGB.svg" alt="Apple Podcasts" style={{height: 32}}></img></a> : null}
         
            <Dropdown className="PodcastDropdown">
              <Dropdown.Toggle id="podcast-toggle"><img className="SubIcon" src="/static/svg/Subscribe-white.svg" alt=""/>More ways to listen</Dropdown.Toggle>
                <Fade timeout={1000}>
                  <Dropdown.Menu className="PodcastMenu">
                    {item.spotify ? <a href={item.spotify} rel="noopener noreferrer" target="_blank"><img className="OtherBadge" src="/static/spotify-podcast-badge-wht-grn-165x40.svg" alt="Spotify" style={{height: 36, marginBottom: 10}}></img></a> : null}
                    {item.google ? <a href={item.google} rel="noopener noreferrer" target="_blank"><img className="OtherBadge" src="/static/EN_Google_Podcasts_Badge.svg" alt="Google Podcasts" style={{height: 36, marginBottom: 10}}></img></a> : null}
                    {item.podbean ? <a href={item.podbean} rel="noopener noreferrer" target="_blank"><img className="OtherBadge" src="//d8g345wuhgd7e.cloudfront.net/site/images/badges/w600.png" alt="Podbean" style={{height: 36}}></img></a> : null}
                  </Dropdown.Menu>
                </Fade>
            </Dropdown>
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
