
import React from 'react';
import "./BlogReader.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
//import ReactHtmlParser from 'react-html-parser';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
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

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.data.content.getCurrentContent()));
    return markup
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
      <div className="blog">
      <div className="link-to-main-blog-page" onClick={()=>this.navigateUrl("/blog")}>Blog<img className="dropdown-caret" src="static/svg/Dropdown Caret.svg" alt=""></img></div>
        <div className="blog-content">
          <h1 className="blog-h1" >Test Title Longer Test Title That Goes Two Lines</h1>
          <div className="blog-details">by <span className="blog-author">Jon Esparaz</span> on 2020-05-17</div>
          <div className="ShareButtonDesktop">{this.shareButton()}</div>
          <div className="body">Test post blah blah All the Scriptures, both the Old and the New Testaments, on every hand, point us to Christ Jesus that we are to follow him." ~ Menno Simons (16th Century) Welcome back to our concluding post in this series. If you didn’t catch the first two posts, do not read further, do not pass go, do not collect two hundred dollars. Instead, go here and start at the beginning. Otherwise, let’s dive in. Jesus said, “To whom much is given, much is required” (Luke 12:48), and when it comes to the Bible, our post-Gutenberg, widely educated and online generation of the Church has been given much. Very much. And we are required to make much of what we have been given. In this final post of our “Radical Christians & the Word of God” series, we’re moving our focus beyond authority and inerrancy to application. The Radical Test post blah blah All the Scriptures, both the Old and the New Testaments, on every hand, point us to Christ Jesus that we are to follow him." ~ Menno Simons (16th Century) Welcome back to our concluding post in this series. If you didn’t catch the first two posts, do not read further, do not pass go, do not collect two hundred dollars. Instead, go here and start at the beginning. Otherwise, let’s dive in. Jesus said, “To whom much is given, much is required” (Luke 12:48), and when it comes to the Bible, our post-Gutenberg, widely educated and online generation of the Church has been given much. Very much. And we are required to make much of what we have been given. In this final post of our “Radical Christians & the Word of God” series, we’re moving our focus beyond authority and inerrancy to application. The Radica</div>
          <div className="ShareButtonMobile">{this.shareButton()}</div>
        </div>
      </div>
    )
  }
}