import './TMHCarousel.scss';
import { Link } from 'components/Link/Link';
import ScaledImage from 'components/ScaledImage/ScaledImage';

type CarouselItemProps = {
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
  return (
    <Link className="TMHCarouselLink" to={link?.navigateTo}>
      <ScaledImage
        image={{ src: link?.imageSrc, alt: link?.imageAlt }}
        className="TMHCarouselImage"
        fallbackUrl={fallbackImageUrl}
        breakpointSizes={imageBreakPointSizes}
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
const imageBreakPointSizes = {
  320: 80,
  480: 120,
  640: 180,
  1280: 320,
  1920: 480,
  2560: 640,
};
