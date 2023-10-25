import React from 'react';
import './SearchItem.scss';
export default function SearchTrendingSection({
  trendingItems,
  searchString,
  setTrendingSelection,
}: {
  trendingItems: string[];
  searchString: string;
  setTrendingSelection: (item: string) => void;
}) {
  return (
    <div
      className="TrendingSearches"
      style={searchString !== '' ? { display: 'none' } : {}}
    >
      <strong>Trending:</strong>
      {trendingItems?.map((item: string) => {
        return (
          <React.Fragment key={`trendingItem-${item}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              onClick={() => setTrendingSelection(item)}
              className="TrendingItem"
            >
              {item}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}
