import React from 'react';
import './SearchResult.scss';
import ScaledImage from 'components/ScaledImage/ScaledImage';
import { Link } from 'components/Link/Link';

interface Props {
  content: any;
}
interface State {
  content: any;
  currentPage: any;
}

export default class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      currentPage: 'PushPay',
    };
  }
  imgUrl(size: any) {
    if (window.location.hostname === 'localhost')
      return 'https://localhost:3006';
    else if (window.location.hostname.includes('beta'))
      return 'https://beta.themeetinghouse.com/cache/' + size;
    else return 'https://www.themeetinghouse.com/cache/' + size;
  }

  render() {
    const image = {
      src: `${this.state.content.image}`,
      alt: `${this.state.content.imageAlt}`,
    };
    return (
      <div className="searchResultDiv1">
        <Link to={this.state.content.navigateTo}>
          <div key={this.state.content.header} className="SearchResultItem">
            <ScaledImage
              image={image}
              className="StaffImage"
              fallbackUrl="/static/NoCompassionLogo.png"
              breakpointSizes={{
                320: 80,
                480: 120,
                640: 180,
                1280: 320,
                1920: 480,
                2560: 640,
              }}
            />
            <div className="Content">
              <div className="Title">{this.state.content.header1}</div>
              <div className="Description">{this.state.content.text1}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
