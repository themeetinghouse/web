import React from 'react';
import './BlogReader.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import Fade from 'react-bootstrap/Fade';
import ReactHtmlParser from 'react-html-parser';
import { Button } from 'reactstrap';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
} from 'react-share';
import { FacebookIcon, EmailIcon, TwitterIcon } from 'react-share';
import { Link } from 'react-router-dom';

interface Props {
  content: any;
  data: any;
}
interface State {
  data: any;
  content: any;
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data,
    };
  }

  navigateNewUrl(to: string) {
    window.open(to, '_blank', 'noopener noreferrer');
  }

  shareButton() {
    return (
      <Dropdown>
        <Dropdown.Toggle id="share-custom">
          <img
            className="button-icon"
            src="/static/svg/Share-white.svg"
            alt=""
          />
          Share
        </Dropdown.Toggle>
        <Fade timeout={1000}>
          <Dropdown.Menu className="ShareMenu">
            <FacebookShareButton
              className="ShareOption"
              url={window.location.href}
            >
              <Dropdown.Item as="button" className="dropitem">
                <FacebookIcon className="social-share-icon" size={32} round />
                Facebook
              </Dropdown.Item>
            </FacebookShareButton>

            <TwitterShareButton
              className="ShareOption"
              url={window.location.href}
              via={'TheMeetingHouse'}
              related={['TheMeetingHouse']}
            >
              <Dropdown.Item as="button" className="dropitem">
                <TwitterIcon className="social-share-icon" size={32} round />
                Twitter
              </Dropdown.Item>
            </TwitterShareButton>

            <EmailShareButton
              className="ShareOption"
              url={window.location.href}
              body={'I wanted to share this blog post with you:'}
            >
              <Dropdown.Item as="button" className="dropitem">
                <EmailIcon className="social-share-icon" size={32} round />
                Email
              </Dropdown.Item>
            </EmailShareButton>
          </Dropdown.Menu>
        </Fade>
      </Dropdown>
    );
  }

  downloadButton(pdfLink: string) {
    return (
      <Button
        className="download-custom"
        onClick={() => this.navigateNewUrl(pdfLink)}
      >
        <img
          className="button-icon"
          src="/static/svg/Download-White.svg"
          alt=""
        />
        PDF
      </Button>
    );
  }

  render() {
    if (this.state.data !== null) {
      switch (this.state.content.style) {
        case 'blog':
          return (
            <div className="blog-reader">
              <Link className="link-to-main-blog-page" to="/blog">
                Blog
                <img
                  className="dropdown-caret"
                  src="/static/svg/Dropdown Caret.svg"
                  alt=""
                ></img>
              </Link>
              <div className="blog-content">
                <h1 className="blog-h1">{this.state.data.blogTitle}</h1>
                <div className="blog-details">
                  by{' '}
                  <span className="blog-author">{this.state.data.author}</span>{' '}
                  on {this.state.data.publishedDate}
                </div>
                <div className="ShareButtonDesktop">{this.shareButton()}</div>
                <div className="blog-body">
                  {ReactHtmlParser(this.state.data.content)}
                </div>
                <div className="ShareButtonMobile">{this.shareButton()}</div>
              </div>
            </div>
          );

        case 'notes':
          return (
            <div className="blog-reader">
              {this.state.data.title === 'Unlisted' ? (
                <div className="blog-content">
                  <h1 className="blog-h1">Notes will be available soon</h1>
                  <div className="blog-details">Please check back later</div>
                </div>
              ) : (
                <div className="blog-content">
                  <h1 className="blog-h1">{this.state.data.title}</h1>
                  {this.state.data.pdf ? (
                    <div className="ShareButtonDesktop">
                      {this.downloadButton(this.state.data.pdf)}
                    </div>
                  ) : null}
                  <div
                    className={
                      this.state.data.questions ? 'notes-body' : 'blog-body'
                    }
                  >
                    {ReactHtmlParser(this.state.data.content)}
                  </div>
                  {this.state.data.questions ? (
                    <div className="notes-line" />
                  ) : null}
                  {this.state.data.questions ? (
                    <div className="questions-body">
                      {ReactHtmlParser(this.state.data.questions)}
                    </div>
                  ) : null}
                  {this.state.data.pdf ? (
                    <div className="ShareButtonMobile">
                      {this.downloadButton(this.state.data.pdf)}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          );

        default:
          return null;
      }
    } else {
      return null;
    }
  }
}
