import { useState, HTMLAttributes } from 'react';
import './BlogReader.scss';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fade,
} from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { LinkButton } from '../../components/Link/Link';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
} from 'react-share';
import { FacebookIcon, EmailIcon, TwitterIcon } from 'react-share';
import { Link } from 'react-router-dom';
import { GetBlogQuery, GetNotesQuery } from '../../API';

function ShareButton({ className }: HTMLAttributes<HTMLDivElement>) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
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
          <DropdownMenu className="ShareMenu">
            <FacebookShareButton
              className="ShareOption"
              url={window.location.href}
            >
              <DropdownItem as="button" className="dropitem">
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
    <div className={className}>
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
}

export default function BlogReader({ data }: Props) {
  if (data && 'blogTitle' in data) {
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
          <h1 className="blog-h1">{data.blogTitle}</h1>
          <div className="blog-details">
            by <span className="blog-author">{data.author}</span> on{' '}
            {data.publishedDate}
          </div>
          <ShareButton className="ShareButtonDesktop" />
          <div className="blog-body">{ReactHtmlParser(data.content ?? '')}</div>
          <ShareButton className="ShareButtonMobile" />
        </div>
      </div>
    );
  } else if (data && 'questions' in data) {
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
