import {
  SyntheticEvent,
  EventHandler,
  ReactElement,
  ImgHTMLAttributes,
  useState,
} from 'react';
import { ItemImage } from 'components/types';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  image?: ItemImage;
  fallbackUrl?: string;
  breakpointSizes: { [maxWidth: string]: number };
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
  return `${baseUrl}${encodeURI(imageSrc)} ${size}w`;
}

function tmhWebpUrl(size: number, imageSrc: string) {
  const fileExt = imageSrc.substring(imageSrc.lastIndexOf('.'));

  return `https://www.themeetinghouse.com/cache/${size}webp${encodeURI(
    imageSrc.replace(fileExt, '.webp')
  )} ${size}w`;
}

export function fallbackToImage(
  fallbackUrl: string | undefined
): EventHandler<SyntheticEvent<HTMLImageElement>> | undefined {
  if (!fallbackUrl) {
    return;
  }
  return function (event: SyntheticEvent<HTMLImageElement>) {
    if (!event.currentTarget.src.endsWith(fallbackUrl)) {
      event.currentTarget.src = fallbackUrl;
      event.currentTarget.srcset = '';
    }
  };
}

export default function ScaledImage(props: Props): ReactElement<Props> | null {
  const [isError, setIsError] = useState(false);

  const {
    image,
    fallbackUrl,
    breakpointSizes: breakpoints,
    ...htmlProps
  } = props;

  if (!image?.src) {
    return null;
  }

  Object.entries =
    Object.entries ||
    function entriesPolyFill(
      obj: Props['breakpointSizes']
    ): [string, number][] {
      return Object.keys(obj).map((key) => {
        return [key, obj[key]];
      });
    };

  const imageSizes = Object.entries(breakpoints);
  imageSizes.sort(([a], [b]) => Number(a) - Number(b));

  if (imageSizes.length === 0) {
    return null;
  }

  const srcSet = imageSizes
    .map(([, size]) => tmhImageUrl(size, image.src))
    .join(',');

  const webpSrcSet = imageSizes
    .map(([, size]) => tmhWebpUrl(size, image.src))
    .join(',');

  let sizesAttr = imageSizes
    .slice(0, imageSizes.length - 2)
    .map(([breakpoint, size]) => `(max-width: ${breakpoint}px) ${size}px`)
    .join(', ');
  const largestSize = imageSizes[imageSizes.length - 1][1];
  sizesAttr += `, ${largestSize}px`;

  const uri = tmhImageUrl(largestSize, image.src);
  return (
    <picture>
      {!isError && (
        <>
          <source srcSet={webpSrcSet} sizes={sizesAttr} type="image/webp" />
          <source srcSet={srcSet} sizes={sizesAttr} type="image/jpeg" />
        </>
      )}
      <img
        src={isError ? fallbackUrl : uri.substring(0, uri.lastIndexOf(' ') + 1)}
        alt={image.alt}
        onError={() => setIsError(true)}
        {...htmlProps}
      />
    </picture>
  );
}
