import { useNavigate } from 'react-router-dom';
import Pill from './SearchItemPill';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import './SearchItem.scss';
export default function SearchItemVideo({
  item,
  searchString,
  videoTypeParser,
}: {
  item: any;
  searchString: string;
  videoTypeParser: any;
}) {
  const navigate = useNavigate();
  const openVideo = (item: any) => {
    // console.log("opening", item);
    if (item?.series?.id) {
      console.log('/videos/' + item.series.id + '/' + item.id);
      navigate('/videos/' + item.series.id + '/' + item.id);
      //    this.navigateTo("/videos/"+item.series+"/"+item.episodeId)
    } else {
      navigate(`/videos/${item.episodeTitle}-${item.episodeTitle}/${item.id}`);
    }
  };
  return (
    <button
      type="button"
      onClick={() => {
        openVideo(item);
      }}
      className="SearchResultItem"
    >
      <img
        alt={item.thumbnailDescription || 'Video Thumbnail'}
        className="SearchThumb"
        src={item.Youtube.snippet.thumbnails.high.url}
      />
      <div className="Content">
        <div style={{ marginBottom: 16 }}>
          <Pill title="Video" />
        </div>
        <div className="Title">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={
              item?.episodeTitle + ' - ' + item?.seriesTitle ?? ''
            }
          />
        </div>
        <div className="VideoType">
          {videoTypeParser && videoTypeParser[item.videoTypes]}
          {' • '}
          {moment(item.publishedDate).format('LL')}
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
