import { ReactElement, useState } from 'react';
import ScaledImage, { Props as ScaledImageProps } from './ScaledImage';
import { Image } from 'API';

const getBlogImageURI = (
  blogTitle: string | undefined | null,
  imageType: 'baby-hero' | 'banner' | 'square'
): string => {
  if (!blogTitle) return '';
  return (
    `/static/photos/blogs/${imageType}/` +
    blogTitle.replace(/\?|[']/g, '') +
    '.jpg'
  );
};

const S3_BUCKET =
  'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';

type Props = {
  blogTitle: string | undefined | null;
  imageType: 'baby-hero' | 'banner' | 'square';
  image: Image | undefined | null;
} & Omit<ScaledImageProps, 'image'>;

export default function BlogImage(props: Props): ReactElement<Props> | null {
  const {
    image,
    fallbackUrl,
    breakpointSizes,
    blogTitle,
    imageType,
    ...htmlProps
  } = props;

  const [src, setSrc] = useState(image?.src);

  // TODO: update this logic once images uploaded via the admin page are
  // connected to the image optimizer API gateway and only use ScaledImage

  // handle images uploaded via the admin page
  if (image?.src !== undefined && image.src.startsWith(S3_BUCKET)) {
    return (
      <img
        src={src}
        alt={image.alt}
        onError={() => setSrc(fallbackUrl)}
        {...htmlProps}
      />
    );
  }

  // handle legacy images uploaded via GitHub
  return (
    <ScaledImage
      // null alt text is used since deriving alt text from the blog's title is not informative
      // going forward images uploaded via the admin page will have valid alt text
      image={{ src: getBlogImageURI(blogTitle, imageType), alt: '' }}
      fallbackUrl={fallbackUrl}
      breakpointSizes={breakpointSizes}
      {...htmlProps}
    />
  );
}
