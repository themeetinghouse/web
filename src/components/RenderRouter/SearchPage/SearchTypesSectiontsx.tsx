import React from 'react';
import { SearchType } from './SearchItem';
import './SearchItem.scss';
export default function SearchTypesSection({
  currentSearchType,
  setCurrentSearchType,
  searchString,
  shouldShowMenu,
}: {
  currentSearchType: SearchType;
  setCurrentSearchType: React.Dispatch<React.SetStateAction<SearchType>>;
  searchString: string;
  shouldShowMenu: boolean;
}) {
  return (
    <div
      className="TrendingSearches"
      style={shouldShowMenu && searchString ? {} : { display: 'none' }}
    >
      Show:
      {Object.keys(SearchType)
        .filter((value) => value !== 'Notes')
        .map((item: string) => {
          return (
            <React.Fragment key={`searchtypes-${item}`}>
              &nbsp;&nbsp;
              <button
                type="button"
                style={{
                  fontWeight:
                    currentSearchType == (item as unknown as SearchType)
                      ? 'bold'
                      : 'normal',
                }}
                onClick={() => {
                  setCurrentSearchType(
                    SearchType[item as any] as unknown as SearchType
                  );
                }}
                className="TrendingItem"
                key={item}
              >
                {item}
              </button>
            </React.Fragment>
          );
        })}
    </div>
  );
}
