import React, { SyntheticEvent, EventHandler, ReactElement, ImgHTMLAttributes } from 'react';
import { ItemImage } from 'components/types';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  image?: ItemImage;
  fallbackUrl?: string;
}

export function tmhImageUrl(size: number, imageSrc: string) {
  let baseUrl: string;
  if (window.location.hostname === 'localhost') {
    baseUrl = 'https://localhost:3006';
  } else if (window.location.hostname.includes('beta')) {
    baseUrl = 'https://beta.themeetinghouse.com/cache/' + size;
  } else {
    baseUrl = 'https://www.themeetinghouse.com/cache/' + size;
  }
  return `${baseUrl}${imageSrc} ${size}w`;
}

export function fallbackToImage(fallbackUrl: string | undefined): EventHandler<SyntheticEvent<HTMLImageElement>> | undefined {
  if (!fallbackUrl) {
    return
  }
  return function (event: SyntheticEvent<HTMLImageElement>) {
    if (!event.currentTarget.src.endsWith(fallbackUrl)) {
      event.currentTarget.src = fallbackUrl;
      event.currentTarget.srcset = '';
    }
  };
}

export default function ScaledImage(props: Props): ReactElement<Props> | null {
  if (!props?.image?.src) {
    return null;
  }

  const srcSet = [
    tmhImageUrl(320, props.image.src),
    tmhImageUrl(480, props.image.src),
    tmhImageUrl(640, props.image.src),
    tmhImageUrl(1280, props.image.src),
    tmhImageUrl(1920, props.image.src),
    tmhImageUrl(2560, props.image.src),
  ].join(',');

  const { image, fallbackUrl, ...htmlProps } = props;
  return (
    <img
      src={tmhImageUrl(2560, image.src).split(' ')[0]}
      alt={image.alt}
      onError={fallbackToImage(fallbackUrl)}
      srcSet={srcSet}
      sizes="(max-width: 320px) 320px,
             (max-width: 480px) 480px,
             (max-width: 640px) 640px,
             (max-width: 1280px) 1280px,
             (max-width: 1920px) 1920px,
             2560px"
      {...htmlProps}
    />
  );
}
