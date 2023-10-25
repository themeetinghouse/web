import { useNavigate } from 'react-router-dom';
import Pill from './SearchItemPill';
import Highlighter from 'react-highlight-words';
import FadeImage from 'components/ScaledImage/FadeImage';
import './SearchItem.scss';
export default function SearchItemSeries({
  item,
  searchString,
  videoTypeParser,
}: {
  item: any;
  searchString: string;
  videoTypeParser: any;
}) {
  const navigate = useNavigate();
  const openSeries = (item: any) => {
    // console.log("opening", item);
    navigate('/videos/' + item.id);
  };
  console.log({ item });

  return (
    <button
      type="button"
      onClick={() => {
        openSeries(item);
      }}
      className="SearchResultItem"
    >
      <FadeImage
        imageSrc={item?.bannerImage?.src}
        alt={item?.babyHeroImage?.alt}
        className="SearchThumb series"
        fallbackUrl="/static/photos/blogs/square/fallback.jpg"
      />
      <div className="Content">
        <div style={{ marginBottom: 16 }}>
          <Pill title="Series" />
        </div>
        <div className="Title">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={item.title ?? ''}
          />
        </div>
        <div className="VideoType">
          {videoTypeParser && videoTypeParser[item.seriesType]}
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
