import { GraphQLResult } from '@aws-amplify/api';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchItem.scss';

import { API, graphqlOperation } from '@aws-amplify/api';
import {
  SearchBlogSeriesQuery,
  SearchBlogsQuery,
  SearchCustomPlaylistsQuery,
  SearchF1ListGroup2sQuery,
  SearchNotesQuery,
  SearchSeriesQuery,
  TMHPerson,
  Video,
} from 'API';
import { BlogImage, ScaledImage } from '../../components/ScaledImage';
import Highlighter from 'react-highlight-words';
import { Button, Spinner } from 'reactstrap';
import * as queries from '../../graphql/queries';
import DataLoader, { CompassionData } from './DataLoader';
import RenderRouter from './RenderRouter';
import FadeImage from 'components/ScaledImage/FadeImage';
import { useDebounce } from 'hooks/useDebounce';

enum SearchType {
  All = 'All' as any,
  Videos = 'Videos' as any,
  Blogs = 'Blogs' as any,
  Staff = 'Staff' as any,
  'Home Church' = 'Home Church' as any,
  Notes = 'Notes' as any,
}
interface State {
  content: any;
  searchResults: any;
  searchBlogResults: any;
  searchString: string;
  dataSpeakers: any;
  dataStaff: TMHPerson[];
  dataOverseers: any;
  dataCompassion: CompassionData[];
  currentSearchType: SearchType;
  customData: any;
  customBegin: any;
  searchHomechurch: any;
  searchSeries: any;
  searchCustomPlaylist: any;
  searchBlogSeries: any;
  searchNotes: any;
  videoTypeParser: { [name: string]: string } | null;
  isLoading: boolean;
}

