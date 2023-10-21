import React from 'react';
import { Helmet } from 'react-helmet';
import { tmhImageUrl } from 'components/ScaledImage/ScaledImage';

interface Props {
  content: any;
}
interface State {
  content: any;
}
class Tags extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
    };
  }

  ogImage() {
    try {
      const imageUrl = tmhImageUrl(1920, this.state.content.image).split(
        ' '
      )[0];
      return (
        <Helmet>
          <meta property="og:url" content={this.state.content.url} />
          <meta property="og:title" content={this.state.content.title} />
          <meta
            property="og:description"
            content={this.state.content.description}
          />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="579712102531269" />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:secure_url" content={imageUrl} />
          <meta property="og:image:type" content="image/jpeg" />

          <meta property="twitter:title" content={this.state.content.title} />
          <meta property="twitter:creator" content="@TheMeetingHouse" />
          <meta property="twitter:image" content={imageUrl} />
          <meta
            property="twitter:description"
            content={this.state.content.description}
          />
          <meta property="twitter:url" content={this.state.content.url} />
          <meta property="twitter:card" content="summary" />
        </Helmet>
      );
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  render() {
    return this.ogImage();
  }
}

export default Tags;
