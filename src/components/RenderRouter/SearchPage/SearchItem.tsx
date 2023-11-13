import { GraphQLResult } from '@aws-amplify/api';
import { useEffect, useMemo, useRef, useState } from 'react';
import './SearchItem.scss';

import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  Blog,
  CustomPlaylist,
  F1ListGroup2,
  GetNotesQuery,
  Notes,
  SearchBlogsQuery,
  SearchF1ListGroup2sQuery,
  SearchSeriesQuery,
  Series,
  TMHCompassion,
  TMHPerson,
  Video,
} from 'API';
import { Spinner } from 'reactstrap';
import * as queries from '../../../graphql/queries';
import * as customQueries from '../../../graphql-custom/customQueries';
import DataLoader from '../DataLoader';
import RenderRouter from '../RenderRouter';
import { useDebounce } from 'hooks/useDebounce';
import SearchNoResults from './SearchNoResults';
import SearchTrendingSection from './SearchTrendingSection';
import SearchTypesSection from './SearchTypesSectiontsx';
import SearchItemVideo from './SearchItemVideo';
import SearchItemHomeChurch from './SearchItemHomeChurch';
import SearchItemSeries from './SearchItemSeries';
import SearchItemNotes from './SearchItemNotes';
import SearchItemCompassion from './SearchItemCompassion';
import SearchItemBlog from './SearchItemBlog';
import moment from 'moment';

