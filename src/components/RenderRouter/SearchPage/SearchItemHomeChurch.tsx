import Highlighter from 'react-highlight-words';
import Pill from './SearchItemPill';
import './SearchItem.scss';
import { getBlogImageURI } from './SearchItem';
import { ScaledImage } from 'components/ScaledImage';

export default function SearchItemHomeChurch({
  item,
  searchString,
}: {
  item: any;
  searchString: string;
}) {
  const image = {
    src: getBlogImageURI(item.blogTitle, 'square'),
    alt: item.blogTitle + ' series image',
  };
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `mailto:roger.massie@themeetinghouse.com?subject=Inquiry%20About%20${item.name}&body=Home%20Church%20ID:${item.id}`;
      }}
      className="SearchResultItem"
    >
      <ScaledImage
        image={image}
        className="SearchThumb"
        fallbackUrl="/static/photos/blogs/square/fallback.jpg"
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
          <Pill title="Home Church" />
        </div>
        <div className="Title">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={item.name ?? ''}
          />
        </div>

        <div className="Description">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={item.description ?? ''}
          />
        </div>
      </div>
      <div className="Link">
        <img alt="GO" src="\static\svg\ArrowRight black.svg" />
      </div>
    </button>
  );
}
