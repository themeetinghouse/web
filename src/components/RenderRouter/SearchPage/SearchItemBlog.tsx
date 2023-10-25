import { BlogImage } from 'components/ScaledImage';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import Pill from './SearchItemPill';
import './SearchItem.scss';

export default function SearchItemBlog({
  item,
  searchString,
}: {
  item: any;
  searchString: string;
}) {
  const navigate = useNavigate();
  const openBlog = (item: any) => {
    // console.log("opening", item);
    navigate('/posts/' + item.id);
  };
  return (
    <button
      type="button"
      onClick={() => {
        openBlog(item);
      }}
      className="SearchResultItem"
    >
      <BlogImage
        image={item.squareImage}
        blogTitle={item.blogTitle}
        imageType="square"
        className="SearchThumb series"
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
          <Pill title="Blog Post" />
        </div>
        <div className="Title">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={item.blogTitle ?? ''}
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
