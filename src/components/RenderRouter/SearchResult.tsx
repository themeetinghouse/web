import React from 'react';
import './SearchResult.scss';
import ScaledImage from 'components/ScaledImage/ScaledImage';
import { Link } from 'components/Link/Link';

interface Props {
  content: any;
}

export default class ContentItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
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
      src: `${this.props.content.image1.src}`,
      alt: `${this.props.content.image1.alt}`,
    };
    return (
      <div className="searchResultDiv1">
        <Link to={this.props.content.navigateTo}>
          <div key={this.props.content.header} className="SearchResultItem">
            <ScaledImage
              image={image}
              className="SearchThumb"
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
              <div className="Title">{this.props.content.header1}</div>
              <div className="Description">{this.props.content.text1}</div>
            </div>
            <div className="Link">
              <img alt="GO" src="\static\svg\ArrowRight black.svg" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
