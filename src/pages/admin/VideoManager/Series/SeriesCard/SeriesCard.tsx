import { Series } from 'API';
import styles from './SeriesCard.module.scss';
import { useEffect, useState } from 'react';
export default function SeriesCard({
  series,
  setSelected,
}: {
  series: Series;
  setSelected: (series: Series) => void;
}) {
  const fallbackUrl = '/static/photos/series/series-fallback-app.jpg';
  const imageUrl =
    series.bannerImage?.src === '' || series.bannerImage?.src === null
      ? fallbackUrl
      : series.bannerImage?.src;
  const [uri, setUri] = useState<string | undefined>(imageUrl);
  useEffect(() => {
    series.bannerImage?.src
      ? setUri(series.bannerImage?.src)
      : setUri(fallbackUrl);
  }, [series]);
  return (
    <div
      onClick={() => {
        setSelected(series);
      }}
      className={styles['SeriesCard']}
    >
      <img
        style={{
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
        width={'100%'}
        height={200}
        onError={() => setUri(fallbackUrl)}
        src={uri}
        alt={series.bannerImage?.alt}
      ></img>
      {uri?.includes('fallback') ? (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            maxHeight: 28,
            width: '100%',
            backgroundClip: 'padding-box',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: 2,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            left: 0,
            textAlign: 'center',
          }}
        >
          {series.title}
        </span>
      ) : null}
    </div>
  );
}
