import { ItemImage } from 'components/types';
import ScaledImage from './ScaledImage';
import './FadeImage.scss';
import { useEffect, useState } from 'react';
type FadeBabyHeroImageProps = {
  imageSrc: ItemImage['src'];
  fallbackUrl?: string;
  breakpointSizes?: { [maxWidth: string]: number };
  noShowOnStartup?: boolean; // if true, will require manual setting of opacity to 1
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function FadeImage({
  breakpointSizes,
  className,
  fallbackUrl,
  imageSrc,
  alt,
  noShowOnStartup,
  ...htmlProps
}: FadeBabyHeroImageProps) {
  const [uri, setUri] = useState(imageSrc);
  const breakpoints = breakpointSizes ?? defaultBreakPointSizes;
  const fallbackSrc = fallbackUrl ?? defaultFallbackSrc;
  useEffect(() => {
    if (imageSrc) setUri(imageSrc);
  }, [imageSrc]);
  // catches external images
  if (!imageSrc?.includes('/static/photos/series/baby-hero/')) {
    return (
      <img
        onError={(e) => setUri(fallbackSrc)}
        src={uri}
        className={`${className} fadeImage`}
        onLoad={(e) => {
          if (!noShowOnStartup) e.currentTarget.style.opacity = '1';
        }}
        {...htmlProps}
      />
    );
  }
  return (
    <ScaledImage
      breakpointSizes={breakpoints}
      image={{ src: imageSrc ?? '', alt: alt ?? '' }}
      className={`${className} fadeImage`}
      fallbackUrl={fallbackSrc}
      onLoad={(e) => {
        if (!noShowOnStartup) e.currentTarget.style.opacity = '1';
      }}
      {...htmlProps}
    />
  );
}

const defaultBreakPointSizes = {
  320: 320,
  480: 480,
  640: 640,
  1280: 640,
  1920: 960,
  2560: 1280,
};
const defaultFallbackSrc =
  '/static/photos/series/baby-hero/babyhero-fallback.jpg';
