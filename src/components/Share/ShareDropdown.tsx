import { useMemo, useState } from 'react';
import { isMobileOnly } from 'react-device-detect';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import './ShareDropdown.scss';
type ShareDropdownColor = 'white-bg' | 'black-bg';

type ShareDropdownProps = {
  data?: any;
  bgColor: ShareDropdownColor;
  buttonType: 'wide' | 'short';
  shareType: 'teaching' | 'blogpost' | 'livestream';
};

export default function ShareDropdown(props: ShareDropdownProps) {
  const { data, bgColor, buttonType, shareType } = props;
  const [shareOpen, setShareOpen] = useState(false);
  const getShareUrl = (type: string) => {
    console.log('getting share url');
    switch (type) {
      case 'teaching':
        return data.seriesTitle && data.id
          ? 'https://www.themeetinghouse.com/videos/' +
              data.seriesTitle.replace(/\s/g, '%20') +
              '/' +
              data.id
          : window.location.href;
      case 'livestream':
        return 'https://www.themeetinghouse.com/live';
      case 'blogpost':
        return '';
      default:
        return '';
    }
  };
  const getShareMessage = (type: string) => {
    switch (type) {
      case 'teaching':
        return data.Youtube
          ? data.Youtube.snippet.title + ' from The Meeting House'
          : 'Check out this video from The Meeting House';
      case 'livestream':
        return 'The Meeting House Livestream';
      case 'blogpost':
        return '';
    }
  };
  const getShareKind = (type: string) => {
    switch (type) {
      case 'teaching':
        return 'video';
      case 'blogpost':
        return 'blog post';
      case 'livestream':
        return 'livestream';
    }
  };

  const shareUrl = useMemo(() => getShareUrl(shareType), []);
  const shareMessage = useMemo(() => getShareMessage(shareType), []);
  const shareKind = useMemo(() => getShareKind(shareType), []);

  return (
    <div>
      <button
        onClick={() => setShareOpen(!shareOpen)}
        className={`ShareButton ${bgColor} ${buttonType}`}
      >
        <img
          className="button-icon"
          src={`/static/svg/${
            bgColor === 'black-bg' ? 'Share-white.svg' : 'Share.svg'
          }`}
          alt=""
        />
        Share
      </button>
      {shareOpen ? (
        <div className={`ShareMenu ${bgColor} ${buttonType}`}>
          <FacebookShareButton
            className="ShareOption"
            // if the data is null (unlikely), window.location.href will work for ~98% of situations. the rest of the time the user is sent to https://www.themeetinghouse.com/teaching
            url={shareUrl}
            quote={shareMessage}
          >
            <div className="ShareItem">
              <FacebookIcon className="social-share-icon" size={32} round />
              Facebook
            </div>
          </FacebookShareButton>
          <TwitterShareButton
            className="ShareOption"
            url={shareUrl}
            title={shareMessage}
            via={'TheMeetingHouse'}
            related={['TheMeetingHouse']}
          >
            <div className="ShareItem">
              <TwitterIcon className="social-share-icon" size={32} round />
              Twitter
            </div>
          </TwitterShareButton>
          <EmailShareButton
            className="ShareOption"
            url={shareUrl}
            subject={shareMessage}
            body={`I wanted to share this ${shareKind} with you:`}
          >
            <div className="ShareItem">
              <EmailIcon className="social-share-icon" size={32} round />
              Email
            </div>
          </EmailShareButton>
          {isMobileOnly ? (
            <>
              <WhatsappShareButton
                className="ShareOption"
                url={shareUrl}
                title={shareMessage}
              >
                <div className="ShareItem">
                  <WhatsappIcon className="social-share-icon" size={32} round />
                  WhatsApp
                </div>
              </WhatsappShareButton>

              <TelegramShareButton
                className="ShareOption"
                url={shareUrl}
                title={shareMessage}
              >
                <div className="ShareItem">
                  <TelegramIcon className="social-share-icon" size={32} round />
                  Telegram
                </div>
              </TelegramShareButton>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