export enum SearchType {
  All = 'All' as any,
  Videos = 'Videos' as any,
  Blogs = 'Blogs' as any,
  //Staff = 'Staff' as any,
  'Home Churches' = 'Home Churches' as any,
  Series = 'Series' as any,
  Notes = 'Notes' as any,
}
type VideoTypeParserType = { [name: string]: string } | null;
type SearchItemProps = {
  content: any;
};
export default function SearchItem(props: SearchItemProps) {
  const [searchString, setSearchString] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const inputFieldRef = useRef<HTMLInputElement>(null);
  const [videoData, setVideoData] = useState<Video[]>([]);

  const [customData] = useState<any>(null);
  const [customBegin, setCustomBegin] = useState<any>(null);

  const [currentSearchType, setCurrentSearchType] = useState<SearchType>(
    SearchType.All
  );

  const [compassionData, setCompassionData] = useState<TMHCompassion[]>([]);
  const [staffData, setStaffData] = useState<TMHPerson[]>([]);
  const [overseersData, setOverseersData] = useState<TMHPerson[]>([]);
  const [homeChurchData, setHomeChurchData] = useState<F1ListGroup2[]>([]);
  const [seriesData, setSeriesData] = useState<Series[]>([]);
  const [customPlaylistData, setCustomPlaylistData] = useState<
    CustomPlaylist[]
  >([]);
  const [notesData, setNotesData] = useState<Notes[]>([]);
  const [blogData, setBlogData] = useState<Blog[]>([]);

  const [videoTypeParser, setVideoTypeParser] =
    useState<VideoTypeParserType>(null);
  useState<any>(null);

  const debouncedSearchterm = useDebounce(searchString, 800);
  const doSearch = (newSearchTerm: string) => {
    search(newSearchTerm);
  };
  useEffect(() => {
    if (searchString === '') {
      clearData();
      setIsLoading(false);
    }
  }, [searchString]);
  const clearData = () => {
    setVideoData([]);
    setBlogData([]);
    setHomeChurchData([]);
    setSearchString('');
    setStaffData([]);
    setOverseersData([]);
    setSeriesData([]);
    setCustomPlaylistData([]);
    setCompassionData([]);
    setNotesData([]);
    setCurrentSearchType(SearchType.All);
  };
  useEffect(() => {
    if (debouncedSearchterm) {
      doSearch(debouncedSearchterm);
    }
  }, [debouncedSearchterm]);

  const searchCompassion = async (searchTerm: string) => {
    const response = await DataLoader.loadCompassion();
    const compassionData =
      response.filter(
        (compassion) =>
          (compassion.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            compassion.description
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase())) &&
          searchString.length > 3
      ) ?? [];
    setCompassionData(compassionData);
  };

  const searchBlogs = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: customQueries.searchBlogs,
        variables: {
          filter: {
            and: [
              {
                or: [
                  { blogTitle: { matchPhrasePrefix: searchTerm } },
                  { author: { matchPhrasePrefix: searchTerm } },
                  { tags: { matchPhrasePrefix: searchTerm } },
                  { description: { matchPhrasePrefix: searchTerm } },
                ],
              },
              { hiddenMainIndex: { ne: true } },
              { blogStatus: { eq: 'Live' } },
            ],
          },
          sort: { field: 'blogTitle', direction: 'desc' },
          limit: 15,
        },
      })) as GraphQLResult<SearchBlogsQuery>;

      console.debug({ searchBlogs: response });
      const items = response.data?.searchBlogs?.items ?? [];
      setBlogData(items as Blog[]);
    } catch (error2: any) {
      const items = error2.data?.searchBlogs?.items ?? [];
      setBlogData(items as Blog[]);
      console.error({ error2 });
    }
  };
  const searchVideos = async (searchTerm: string) => {
    try {
      const vids = (await DataLoader.searchVideos(searchTerm)) as Video[];
      setVideoData(vids ?? []);
      console.debug({ searchVideos: vids });
    } catch (error3) {
      console.error({ error3 });
    }
  };
  const searchHomechurch = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: queries.searchF1ListGroup2s,
        variables: {
          filter: {
            or: [
              { name: { matchPhrasePrefix: searchTerm } },
              { description: { matchPhrasePrefix: searchTerm } },
            ],
          },
          limit: 15,
        },
      })) as GraphQLResult<SearchF1ListGroup2sQuery>;

      const items = response.data?.searchF1ListGroup2s?.items ?? [];
      console.debug({ searchHomechurch: response });
      setHomeChurchData(items as F1ListGroup2[]);
    } catch (error4: any) {
      const items = error4.data?.searchF1ListGroup2s?.items ?? [];
      setHomeChurchData(items as F1ListGroup2[]);
      console.error({ error4 });
    }
  };

  const searchSeries = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: customQueries.searchSeries,
        variables: {
          filter: {
            and: [
              { seriesType: { eq: 'adult-sunday' } },
              { startDate: { gt: '2022' } },
              {
                or: [
                  { title: { matchPhrasePrefix: searchTerm } },
                  { description: { matchPhrasePrefix: searchTerm } },
                ],
              },
            ],
          },
          limit: 15,
        },
      })) as GraphQLResult<SearchSeriesQuery>;
      console.debug({ searchSeries: response });
      const series = response.data?.searchSeries?.items ?? [];
      setSeriesData(series as Series[]);
    } catch (error5: any) {
      setSeriesData(
        error5.data?.searchSeries?.items.filter(
          (z: any) => !z?.seriesType?.includes('hidden')
        ) as Series[]
      );
      console.error({ error5 });
    }
  };
  const searchNotes = async (searchTerm: string) => {
    const terms = [
      'sunday',
      'teaching',
      'note',
      'notes',
      'sunday teaching',
      'sunday teachings',
      'teaching notes',
      'teaching note',
    ];

    const searchTerms = searchTerm.toLowerCase().split(' ');

    const getLatestNotes = searchTerms.some((searchTerm) => {
      console.log({ searchTerm });
      return terms.includes(searchTerm);
    });
    console.log({ getLatestNotes });
    if (getLatestNotes) {
      try {
        const response = (await API.graphql({
          query: customQueries.getNotes,
          variables: {
            id: getLastSunday(),
          },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        })) as GraphQLResult<GetNotesQuery>;
        console.log({ response });
        const note = response.data?.getNotes;
        setNotesData([note] as Notes[]);
      } catch (error) {
        console.error({ error });
      }
    }
    // const fetchNotesRecursive = async (
    //   nextToken: string | null,
    //   accumulatedNotes: Notes[] = []
    // ): Promise<Notes[]> => {
    //   try {
    //     const response = (await API.graphql({
    //       query: customQueries.listNotes,
    //       variables: {
    //         limit: 100,
    //         filter: {
    //           title: { eq: searchTerm },
    //         },

    //         nextToken: nextToken,
    //       },
    //       authMode: GRAPHQL_AUTH_MODE.API_KEY,
    //     })) as GraphQLResult<ListNotesQuery>;

    //     const newNotes = response.data?.listNotes?.items || [];
    //     const newNextToken = response.data?.listNotes?.nextToken || null;
    //     if (newNextToken) {
    //       // If there's a next token, continue fetching recursively
    //       const newNotes = response.data?.listNotes?.items || [];
    //       return await fetchNotesRecursive(newNextToken, [
    //         ...(accumulatedNotes as Notes[]),
    //         ...(newNotes as Notes[]),
    //       ]);
    //     } else {
    //       // Otherwise, return all accumulated notes
    //       return [...(accumulatedNotes as Notes[]), ...(newNotes as Notes[])];
    //     }
    //   } catch (error6: any) {
    //     console.error({ error6 });
    //     return accumulatedNotes;
    //   }
    // };

    // // Start the recursive fetching
    // const notes = await fetchNotesRecursive(null);
    // console.debug({ notesInDebug: notes });
    // setNotesData(notes);
  };
  const search = async (searchTerm: string) => {
    console.log('searching');
    try {
      const allPromises = [
        searchHomechurch(searchTerm),
        searchSeries(searchTerm),
        searchVideos(searchTerm),
        searchBlogs(searchTerm),
        searchCompassion(searchTerm),
        searchNotes(searchTerm),
      ];
      await Promise.all(allPromises);
    } catch (error7) {
      console.error({ error7 });
    } finally {
      setIsLoading(false);
    }
  };

  const convertMapToObject = (
    metricArguments: { name: string; value: string }[]
  ): Record<string, string> => {
    const newObject: Record<string, string> = {};
    for (const { name, value } of metricArguments) {
      newObject[name] = value;
    }
    return newObject;
  };
  useEffect(() => {
    const loadInitialData = async () => {
      fetch('/static/data/import-video.json')
        .then(async (e: Response) => {
          try {
            const json = await e.json();
            const videoTypeParser = json.map((item: any) => {
              return { name: item.id, value: item.name };
            });
            setVideoTypeParser(convertMapToObject(videoTypeParser));
          } catch (err) {
            console.log(err);
          }
        })
        .catch((e: any) => console.log(e));
      fetch('/static/content/search/beginSearch.json')
        .then(async (e: Response) => {
          try {
            setCustomBegin(await e.json());
          } catch (e: any) {
            setCustomBegin(null);
          }
        })
        .catch((error8: Error) => {
          setCustomBegin(null);
          console.error(error8);
        });
      //dataSpeakers: await DataLoader.getSpeakers(query, dataLoaded);
    };
    loadInitialData();
  }, []);

  const shouldShowNoResults = useMemo(() => {
    if (
      blogData?.length === 0 &&
      homeChurchData?.length === 0 &&
      seriesData?.length === 0 &&
      notesData?.length === 0 &&
      staffData?.length === 0 &&
      overseersData?.length === 0 &&
      customPlaylistData?.length === 0 &&
      compassionData?.length === 0 &&
      videoData?.length == 0 &&
      !isLoading
    ) {
      return true;
    }
    return false;
  }, [
    blogData?.length,
    homeChurchData?.length,
    seriesData?.length,
    customPlaylistData?.length,
    notesData?.length,
    staffData?.length,
    overseersData?.length,
    videoData?.length,
    isLoading,
  ]);
  return (
    <div style={{ minHeight: '90vh' }}>
      <form
        id="search"
        role="search"
        className="SearchItem"
        onSubmit={(e) => e.preventDefault()}
      >
        <div style={{ position: 'relative' }}>
          <input
            value={searchString}
            className="SearchItemInput"
            autoFocus={true}
            ref={inputFieldRef}
            onChange={(e) => {
              if (e.target.value === debouncedSearchterm) {
                setIsLoading(false);
              } else {
                setIsLoading(true);
                clearData();
              }

              setSearchString(e.target.value);
            }}
            placeholder="Search..."
          ></input>

          {isLoading ? (
            <Spinner
              style={{ position: 'absolute', marginLeft: -45, top: 15 }}
            />
          ) : null}
        </div>

        <div className="SearchItemDiv">
          <SearchTrendingSection
            trendingItems={props.content.trending}
            searchString={searchString}
            setTrendingSelection={(item) => {
              setIsLoading(true);
              setVideoData([]);
              setSearchString(item);
            }}
          />
          <SearchTypesSection
            searchString={searchString}
            currentSearchType={currentSearchType}
            shouldShowMenu={
              !customData?.page?.pageConfig?.searchResult?.hideShowMenu
            }
            setCurrentSearchType={setCurrentSearchType}
          />
        </div>
      </form>
      {customBegin != null && searchString == '' && (
        <SearchItemBegin customBegin={customBegin} />
      )}
      <div className="SearchItem">
        {shouldShowNoResults &&
        searchString.length > 2 &&
        currentSearchType === SearchType.All ? (
          <SearchNoResults />
        ) : (
          <>
            {currentSearchType === SearchType.All ||
            currentSearchType === SearchType.Videos ? (
              videoData.length > 0 ? (
                videoData.map((item: any) => (
                  <SearchItemVideo
                    item={item}
                    searchString={searchString}
                    videoTypeParser={videoTypeParser}
                    key={`video-${item.id}`}
                  />
                ))
              ) : currentSearchType === SearchType.Videos && !isLoading ? (
                <SearchNoResults type="videos" />
              ) : null
            ) : null}

            {currentSearchType === SearchType.All ||
            currentSearchType === SearchType['Home Churches'] ? (
              homeChurchData.length > 0 ? (
                homeChurchData.map((homechurch: any) => (
                  <SearchItemHomeChurch
                    item={homechurch}
                    key={`homechurch-${homechurch.id}`}
                    searchString={searchString}
                  />
                ))
              ) : currentSearchType === SearchType['Home Churches'] &&
                !isLoading ? (
                <SearchNoResults type="home churches" />
              ) : null
            ) : null}

            {currentSearchType === SearchType.All ||
            currentSearchType === SearchType.Series ? (
              seriesData && seriesData.length > 0 ? (
                seriesData.map((series: any) => (
                  <SearchItemSeries
                    item={series}
                    searchString={searchString}
                    key={`series-${series.id}`}
                    videoTypeParser={videoTypeParser}
                  />
                ))
              ) : currentSearchType === SearchType.Series && !isLoading ? (
                <SearchNoResults type="series" />
              ) : null
            ) : null}

            {currentSearchType === SearchType.All ||
            currentSearchType === SearchType.Notes ? (
              notesData && notesData.length > 0 ? (
                notesData.map((note: any) => (
                  <SearchItemNotes
                    key={`notes-${note.id}`}
                    item={note}
                    searchString={searchString}
                  />
                ))
              ) : currentSearchType === SearchType.Notes && !isLoading ? (
                <SearchNoResults type="notes" />
              ) : null
            ) : null}

            {compassionData &&
            compassionData.length > 0 &&
            currentSearchType === SearchType.All
              ? compassionData.map((compassion) => (
                  <SearchItemCompassion
                    key={`compassion-${compassion.id}`}
                    compassion={compassion}
                    searchString={searchString}
                  />
                ))
              : null}

            {currentSearchType === SearchType.All ||
            currentSearchType === SearchType.Blogs ? (
              blogData && blogData.length > 0 ? (
                blogData.map((item: any) => (
                  <SearchItemBlog
                    key={`blog-${item.id}`}
                    item={item}
                    searchString={searchString}
                  />
                ))
              ) : currentSearchType === SearchType.Blogs && !isLoading ? (
                <SearchNoResults type="blogs" />
              ) : null
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
export const getBlogImageURI = (
  title: string | undefined | null,
  style: 'baby-hero' | 'banner' | 'square'
): string => {
  if (!title) return '';
  return (
    `/static/photos/blogs/${style}/` + title.replace(/\?|[']/g, '') + '.jpg'
  );
};

const SearchItemBegin = ({ customBegin }: { customBegin: any }) => {
  return <RenderRouter data={null} content={customBegin} />;
};

function getLastSunday() {
  const lastSunday = moment().tz('America/Toronto');
  if (lastSunday.isoWeekday() < 7) {
    lastSunday.isoWeekday(0);
  }
  return lastSunday.format('YYYY-MM-DD');
}
