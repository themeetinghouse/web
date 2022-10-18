import { useState, HTMLAttributes, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fade,
} from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { LinkButton } from 'components/Link/Link';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
} from 'react-share';
import { FacebookIcon, EmailIcon, TwitterIcon } from 'react-share';
import { Link } from 'react-router-dom';
import { GetBlogQuery, GetNotesQuery } from 'API';
import { Portal } from 'components/Portal';
import './BlogReader.scss';

function ShareButton({ className }: HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className} data-testid="share">
      <Dropdown isOpen={open} toggle={() => setOpen((prev) => !prev)}>
        <DropdownToggle id="share-custom">
          <img
            className="button-icon"
            src="/static/svg/Share-white.svg"
            alt=""
          />
          Share
        </DropdownToggle>
        <Fade timeout={1000}>
          <DropdownMenu
            className="ShareMenu"
            style={!open ? { display: 'none' } : {}}
          >
            <FacebookShareButton
              className="ShareOption"
              url={window.location.href}
            >
              <DropdownItem as="div" className="dropitem">
                <FacebookIcon className="social-share-icon" size={32} round />
                Facebook
              </DropdownItem>
            </FacebookShareButton>

            <TwitterShareButton
              className="ShareOption"
              url={window.location.href}
              via={'TheMeetingHouse'}
              related={['TheMeetingHouse']}
            >
              <DropdownItem as="button" className="dropitem">
                <TwitterIcon className="social-share-icon" size={32} round />
                Twitter
              </DropdownItem>
            </TwitterShareButton>

            <EmailShareButton
              className="ShareOption"
              url={window.location.href}
              body={'I wanted to share this blog post with you:'}
            >
              <DropdownItem as="button" className="dropitem">
                <EmailIcon className="social-share-icon" size={32} round />
                Email
              </DropdownItem>
            </EmailShareButton>
          </DropdownMenu>
        </Fade>
      </Dropdown>
    </div>
  );
}

interface DownloadButtonProps {
  pdf: string | null | undefined;
  className: string;
}

function DownloadButton({ pdf, className }: DownloadButtonProps) {
  if (!pdf) return null;

  return (
    <div className={className} data-testid="download">
      <LinkButton size="lg" className="download-custom inverted" to={pdf}>
        <img
          className="button-icon"
          src="/static/svg/Download-White.svg"
          alt=""
        />
        PDF
      </LinkButton>
    </div>
  );
}

interface Props {
  data: GetBlogQuery['getBlog'] | GetNotesQuery['getNotes'];
  style: 'blog' | 'notes';
}