type SearchItemProps = {
  content: any;
};
export default function SearchItem(props: SearchItemProps) {
  const [searchString, setSearchString] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputFieldRef = useRef<HTMLInputElement>(null);
  const [content] = useState<SearchItemProps['content']>(props.content);
  const [searchResults, setSearchResults] = useState<any>(null);
  const [customData, setCustomData] = useState<any>(null);
  const [customBegin, setCustomBegin] = useState<any>(null);
  const [currentSearchType, setCurrentSearchType] = useState<SearchType>(
    SearchType.All
  );
  const [dataCompassion, setDataCompassion] = useState<CompassionData[]>([]);
  const [dataStaff, setDataStaff] = useState<TMHPerson[]>([]);
  const [searchHomechurch, setSearchHomechurch] = useState<any>(null);
  const [searchSeries, setSearchSeries] = useState<any>(null);
  const [searchCustomPlaylist, setSearchCustomPlaylist] = useState<any>(null);
  const [searchBlogSeries] = useState<any>(null);
  const [searchNotes, setSearchNotes] = useState<any>(null);
  const [searchBlogResults, setSearchBlogResults] = useState<any>(null);
  const [, setDataOverseers] = useState<any>(null);
  const [videoTypeParser, setVideoTypeParser] =
    useState<State['videoTypeParser']>(null);
  useState<any>(null);
  const doSearch = (newSearchTerm: string) => {
    console.log('search');
    search(newSearchTerm);
  };
  const debouncedSearchterm = useDebounce(searchString, 800);

  useEffect(() => {
    if (debouncedSearchterm) {
      doSearch(debouncedSearchterm);
    }
  }, [debouncedSearchterm]);
  const searchPeople = async (str: string) => {
    try {
      const people = (await DataLoader.searchTMHPeople(str)) as TMHPerson[];
      const staff = people.filter((person) => person.isStaff === 'true');
      const overseers = people.filter((staff) => staff?.isOverseer === 'true');
      setDataStaff(staff);
      setDataOverseers(overseers);
    } catch (error) {
      console.error({ error });
    }
  };
  const searchCustom = async (e: any) => {
    try {
      const response = await fetch('/static/content/search/' + e + '.json');
      const json = await response.json();
      setCustomData(json);
    } catch (error) {
      setCustomData(null);
    }
  };
  const searchBlogs = async (e: any, nextId: any) => {
    try {
      const searchBlogs: any = (await API.graphql(
        graphqlOperation(queries.searchBlogs, {
          filter: {
            or: [
              { blogTitle: { match: e } },
              { author: { match: e } },
              { tags: { match: e } },
              { description: { match: e } },
            ],
          },
          limit: 10,
          nextToken: nextId,
        })
      )) as Promise<GraphQLResult<SearchBlogsQuery>>;
      if (nextId == null)
        setSearchBlogResults(searchBlogs.data.searchBlogs.items);
      else
        setSearchBlogResults(
          searchBlogResults.concat(searchBlogs.data.searchBlogs.items)
        );
    } catch (error) {
      console.error({ error });
    }
  };
  const searchVideos = async (e: any, nextId: any) => {
    try {
      const vids = (await DataLoader.searchVideos(e)) as Video[];
      setSearchResults(vids);
      console.log({ vids });
      // const fuzzySearchVideos: any = await API.graphql(
      //   graphqlOperation(queries.fuzzySearchVideos, {
      //     filter: e,
      //     limit: 10,
      //     nextToken: nextId,
      //   })
      // );
      // console.log({ fuzzySearchVideos });
      // if (nextId == null)
      //   this.setState({
      //     searchResults: fuzzySearchVideos.data.fuzzySearchVideos.items.filter(
      //       (z: any) => !z.series.seriesType.includes('hidden')
      //     ),
      //   });
      // else
      //   this.setState({
      //     searchResults: this.state.searchResults.concat(
      //       fuzzySearchVideos.data.fuzzySearchVideos.items.filter(
      //         (z: any) => !z.series.seriesType.includes('hidden')
      //       )
      //     ),
      //   });
    } catch (error) {
      console.error({ error });
    }
  };
  const searchHomechurch1 = async (e: any, nextId: any) => {
    try {
      const searchHomechurch: any = (await API.graphql(
        graphqlOperation(queries.searchF1ListGroup2s, {
          filter: {
            or: [{ name: { match: e } }, { description: { match: e } }],
          },
          limit: 10,
          nextToken: nextId,
        })
      )) as Promise<GraphQLResult<SearchF1ListGroup2sQuery>>;
      console.log({ searchHomechurch });
      if (nextId == null)
        setSearchHomechurch(searchHomechurch.data.searchF1ListGroup2s.items);
      else
        setSearchHomechurch(
          searchHomechurch.concat(
            searchHomechurch.data.searchF1ListGroup2s.items
          )
        );
    } catch (error) {
      console.error({ error });
    }
  };
  const searchSeries1 = async (e: any, nextId: any) => {
    try {
      const searchSeries: any = (await API.graphql(
        graphqlOperation(queries.searchSeries, {
          filter: {
            or: [{ title: { match: e } }, { description: { match: e } }],
          },
          limit: 10,
          nextToken: nextId,
        })
      )) as Promise<GraphQLResult<SearchSeriesQuery>>;
      console.log({ searchSeries });
      if (nextId == null)
        setSearchSeries(
          searchSeries.data?.searchSeries?.items.filter(
            (z: any) => !z?.seriesType?.includes('hidden')
          )
        );
      else
        setSearchSeries(
          searchSeries.concat(
            searchSeries.data?.searchSeries?.items.filter(
              (z: any) => !z?.seriesType?.includes('hidden')
            )
          )
        );
    } catch (error) {
      console.error({ error });
    }
  };
  const searchCustomPlaylist1 = async (e: any, nextId: any) => {
    try {
      const searchCustomPlaylist: any = (await API.graphql(
        graphqlOperation(queries.searchCustomPlaylists, {
          filter: {
            or: [{ title: { match: e } }, { description: { match: e } }],
          },
          limit: 10,
          nextToken: nextId,
        })
      )) as Promise<GraphQLResult<SearchCustomPlaylistsQuery>>;
      if (nextId == null)
        setSearchCustomPlaylist(
          searchCustomPlaylist.data?.searchCustomPlaylists?.items
        );
      else
        setSearchCustomPlaylist(
          searchCustomPlaylist.data?.searchCustomPlaylists?.items.concat(
            searchCustomPlaylist.data?.searchCustomPlaylists?.items
          )
        );
    } catch (error) {
      console.error({ error });
    }
  };
  const searchBlogSeries1 = async (e: any, nextId: any) => {
    try {
      const searchBlogSeries: any = (await API.graphql(
        graphqlOperation(queries.searchBlogSeries, {
          filter: {
            or: [{ title: { match: e } }, { description: { match: e } }],
          },
          limit: 10,
          nextToken: nextId,
        })
      )) as Promise<GraphQLResult<SearchBlogSeriesQuery>>;
      if (nextId == null)
        setSearchBlogResults(searchBlogSeries.data?.searchBlogSeries?.items);
      else
        setSearchBlogResults(
          searchBlogResults.concat(
            searchBlogSeries.data?.searchBlogSeries?.items
          )
        );
    } catch (error) {
      console.error({ error });
    }
  };

  const searchNotes1 = async (e: any, nextId: any) => {
    try {
      const searchNotes: any = (await API.graphql({
        query: queries.searchNotes,
        variables: {
          filter: {
            or: [
              { title: { match: e } },
              { content: { match: e } },
              { tags: { match: e } },
              { questions: { match: e } },
            ],
          },
          limit: 10,
          nextToken: nextId,
        },
      })) as Promise<GraphQLResult<SearchNotesQuery>>;
      console.log({ searchNotes });
      if (nextId == null) setSearchNotes(searchNotes.data?.searchNotes?.items);
      else
        setSearchNotes(
          searchNotes.concat(searchNotes.data?.searchNotes?.items)
        );
    } catch (error) {
      console.error({ error });
    }
  };
  const search = async (e: any) => {
    console.log(e);

    try {
      const allPromises = [];
      const loadAll = true;
      if (loadAll) {
        allPromises.push(searchHomechurch1(e, null));
        allPromises.push(searchSeries1(e, null));
        allPromises.push(searchCustomPlaylist1(e, null));
        allPromises.push(searchBlogSeries1(e, null));
        allPromises.push(searchNotes1(e, null));
        allPromises.push(searchVideos(e, null));
        allPromises.push(searchBlogs(e, null));
        allPromises.push(searchPeople(e));
        allPromises.push(searchCustom(e));
      } else {
        // load some
        //allPromises.push(searchHomechurch1(e, null));
      }

      await Promise.all(allPromises);
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };
  const compassionItems = (): CompassionData[] => {
    return dataCompassion.filter(
      (compassion: CompassionData) =>
        (compassion.name.toLowerCase().includes(searchString.toLowerCase()) ||
          compassion.description
            .toLowerCase()
            .includes(searchString.toLowerCase())) &&
        searchString.length > 4
    );
  };
  const renderCompassion = (compassion: CompassionData) => {
    const image = {
      src: compassion.image,
      alt: compassion.imagealt,
    };
    return (
      <Button key={compassion.id} className="SearchResultItem">
        <ScaledImage
          image={image}
          className="SearchThumb"
          fallbackUrl="/static/NoCompassionLogo.png"
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
      </Button>
    );
  };
  const renderSearchTypes = () => {
    return (
      customData?.page?.pageConfig?.searchResult?.hideShowMenu !== true &&
      searchString != '' && (
        <div className="TrendingSearches">
          Show:
          {Object.keys(SearchType).map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;
                <Button
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
                </Button>
              </>
            );
          })}
        </div>
      )
    );
  };
  const renderNotes = (item: any) => {
    const image = {
      src: getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openVideo(item);
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
        </Button>
      );
    else return null;
  };
  const renderTrending = () => {
    return (
      searchString == '' && (
        <div className="TrendingSearches">
          <strong>Trending:</strong>
          {content?.trending?.map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => {
                    setSearchResults(null);
                    setSearchString(item);
                  }}
                  className="TrendingItem"
                  key={item}
                >
                  {item}
                </Button>
              </>
            );
          })}
        </div>
      )
    );
  };
  const getBlogImageURI = (
    title: string | undefined | null,
    style: 'baby-hero' | 'banner' | 'square'
  ): string => {
    if (!title) return '';
    return (
      `/static/photos/blogs/${style}/` + title.replace(/\?|[']/g, '') + '.jpg'
    );
  };
  const history = useHistory();
  const navigateTo = (location: any) => {
    history.push(location, 'as');
    const unblock = history.block('Are you sure you want to leave this page?');
    unblock();
  };
  const openVideo = (item: any) => {
    console.log(item);
    console.log('/videos/' + item.series.id + '/' + item.id);
    navigateTo('/videos/' + item.series.id + '/' + item.id);
    //    this.navigateTo("/videos/"+item.series+"/"+item.episodeId)
  };
  const openSeries = (item: any) => {
    console.log(item);
    history.push('/videos/' + item.id);
  };
  const openBlog = (item: any) => {
    console.log(item);
    history.push('/posts/' + item.id);
  };
  const renderBlog = (item: any) => {
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openBlog(item);
          }}
          className="SearchResultItem"
        >
          <BlogImage
            image={item.squareImage}
            blogTitle={item.blogTitle}
            imageType="square"
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
        </Button>
      );
    else return null;
  };
  const renderBlogSeries = (item: any) => {
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openVideo(item);
          }}
          className="SearchResultItem"
        >
          <BlogImage
            image={item.squareImage}
            blogTitle={item.blogTitle}
            imageType="square"
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
        </Button>
      );
    else return null;
  };

  const renderCustomPlaylist = (item: any) => {
    const image = {
      src: getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openVideo(item);
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
        </Button>
      );
    else return null;
  };
  const renderSeries = (item: any) => {
    const image = {
      src:
        '/static/photos/series/' +
        item.seriesType +
        '-' +
        (item.title ?? '').replace('?', '') +
        '.jpg',
      alt: `${item.title} series image`,
    };

    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openSeries(item);
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
        </Button>
      );
    else return null;
  };
  const renderHomechurch = (item: any) => {
    const image = {
      src: getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openVideo(item);
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
        </Button>
      );
    else return null;
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
      setDataCompassion(await DataLoader.loadCompassion());
      fetch('/static/data/import-video.json')
        .then(async (e: Response) => {
          try {
            const json = await e.json();
            const videoTypeParser = json.map((item: any) => {
              console.log(item.id);
              console.log(item.name);
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
            console.log(e);
            console.log(e.body);
            setCustomBegin(await e.json());
          } catch (e: any) {
            console.log(e);
            setCustomBegin(null);
          }
        })
        .catch((e: Error) => {
          setCustomBegin(null);
          console.log(e);
        });
      //dataSpeakers: await DataLoader.getSpeakers(query, dataLoaded);
    };
    loadInitialData();
  }, []);
  const renderVideo = (item: any) => {
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
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
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.episodeTitle + ' - ' + item.seriesTitle}
              />
            </div>
            <div className="VideoType">
              {videoTypeParser && videoTypeParser[item.videoTypes]}
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
        </Button>
      );
    else return null;
  };
  const renderBegin = () => {
    return <RenderRouter data={null} content={customBegin} />;
  };
  const renderCustom = () => {
    return <RenderRouter data={null} content={customData} />;
  };
  return (
    <>
      <form id="search" role="search" className="SearchItem">
        <div style={{ position: 'relative' }}>
          <input
            value={searchString}
            className="SearchItemInput"
            autoFocus={true}
            ref={inputFieldRef}
            onChange={(e) => {
              if (e.target.value) {
                setIsLoading(true);
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
          {renderTrending()}
          {renderSearchTypes()}
        </div>
      </form>
      {customBegin != null && searchString == '' && renderBegin()}
      {customData != null && searchString != '' && renderCustom()}
      <div className="SearchItem">
        {(currentSearchType == SearchType.All ||
          currentSearchType == SearchType.Staff) &&
          searchString != '' &&
          customData?.page?.pageConfig?.searchResult?.hideStaff !== true &&
          dataStaff.map((staff: TMHPerson) => (
            <RenderStaff
              key={staff.id}
              staff={staff}
              searchString={searchString}
            />
          ))}
        {(currentSearchType == SearchType.All ||
          currentSearchType == SearchType['Home Church']) &&
          searchString != '' &&
          customData?.page?.pageConfig?.searchResult?.hideHomechurch !== true &&
          searchHomechurch?.map((homechurch: any) =>
            renderHomechurch(homechurch)
          )}
        {currentSearchType == SearchType.All &&
          customData?.page?.pageConfig?.searchResult?.hideSeries !== true &&
          searchSeries?.map((series: any) => renderSeries(series))}
        {currentSearchType == SearchType.All &&
          customData?.page?.pageConfig?.searchResult?.hideCustomPlaylist !==
            true &&
          searchCustomPlaylist?.map((customPlaylist: any) =>
            renderCustomPlaylist(customPlaylist)
          )}

        {currentSearchType == SearchType.All &&
          customData?.page?.pageConfig?.searchResult?.hideBlogSeries !== true &&
          searchBlogSeries?.map((blogSeries: any) =>
            renderBlogSeries(blogSeries)
          )}
        {currentSearchType == SearchType.All &&
          customData?.page?.pageConfig?.searchResult?.hideNotes !== true &&
          searchNotes?.map((note: any) => renderNotes(note))}
        {currentSearchType == SearchType.All &&
          customData?.page?.pageConfig?.searchResult?.hideCompassion !== true &&
          compassionItems().map((compassion: CompassionData) =>
            renderCompassion(compassion)
          )}
        {(currentSearchType == SearchType.All ||
          currentSearchType == SearchType.Blogs) &&
          searchBlogResults !== null &&
          customData?.page?.pageConfig?.searchResult?.hideBlogs !== true &&
          searchBlogResults.map((item: any) => renderBlog(item))}
        {(currentSearchType == SearchType.All ||
          currentSearchType == SearchType.Videos) &&
          searchResults !== null &&
          customData?.page?.pageConfig?.searchResult?.hideVideos !== true &&
          searchResults.map((item: any) => renderVideo(item))}
      </div>
    </>
  );
}

const RenderStaff = ({
  staff,
  searchString,
}: {
  staff: TMHPerson;
  searchString: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <a
      style={isLoaded ? {} : { display: 'none' }}
      href={'mailto:' + staff.email}
      key={staff.email}
      className="SearchResultItem"
    >
      <FadeImage
        alt={`Head shot of ${staff.firstName} ${staff.lastName}`}
        className="StaffImage"
        imageSrc={staff?.image ?? ''}
        fallbackUrl={'/static/Individual.png'}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
          setIsLoaded(true);
        }}
      />

      <div className="Content">
        <div className="Title">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={staff.firstName + ' ' + staff.lastName}
          />
        </div>
        <div className="Description">
          <Highlighter
            highlightClassName="Highlight"
            searchWords={searchString.split(' ')}
            autoEscape={true}
            textToHighlight={staff.position ?? ''}
          />
        </div>
      </div>
      <div className="Link">
        <img alt="Send email icon" src="/static/svg/Contact.svg" />
      </div>
    </a>
  );
};
