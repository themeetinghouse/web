import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { isArray } from 'util';
import './LadderList.scss';
import { useState, HTMLAttributes } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Fade,
} from 'reactstrap';
import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
} from 'react-share';
import { FacebookIcon, EmailIcon, TwitterIcon } from 'react-share';

interface Props extends RouteComponentProps {
  darkMode?: boolean;
}
interface State {
  numPages: number;
  currentPage: number;
  childrenLength: number;
}

class LadderList extends React.Component<Props, State> {
  scrollContainerElement: any;
  scrollNavElement: any;
  pageWidth = 0;
  pageWidthActual = 0;
  itemsPerPage = 0;
  useSmoothScroll = false;
  scrollTimer: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      childrenLength: -1,
      numPages: -1,
      currentPage: 0,
    };
  }

  refCallback = (scrollContainerElement: any) => {
    this.scrollContainerElement = scrollContainerElement;
  };

  render(): ReactNode {
    return (
      <>
        <div
          className={
            'LadderListContainer ' + (this.props.darkMode ? 'dark' : '')
          }
        >
          <div ref={this.refCallback} className="LadderListItemContainer">
            {this.props.children &&
              isArray(this.props.children) &&
              this.props.children.map((child, index) =>
                child ? (
                  <div className="LadderListItem" key={index}>
                    {child}
                  </div>
                ) : null
              )}
          </div>
        </div>
      </>
    );
  }
}

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

export default withRouter(LadderList);
