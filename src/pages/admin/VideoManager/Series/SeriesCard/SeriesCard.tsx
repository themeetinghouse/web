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
        width={'100%'}
        height={200}
        onError={() => setUri(fallbackUrl)}
        src={uri}
        alt={series.bannerImage?.alt}
      ></img>
      {uri?.includes('fallback') ? (
        <span className={styles['FallbackText']}>{series.title}</span>
      ) : null}
    </div>
  );
}
