import './SearchItem.scss';
export default function SearchNoResults({ type }: { type?: string }) {
  return (
    <div className="SearchResultItem">
      <div className="Content">
        <div className="Title">No {type} results found</div>
      </div>
    </div>
  );
}
