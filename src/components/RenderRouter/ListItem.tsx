import React, { CSSProperties, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import DataLoader, {
  PeopleData,
  EventData,
  DataQuery,
  VideoByVideoTypeData,
  SpeakerData,
  BlogData,
  SeriesData,
  SeriesByTypeData,
  SeriesQuery,
  CustomPlaylistQuery,
  CustomPlaylistVideoData,
  VideoSeriesQuery,
  PopularVideosQuery,
  SeriesCollectionData,
  CustomPlaylistsData,
  CustomPlaylistsQuery,
  RandomCustomPlaylistData,
  BlogQuery,
  InstagramData,
} from './DataLoader';
import Select, { components } from 'react-select';
import HorizontalScrollList from './HorizontalScrollList';
import LadderList from './LadderList';
import InfiniteScroll from 'react-infinite-scroll-component';
import './ListItem.scss';
import format from 'date-fns/format';
import { ScaledImage, BlogImage } from 'components/ScaledImage';
import { fallbackToImage } from 'components/ScaledImage/ScaledImage';
import { Link, ArrowLink } from 'components/Link/Link';
import moment from 'moment';
import { ModelSortDirection, TMHCompassion, TMHPerson } from 'API';
import { Margin } from '../types';
import FadeImage from 'components/ScaledImage/FadeImage';
import { Storage } from 'aws-amplify';
export function ListImage({
  className,
  image,
  noShowOnStartup,
  style,
  fallbackImageUrl,
}: {
  className: string;
  image: any;
  noShowOnStartup?: boolean;
  style?: CSSProperties;
  fallbackImageUrl?: string;
}) {
  const [image1, setImage1] = React.useState({
    src: '',
    alt: '',
  });
  React.useEffect(() => {
    if (image?.src?.includes('editor' && !image.src?.includes('https://'))) {
      const imageKey = image.src[0] === '/' ? image.src.slice(1) : image.src;
      Storage.get(imageKey)
        .then(async (url) => {
          setImage1({
            src: url?.split('?')?.[0],
            alt: image.alt,
          });
        })
        .catch((e) => {
          console.error(e);
          if (fallbackImageUrl) {
            setImage1({
              src: fallbackImageUrl,
              alt: image.alt,
            });
          }
        });
    } else {
      setImage1({
        src: image.src,
        alt: image.alt,
      });
    }
  }, [image]);
  if (!image1.src) return null;

  return (
    <FadeImage
      noShowOnStartup={noShowOnStartup}
      imageSrc={image1.src}
      alt={image1.alt}
      className={className}
      fallbackUrl={fallbackImageUrl}
      style={style}
    />
  );
}
function ListItemLink({
  to,
  className,
  children,
  style,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
  style: CSSProperties;
}) {
  const [url, setUrl] = React.useState('');
  React.useEffect(() => {
    (async () => {
      if (to.includes('editor/pdfs')) {
        const newLink = await Storage.get(to);
        setUrl(newLink);
      } else {
        setUrl(to);
      }
    })();
  }, [to]);
  return (
    <Link className={className} style={style} to={url}>
      {children}
    </Link>
  );
}
interface Props {
  content: any;
  data: any;
  pageConfig: any;
}
// interface ListItemProps extends Props {
//   navigate: NavigateFunction;
//   params?: {
//     playlist?: string;
//     blog?: string;
//   };
// }
interface State {
  content: DataQuery & {
    style: string;
    header1: string;
    header2: string;
    text1: string;
    showEpisodeNumbers: boolean;
    hovertag: string;
    skipFirstPost?: boolean;
    filterOptions?: Array<{ id: string; label: string }>;
    sortByName?: boolean;
    showSearch?: boolean;
    selector?: string;
    sortOrder?: ModelSortDirection;
    margin?: Margin;
    calendar?: Event;
  };
  selectedFilter: string;
  searchFilter: string;
  listData: ListData[];
  locationInstaURL?: string;
  overlayData: any;
  showMoreVideos: boolean;
  windowWidth: number;
  randomPlaylistId: string;
  blogNextToken: string | null | undefined;
}
type VideoData = SeriesData | VideoByVideoTypeData | CustomPlaylistVideoData;

type SeriesData2 = SeriesData | string | null;

type ListData =
  | SpeakerData
  | VideoData
  | PeopleData
  | EventData
  | TMHCompassion
  | SeriesByTypeData
  | BlogData
  | PeopleData[]
  | SeriesCollectionData
  | CustomPlaylistsData
  | RandomCustomPlaylistData
  | NonNullable<RandomCustomPlaylistData>['video']
  | InstagramData
  | TMHPerson;

const hideEpisodeNumbers = ['adult-sunday-shortcut', 'kidmax-live'];

export default function ListItem(props: Props) {
  const navigate = useNavigate();
  const params = useParams();
  const [state, setState] = useState<State>({
    locationInstaURL: 'https://www.instagram.com/themeetinghouse/',
    searchFilter: '',
    content: props.content,
    listData: props.content.list ?? [],
    overlayData: null,
    showMoreVideos: false,
    windowWidth: window.innerWidth,
    randomPlaylistId: params?.playlist ?? '',
    blogNextToken: null,
    selectedFilter: 'All',
  });
  // const videoHandler = () => {
  //   setState({ ...state, showMoreVideos: true });
  // };
  const loadData = async () => {
    const dataLoaded = (data: ListData[]) => {
      console.log({ data });
      setState((prev) => ({ ...prev, listData: data }));
    };

    const getPlaylistId = (id: string) =>
      setState((prev) => ({ ...prev, randomPlaylistId: id }));
    const checkNext = () => null;
    let data: ListData[];
    const query: DataQuery = props.content;
    switch (query.class) {
      case 'instagram': {
        const response = await DataLoader.loadInsta(query);
        data = response.data;
        setState((prev) => ({ ...prev, locationInstaURL: response.link }));
        break;
      }
      case 'speakers':
        await DataLoader.getSpeakers(query, dataLoaded);
        return;
      case 'staff':
        data = await DataLoader.loadStaff(query);
        break;
      case 'overseers':
        data = await DataLoader.loadOverseers();
        break;
      case 'events':
        data = await DataLoader.loadEvents(query);
        break;
      case 'compassion':
        data = await DataLoader.loadCompassion();
        break;
      case 'series':
        await DataLoader.getSeriesByType(query, dataLoaded, checkNext);
        return;
      case 'series-collection':
        await DataLoader.getSeriesCollection(query, dataLoaded);
        return;
      case 'playlists':
        await DataLoader.listCustomPlaylists(dataLoaded);
        return;
      case 'random-suggested-playlist':
        await DataLoader.getRandomPlaylist(dataLoaded, getPlaylistId);
        return;
      case 'custom-playlist':
        const customPlaylist = (query as CustomPlaylistQuery).playlist ?? '';
        data = await DataLoader.getVideosCustomPlaylistById(customPlaylist);
        break;
      case 'videos':
      case 'curious':
      case 'watch-page':
      case 'watch-page-playlist':
        let id: string;
        switch (query.selector) {
          case 'sameSeries':
            id = props.data?.series?.id;
            data = await DataLoader.getSeriesVideos({
              ...(query as SeriesQuery),
              id,
            });
            break;
          case 'highlights':
            id = 'adult-sunday-shortcut-' + props?.data?.series?.id;
            data = await DataLoader.getSeriesVideos({
              ...(query as SeriesQuery),
              id,
            });
            break;
          case 'same-playlist':
            const playlist = params?.playlist ?? '';
            data = await DataLoader.getVideosCustomPlaylistById(playlist);
            break;
          case 'popular':
            await DataLoader.getPopularVideos(
              query as PopularVideosQuery,
              dataLoaded
            );
            return;
          default:
            await DataLoader.getVideos(
              query as VideoSeriesQuery,
              dataLoaded,
              checkNext
            );
            return;
        }
        break;
      case 'blogs':
        switch (query.selector) {
          case 'all':
            await DataLoader.getBlogs(query, dataLoaded, (blogNextToken) =>
              setState((prev) => ({ ...prev, blogNextToken }))
            );
            return;
          case 'similar':
            const postId = params?.blog ?? '';
            await DataLoader.getSimilarBlogs(query, postId, dataLoaded);
            return;
          case 'series':
            const blogPostId = params?.blog ?? '';
            await DataLoader.getBlogsInSeries(query, blogPostId, dataLoaded);
            return;
        }
      case 'user-defined':
        return;
      default:
        if (props.content.style === 'imageList') {
          return;
        }
        console.error(`unknown list data type ${props.content.class}`, {
          content: props.content,
        });
    }
    setState((prev) => ({ ...prev, listData: data }));
  };
  useEffect(() => {
    const setWindowWidth = () => {
      setState({ ...state, windowWidth: window.innerWidth });
    };
    window.addEventListener('resize', setWindowWidth);
    loadData();

    return () => {
      window.removeEventListener('resize', setWindowWidth);
    };
  }, [props.content]);
  let data: Array<ListData | string> =
    props.content.filterField == null
      ? state.listData
      : state.listData.filter((item) => {
          if (!item) {
            return false;
          }
          if (
            props.content.filterField === 'sites' &&
            props.content.class === 'staff'
          ) {
            const person = item as TMHPerson;
            const siteNamesFromPersonTmhSites = person.tmhSites?.items.map(
              (site) => site?.tMHSiteID ?? ''
            );
            person.sites = siteNamesFromPersonTmhSites;

            return person?.sites?.includes(props.content.filterValue);
          }
          return (
            item[props.content.filterField as keyof ListData] as string
          )?.includes(props.content.filterValue);
        });
  if (
    props.content.class === 'user-defined' ||
    props.content.style === 'imageList'
  ) {
    data = props.content.list;
  }
  const dataLength = data.length;

  const { logoColor } = props.pageConfig;
  const videoHandler = () => {
    setState((prev) => ({
      ...prev,
      showMoreVideos: true,
    }));
  };
  /**
   * Helper used within Array.prototype.sort() to sort content (videos, blogs) by date.
   * @param a - date of list item (example: a.publishedDate)
   * @param b - date of list item
   * @param sortOrder - DESC: newest first, ASC: oldest first
   */
  const sortByDate = (a: string, b: string, sortOrder?: ModelSortDirection) => {
    return sortOrder === 'DESC' ? b.localeCompare(a) : a.localeCompare(b);
  };

  const sortByViews = (a: VideoData, b: VideoData) => {
    if (!a?.viewCount || !b?.viewCount) return -1;
    return parseInt(b.viewCount, 10) - parseInt(a.viewCount, 10);
  };

  const setData = (data: any) => {
    setState((prev) => ({
      ...prev,
      listData: prev.listData.concat(data),
    }));
  };

  const getMoreBlogs = async () => {
    const dataLoaded = (data: ListData[]) => setData(data);
    const query: BlogQuery = props.content;

    await DataLoader.getBlogs(
      query,
      dataLoaded,
      (blogNextToken) => setState((prev) => ({ ...prev, blogNextToken })),
      state.blogNextToken
    );
  };
  const sortPlaylistsAlpha = (
    a: CustomPlaylistsData,
    b: CustomPlaylistsData
  ) => {
    return (a?.title as string).localeCompare(b?.title as string);
  };

  const renderMoreVideosCard = () => {
    return (
      <Link
        key="load-more-card"
        to={`/archive/video/${(props.content as VideoSeriesQuery).subclass}`}
        className={
          'container ListItemVideo' +
          (props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
        }
      >
        <div className="LoadMoreVideosCard">
          <div className="LoadMoreVideosText">Click for more videos</div>
        </div>
      </Link>
    );
  };

  const renderMoreSeriesCard = () => {
    return (
      <Link
        key="load-more-card"
        to={`/archive/series/${(props.content as VideoSeriesQuery).subclass}`}
        className="container ListItemVideo"
      >
        <div className="LoadMoreSeriesCard">
          <div className="LoadMoreSeriesText">Click for more series</div>
        </div>
      </Link>
    );
  };

  const renderVideo = (item: VideoData): JSX.Element | null => {
    if (!item) {
      return null;
    }
    const label = item?.series?.id?.includes('livestream')
      ? `Navigate to watch ${moment(item.publishedDate).format(
          'dddd, MMMM Do YYYY'
        )} livestream.`
      : `Navigate to watch episode ${item.episodeNumber} titled ${
          item.episodeTitle
        } ${item.seriesTitle ? ` from the ${item.seriesTitle} series` : ''}`;
    return (
      <button
        onClick={() => {
          handleClick(item);
        }}
        aria-label={label}
        key={item.id ?? ''}
        className={
          'ListItemVideo' +
          (props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
        }
        tabIndex={0}
      >
        <img
          alt={
            (item as VideoByVideoTypeData)?.thumbnailDescription ||
            `${item?.episodeTitle} thumbnail` ||
            'Video Thumbnail'
          }
          className="ListItemVideoThumb"
          src={
            (item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high
              ?.url ?? ''
          }
        />
        <div className="ListItemPlayImageOverlay">
          <img alt="Play Icon" src="/static/svg/Youtube.svg"></img>
        </div>
        <div
          className={`ListItemEpisodeNum ${
            props.pageConfig.logoColor === 'white' ? 'isWhiteLogo' : ''
          }`}
        >
          {props.content.showEpisodeNumbers === false
            ? null
            : item.episodeNumber + '. '}{' '}
          {item.episodeTitle}
        </div>
        <div
          className={`ListItemSeriesTitle ${
            props.pageConfig.logoColor === 'white' ? 'isWhiteLogo' : ''
          }`}
        >
          {item.seriesTitle != null ? item.seriesTitle : null}
        </div>
        <div
          className={`ListItemPublishedDate ${
            props.pageConfig.logoColor === 'white' ? 'isWhiteLogo' : ''
          }`}
        >
          {item.publishedDate}
        </div>
      </button>
    );
  };

  const renderPlaylistVideo = (
    item: NonNullable<RandomCustomPlaylistData>['video']
  ): JSX.Element | null => {
    if (!item) {
      return null;
    }
    return (
      <div
        onClick={() => {
          handlePlaylistClick(item);
        }}
        key={item.id ?? ''}
        className={
          'ListItemVideo' +
          (props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
        }
      >
        <img
          alt={
            (item as VideoByVideoTypeData)?.thumbnailDescription ||
            'Video Thumbnail'
          }
          className="ListItemVideoThumb"
          src={
            (item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high
              ?.url ?? ''
          }
        />
        <div className="ListItemPlayImageOverlay">
          <img alt="Play Icon" src="/static/svg/Youtube.svg"></img>
        </div>
        <div className="ListItemEpisodeNum">
          {props.content.showEpisodeNumbers === false
            ? null
            : item.episodeNumber + '. '}{' '}
          {item.episodeTitle}
        </div>
        <div className="ListItemSeriesTitle">
          {item.seriesTitle != null ? item.seriesTitle : null}
        </div>
        <div className="ListItemPublishedDate">{item.publishedDate}</div>
      </div>
    );
  };

  const renderWatchPageVideo = (
    item: VideoData,
    isPlaylist?: boolean
  ): JSX.Element | null => {
    if (!item) {
      return null;
    }
    return (
      <div
        onClick={() => {
          isPlaylist ? handlePlaylistClick(item) : handleClick(item);
        }}
        key={item.id}
        className={
          'WatchPageVideo' +
          (props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
        }
      >
        <img
          alt={
            (item as VideoByVideoTypeData)?.thumbnailDescription ||
            'Video Thumbnail'
          }
          className="WatchPageThumb"
          src={
            (item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high
              ?.url ?? ''
          }
        />
        <div className="WatchPagePlayImageOverlay">
          <img alt="Play Icon" src="/static/svg/Youtube.svg"></img>
        </div>
        <div className="WatchPageEpisodeTitle">
          {item.episodeNumber &&
          !hideEpisodeNumbers.includes(item.videoTypes ? item.videoTypes : '')
            ? item.episodeNumber + '. '
            : null}
          {item.episodeTitle}
        </div>
        <div className="WatchPagePublishedDate">{item.publishedDate}</div>
      </div>
    );
  };

  const renderCurious = (item: VideoData): JSX.Element | null => {
    if (!item) {
      return null;
    }
    return (
      <button
        onClick={() => handleClick(item)}
        key={item.id}
        className="CuriousVideo"
      >
        <img
          alt={`Thumbnail for video: ${item.episodeTitle}`}
          className="CuriousVideoImage"
          src={
            (item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.maxres
              ?.url ?? ''
          }
        />
        <div className="CuriousPlayOverlay">
          <img alt="Play Icon" src="/static/svg/Youtube.svg"></img>
        </div>
      </button>
    );
  };

  // const getBlogImageURI = (
  //   title: string | undefined | null,
  //   style: 'baby-hero' | 'banner' | 'square'
  // ): string => {
  //   if (!title) return '';
  //   return (
  //     `/static/photos/blogs/${style}/` + title.replace(/\?|[']/g, '') + '.jpg'
  //   );
  // };

  const getPlaylistImageURI = (title: string | null | undefined): string => {
    if (!title) return '';
    return `/static/photos/playlists/` + title.replace(/\?|[']/g, '') + '.jpg';
  };

  const renderBlogs = (item: BlogData): JSX.Element | null => {
    if (!item) {
      return null;
    }

    return (
      <Link
        className="BlogLink"
        to={'/posts/' + item.id}
        key={item.id}
        aria-label={item.blogTitle ?? 'read blog post'}
      >
        <div className="BlogItem">
          <BlogImage
            image={item.squareImage}
            blogTitle={item.blogTitle}
            imageType="square"
            className="BlogSquareImage"
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
          <div className="BlogContentContainer">
            <div className="BlogTitleAndArrow">
              <div className="BlogTitle">{item.blogTitle}</div>
              <img
                className="blogarrow"
                alt=""
                src="/static/svg/ArrowRight black.svg"
              />
            </div>
            <div className="BlogDetails">
              by <span className="author-only">{item.author}</span> on{' '}
              {item.publishedDate}
            </div>
            <div className="BlogDesc">{item.description}</div>
          </div>
        </div>
      </Link>
    );
  };

  const renderSpeaker = (item: SpeakerData): JSX.Element | null => {
    if (!item) {
      return null;
    }
    return (
      <div
        key={`speaker-${item.id}-${item.name}`}
        className="ListItemTeachingImageDiv"
      >
        <img
          alt="TBD"
          className="ListItemTeachingImage"
          src="/static/images/teaching-3.png"
          onError={fallbackToImage('/static/Individual.png')}
        />
        <div className="ListItemEpisodeLength">{item.name}</div>
        <div>
          {item?.videos?.items?.length === 10
            ? item.videos.items.length + '+'
            : item?.videos?.items?.length}{' '}
          Episodes
        </div>
      </div>
    );
  };

  const renderEvent = (item: EventData): JSX.Element | null => {
    if (!item) {
      return null;
    }

    const start_date = new Date(
      item?.start_time?.substring(0, item.start_time.length - 2) +
        ':' +
        item?.start_time?.substring(item.start_time.length - 2)
    );
    let durationStr = start_date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    if (item.end_time) {
      const end_date = new Date(
        item.end_time.substring(0, item.end_time.length - 2) +
          ':' +
          item.end_time.substring(item.end_time.length - 2)
      );
      durationStr =
        durationStr +
        '-' +
        end_date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        });
    }
    let description;
    if (item.description && item.description.length > 300) {
      if (item.description.indexOf(' ', 300) === -1)
        description = item.description;
      else
        description =
          item.description.substring(0, item.description.indexOf(' ', 300)) +
          '...';
    } else description = item.description;

    const theevent = {
      start: start_date.getDate() + '',
      end: 'string',
      summary: item.name + '',
      description: description + '',
      location: '',
      url: 'url',
    };
    if (item.place != null) {
      if (item.place.name != null) {
        theevent.location = item.place.name;
      }
    }

    return (
      <Link
        key={`event-${item.name}-${item.id}-${item.start_time}`}
        className="container"
        to={{
          pathname: '/event',
          state: { event: item },
          hash: item?.id ?? '',
        }}
      >
        <div className="ListItemEvents">
          <div className="EventDateContainer">
            <div className="EventDateMonth">
              {start_date.toLocaleString('default', { month: 'short' })}
            </div>
            <div className="EventDateDay">{start_date.getDate()}</div>
          </div>
          <img
            className="ListItemEventsArrow"
            alt=""
            src="/static/svg/ArrowRight black.svg"
          />
          <div className="ListItemEventsText">
            <div className="ListItemEventsDescription">{item.name}</div>
            <div className="ListItemEventsDescription2">{description}</div>
            {item.place != null ? (
              item.place.name != null ? (
                <div className="ListItemEventsLocation">{item.place.name}</div>
              ) : null
            ) : null}
            {item.event_times && item.event_times[0]?.ticket_uri ? (
              <Link newWindow to={item.event_times[0].ticket_uri}>
                Register
              </Link>
            ) : null}
            <div className="ListItemEventsDuration">{durationStr}</div>
          </div>
        </div>
      </Link>
    );
  };
  const renderTMHPersons = (items: TMHPerson | TMHPerson[], index: number) => {
    const isMobile = state.windowWidth < 768;
    if (isMobile) {
      const data = items as TMHPerson;
      return (
        <div key={data.id} className="ListItemDiv3">
          <FadeImage
            alt={`Head shot of ${data.firstName} ${data.lastName}`}
            className="StaffImage"
            imageSrc={data?.image ?? ''}
            fallbackUrl={'/static/Individual.png'}
          />
          <div className="ListItemName">
            {data.firstName} {data.lastName}
          </div>
          <div className="ListItemPosition">{data.position}</div>
          <div className="StaffContact">
            {data.email ? (
              <div className="ListItemEmail">
                <a className="ListItemEmailText" href={'mailto:' + data.email}>
                  Email
                </a>
              </div>
            ) : null}
            {data.phone ? (
              <div className="ListItemPhone">
                <a className="ListItemEmailText" href={'tel:' + data.phone}>
                  {data.phone}
                </a>{' '}
                ext. {data.extension}
              </div>
            ) : null}
          </div>
        </div>
      );
    }

    return (
      <div className="StaffFlexArea" key={index}>
        {(items as TMHPerson[]).map((item) => {
          const telephone = `tel:${item.phone}${
            item.extension ? ',,,' + item.extension : ''
          }`;
          return (
            <div key={`staff-item-${item.id}`} className="StaffItem">
              <FadeImage
                alt={`Head shot of ${item.firstName} ${item.lastName}`}
                className="StaffImage"
                imageSrc={item?.image ?? ''}
                fallbackUrl={'/static/Individual.png'}
              />
              <div className="StaffInfo">
                <div className="ListItemName">
                  {item.firstName} {item.lastName}
                </div>
                <div className="ListItemPosition">{item.position}</div>
                <div className="StaffContact">
                  {item.email ? (
                    <a href={'mailto:' + item.email}>
                      <img
                        className="calendarImageRegion"
                        style={{ marginRight: '16px', height: 18, width: 18 }}
                        src="/static/svg/Contact.svg"
                        alt="Contact Icon"
                      />
                    </a>
                  ) : null}
                  {item.phone ? (
                    <a href={telephone}>
                      <img
                        style={{ height: 18, width: 18 }}
                        className="calendarImageRegion"
                        src="/static/svg/Phone.svg"
                        alt="Phone Icon"
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const renderCompassion = (item: TMHCompassion) => {
    const image = {
      src: item.image,
      alt: item.imagealt,
    };
    return (
      <div key={item.id} className="ListItemCompassion">
        <ListImage
          className="ListItemCompassionLogo"
          fallbackImageUrl="/static/NoCompassionLogo.png"
          image={image}
        />
        <div className="ListItemCompassionDescription">{item.name}</div>
        <div className="ListItemCompassionDescription2">{item.description}</div>

        {item.website != null ? (
          <div className="ListItemWebsiteContainer">
            {item.website && (
              <a className="ListItemWebsite" href={item.website}>
                <img src="/static/svg/Link.svg" />
              </a>
            )}
            {item.social?.twitter && (
              <a className="ListItemWebsite" href={item.social?.twitter}>
                <img src="/static/svg/Twitter.svg" />
              </a>
            )}
            {item.social?.facebook && (
              <a className="ListItemWebsite" href={item.social?.facebook}>
                <img src="/static/svg/Facebook.svg" />
              </a>
            )}
            {item.social?.instagram && (
              <a className="ListItemWebsite" href={item.social?.instagram}>
                <img src="/static/svg/Instagram.svg" />
              </a>
            )}
          </div>
        ) : null}
      </div>
    );
  };
  const renderPlaylist = (item: CustomPlaylistsData) => {
    if (!item) {
      return null;
    }
    const videos = item.videos?.items ?? [];
    if (videos.length > 0) {
      const image = {
        src: getPlaylistImageURI(item?.title),
        alt: item.title + ' playlist',
      };
      return (
        <div
          onClick={() => handlePlaylistClick(videos[0], true)}
          key={item.id}
          className="ListItemVideo"
        >
          <ScaledImage
            image={image}
            className="ListItemImage2"
            fallbackUrl="/static/photos/series/series-fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="ListItemEpisodeNum">{item.title}</div>
        </div>
      );
    } else {
      console.log({ 'None:': item });
      return null;
    }
  };

  const renderSeries = (item: SeriesCollectionData | SeriesByTypeData) => {
    if (!item) {
      return null;
    }
    const seriesEnded =
      item.endDate && format(new Date(), 'yyyy-MM-dd') > item.endDate;
    const videos = item.videos?.items ?? [];
    if (videos.length > 0) {
      return (
        <button
          onClick={() =>
            handleClick(
              videos.sort((a, b) => {
                const aNumber = a?.episodeNumber ?? 0;
                const bNumber = b?.episodeNumber ?? 0;
                return seriesEnded ? aNumber - bNumber : bNumber - aNumber;
              })[0]
            )
          }
          key={item.id}
          className="ListItemVideo"
        >
          <FadeImage
            imageSrc={item?.bannerImage?.src ?? ''}
            alt={item?.bannerImage?.alt ?? ''}
            className="ListItemImage2"
            fallbackUrl="/static/photos/series/series-fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />

          <div className="ListItemEpisodeNum">{item.title}</div>
          <div className="ListYearEpisode">
            {showYears(item.startDate, item.endDate)}
            {videos.length} {videos.length === 1 ? 'Episode' : 'Episodes'}
          </div>
        </button>
      );
    } else {
      console.log({ 'None:': item });
      return null;
    }
  };

  const renderInstaTile = (item: InstagramData): JSX.Element | null => {
    // Instagram tile styling

    if (!item) return null;
    return (
      <div key={item?.permalink} className="ListInstagramTile">
        <a href={item.permalink ?? ''}>
          <img
            src={item.media_url ?? ''}
            alt={item.caption ?? ''}
            title={item.caption ?? ''}
          />
        </a>
      </div>
    );
  };

  const renderItemRouter = (item: ListData, index: number) => {
    switch (props.content.class) {
      case 'speakers':
        return renderSpeaker(item as SpeakerData);
      case 'videos':
      case 'custom-playlist':
        return renderVideo(item as VideoData);
      case 'staff':
        return renderTMHPersons(item as TMHPerson | TMHPerson[], index);
      case 'overseers':
        return renderTMHPersons(item as TMHPerson | TMHPerson[], index);
      case 'events':
        return renderEvent(item as EventData);
      case 'instagram':
        return renderInstaTile(item as any);
      case 'compassion':
        return renderCompassion(item as TMHCompassion);
      case 'series':
        return renderSeries(item as SeriesByTypeData);
      case 'playlists':
        return renderPlaylist(item as CustomPlaylistsData);
      case 'series-collection':
        return renderSeries(item as SeriesCollectionData);
      case 'curious':
        return renderCurious(item as VideoData);
      case 'watch-page':
        return renderWatchPageVideo(item as VideoData);
      case 'watch-page-playlist':
        return renderWatchPageVideo(item as VideoData, true);
      case 'blogs':
        return renderBlogs(item as BlogData);
      case 'random-suggested-playlist':
        return renderPlaylistVideo(
          item as NonNullable<RandomCustomPlaylistData>['video']
        );
      default:
        return null;
    }
  };
  const videoOverlayClose = () => {
    setState((prev) => ({
      ...prev,
      overlayData: null,
    }));
  };
  const showYears = (
    start: string | null | undefined,
    end: string | null | undefined
  ) => {
    const validStart = start && !isNaN(new Date(start).getFullYear());
    const validEnd = end && !isNaN(new Date(end).getFullYear());
    const isValid = validStart && validEnd;

    if (validStart && !validEnd)
      return new Date(start as string).getFullYear() + ' • ';
    if (!validStart && validEnd)
      return new Date(end as string).getFullYear() + ' • ';
    if (!isValid) {
      console.error('startDate and endDate invalid');
      return null;
    }
    if (
      new Date(start as string).getFullYear() ===
      new Date(end as string).getFullYear()
    )
      return new Date(start as string).getFullYear() + ' • ';
    return (
      new Date(start as string).getFullYear() +
      ' - ' +
      new Date(end as string).getFullYear() +
      ' • '
    );
  };
  const handleClick = (data: any) => {
    setState((prev) => ({
      ...prev,
      overlayData: data,
    }));
    if (data.series == null)
      console.log({ 'You need to create a series for:': data });
    else navigate('/videos/' + data.series.id + '/' + data.id);
  };

  const handlePlaylistClick = (data: any, clickedOnFullPlaylist?: boolean) => {
    setState((prev) => ({
      ...prev,
      overlayData: clickedOnFullPlaylist ? data.video : data,
    }));
    if (data.series === null && !clickedOnFullPlaylist)
      console.log({ 'You need to create a series for:': data });
    else
      navigate(
        '/playlist/' +
          (clickedOnFullPlaylist
            ? data.customPlaylistID
            : state.randomPlaylistId) +
          '/' +
          (clickedOnFullPlaylist ? data.video.id : data.id)
      );
  };
  /*
    async componentDidUpdate(prevProps: Readonly<Props>): Promise<void> {
    if (this.props.content?.class === 'instagram') {
      if (prevProps.content.filterValue !== this.props.content.filterValue) {
        const response = await DataLoader.loadInsta(this.props.content);
        const data = response.data;
        this.setState({
          listData: data,
          locationInstaURL: response.link,
        });
      }
    } else if (this.props.content?.class === 'series') {
      if (prevProps.content.subclass !== this.props.content.subclass) {
        //reload data!
        this.setState({ listData: [] }, async () => {
          await DataLoader.getSeriesByType(
            this.props.content,
            (data) => {
              this.setState((prevState) => ({
                listData: [...prevState.listData, ...data],
              }));
            },
            () => null
          );
        });
      }
    } else if (this.props.content?.class === 'videos') {
      if (prevProps.content.subclass !== this.props.content.subclass) {
        //reload data!
        this.setState({ listData: [] }, async () => {
          await DataLoader.getVideos(
            this.props.content,
            (data) => {
              this.setState((prevState) => ({
                listData: [...prevState.listData, ...data],
              }));
            },
            () => null
          );
        });
      }
    }
  }
  */
  const renderByStyle = () => {
    if (props.content.style === 'horizontal') {
      switch (props.content.class) {
        case 'random-suggested-playlist':
        case 'custom-playlist':
          return (
            <div className="ListItem horizontal">
              <div className="ListItemDiv1">
                <h1 className="ListItemH1">
                  {props.content.header1 ?? props.content.playlist}
                </h1>
                <div className="ListItemDiv2">
                  <HorizontalScrollList darkMode={logoColor === 'white'}>
                    {props.content.class === 'custom-playlist'
                      ? (data as CustomPlaylistVideoData[])
                          .sort((a, b) =>
                            sortByDate(
                              a?.publishedDate ?? '',
                              b?.publishedDate ?? '',
                              props.content?.sortOrder
                            )
                          )
                          .map((item, index) => {
                            return renderItemRouter(item, index);
                          })
                      : (data as RandomCustomPlaylistData[])
                          .sort((a, b) =>
                            (a?.video?.publishedDate ?? '').localeCompare(
                              b?.video?.publishedDate ?? ''
                            )
                          )
                          .map((item: any, index) => {
                            return renderItemRouter(item.video, index);
                          })}
                  </HorizontalScrollList>
                  <div className="ListItemDiv5"></div>
                </div>
              </div>
              <VideoOverlay
                onClose={() => {
                  videoOverlayClose();
                }}
                data={state.overlayData}
              ></VideoOverlay>
            </div>
          );

        default:
          return (
            <div className="ListItem horizontal">
              <div
                className={`ListItemDiv1 ${
                  props.pageConfig?.isPopup ? 'isPopup' : ''
                }`}
              >
                <h1
                  className={
                    'ListItemH1' + (logoColor === 'white' ? ' whiteText' : '')
                  }
                >
                  {props.content.header1}
                </h1>
                {props.content.text1 != null ? (
                  <div className="ListItemText1">{props.content.text1}</div>
                ) : null}
                <div className="ListItemDiv2">
                  {props.content.class === 'videos' ? (
                    props.content.selector === 'popular' ? (
                      <HorizontalScrollList darkMode={logoColor === 'white'}>
                        {(data as VideoData[])
                          .slice(0, 100)
                          .sort((a, b) => sortByViews(a, b))
                          .map((item, index) => {
                            return renderItemRouter(item as ListData, index);
                          })}
                      </HorizontalScrollList>
                    ) : (
                      <HorizontalScrollList darkMode={logoColor === 'white'}>
                        {data
                          .concat(
                            props.content.limit &&
                              dataLength >= props.content.limit
                              ? 'card'
                              : null
                          )
                          .map((item, index) => {
                            if (item === 'card') return renderMoreVideosCard();

                            return renderItemRouter(item as ListData, index);
                          })}
                      </HorizontalScrollList>
                    )
                  ) : (
                    <HorizontalScrollList darkMode={logoColor === 'white'}>
                      {data.map((item: any, index: any) => {
                        return renderItemRouter(item, index);
                      })}
                    </HorizontalScrollList>
                  )}
                  <div className="ListItemDiv5"></div>
                </div>
              </div>
              <VideoOverlay
                onClose={() => {
                  videoOverlayClose();
                }}
                data={state.overlayData}
              ></VideoOverlay>
            </div>
          );
      }
    } else if (props.content.style === 'blogs') {
      const startIndex = props.content.skipFirstPost ? 1 : 0;
      const sortBlogs = (a: BlogData, b: BlogData) => {
        if (a?.publishedDate && b?.publishedDate) {
          if (a.publishedDate === b.publishedDate) {
            if (a.blogSeriesIndex && b.blogSeriesIndex) {
              return b.blogSeriesIndex - a.blogSeriesIndex;
            }
          }
          return sortByDate(
            a.publishedDate,
            b.publishedDate,
            ModelSortDirection['DESC']
          );
        }
        return 0;
      };

      const blogData = data as BlogData[];
      const today = moment();
      const dateChecked: BlogData[] = blogData

        .sort(sortBlogs)
        .filter(
          (post) =>
            post?.expirationDate === 'none' ||
            moment(post?.expirationDate, 'YYYY-MM-DD').isAfter(today)
        );

      if (dateChecked.length === 0) {
        return null;
      }

      if (props.content.selector === 'all') {
        return (
          <div className="ListItemDiv1">
            <h1 className="BlogItemH1">{props.content.header1}</h1>
            <InfiniteScroll
              dataLength={dateChecked.length}
              next={() => getMoreBlogs()}
              hasMore={Boolean(state.blogNextToken)}
              loader={
                <div className="spinner">
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
                </div>
              }
              className="BlogLoader"
            >
              <div className="BlogItem">
                <div className="BlogItemContainer">
                  {dateChecked.slice(startIndex).map((item, index: number) => {
                    return renderItemRouter(item, index);
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        );
      }
      if (props.content.selector === 'series') {
        const indexOfCurrentBlog =
          dateChecked.find((blog) => blog?.id === params?.blog)
            ?.blogSeriesIndex ?? 0;
        const indexInArray = indexOfCurrentBlog - 1;

        const blogsInSeries = dateChecked.sort((a, b) => {
          if (b?.blogSeriesIndex && a?.blogSeriesIndex)
            return a?.blogSeriesIndex - b?.blogSeriesIndex;
          return 0;
        });
        const tempBlogs: any = [];
        const previousBlogIndex = indexInArray - 1;
        const nextBlogIndex = indexInArray + 1;
        const previousPreviousBlogIndex = indexInArray - 2;
        const nextNextBlogIndex = indexInArray + 2;
        const isFirstItem = indexInArray === 0;
        const isLastItem = indexInArray === blogsInSeries.length - 1;
        if (isFirstItem) {
          tempBlogs.push(
            blogsInSeries[nextBlogIndex],
            blogsInSeries[nextNextBlogIndex]
          );
        } else if (isLastItem) {
          tempBlogs.push(
            blogsInSeries[previousBlogIndex],
            blogsInSeries[previousPreviousBlogIndex]
          );
        }
        if (!isFirstItem && !isLastItem) {
          tempBlogs.push(
            blogsInSeries[nextBlogIndex],
            blogsInSeries[previousBlogIndex]
          );
        }
        if (tempBlogs.length === 0) {
          return null;
        }
        return (
          <div className="ListItemDiv1">
            <h1 className="BlogItemH1">{props.content.header1}</h1>
            <div className="BlogItem">
              <div className="BlogItemContainer">
                {tempBlogs.map((item: any, index: number) => {
                  return renderItemRouter(item, index);
                })}
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="ListItemDiv1">
          <h1 className="BlogItemH1">{props.content.header1}</h1>
          <div className="BlogItem">
            <div className="BlogItemContainer">
              {dateChecked
                .sort((a, b) => {
                  if (b?.blogSeriesIndex && a?.blogSeriesIndex)
                    return a?.blogSeriesIndex - b?.blogSeriesIndex;
                  return 0;
                })
                .slice(startIndex, startIndex + 2)
                .map((item, index: number) => {
                  return renderItemRouter(item, index);
                })}
            </div>
          </div>
        </div>
      );
    } else if (props.content.style === 'horizontal-video-player') {
      if (!data.length) {
        return null;
      }
      const videoData = data as VideoData[];
      // videos are not stored in order within a series, so we sort here
      if (videoData[0]?.videoTypes === 'questions')
        videoData.sort((a: any, b: any) => a.episodeNumber - b.episodeNumber);
      else
        videoData.sort((a, b) =>
          sortByDate(
            a?.publishedDate ?? '',
            b?.publishedDate ?? '',
            ModelSortDirection['ASC']
          )
        );

      if (props.content.class === 'watch-page-playlist') {
        return (
          <div className="ListItem horizontal-video-player">
            <div className="ListItemDiv1 horizontal-video-player">
              <h2
                className={
                  'v-player-h2 tmh-header2' +
                  (logoColor === 'white' ? ' w' : ' b')
                }
              >
                {params?.playlist}
              </h2>
              <div className="WatchPageContainer">
                {videoData.map((item: any, index: any) => {
                  return renderItemRouter(item, index);
                })}
              </div>
              <div className="v-player-hr" />
            </div>
            <VideoOverlay
              onClose={() => {
                videoOverlayClose();
              }}
              data={state.overlayData}
            ></VideoOverlay>
          </div>
        );
      }
      return (
        <div className="ListItem horizontal-video-player">
          <div className="ListItemDiv1 horizontal-video-player">
            <h2
              className={
                'v-player-h2 tmh-header2' +
                (logoColor === 'white' ? ' w' : ' b')
              }
            >
              {props.content.header1}
            </h2>
            {props.content.text1 != null ? (
              <div className="ListItemText1">{props.content.text1}</div>
            ) : null}
            <div className="WatchPageContainer">
              {videoData.map((item: any, index: any) => {
                return renderItemRouter(item, index);
              })}
            </div>
            <div className="v-player-hr" />
          </div>
          <VideoOverlay
            onClose={() => {
              videoOverlayClose();
            }}
            data={state.overlayData}
          ></VideoOverlay>
        </div>
      );
    } else if (props.content.style === 'curious-ui') {
      data.sort(function (a: any, b: any) {
        return a.episodeNumber - b.episodeNumber;
      });
      return (
        <div className="ListItem horizontal">
          <div className="ListItemDiv1">
            <h1
              className={
                'ListItemH1' + (logoColor === 'white' ? ' whiteText' : '')
              }
            >
              {props.content.header1}
            </h1>
            {props.content.text1 != null ? (
              <div className="CuriousText1">{props.content.text1}</div>
            ) : null}
            <div className="hide-mobile">
              <div className="CuriousContainer">
                {data.slice(0, 6).map((item: any, index: any) => {
                  return renderItemRouter(item, index);
                })}
              </div>
            </div>

            <div className="hide-desktop">
              {data.slice(0, 3).map((item: any, index: any) => {
                return renderItemRouter(item, index);
              })}
              {!state.showMoreVideos ? (
                <button className="MoreVideos" onClick={videoHandler}>
                  Load 3 More Questions
                </button>
              ) : null}
              {state.showMoreVideos ? (
                <div>
                  {data.slice(3, 6).map((item: any, index: any) => {
                    return renderItemRouter(item, index);
                  })}
                </div>
              ) : null}
            </div>
          </div>
          <VideoOverlay
            onClose={() => {
              videoOverlayClose();
            }}
            data={state.overlayData}
          ></VideoOverlay>
        </div>
      );
    } else if (props.content.style === 'vertical') {
      if (data.length > 0) {
        return (
          <div className="ListItem horizontal">
            <div className="ListItemDiv1">
              <h1 className="ListItemH1">{props.content.header1}</h1>
              {props.content.text1 != null ? (
                <div className="ListItemText1">{props.content.text1}</div>
              ) : null}
              <div className="ListItemSpeakersDiv">
                <HorizontalScrollList>
                  {data.map((item: any, index: any) => {
                    return renderItemRouter(item, index);
                  })}
                </HorizontalScrollList>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else if (props.content.style === 'staff') {
      const tempData = data as PeopleData[];
      console.debug({ sort: props.content.sortByName });
      const filteredPeopleData = tempData
        .sort((tmhPersonA, tmhPersonB) => {
          if (
            !tmhPersonA?.firstName ||
            !tmhPersonB?.firstName ||
            !tmhPersonA?.lastName ||
            !tmhPersonB?.lastName
          )
            return 0;
          if (props.content.sortByName) {
            return tmhPersonA.firstName.localeCompare(tmhPersonB.firstName);
          } else {
            return tmhPersonA.lastName.localeCompare(tmhPersonB.lastName);
          }
        })
        .filter((person) => {
          let result;
          const siteNamesFromPersonTmhSites = person.tmhSites?.items.map(
            (site) => site?.tMHSiteID ?? ''
          );
          person.sites = siteNamesFromPersonTmhSites;
          if (state.searchFilter === '') {
            if (state.selectedFilter === 'All') result = true;
            else {
              result = person?.sites?.includes(state.selectedFilter);
            }
          } else {
            const personNameMatches =
              person?.lastName
                ?.toLowerCase()
                ?.includes(state.searchFilter?.toLowerCase()) ||
              person?.firstName
                ?.toLowerCase()
                .includes(state.searchFilter.toLowerCase());
            const personSiteMatches =
              person?.sites?.includes(state.selectedFilter) ||
              state.selectedFilter === 'All';
            console.log({ personNameMatches }, { personSiteMatches });
            result = personNameMatches && personSiteMatches;
          }
          return result;
        });
      const isMobile = state.windowWidth < 768;
      const binnedData: PeopleData[][] = [];
      if (data.length > 0) {
        let temp: PeopleData[] = [];
        filteredPeopleData.forEach((item, index) => {
          temp.push(item);
          if ((index + 1) % 6 === 0) {
            binnedData.push(temp);
            temp = [];
          }
        });
        if (temp.length) binnedData.push(temp);
        console.debug({ binnedData });
        console.debug({ filteredPeopleData });
        return (
          <div className="ListItem horizontal">
            <div className="ListItemDiv1">
              <h1 className="ListItemH1 staff">{props.content.header1}</h1>
              {props.content.text1 != null ? (
                <div className="ListItemText1">{props.content.text1}</div>
              ) : null}

              {props.content?.showSearch || props.content?.filterOptions ? (
                <div className="FilterContainer">
                  {props.content?.showSearch ? (
                    <>
                      <img
                        width={20}
                        height={20}
                        className="SearchIcon1"
                        src="/static/svg/Search.svg"
                        alt="Search"
                      />
                      <input
                        value={state.searchFilter}
                        className={`TeamsSearch ${
                          !props.content?.filterOptions ? 'single' : ''
                        }`}
                        type="text"
                        placeholder="Search by name"
                        onChange={(e) => {
                          setState((prev) => ({
                            ...prev,
                            searchFilter: e.target.value,
                          }));
                        }}
                      />
                    </>
                  ) : null}
                  {props.content?.filterOptions ? (
                    <Select
                      onChange={(item) => {
                        if (item)
                          setState((prev) => ({
                            ...prev,
                            selectedFilter: item.value,
                          }));
                      }}
                      components={{
                        Option: ({ children, ...props }: any) => {
                          return (
                            <components.Option {...props}>
                              <div className="SelectOption">
                                <div className="SelectOptionText">
                                  {children}
                                </div>
                                {props.isSelected ? (
                                  <div className="SelectOptionIcon">
                                    <img
                                      width={20}
                                      height={18}
                                      src="/static/svg/Check.svg"
                                      alt="Search"
                                    />
                                  </div>
                                ) : null}
                              </div>
                            </components.Option>
                          );
                        },

                        Control: ({ children, ...props }: any) => (
                          <components.Control {...props}>
                            <img
                              width={20}
                              height={20}
                              src="/static/svg/Location.svg"
                              alt="Search"
                            />
                            {children}
                          </components.Control>
                        ),
                      }}
                      styles={{
                        control: (styles) => {
                          return {
                            ...styles,
                            height: 56,
                            paddingLeft: 16,
                            border: '2px solid #C8C8C8',
                            borderRadius: 0,
                            ':active': {
                              borderColor: 'black',
                              borderWidth: 2,
                            },
                            ':hover': {
                              borderColor: 'black',
                              borderWidth: 2,
                            },
                            ':focus': {
                              borderColor: 'black',
                              borderWidth: 2,
                            },
                          };
                        },

                        indicatorSeparator: (styles) => {
                          return {
                            ...styles,
                            display: 'none',
                          };
                        },
                        placeholder: (styles) => {
                          return {
                            ...styles,
                            color: '#646469',
                            fontFamily: 'Graphik Web',
                          };
                        },
                        option: (styles) => {
                          return {
                            ...styles,
                            color: '#1a1a1a',
                            borderBottom: '1px solid #C8C8C8',
                            fontWeight: 700,
                          };
                        },
                        menu: (styles) => ({
                          ...styles,
                          marginTop: 0,
                          border: '2px solid black',
                          zIndex: 999,
                        }),

                        menuPortal: (styles) => ({
                          ...styles,
                          zIndex: 999,
                          backgroundColor: 'red',
                        }),
                      }}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary: '#EFEFF0',
                          primary25: '#EFEFF0',
                          primary50: 'lightgrey',
                        },
                      })}
                      aria-label="Staff Search By Team"
                      placeholder="Teams"
                      className={`TeamsDropdown ${
                        !props.content?.showSearch ? 'single' : ''
                      }`}
                      classNamePrefix="react-select-custom"
                      options={[
                        { label: 'All', value: 'All' },
                        ...props.content.filterOptions?.map((item: any) => {
                          return { label: item.label, value: item.id };
                        }),
                      ]}
                    />
                  ) : null}
                </div>
              ) : null}

              <div className="ListItemSpeakersDiv">
                {filteredPeopleData?.length === 0 ? (
                  <h2
                    style={{
                      fontFamily: 'Graphik Web',
                      marginBottom: '20vh',
                    }}
                  >
                    No results found
                  </h2>
                ) : null}
                <HorizontalScrollList isItemWholePage>
                  {isMobile
                    ? filteredPeopleData.map((item, index) => {
                        return renderItemRouter(item, index);
                      })
                    : binnedData.map((item, index) => {
                        return renderItemRouter(item, index);
                      })}
                </HorizontalScrollList>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else if (props.content.style === 'horizontalBig') {
      const seriesData = data as SeriesData2[];
      const playlistData = data as CustomPlaylistsData[];
      if (props.content.class === 'playlists') {
        const content = props.content as CustomPlaylistsQuery;
        return (
          <div className="ListItem horizontalBig">
            <div className="ListItemDiv1 ListItemAllSeries">
              <h1 className="ListItemH1">{props.content.header1}</h1>
              <div className="ListItemDiv6">
                <HorizontalScrollList>
                  {playlistData
                    .sort((a, b) => sortPlaylistsAlpha(a, b))
                    .sort((a, b) => {
                      return content.forceToTop.includes(b?.title as string)
                        ? 1
                        : content.forceToTop.includes(a?.title as string)
                        ? -1
                        : 0;
                    })
                    .map((item, index) => {
                      return renderItemRouter(item, index);
                    })}
                </HorizontalScrollList>
                <div className="ListItemDiv5"></div>
              </div>
            </div>
            <VideoOverlay
              onClose={() => {
                videoOverlayClose();
              }}
              data={state.overlayData}
            ></VideoOverlay>
          </div>
        );
      }

      return (
        <div className="ListItem horizontalBig">
          <div className="ListItemDiv1 ListItemAllSeries">
            <h1 className="ListItemH1">{props.content.header1}</h1>
            <div className="ListItemDiv6">
              {props.content.class === 'series' ? (
                <HorizontalScrollList>
                  {seriesData
                    .concat(
                      props.content.limit && dataLength >= props.content.limit
                        ? 'card'
                        : null
                    )
                    .map((item: any, index: any) => {
                      if (item === 'card') return renderMoreSeriesCard();
                      return renderItemRouter(item, index);
                    })}
                </HorizontalScrollList>
              ) : (
                <HorizontalScrollList>
                  {data.map((item: any, index: any) => {
                    return renderItemRouter(item, index);
                  })}
                </HorizontalScrollList>
              )}
              <div className="ListItemDiv5"></div>
            </div>
          </div>
          <VideoOverlay
            onClose={() => {
              videoOverlayClose();
            }}
            data={state.overlayData}
          ></VideoOverlay>
        </div>
      );
    } else if (
      props.content.style === 'grid' &&
      props.content.class === 'instagram'
    ) {
      //This renders the instagram div and iterate tiles
      return state.listData.length ? (
        <div className="ListItem horizontal">
          <div className="InstagramGridRectangle" />
          <div className="ListInstagramContainer">
            {state.listData?.map((tile, index: number) => {
              return renderItemRouter(tile, index);
            })}
          </div>
          <a
            className="ListInstagramButton"
            target="_blank"
            rel="noreferrer"
            href={
              state.locationInstaURL ||
              'https://www.instagram.com/themeetinghouse'
            }
          >
            <img
              width={25}
              height={20}
              style={{ marginRight: '3px' }}
              src="/static/svg/Instagram.svg"
            ></img>{' '}
            Go to Instagram
          </a>
        </div>
      ) : (
        <></>
      );
    } else if (
      props.content.style === 'imageList' ||
      props.content.style === 'imageListHeader'
    ) {
      return (
        <div className="ListItem imageList">
          <div className="ListItemDiv1">
            <h1
              className={
                props.content.style == 'imageList'
                  ? 'ListItemH1ImageList'
                  : 'ListItemH1ImageListHeader'
              }
            >
              {props.content.header1}
            </h1>
            <h2>{props.content.header2}</h2>
            <div className="ListItemDiv7">{props.content.text1}</div>
            <div className="ListItemDiv8">
              <div className="ListItemDiv9"></div>
              {data.map((item: any, index: any) => {
                const hasMultipleLinks = Array.isArray(item.links);
                const href = item.navigateTo || item.url;
                const body = (
                  <div
                    className={
                      'imageList ' + (href ? 'hoverText' : 'noHoverText')
                    }
                  >
                    <h3 className="ListItemH3">
                      {href ? (
                        <img
                          className="arrow"
                          alt=""
                          src="/static/svg/ArrowRight black.svg"
                        />
                      ) : null}
                      {item.title}
                    </h3>
                    <div
                      className={`ListItemDiv11 ${
                        hasMultipleLinks ? 'multi-link' : ''
                      }`}
                    >
                      {item.text}
                    </div>
                    {hasMultipleLinks && (
                      <div className="links-container">
                        {(
                          item.links as Array<{ to: string; text: string }>
                        ).map(({ to, text }) => (
                          <ArrowLink
                            key={to + text}
                            to={to}
                            className="links-item"
                          >
                            {text}
                          </ArrowLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
                return (
                  <div className="ListItemDiv10" key={index}>
                    {href ? (
                      <ListItemLink
                        className="container"
                        style={{ display: 'inline-block', padding: 0 }}
                        to={href}
                      >
                        {body}
                      </ListItemLink>
                    ) : (
                      body
                    )}
                    <ListImage
                      className="ListItemH1ImageList2"
                      image={{ src: item.imageSrc, alt: item.imageAlt }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (props.content.style === 'ladder') {
      if (data.length > 0) {
        return (
          <div className="ListItem ladder">
            <div className="ListItemDiv1">
              <h1 className="ListItemH1">{props.content.header1}</h1>
              {props.content.text1 != null ? (
                <div className="ListItemText1">props.content.text1</div>
              ) : null}
              <div className="ListItemSpeakersDiv">
                <LadderList>
                  {data.map((item: any, index: any) => {
                    return renderItemRouter(item, index);
                  })}
                </LadderList>
              </div>
            </div>
          </div>
        );
      } else {
        if (props.content.class === 'events') {
          return (
            <div className="ListItem ladder" style={{ marginBottom: 120 }}>
              <div className="ListItemDiv1">
                <div className="ListItemH1">There are no upcoming events.</div>
              </div>
            </div>
          );
        }
      }
    }
    return null;
  };

  const { margin } = props.content;
  return <div style={{ ...margin }}>{renderByStyle()}</div>;
}
