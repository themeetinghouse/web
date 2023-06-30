import { GraphQLResult } from '@aws-amplify/api';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchItem.scss';

import API from '@aws-amplify/api';
import {
  Blog,
  CustomPlaylist,
  F1ListGroup2,
  Notes,
  SearchBlogsQuery,
  // SearchCustomPlaylistsQuery,
  SearchF1ListGroup2sQuery,
  SearchNotesQuery,
  SearchSeriesQuery,
  Series,
  TMHPerson,
  Video,
} from 'API';
import { BlogImage, ScaledImage } from '../../components/ScaledImage';
import Highlighter from 'react-highlight-words';
import { Button, Spinner } from 'reactstrap';
import * as queries from '../../graphql/queries';
import * as customQueries from '../../graphql-custom/customQueries';
import DataLoader, { CompassionData } from './DataLoader';
import RenderRouter from './RenderRouter';
import FadeImage from 'components/ScaledImage/FadeImage';
import { useDebounce } from 'hooks/useDebounce';
import moment from 'moment';

enum SearchType {
  All = 'All' as any,
  Videos = 'Videos' as any,
  Blogs = 'Blogs' as any,
  Staff = 'Staff' as any,
  'Home Church' = 'Home Church' as any,
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

  const [customData, setCustomData] = useState<any>(null);
  const [customBegin, setCustomBegin] = useState<any>(null);

  const [currentSearchType, setCurrentSearchType] = useState<SearchType>(
    SearchType.All
  );
  // Data =================
  const [compassionData, setCompassionData] = useState<CompassionData[]>([]);
  const [staffData, setStaffData] = useState<TMHPerson[]>([]);
  const [overseersData, setOverseersData] = useState<TMHPerson[]>([]);
  const [homeChurchData, setHomeChurchData] = useState<F1ListGroup2[]>([]);
  const [seriesData, setSeriesData] = useState<Series[]>([]);
  const [customPlaylistData, setCustomPlaylistData] = useState<
    CustomPlaylist[]
  >([]);
  const [notesData, setNotesData] = useState<Notes[]>([]);
  const [blogData, setBlogData] = useState<Blog[]>([]);

