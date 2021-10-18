import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { isArray } from 'util';
import './LadderList.scss';

interface Props extends RouteComponentProps {
  darkMode?: boolean;
  children?: (JSX.Element | null)[];
}
interface State {
  numPages: number;
  currentPage: number;
  childrenLength: number;
}

class LadderList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): ReactNode {
    return (
      <>
        <div
          className={
            'LadderListContainer ' + (this.props.darkMode ? 'dark' : '')
          }
        >
          <div className="LadderListItemContainer">
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