export default function BlogReader({ data, style }: Props) {
  const [selectedText, setSelectedText] = useState('');
  const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const resetState = () => {
    setSelectedText('');
    setSelectedPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (style === 'blog') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        resetState();
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [style]);

  useEffect(() => {
    if (style === 'blog') {
      const blogBody = document.getElementById('blog-body');
      if (blogBody !== null && !isMobile) {
        const handleSelect = () => {
          const selection = window.getSelection();
          const text = selection?.toString() ?? '';

          if (selection && text.length > 0) {
            const range = selection.getRangeAt(0);
            const { y, right, left } = range.getBoundingClientRect();

            setSelectedPosition({
              x: (right + left) / 2,
              y,
            });

            setSelectedText(text);
          }
        };

        blogBody.addEventListener('mouseup', handleSelect);
        return () => blogBody.removeEventListener('mouseup', handleSelect);
      }
    }
  }, [style]);

  useEffect(() => {
    if (style === 'blog') {
      const root = document.getElementById('root');
      if (root !== null && !isMobile) {
        const handleMouseDown = () => {
          resetState();
        };

        root.addEventListener('mousedown', handleMouseDown);
        return () => root.removeEventListener('mousedown', handleMouseDown);
      }
    }
  }, [style]);

  useEffect(() => {
    if (style === 'blog') {
      if (!isMobile) {
        const handleKeyUp = ({ key }: KeyboardEvent) => {
          if (key === 'Tab') {
            const selection = window.getSelection();
            const text = selection?.toString() ?? '';

            if (text.length === 0) {
              resetState();
            }
          }
        };

        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
      }
    }
  }, [style]);
  useEffect(
    function updateTags() {
      if (style === 'blog' && data && 'blogTitle' in data) {
        document.title = data.blogTitle + ' by ' + data.author ?? '';
        const metaTags = document.getElementsByTagName('meta');
        const keywordsMetaTag = Array.from(metaTags).find(
          (tag, index) => tag.name === 'keywords'
        );
        const descriptionMetaTag = Array.from(metaTags).find(
          (tag, index) => tag.name === 'description'
        );
        if (descriptionMetaTag && data.description)
          descriptionMetaTag.content = data.description;
        if (keywordsMetaTag && data.tags)
          keywordsMetaTag.content = data.tags.join(', ');
      }
    },
    [style, data]
  );
  if (style === 'blog' && data && 'blogTitle' in data) {
    const { x, y } = selectedPosition;

    return (
      <>
        <div className="blog-reader">
          <div className="blog-content">
            <Link className="link-to-main-blog-page" to="/blog">
              Blog
              <img
                className="dropdown-caret"
                src="/static/svg/Dropdown Caret.svg"
                alt=""
              />
            </Link>
            <h1 className="blog-h1">{data.blogTitle}</h1>
            <div className="blog-details">
              by <span className="blog-author">{data.author}</span> on{' '}
              {data.publishedDate}
            </div>
            <ShareButton className="ShareButtonDesktop" />
            <div data-testid="blog-body" id="blog-body" className="blog-body">
              {ReactHtmlParser(data.content ?? '')}
            </div>
            <ShareButton className="ShareButtonMobile" />
          </div>
        </div>
        {!isMobile && selectedText !== '' && (
          <Portal>
            <div
              data-testid="inline-share"
              className="inline-share"
              style={{
                top: y + window.pageYOffset - 68, // height of button container + triangle: 56 + 12 = 68
                left: x - 52, // half of width of button container: 104 / 2 = 52
              }}
            >
              <div className="button-container">
                <TwitterShareButton
                  url={window.location.href}
                  via="TheMeetingHouse"
                  title={selectedText}
                  className="share-button"
                  aria-label="share to twitter"
                  data-testid="twitter"
                >
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 2.60005C23.1 3.00005 22.2 3.30005 21.2 3.40005C22.2 2.80005 23 1.80005 23.4 0.700049C22.4 1.30005 21.4 1.70005 20.3 1.90005C19.4 0.900049 18.1 0.300049 16.7 0.300049C14 0.300049 11.8 2.50005 11.8 5.20005C11.8 5.60005 11.8 6.00005 11.9 6.30005C7.7 6.10005 4.1 4.10005 1.7 1.10005C1.2 1.90005 1 2.70005 1 3.60005C1 5.30005 1.9 6.80005 3.2 7.70005C2.4 7.70005 1.6 7.50005 1 7.10005C1 7.10005 1 7.10005 1 7.20005C1 9.60005 2.7 11.6 4.9 12C4.5 12.1 4.1 12.2 3.6 12.2C3.3 12.2 3 12.2 2.7 12.1C3.3 14.1 5.1 15.5 7.3 15.5C5.6 16.8 3.5 17.6 1.2 17.6C0.8 17.6 0.4 17.6 0 17.5C2.2 18.9 4.8 19.7001 7.5 19.7001C16.6 19.7001 21.5 12.2 21.5 5.70005C21.5 5.50005 21.5 5.30005 21.5 5.10005C22.5 4.40005 23.3 3.50005 24 2.60005Z"
                      fill="white"
                    />
                  </svg>
                </TwitterShareButton>
                <EmailShareButton
                  url={window.location.href}
                  body={selectedText}
                  className="share-button"
                  aria-label="share via email"
                  data-testid="email"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.61328 3.55811L11.9993 13.0001L22.3843 3.55911"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </EmailShareButton>
              </div>
              <div className="triangle" />
            </div>
          </Portal>
        )}
      </>
    );
  } else if (style === 'notes' && data && 'title' in data) {
    return (
      <div className="blog-reader">
        {data.title === 'Unlisted' ? (
          <div className="blog-content">
            <h1 className="blog-h1">Notes will be available soon</h1>
            <div className="blog-details">Please check back later</div>
          </div>
        ) : (
          <div className="blog-content">
            <h1 className="blog-h1">{data.title}</h1>
            <DownloadButton className="ShareButtonDesktop" pdf={data.pdf} />
            <div className={data.questions ? 'notes-body' : 'blog-body'}>
              {ReactHtmlParser(data.content ?? '')}
            </div>
            {data.questions ? <div className="notes-line" /> : null}
            {data.questions ? (
              <div className="questions-body">
                {ReactHtmlParser(data.questions)}
              </div>
            ) : null}
            <DownloadButton className="ShareButtonMobile" pdf={data.pdf} />
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
}