  // =====================
  const [videoTypeParser, setVideoTypeParser] =
    useState<VideoTypeParserType>(null);
  useState<any>(null);
  const doSearch = (newSearchTerm: string) => {
    search(newSearchTerm);
  };
  useEffect(() => {
    if (searchString === '') {
      clearData();
      setIsLoading(false);
    }
  }, [searchString]);
  const debouncedSearchterm = useDebounce(searchString, 800);
  const clearData = () => {
    setVideoData([]);
    setBlogData([]);
    setHomeChurchData([]);
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
      if (debouncedSearchterm.length > 2) doSearch(debouncedSearchterm);
    }
  }, [debouncedSearchterm]);
  const searchPeople = async (searchTerm: string) => {
    try {
      const people = (await DataLoader.searchTMHPeople(
        searchTerm
      )) as TMHPerson[];
      const staff = people.filter((person) => person.isStaff === 'true');
      const overseers = people.filter((staff) => staff?.isOverseer === 'true');
      setStaffData(staff);
      setOverseersData(overseers);
    } catch (error) {
      console.error({ error });
    }
  };
  const searchCompassion = async (searchTerm: string) => {
    const response = await DataLoader.loadCompassion();
    const compassionData = response.filter(
      (compassion: CompassionData) =>
        (compassion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          compassion.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        searchString.length > 3
    );
    setCompassionData(compassionData);
  };

  const searchCustom = async (searchTerm: string) => {
    return;
    try {
      const response = await fetch(
        '/static/content/search/' + searchTerm + '.json'
      );
      const json = await response.json();
      console.log({ searchCustom: json });
      setCustomData(json);
    } catch (error) {
      setCustomData(null);
    }
  };
  const searchBlogs = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: queries.searchBlogs,
        variables: {
          filter: {
            and: [
              {
                or: [
                  { blogTitle: { matchPhrase: searchTerm } },
                  { author: { matchPhrase: searchTerm } },
                  { tags: { matchPhrase: searchTerm } },
                  { description: { matchPhrase: searchTerm } },
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

      console.log({ searchBlogs: response });
      setBlogData(response.data?.searchBlogs?.items as Blog[]);
    } catch (error: any) {
      setBlogData(error.data?.searchBlogs?.items as Blog[]);
      console.error({ error });
    }
  };
  const searchVideos = async (searchTerm: string) => {
    try {
      const vids = (await DataLoader.searchVideos(searchTerm)) as Video[];
      setVideoData(vids);
      console.log({ searchVideos: vids });
    } catch (error) {
      console.error({ error });
    }
  };
  const searchHomechurch = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: queries.searchF1ListGroup2s,
        variables: {
          filter: {
            or: [
              { name: { matchPhrase: searchTerm } },
              { description: { matchPhrase: searchTerm } },
            ],
          },
          limit: 15,
        },
      })) as GraphQLResult<SearchF1ListGroup2sQuery>;

      console.log({ searchHomechurch: response });
      setHomeChurchData(
        response.data?.searchF1ListGroup2s?.items as F1ListGroup2[]
      );
    } catch (error: any) {
      setHomeChurchData(
        error.data?.searchF1ListGroup2s?.items as F1ListGroup2[]
      );
      console.error({ error });
    }
  };
  const searchSeries = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: customQueries.searchSeries,
        variables: {
          filter: {
            or: [
              { title: { matchPhrase: searchTerm } },
              { description: { matchPhrase: searchTerm } },
            ],
          },
          limit: 15,
        },
      })) as GraphQLResult<SearchSeriesQuery>;
      console.log({ searchSeries: response });
      setSeriesData(
        response.data?.searchSeries?.items.filter(
          (z: any) => !z?.seriesType?.includes('hidden')
        ) as Series[]
      );
    } catch (error: any) {
      setSeriesData(
        error.data?.searchSeries?.items.filter(
          (z: any) => !z?.seriesType?.includes('hidden')
        ) as Series[]
      );
      console.error({ error });
    }
  };
  // const searchCustomPlaylist = async (searchTerm: string) => {
  //   try {
  //     const response = (await API.graphql({
  //       query: queries.searchCustomPlaylists,
  //       variables: {
  //         filter: {
  //           or: [
  //             { title: { matchPhrase: searchTerm } },
  //             { description: { matchPhrase: searchTerm } },
  //           ],
  //         },
  //         limit: 15,
  //       },
  //     })) as GraphQLResult<SearchCustomPlaylistsQuery>;
  //     console.log({ searchCustomPlaylist: response });
  //     setCustomPlaylistData(
  //       response.data?.searchCustomPlaylists?.items as CustomPlaylist[]
  //     );
  //   } catch (error: any) {
  //     setCustomPlaylistData(
  //       error.data?.searchCustomPlaylists?.items as CustomPlaylist[]
  //     );
  //     console.error({ error });
  //   }
  // };
  const searchNotes = async (searchTerm: string) => {
    try {
      const response = (await API.graphql({
        query: queries.searchNotes,
        variables: {
          filter: {
            or: [
              { title: { eq: searchTerm } },
              { seriesId: { eq: searchTerm } },
            ],
          },
          limit: 15,
        },
      })) as GraphQLResult<SearchNotesQuery>;
      console.log({ searchNotes: response.data?.searchNotes?.items });
      setNotesData(response.data?.searchNotes?.items as Notes[]);
    } catch (error: any) {
      setNotesData(error.data?.listNotes?.items as Notes[]);
      console.error({ error });
    }
  };
  const search = async (searchTerm: string) => {
    console.log(searchTerm);
    try {
      const allPromises = [
        searchHomechurch(searchTerm),
        searchSeries(searchTerm),
        searchVideos(searchTerm),
        searchBlogs(searchTerm),
        searchCompassion(searchTerm),
        searchPeople(searchTerm),
        searchCustom(searchTerm),
        //searchCustomPlaylist(searchTerm),
        searchNotes(searchTerm),
      ];
      await Promise.all(allPromises);
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
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
          <div style={{ marginBottom: 16 }}>
            <Pill title="Compassion" />
          </div>
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
    const startingAtImg = item.content.slice(item.content.indexOf('<img'), -1);
    const imgTag = startingAtImg.slice(0, startingAtImg.indexOf('/>') + 2);
    const imgSrc = imgTag.slice(
      imgTag.indexOf('src="') + 5,
      imgTag.indexOf('alt') - 2
    );
    const openNote = (item: any) => {
      navigateTo(`/notes/${item.id}`);
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            openNote(item);
          }}
          className="SearchResultItem"
        >
          <div className="Content">
            <div style={{ marginBottom: 16 }}>
              <Pill title="Notes" />
            </div>
            <FadeImage
              imageSrc={imgSrc}
              className="SearchThumbNotes"
              style={{
                objectFit: 'scale-down',
              }}
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

            {item.pdf ? (
              <a
                style={{ alignSelf: 'center', flex: 1 }}
                href={item.pdf}
                download={`${item.id} - Notes`}
              >
                <img src="/static/svg/Download.svg" width={25} height={25} />
              </a>
            ) : null}
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
          {props?.content?.trending?.map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => {
                    setVideoData([]);
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
    // console.log("opening", item);
    if (item?.series?.id) {
      console.log('/videos/' + item.series.id + '/' + item.id);
      navigateTo('/videos/' + item.series.id + '/' + item.id);
      //    this.navigateTo("/videos/"+item.series+"/"+item.episodeId)
    } else {
      navigateTo(
        `/videos/${item.episodeTitle}-${item.episodeTitle}/${item.id}`
      );
    }
  };
  const openSeries = (item: any) => {
    // console.log("opening", item);
    history.push('/videos/' + item.id);
  };
  const openBlog = (item: any) => {
    // console.log("opening", item);
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
        </Button>
      );
    else return null;
  };

  const renderCustomPlaylist = (item: any) => {
    console.log({ customPlaylistData: item });
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
            <div style={{ marginBottom: 16 }}>
              <Pill title="Custom Playlist" />
            </div>
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.title ?? ''}
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
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
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
      fetch('/static/data/import-video.json')
        .then(async (e: Response) => {
          try {
            const json = await e.json();
            const videoTypeParser = json.map((item: any) => {
              // console.log(item.id);
              // console.log(item.name);
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
            // console.log(e);
            // console.log(e.body);
            setCustomBegin(await e.json());
          } catch (e: any) {
            // console.log(e);
            setCustomBegin(null);
          }
        })
        .catch((e: Error) => {
          setCustomBegin(null);
          console.error(e);
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
  const shouldShowNoResults = useMemo(() => {
    // console.log('blogData?.length', blogData?.length);
    // console.log('homeChurchData?.length', homeChurchData?.length);
    // console.log('seriesData?.length', seriesData?.length);
    // console.log('customPlaylistData?.length', customPlaylistData?.length);
    // console.log('videoData?.length', videoData?.length);
    // console.log('customData?.length', customData?.length);
    // console.log('customBegin?.length', customBegin?.length);
    // console.log('notesData?.length', notesData?.length);
    // console.log('staffData?.length', staffData?.length);
    // console.log('overseersData?.length', overseersData?.length);
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
    <>
      <form id="search" role="search" className="SearchItem">
        <div style={{ position: 'relative' }}>
          <input
            value={searchString}
            className="SearchItemInput"
            autoFocus={true}
            ref={inputFieldRef}
            onChange={(e) => {
              if (e.target.value && e.target.value.length > 2) {
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
          {renderTrending()}
          {renderSearchTypes()}
        </div>
      </form>
      {customBegin != null && searchString == '' && renderBegin()}
      {customData != null && searchString != '' && renderCustom()}
      <div className="SearchItem">
        {shouldShowNoResults && searchString !== '' ? (
          <NoResults />
        ) : (
          <>
            {(currentSearchType == SearchType.All ||
              currentSearchType == SearchType.Videos) &&
              videoData !== null &&
              customData?.page?.pageConfig?.searchResult?.hideVideos !== true &&
              videoData.map((item: any) => renderVideo(item))}
            {(currentSearchType == SearchType.All ||
              currentSearchType == SearchType.Staff) &&
              searchString != '' &&
              customData?.page?.pageConfig?.searchResult?.hideStaff !== true &&
              staffData.map((staff: TMHPerson) => (
                <RenderStaff
                  key={staff.id}
                  staff={staff}
                  searchString={searchString}
                />
              ))}
            {(currentSearchType == SearchType.All ||
              currentSearchType == SearchType['Home Church']) &&
              searchString != '' &&
              customData?.page?.pageConfig?.searchResult?.hideHomechurch !==
                true &&
              homeChurchData?.map((homechurch: any) =>
                renderHomechurch(homechurch)
              )}
            {currentSearchType == SearchType.All &&
              customData?.page?.pageConfig?.searchResult?.hideSeries !== true &&
              seriesData?.map((series: any) => renderSeries(series))}
            {currentSearchType == SearchType.All &&
              customData?.page?.pageConfig?.searchResult?.hideCustomPlaylist !==
                true &&
              customPlaylistData?.map((customPlaylist: any) =>
                renderCustomPlaylist(customPlaylist)
              )}

            {customData?.page?.pageConfig?.searchResult?.hideNotes !== true ? (
              <>
                {currentSearchType == SearchType.All ||
                currentSearchType == SearchType.Notes
                  ? notesData?.map((note: any) => renderNotes(note))
                  : null}
              </>
            ) : null}

            {currentSearchType == SearchType.All &&
              customData?.page?.pageConfig?.searchResult?.hideCompassion !==
                true &&
              compassionData?.map((compassion: CompassionData) =>
                renderCompassion(compassion)
              )}
            {(currentSearchType == SearchType.All ||
              currentSearchType == SearchType.Blogs) &&
              blogData !== null &&
              customData?.page?.pageConfig?.searchResult?.hideBlogs !== true &&
              blogData.map((item: any) => renderBlog(item))}
          </>
        )}
      </div>
    </>
  );
}

const NoResults = () => {
  return (
    <div className="SearchResultItem">
      <div className="Content">
        <div className="Title">No results found</div>
      </div>
    </div>
  );
};

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
      style={
        isLoaded ? { paddingRight: 12, paddingLeft: 12 } : { display: 'none' }
      }
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
        <div style={{ marginBottom: 16 }}>
          <Pill title="Staff" />
        </div>

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

const Pill = ({ title }: { title: string }) => {
  return <span className="SearchItemPill">{title}</span>;
};
