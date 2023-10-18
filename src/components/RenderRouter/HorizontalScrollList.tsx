import React, { ReactNode } from 'react';
import './HorizontalScrollList.scss';

interface Props {
  darkMode?: boolean;
  children: (Element | null)[] | ReactNode;
  isItemWholePage?: boolean;
}
interface State {
  numPages: number;
  currentPage: number;
  childrenLength: number;
}

class HorizontalScrollList extends React.Component<Props, State> {
  scrollContainerElement: any;
  scrollNavElement: any;
  pageWidth = 0;
  pageWidthActual = 0;
  scrollableContentWidth = 0;
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

  refCallbackScrollNav = (scrollNavElement: any) => {
    this.scrollNavElement = scrollNavElement;
  };
  onUpdatePages = (numPages: number) => {
    this.setState({ numPages: numPages });
  };
  computePages() {
    const children = this.scrollContainerElement?.getElementsByClassName(
      'HorizontalScrollListItem'
    );
    let numPages = this.state.numPages;
    if (children && children.length > 0) {
      const containerSize =
        this.scrollContainerElement?.getBoundingClientRect();

      if (!containerSize?.width) {
        // element is not found then
        const checkElementExists = setInterval(() => {
          const pages = this.computePages();
          if (!isNaN(pages)) {
            clearInterval(checkElementExists);
          }
        }, 1000);
        return NaN;
      }

      const childSize = children[0].getBoundingClientRect().width;
      this.itemsPerPage = Math.floor(containerSize.width / childSize);
      this.pageWidth = this.itemsPerPage * childSize;
      this.pageWidthActual = containerSize.width;
      this.scrollableContentWidth = childSize * children.length;
      numPages = Math.ceil((childSize * children.length) / this.pageWidth);
      if (numPages === Infinity) {
        numPages = -1;
      }
    }
    if (numPages !== this.state.numPages) {
      this.onUpdatePages(numPages);
    }
    return numPages;
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.computePages();
    });
    if (this.scrollContainerElement && this.state.numPages === -1) {
      // This is the first time, so compute...
      this.computePages();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.computePages();
    });
  }

  componentDidUpdate() {
    const children = this.scrollContainerElement?.getElementsByClassName(
      'HorizontalScrollListItem'
    );
    if (children && children.length !== this.state.childrenLength) {
      // Content continues to load asynchronously, so need to keep recomputing number of pages
      this.computePages();
      this.setState({ childrenLength: children.length });
    }

    if (this.useSmoothScroll) {
      this.smoothScrollTo(
        this.scrollContainerElement,
        this.pageWidth * this.state.currentPage -
          this.scrollContainerElement.scrollLeft,
        750
      );
    }
  }

  smoothScrollTo(element: any, distanceX: any, duration: any) {
    const startX = element.scrollLeft;
    const startTime = new Date().getTime();

    if (this.scrollTimer) {
      window.clearInterval(this.scrollTimer);
    }

    const easeOutQuart = function (t: number): number {
      return 1 - --t * t * t * t;
    };
    this.scrollTimer = window.setInterval(() => {
      const time = (new Date().getTime() - startTime) / duration,
        newX = startX + distanceX * easeOutQuart(time);
      if (time >= 1) {
        window.clearInterval(this.scrollTimer);
        this.scrollTimer = null;
        this.useSmoothScroll = false;
      }
      element.scrollLeft = newX;
    }, 1000 / 60); // 60 fps
  }

  getScrollLineClickHandler(scrollIndex: any) {
    return () => {
      this.useSmoothScroll = true;
      this.setState({ currentPage: scrollIndex });
    };
  }

  scrollLeftClicked = () => {
    if (this.state.currentPage > 0) {
      this.useSmoothScroll = true;
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  scrollRightClicked = () => {
    if (this.state.currentPage < this.state.numPages - 1) {
      this.useSmoothScroll = true;
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  handleScroll = (event: any) => {
    if (this.state.numPages !== -1 && !this.useSmoothScroll) {
      const element = event.target;
      let newCurrentPage = Math.floor(
        element.scrollLeft / (this.pageWidth - 10)
      );
      if (
        element.scrollLeft >=
        this.scrollableContentWidth - this.pageWidthActual - 10
      ) {
        newCurrentPage = this.state.numPages - 1;
      }
      this.useSmoothScroll = false;
      this.setState({ currentPage: newCurrentPage });
    }
  };

  render(): ReactNode {
    return (
      <>
        <div
          className={
            'HorizontalScrollListContainer' +
            (this.props.darkMode ? ' dark' : '')
          }
        >
          <div
            ref={this.refCallback}
            className="HorizontalScrollListItemContainer"
            onScroll={this.handleScroll}
            data-testid="horizontal-scroll-list"
          >
            {/* Each child will be sized to determine how many pages we need compared to the overall width of the container */}
            {this.props.children &&
              Array.isArray(this.props.children) &&
              this.props.children.map((child, index) =>
                child ? (
                  <div
                    className={
                      'HorizontalScrollListItem' +
                      (this.props.isItemWholePage ? ' whole-page' : '')
                    }
                    key={index}
                  >
                    {child}
                  </div>
                ) : null
              )}
          </div>
          <div
            ref={this.refCallbackScrollNav}
            className="ListItemScrollNav"
            style={
              this.state.currentPage >= this.state.numPages - 1 &&
              this.state.currentPage === 0
                ? { display: 'none' }
                : {}
            }
          >
            <div className="ScrollLineContainer">
              {/* One of these per page, computed once sizing is done */}
              {this.state.numPages > 0 && this.state.numPages < 50
                ? new Array(this.state.numPages)
                    .fill('X')
                    .map((_, scrollLineIndex) => (
                      <div
                        key={scrollLineIndex}
                        onClick={this.getScrollLineClickHandler(
                          scrollLineIndex
                        )}
                        className={
                          'ScrollLine ' +
                          (scrollLineIndex === this.state.currentPage
                            ? 'Selected'
                            : '')
                        }
                      >
                        <div className="line"></div>
                      </div>
                    ))
                : null}
            </div>
            <div className="ScrollButtonContainer">
              <button
                className="ScrollButton Left"
                disabled={this.state.currentPage === 0}
                onClick={this.scrollLeftClicked}
              >
                <img alt="left scroll" src="/static/svg/ArrowLeft.svg"></img>
              </button>
              <button
                className="ScrollButton Right"
                disabled={this.state.currentPage >= this.state.numPages - 1}
                onClick={this.scrollRightClicked}
              >
                <img alt="right scroll" src="/static/svg/ArrowRight.svg"></img>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HorizontalScrollList;
