import { ItemImage } from 'components/types';
import ScaledImage from './ScaledImage';
import './FadeImage.scss';
import { useState } from 'react';
type FadeBabyHeroImageProps = {
  imageSrc: ItemImage['src'];
  fallbackUrl?: string;
  breakpointSizes?: { [maxWidth: string]: number };
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
  ...htmlProps
}: FadeBabyHeroImageProps) {
  const [isError, setIsError] = useState(false);
  const breakpoints = breakpointSizes ?? defaultBreakPointSizes;
  const fallbackSrc = fallbackUrl ?? defaultFallbackSrc;
  // catches external images
  if (!imageSrc.includes('/static/photos/series/baby-hero/')) {
    return (
      <img
        src={isError ? fallbackUrl : imageSrc}
        className={`${className} fadeImage`}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        onError={() => setIsError(true)}
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
        e.currentTarget.style.opacity = '1';
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
