import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { isArray } from 'util';
import './LadderList.scss';

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

export default withRouter(LadderList);
