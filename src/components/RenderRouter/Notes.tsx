
import React from 'react';
import "./Notes.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
import ReactHtmlParser from 'react-html-parser';
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
  }

  navigateUrl(to: string) {
    console.log(to)
    window.location.href = to;
  }

  shareButton() {
    return (
    <Dropdown>
      <Dropdown.Toggle id="share-custom"><img className="button-icon" src="/static/svg/Share-white.svg" alt=""/>Share</Dropdown.Toggle>
        <Fade timeout={1000}>
          <Dropdown.Menu className="ShareMenu">
            
            <FacebookShareButton 
              className="ShareOption" 
              url={window.location.href}>
              <Dropdown.Item as="button" className="dropitem"><FacebookIcon className="social-share-icon" size={32} round />Facebook</Dropdown.Item>
            </FacebookShareButton>

            <TwitterShareButton 
              className="ShareOption" 
              url={window.location.href}
              via={"TheMeetingHouse"}
              related={["TheMeetingHouse"]}>
              <Dropdown.Item as="button" className="dropitem"><TwitterIcon className="social-share-icon" size={32} round />Twitter</Dropdown.Item>
            </TwitterShareButton>

            <EmailShareButton 
              className="ShareOption" 
              url={window.location.href}
              body={"I wanted to share this blog post with you:"}>
              <Dropdown.Item as="button" className="dropitem"><EmailIcon className="social-share-icon" size={32} round />Email</Dropdown.Item>
            </EmailShareButton>

          </Dropdown.Menu>
        </Fade>
    </Dropdown>
    )
  }

  render() {
    return (
      (this.state.data !== null) ?
        <div className="blog">
          <div className="link-to-main-blog-page" onClick={()=>this.navigateUrl("/blog")}>Blog<img className="dropdown-caret" src="/static/svg/Dropdown Caret.svg" alt=""></img></div>
            <div className="blog-content">
              {/* maybe an image*/}
              <h1 className="blog-h1" >{this.state.data.title}</h1>
              <div className="ShareButtonDesktop">{this.shareButton()}</div>
              <div className="blog-body">{ReactHtmlParser(this.state.data.content)}</div>
              <div className="ShareButtonMobile">{this.shareButton()}</div>
            </div>
        </div> : null
    )
  }
}