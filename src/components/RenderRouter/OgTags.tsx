import { Helmet } from 'react-helmet';
import { tmhImageUrl } from 'components/ScaledImage/ScaledImage';

const Tags = ({ content }: any) => {
  const imageUrl = tmhImageUrl(1920, content.image).split(' ')[0];
  return (
    <Helmet>
      {content.url ? <meta property="og:url" content={content.url} /> : null}
      {content.title ? (
        <meta property="og:title" content={content.title} />
      ) : null}
      {content.description ? (
        <meta property="og:description" content={content.description} />
      ) : null}
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="579712102531269" />

      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageUrl ? (
        <meta property="og:image:secure_url" content={imageUrl} />
      ) : null}
      <meta property="og:image:type" content="image/jpeg" />

      <meta property="twitter:title" content={content.title} />
      <meta property="twitter:creator" content="@TheMeetingHouse" />
      {imageUrl ? <meta property="twitter:image" content={imageUrl} /> : null}
      {content.description ? (
        <meta property="twitter:description" content={content.description} />
      ) : null}
      {content.url ? (
        <meta property="twitter:url" content={content.url} />
      ) : null}
      <meta property="twitter:card" content="summary" />
    </Helmet>
  );
};

export default Tags;
