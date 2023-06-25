import './TMHCarousel.scss';
import { Link } from 'components/Link/Link';
import { ListImage } from 'components/RenderRouter/ListItem';
import React from 'react';
import { Storage } from 'aws-amplify';
type CarouselItemProps = {
  isFromList?: boolean;
  link: {
    title: string;
    text: string;
    imageSrc: string;
    imageAlt: string;
    navigateTo: string;
  };
};
export default function LinkCarouselItem(props: CarouselItemProps) {
  const { link } = props;
  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    (async () => {
      if (link.navigateTo.includes('editor/pdfs')) {
        const newLink = await Storage.get(link.navigateTo);
        setUrl(newLink);
      } else {
        setUrl(link.navigateTo);
      }
    })();
  }, [link.navigateTo]);
  if (!url) return null;
  return (
    <Link className="TMHCarouselLink" to={url}>
      <ListImage
        image={{ src: link?.imageSrc, alt: link?.imageAlt }}
        className="TMHCarouselImage"
        fallbackImageUrl={fallbackImageUrl}
      />
      {link?.title ? (
        <div className="TMHCarouselItemTitle">
          <div style={{ flex: 1 }}>{link.title}</div>

          <img
            className="TMHCarouselArrow"
            alt="Arrow"
            src="/static/svg/ArrowRight black.svg"
          />
        </div>
      ) : null}
      {link?.text ? (
        <div className="TMHCarouselItemDescription">{link.text}</div>
      ) : null}
    </Link>
  );
}

const fallbackImageUrl = '/static/photos/blogs/baby-hero/fallback.jpg';
