import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import Pill from './SearchItemPill';
import './SearchItem.scss';
import moment from 'moment';
import FadeImage from 'components/ScaledImage/FadeImage';

export default function SearchItemNotes({
  item,
  searchString,
}: {
  item: any;
  searchString: string;
}) {
  const navigate = useNavigate();
  // const startingAtImg = item.content.slice(item.content.indexOf('<img'), -1);
  // const imgTag = startingAtImg.slice(0, startingAtImg.indexOf('/>') + 2);
  // const imgSrc = imgTag.slice(
  //   imgTag.indexOf('src="') + 5,
  //   imgTag.indexOf('alt') - 2
  // );
  const openNote = (item: any) => {
    navigate(`/notes/${item.id}`, { state: 'as' });
  };
  return (
    <button
      type="button"
      onClick={() => {
        openNote(item);
      }}
      className="SearchResultItem"
    >
      <div className="Content" style={{ width: '100%' }}>
        <div style={{ marginBottom: 16 }}>
          <Pill title="Notes" />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
          }}
        >
          <FadeImage
            imageSrc={item?.series?.bannerImage?.src}
            alt={item?.series?.bannerImage?.alt}
            className="SearchThumb series"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            style={{ marginLeft: -12 }}
          />
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.title ?? ''}
              />
            </div>

            <div style={{ marginBottom: 4 }} className="Description">
              {moment(item.id).format('LL')}
            </div>
            <div style={{ marginBottom: 4 }} className="Description">
              {item.episodeDescription?.slice(0, 50) + '...'}
            </div>
            {item.pdf ? (
              <a href={item.pdf} download={`${item.id} - Notes`}>
                <strong>Open PDF</strong>
              </a>
            ) : null}
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </div>
      </div>
    </button>
  );
}
