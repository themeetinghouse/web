import { ScaledImage } from 'components/ScaledImage';
import { CompassionData } from '../DataLoader';
import Pill from './SearchItemPill';
import Highlighter from 'react-highlight-words';
import './SearchItem.scss';
export default function SearchItemCompassion({
  compassion,
  searchString,
}: {
  compassion: CompassionData;
  searchString: string;
}) {
  const image = {
    src: compassion.image,
    alt: compassion.imagealt,
  };
  return (
    <button
      type="button"
      className="SearchResultItem"
      onClick={() => (window.location.href = compassion.website)}
    >
      <ScaledImage
        image={image}
        className="SearchThumb"
        fallbackUrl="/static/NoCompassionLogo.png"
        breakpointSizes={{
          320: 80,
          480: 120,
          640: 180,
          1280: 320,
          1920: 480,
          2560: 640,
        }}
      />
      <div className="Content">
        <div style={{ marginBottom: 16 }}>
          <Pill title="Compassion" />
        </div>
        <div className="Title">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={compassion.name ?? ''}
          />
        </div>
        <div className="Description">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={compassion.description ?? ''}
          />
        </div>
      </div>
    </button>
  );
}
