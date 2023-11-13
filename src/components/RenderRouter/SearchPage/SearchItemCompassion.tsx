import Pill from './SearchItemPill';
import Highlighter from 'react-highlight-words';
import './SearchItem.scss';
import { ListImage } from '../ListItem';
import { TMHCompassion } from 'API';
export default function SearchItemCompassion({
  compassion,
  searchString,
}: {
  compassion: TMHCompassion;
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
      onClick={() => (window.location.href = compassion.website ?? '')}
    >
      <ListImage
        image={image}
        className="SearchThumb"
        fallbackImageUrl="/static/NoCompassionLogo.png"
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
