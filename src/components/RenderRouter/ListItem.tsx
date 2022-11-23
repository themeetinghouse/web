import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import DataLoader, {
  PeopleData,
  EventData,
  CompassionData,
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
  InstaQuery,
} from './DataLoader';
import HorizontalScrollList from './HorizontalScrollList';
import LadderList from './LadderList';
import InfiniteScroll from 'react-infinite-scroll-component';
import './ListItem.scss';
import format from 'date-fns/format';
import { ScaledImage, BlogImage } from 'components/ScaledImage';
import { fallbackToImage } from 'components/ScaledImage/ScaledImage';
import { Link, ArrowLink } from 'components/Link/Link';
import { RouteParams } from '../../pages/HomePage';
import moment from 'moment';
import { ModelSortDirection, TMHPerson } from 'API';
import { Margin } from '../types';
import FadeImage from 'components/ScaledImage/FadeImage';

interface Props extends RouteComponentProps<RouteParams> {
  content: any;
  data: any;
  pageConfig: any;
}
interface State {
  filterRole: string;
  filterCommunity: string;
  filterRegion: string;
  content: DataQuery & {
    style: string;
    header1: string;
    header2: string;
    text1: string;
    filterVisible: boolean;
    showEpisodeNumbers: boolean;
    hovertag: string;
    skipFirstPost?: boolean;
    filterOptions?: Array<{ id: string; label: string }>;
    selector?: string;
    sortOrder?: ModelSortDirection;
    margin?: Margin;
    calendar?: Event;
  };
  selectedFilter: string;
  listData: ListData[];
  overlayData: any;
  showMoreVideos: boolean;
  windowWidth: number;
  randomPlaylistId: string;
  blogNextToken: string | null | undefined;
}
const communities = [
  { name: 'Oakville', value: 'OAKV' },
  { name: 'Newmarket', value: 'NMKT' },
  { name: 'Brampton', value: 'BRAM' },
  { name: 'Ottawa', value: 'OTTA' },
  { name: 'Toronto East', value: 'TOBC' },
  { name: 'Parry Sound', value: 'PAR' },
  { name: 'Hamilton Downtown', value: 'HMDT' },
  { name: 'Burlington', value: 'BURL' },
  { name: 'Toronto Downtown', value: 'TODT' },
  { name: 'Hamilton Mountain', value: 'HMAN' },
  { name: 'London', value: 'LOND' },
  { name: 'Toronto High Park', value: 'TOHP' },
  { name: 'Toronto Uptown', value: 'TOUP' },
  { name: 'London', value: 'LOND' },
];
const regions = [
  { name: 'Distance Region', value: 'Distance_Region' },
  { name: 'Peel Region', value: 'Peel_Region' },
  { name: 'Toronto Region', value: 'Toronto_Region' },
  { name: 'Hamilton Region', value: 'Hamilton_Region' },
];
const roles = [
  { name: 'Communications', value: 'Communications' },
  { name: 'Pastoral', value: 'Pastoral' },
  { name: 'Site Leadership', value: 'Site Leadership' },
  { name: 'Youth', value: 'Youth' },
  { name: 'Children', value: 'Children' },
  { name: 'Operations', value: 'Operations' },
];
type VideoData = SeriesData | VideoByVideoTypeData | CustomPlaylistVideoData;

type SeriesData2 = SeriesData | string | null;

type ListData =
  | SpeakerData
  | VideoData
  | PeopleData
  | EventData
  | CompassionData
  | SeriesByTypeData
  | BlogData
  | PeopleData[]
  | SeriesCollectionData
  | CustomPlaylistsData
  | RandomCustomPlaylistData
  | NonNullable<RandomCustomPlaylistData>['video']
  | InstagramData;

const hideEpisodeNumbers = ['adult-sunday-shortcut', 'kidmax-live'];

class ListItem extends React.Component<Props, State> {
  videoOverlayClose() {
    this.setState({
      overlayData: null,
    });
  }
  showYears(start: string | null | undefined, end: string | null | undefined) {
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
  }
  handleClick(data: any) {
    this.setState({
      overlayData: data,
    });
    if (data.series == null)
      console.log({ 'You need to create a series for:': data });
    else this.props.history.push('/videos/' + data.series.id + '/' + data.id);
  }

  handlePlaylistClick(data: any, clickedOnFullPlaylist?: boolean) {
    this.setState({
      overlayData: clickedOnFullPlaylist ? data.video : data,
    });
    if (data.series === null && !clickedOnFullPlaylist)
      console.log({ 'You need to create a series for:': data });
    else
      this.props.history.push(
        '/playlist/' +
          (clickedOnFullPlaylist
            ? data.customPlaylistID
            : this.state.randomPlaylistId) +
          '/' +
          (clickedOnFullPlaylist ? data.video.id : data.id)
      );
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      filterRegion: '',
      filterCommunity: '',
      filterRole: '',
      content: props.content,
      listData: props.content.list ?? [],
      overlayData: null,
      showMoreVideos: false,
      windowWidth: window.innerWidth,
      randomPlaylistId: this.props?.match?.params?.playlist ?? '',
      blogNextToken: null,
      selectedFilter: 'All',
    };
    this.videoHandler = this.videoHandler.bind(this);
    this.setData = this.setData.bind(this);
  }

  videoHandler() {
    this.setState({
      showMoreVideos: true,
    });
  }

  async componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ windowWidth: window.innerWidth });
    });

    const dataLoaded = (data: ListData[]) => this.setData(data);
    const getPlaylistId = (id: string) =>
      this.setState({ randomPlaylistId: id });
    const checkNext = () => null;
    let data: ListData[];
    const query: DataQuery = this.props.content;
    switch (query.class) {
      case 'instagram':
        data = await DataLoader.loadInsta(query);
        break;
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
            id = this.props.data?.series?.id;
            data = await DataLoader.getSeriesVideos({
              ...(query as SeriesQuery),
              id,
            });
            break;
          case 'highlights':
            id = 'adult-sunday-shortcut-' + this.props?.data?.series?.id;
            data = await DataLoader.getSeriesVideos({
              ...(query as SeriesQuery),
              id,
            });
            break;
          case 'same-playlist':
            const playlist = this.props?.match?.params?.playlist ?? '';
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
              this.setState({ blogNextToken })
            );
            return;
          case 'similar':
            const postId = this.props?.match?.params?.blog ?? '';
            await DataLoader.getSimilarBlogs(query, postId, dataLoaded);
            return;
        }
      case 'user-defined':
        return;
      default:
        console.error(`unknown list data type ${this.state.content.class}`);
        return;
    }
    this.setData(data);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      this.setState({ windowWidth: window.innerWidth });
    });
  }

  setData(data: any) {
    this.setState({
      listData: this.state.listData.concat(data),
    });
  }

  async getMoreBlogs() {
    const dataLoaded = (data: ListData[]) => this.setData(data);
    const query: BlogQuery = this.props.content;

    await DataLoader.getBlogs(
      query,
      dataLoaded,
      (blogNextToken) => this.setState({ blogNextToken }),
      this.state.blogNextToken
    );
  }

  /**
   * Helper used within Array.prototype.sort() to sort content (videos, blogs) by date.
   * @param a - date of list item (example: a.publishedDate)
   * @param b - date of list item
   * @param sortOrder - DESC: newest first, ASC: oldest first
   */
  sortByDate(a: string, b: string, sortOrder?: ModelSortDirection) {
    return sortOrder === 'DESC' ? b.localeCompare(a) : a.localeCompare(b);
  }

  sortByViews(a: VideoData, b: VideoData) {
    if (!a?.viewCount || !b?.viewCount) return -1;
    return parseInt(b.viewCount, 10) - parseInt(a.viewCount, 10);
  }

  sortPlaylistsAlpha(a: CustomPlaylistsData, b: CustomPlaylistsData) {
    return (a?.title as string).localeCompare(b?.title as string);
  }

  renderMoreVideosCard() {
    return (
      <Link
        key="load-more-card"
        to={`/archive/video/${
          (this.state.content as VideoSeriesQuery).subclass
        }`}
        className={
          'container ListItemVideo' +
          (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
        }
      >
        <div className="LoadMoreVideosCard">
          <div className="LoadMoreVideosText">Click for more videos</div>
        </div>
      </Link>
    );
  }

  renderMoreSeriesCard() {
    return (
      <Link
        key="load-more-card"
        to={`/archive/series/${
          (this.state.content as VideoSeriesQuery).subclass
        }`}
        className="container ListItemVideo"
      >
        <div className="LoadMoreSeriesCard">
          <div className="LoadMoreSeriesText">Click for more series</div>
        </div>
      </Link>
    );
  }

  renderVideo(item: VideoData): JSX.Element | null {
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
          this.handleClick(item);
        }}
        aria-label={label}
        key={item.id ?? ''}
        className={
          'ListItemVideo' +
          (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
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
            this.props.pageConfig.logoColor === 'white' ? 'isWhiteLogo' : ''
          }`}
        >
          {this.state.content.showEpisodeNumbers === false
            ? null
            : item.episodeNumber + '. '}{' '}
          {item.episodeTitle}
        </div>
        <div
          className={`ListItemSeriesTitle ${
            this.props.pageConfig.logoColor === 'white' ? 'isWhiteLogo' : ''
          }`}
        >
          {item.seriesTitle != null ? item.seriesTitle : null}
        </div>
        <div
          className={`ListItemPublishedDate ${
            this.props.pageConfig.logoColor === 'white' ? 'isWhiteLogo' : ''
          }`}
        >
          {item.publishedDate}
        </div>
      </button>
    );
  }

  renderPlaylistVideo(
    item: NonNullable<RandomCustomPlaylistData>['video']
  ): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div
        onClick={() => {
          this.handlePlaylistClick(item);
        }}
        key={item.id ?? ''}
        className={
          'ListItemVideo' +
          (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
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
          {this.state.content.showEpisodeNumbers === false
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
  }

  renderWatchPageVideo(
    item: VideoData,
    isPlaylist?: boolean
  ): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div
        onClick={() => {
          isPlaylist ? this.handlePlaylistClick(item) : this.handleClick(item);
        }}
        key={item.id}
        className={
          'WatchPageVideo' +
          (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
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
  }

  renderCurious(item: VideoData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <button
        onClick={() => this.handleClick(item)}
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
  }

  getBlogImageURI(
    title: string | undefined | null,
    style: 'baby-hero' | 'banner' | 'square'
  ): string {
    if (!title) return '';
    return (
      `/static/photos/blogs/${style}/` + title.replace(/\?|[']/g, '') + '.jpg'
    );
  }

  getPlaylistImageURI(title: string | null | undefined): string {
    if (!title) return '';
    return `/static/photos/playlists/` + title.replace(/\?|[']/g, '') + '.jpg';
  }

  renderBlogs(item: BlogData): JSX.Element | null {
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
  }

  renderSpeaker(item: SpeakerData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div key={item.id} className="ListItemTeachingImageDiv">
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
  }

  renderOverseer(items: TMHPerson[] | TMHPerson, index: number): JSX.Element {
    const isMobile = this.state.windowWidth < 768;
    if (isMobile) {
      const item = items as TMHPerson;
      return (
        <div key={index} className="ListItemDiv3">
          <FadeImage
            alt={`Head shot of ${item.firstName} ${item.lastName}`}
            className="StaffImage"
            imageSrc={item?.image ?? ''}
            fallbackUrl={'/static/Individual.png'}
          />
          <div className="ListItemName">
            {item.firstName} {item.lastName}
          </div>
          <div className="ListItemPosition">{item.position}</div>
        </div>
      );
    }
    return (
      <div className="StaffFlexArea" key={index}>
        {(items as TMHPerson[])?.map((item, index: number) => {
          return (
            <div key={index} className="StaffItem">
              <FadeImage
                alt={`Head shot of ${item.firstName} ${item.lastName}`}
                className="StaffImage"
                imageSrc={item?.image ?? ''}
                fallbackUrl={'/static/Individual.png'}
              />
              <div className="StaffInfo">
                <div className="ListItemName" style={{ textAlign: 'center' }}>
                  {item.firstName} {item.lastName}
                </div>
                <div
                  className="ListItemPosition"
                  style={{ textAlign: 'center' }}
                >
                  {item.position}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderEvent(item: EventData): JSX.Element | null {
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
        key={item.id ?? ''}
        className="container"
        to={{
          pathname: 'event',
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
  }
  filterPeople = (e: TMHPerson) => {
    if (
      this.state.filterCommunity == '' &&
      this.state.filterRegion == '' &&
      this.state.filterRole == ''
    )
      return true;
    if (e.sites?.includes(this.state.filterCommunity)) return true;
    else if (e.sites?.includes(this.state.filterRegion)) return true;
    else if (e.sites?.includes(this.state.filterRole)) return true;
    else return false;
  };
  renderStaff(items: TMHPerson | TMHPerson[], index: number) {
    const isMobile = this.state.windowWidth < 768;
    if (isMobile) {
      const data = items as TMHPerson;
      return (
        <div key={index} className="ListItemDiv3">
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
        {(items as TMHPerson[]).map((item, index: number) => {
          return (
            <div key={index} className="StaffItem">
              <FadeImage
                alt={`Head shot of ${item.firstName} ${item.lastName}`}
                className="StaffImage"
                imageSrc={item?.image ?? ''}
                fallbackUrl={'/static/Individual.png'}
              />
              <div className="StaffInfo">
                <div className="ListItemName" style={{ textAlign: 'center' }}>
                  {item.firstName} {item.lastName}
                </div>
                <div
                  className="ListItemPosition"
                  style={{ textAlign: 'center' }}
                >
                  {item.position}
                </div>
                <div className="StaffContact" style={{ textAlign: 'center' }}>
                  <div className="ListItemEmail">
                    {item.email ? (
                      <a href={'mailto:' + item.email}>
                        <img
                          className="calendarImageRegion"
                          style={{ marginRight: '10px' }}
                          src="/static/svg/Contact.svg"
                          alt="Contact Icon"
                        />
                      </a>
                    ) : null}
                    {item.phone ? (
                      <a href={'tel:' + item.phone + ',,,' + item.extension}>
                        <img
                          className="calendarImageRegion"
                          src="/static/svg/Phone.svg"
                          alt="Phone Icon"
                        />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  renderCompassion(item: CompassionData) {
    const image = {
      src: item.image,
      alt: item.imagealt,
    };
    return (
      <div key={item.id} className="ListItemCompassion">
        <ScaledImage
          image={image}
          className="ListItemCompassionLogo"
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
  }
  renderPlaylist(item: CustomPlaylistsData) {
    if (!item) {
      return null;
    }
    const videos = item.videos?.items ?? [];
    if (videos.length > 0) {
      const image = {
        src: this.getPlaylistImageURI(item?.title),
        alt: item.title + ' playlist',
      };
      return (
        <div
          onClick={() => this.handlePlaylistClick(videos[0], true)}
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
  }

  renderSeries(item: SeriesCollectionData | SeriesByTypeData) {
    if (!item) {
      return null;
    }
    const seriesEnded =
      item.endDate && format(new Date(), 'yyyy-MM-dd') > item.endDate;
    const videos = item.videos?.items ?? [];
    if (videos.length > 0) {
      console.log(item.seriesType + '-' + item.title + '.jpg');
      const image = {
        src:
          '/static/photos/series/' +
          item.seriesType +
          '-' +
          (item.title ?? '').replace('?', '') +
          '.jpg',
        alt: `Graphic for the ${item.title?.replace(
          /^The /,
          ''
        )}${item.title?.slice(4)} series.`,
      };
      return (
        <button
          onClick={() =>
            this.handleClick(
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
          <div className="ListYearEpisode">
            {this.showYears(item.startDate, item.endDate)}
            {videos.length} {videos.length === 1 ? 'Episode' : 'Episodes'}
          </div>
        </button>
      );
    } else {
      console.log({ 'None:': item });
      return null;
    }
  }
  getInstaUrl(query: InstaQuery): string {
    let id = '';
    switch (query.filterValue) {
      case 'alliston':
        id = 'themeetinghousealliston';
        break;
      case 'sandbanks':
        id = 'tmhsandbanks';
        break;
      case 'ancaster':
        id = 'tmhancaster';
        break;
      case 'brampton':
        id = 'tmhbrampton';
        break;
      case 'brantford':
        id = 'tmhbrantford';
        break;
      case 'burlington':
        id = 'tmhburlington';
        break;
      case 'hamilton-downtown':
        id = 'tmhdowntownham';
        break;
      case 'toronto-downtown':
        id = 'tmhdowntowntoronto';
        break;
      case 'hamilton-mountain':
        id = 'tmhhammountain';
        break;
      case 'toronto-east':
        id = 'tmheasttoronto';
        break;
      case 'toronto-high-park':
        id = 'tmhhighpark';
        break;
      case 'kitchener':
        id = 'tmhkitchener';
        break;
      case 'london':
        id = 'themeetinghouseldn';
        break;
      case 'newmarket':
        id = 'newmarket.tmh';
        break;
      case 'oakville':
        id = 'tmhoakville';
        break;
      case 'ottawa':
        id = 'tmhottawa';
        break;

      case 'parry-sound':
        id = 'tmhparrysound';
        break;
      case 'richmond-hill':
        id = 'tmhrichmond';
        break;
      case 'toronto-uptown':
        id = 'tmhuptowntoronto';
        break;
      case 'waterloo':
        id = 'tmhwaterloo';
        break;
      default:
        id = 'themeetinghouse';
    }

    return id;
  }

  renderInstaTile(item: InstagramData): JSX.Element | null {
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
  }

  renderItemRouter(item: ListData, index: number) {
    switch (this.state.content.class) {
      case 'speakers':
        return this.renderSpeaker(item as SpeakerData);
      case 'videos':
      case 'custom-playlist':
        return this.renderVideo(item as VideoData);
      case 'staff':
        return this.renderStaff(item as TMHPerson | TMHPerson[], index);
      case 'overseers':
        return this.renderOverseer(item as TMHPerson | TMHPerson, index);
      case 'events':
        return this.renderEvent(item as EventData);
      case 'instagram':
        return this.renderInstaTile(item as any);
      case 'compassion':
        return this.renderCompassion(item as CompassionData);
      case 'series':
        return this.renderSeries(item as SeriesByTypeData);
      case 'playlists':
        return this.renderPlaylist(item as CustomPlaylistsData);
      case 'series-collection':
        return this.renderSeries(item as SeriesCollectionData);
      case 'curious':
        return this.renderCurious(item as VideoData);
      case 'watch-page':
        return this.renderWatchPageVideo(item as VideoData);
      case 'watch-page-playlist':
        return this.renderWatchPageVideo(item as VideoData, true);
      case 'blogs':
        return this.renderBlogs(item as BlogData);
      case 'random-suggested-playlist':
        return this.renderPlaylistVideo(
          item as NonNullable<RandomCustomPlaylistData>['video']
        );
      default:
        return null;
    }
  }

  render() {
    const data: Array<ListData | string> =
      this.props.content.filterField == null
        ? this.state.listData
        : this.state.listData.filter((item) => {
            if (!item) {
              return false;
            }
            return (
              item[this.props.content.filterField as keyof ListData] as string
            )?.includes(this.props.content.filterValue);
          });

    const dataLength = data.length;

    const { logoColor } = this.props.pageConfig;

    const renderByStyle = () => {
      if (this.state.content.style === 'horizontal') {
        switch (this.state.content.class) {
          case 'random-suggested-playlist':
          case 'custom-playlist':
            return (
              <div className="ListItem horizontal">
                <div className="ListItemDiv1">
                  <h1 className="ListItemH1">
                    {this.state.content.header1 ?? this.state.content.playlist}
                  </h1>
                  <div className="ListItemDiv2">
                    <HorizontalScrollList darkMode={logoColor === 'white'}>
                      {this.state.content.class === 'custom-playlist'
                        ? (data as CustomPlaylistVideoData[])
                            .sort((a, b) =>
                              this.sortByDate(
                                a?.publishedDate ?? '',
                                b?.publishedDate ?? '',
                                this.state.content?.sortOrder
                              )
                            )
                            .map((item, index) => {
                              return this.renderItemRouter(item, index);
                            })
                        : (data as RandomCustomPlaylistData[])
                            .sort((a, b) =>
                              (a?.video?.publishedDate ?? '').localeCompare(
                                b?.video?.publishedDate ?? ''
                              )
                            )
                            .map((item: any, index) => {
                              return this.renderItemRouter(item.video, index);
                            })}
                    </HorizontalScrollList>
                    <div className="ListItemDiv5"></div>
                  </div>
                </div>
                <VideoOverlay
                  onClose={() => {
                    this.videoOverlayClose();
                  }}
                  data={this.state.overlayData}
                ></VideoOverlay>
              </div>
            );

          default:
            return (
              <div className="ListItem horizontal">
                <div
                  className={`ListItemDiv1 ${
                    this.props.pageConfig?.isPopup ? 'isPopup' : ''
                  }`}
                >
                  <h1
                    className={
                      'ListItemH1' + (logoColor === 'white' ? ' whiteText' : '')
                    }
                  >
                    {this.state.content.header1}
                  </h1>
                  {this.state.content.text1 != null ? (
                    <div className="ListItemText1">
                      {this.state.content.text1}
                    </div>
                  ) : null}
                  <div className="ListItemDiv2">
                    {this.state.content.class === 'videos' ? (
                      this.state.content.selector === 'popular' ? (
                        <HorizontalScrollList darkMode={logoColor === 'white'}>
                          {(data as VideoData[])
                            .slice(0, 100)
                            .sort((a, b) => this.sortByViews(a, b))
                            .map((item, index) => {
                              return this.renderItemRouter(
                                item as ListData,
                                index
                              );
                            })}
                        </HorizontalScrollList>
                      ) : (
                        <HorizontalScrollList darkMode={logoColor === 'white'}>
                          {data
                            .concat(
                              this.state.content.limit &&
                                dataLength >= this.state.content.limit
                                ? 'card'
                                : null
                            )
                            .map((item, index) => {
                              if (item === 'card')
                                return this.renderMoreVideosCard();

                              return this.renderItemRouter(
                                item as ListData,
                                index
                              );
                            })}
                        </HorizontalScrollList>
                      )
                    ) : (
                      <HorizontalScrollList darkMode={logoColor === 'white'}>
                        {data.map((item: any, index: any) => {
                          return this.renderItemRouter(item, index);
                        })}
                      </HorizontalScrollList>
                    )}
                    <div className="ListItemDiv5"></div>
                  </div>
                </div>
                <VideoOverlay
                  onClose={() => {
                    this.videoOverlayClose();
                  }}
                  data={this.state.overlayData}
                ></VideoOverlay>
              </div>
            );
        }
      } else if (this.state.content.style === 'blogs') {
        const startIndex = this.state.content.skipFirstPost ? 1 : 0;

        const blogData = data as BlogData[];

        blogData.sort((a, b) =>
          this.sortByDate(
            a?.publishedDate ?? '',
            b?.publishedDate ?? '',
            ModelSortDirection['DESC']
          )
        );

        const today = moment();
        const dateChecked: BlogData[] = blogData.filter(
          (post) =>
            post?.expirationDate === 'none' ||
            moment(post?.expirationDate, 'YYYY-MM-DD').isAfter(today)
        );

        if (dateChecked.length === 0) {
          return null;
        }

        if (this.state.content.selector === 'all') {
          return (
            <div className="ListItemDiv1">
              <h1 className="BlogItemH1">{this.state.content.header1}</h1>
              <InfiniteScroll
                dataLength={dateChecked.length}
                next={() => this.getMoreBlogs()}
                hasMore={Boolean(this.state.blogNextToken)}
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
                    {dateChecked
                      .slice(startIndex)
                      .map((item, index: number) => {
                        return this.renderItemRouter(item, index);
                      })}
                  </div>
                </div>
              </InfiniteScroll>
            </div>
          );
        }

        return (
          <div className="ListItemDiv1">
            <h1 className="BlogItemH1">{this.state.content.header1}</h1>
            <div className="BlogItem">
              <div className="BlogItemContainer">
                {dateChecked.slice(startIndex).map((item, index: number) => {
                  return this.renderItemRouter(item, index);
                })}
              </div>
            </div>
          </div>
        );
      } else if (this.state.content.style === 'horizontal-video-player') {
        if (!data.length) {
          return null;
        }
        const videoData = data as VideoData[];
        // videos are not stored in order within a series, so we sort here
        if (videoData[0]?.videoTypes === 'questions')
          videoData.sort((a: any, b: any) => a.episodeNumber - b.episodeNumber);
        else
          videoData.sort((a, b) =>
            this.sortByDate(
              a?.publishedDate ?? '',
              b?.publishedDate ?? '',
              ModelSortDirection['ASC']
            )
          );

        if (this.state.content.class === 'watch-page-playlist') {
          return (
            <div className="ListItem horizontal-video-player">
              <div className="ListItemDiv1 horizontal-video-player">
                <h2
                  className={
                    'v-player-h2 tmh-header2' +
                    (logoColor === 'white' ? ' w' : ' b')
                  }
                >
                  {this.props?.match?.params?.playlist}
                </h2>
                <div className="WatchPageContainer">
                  {videoData.map((item: any, index: any) => {
                    return this.renderItemRouter(item, index);
                  })}
                </div>
                <div className="v-player-hr" />
              </div>
              <VideoOverlay
                onClose={() => {
                  this.videoOverlayClose();
                }}
                data={this.state.overlayData}
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
                {this.state.content.header1}
              </h2>
              {this.state.content.text1 != null ? (
                <div className="ListItemText1">{this.state.content.text1}</div>
              ) : null}
              <div className="WatchPageContainer">
                {videoData.map((item: any, index: any) => {
                  return this.renderItemRouter(item, index);
                })}
              </div>
              <div className="v-player-hr" />
            </div>
            <VideoOverlay
              onClose={() => {
                this.videoOverlayClose();
              }}
              data={this.state.overlayData}
            ></VideoOverlay>
          </div>
        );
      } else if (this.state.content.style === 'curious-ui') {
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
                {this.state.content.header1}
              </h1>
              {this.state.content.text1 != null ? (
                <div className="CuriousText1">{this.state.content.text1}</div>
              ) : null}
              <div className="hide-mobile">
                <div className="CuriousContainer">
                  {data.slice(0, 6).map((item: any, index: any) => {
                    return this.renderItemRouter(item, index);
                  })}
                </div>
              </div>

              <div className="hide-desktop">
                {data.slice(0, 3).map((item: any, index: any) => {
                  return this.renderItemRouter(item, index);
                })}
                {!this.state.showMoreVideos ? (
                  <button className="MoreVideos" onClick={this.videoHandler}>
                    Load 3 More Questions
                  </button>
                ) : null}
                {this.state.showMoreVideos ? (
                  <div>
                    {data.slice(3, 6).map((item: any, index: any) => {
                      return this.renderItemRouter(item, index);
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <VideoOverlay
              onClose={() => {
                this.videoOverlayClose();
              }}
              data={this.state.overlayData}
            ></VideoOverlay>
          </div>
        );
      } else if (this.state.content.style === 'vertical') {
        if (data.length > 0) {
          return (
            <div className="ListItem horizontal">
              <div className="ListItemDiv1">
                <h1 className="ListItemH1">{this.state.content.header1}</h1>
                {this.state.content.text1 != null ? (
                  <div className="ListItemText1">
                    {this.state.content.text1}
                  </div>
                ) : null}
                <div className="ListItemSpeakersDiv">
                  <HorizontalScrollList>
                    {data.map((item: any, index: any) => {
                      return this.renderItemRouter(item, index);
                    })}
                  </HorizontalScrollList>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      } else if (this.state.content.style === 'staff') {
        const tempData = data as PeopleData[];
        const filteredPeopleData = tempData
          .filter((person) => {
            if (this.state.selectedFilter === 'All') return true;
            return person?.sites?.includes(this.state.selectedFilter);
          })
          .filter(this.filterPeople);
        const isMobile = this.state.windowWidth < 768;
        const binnedData: PeopleData[][] = [];
        if (data.length > 0) {
          let temp: PeopleData[] = [];
          filteredPeopleData.forEach((item, index) => {
            temp.push(item);
            if ((index + 1) % 8 === 0 || index + 1 === data.length) {
              binnedData.push(temp);
              temp = [];
            }
          });
          binnedData.push(temp);
          console.log({ binnedData });
          return (
            <div className="ListItem horizontal">
              <div className="ListItemDiv1">
                <h1 className="ListItemH1">{this.state.content.header1}</h1>
                {this.state.content.text1 != null ? (
                  <div className="ListItemText1">
                    {this.state.content.text1}
                  </div>
                ) : null}
                {this.state.content.filterVisible ? (
                  <div>
                    Filter By:{' '}
                    <select
                      onChange={(e) =>
                        this.setState({ filterRegion: e.target.value })
                      }
                      disabled={
                        this.state.filterCommunity != '' ||
                        this.state.filterRole != ''
                      }
                    >
                      <option value="" title="Site">
                        Region
                      </option>
                      {regions.map((z) => {
                        return (
                          <option key={z.name} value={z.value} title={z.name}>
                            {z.name}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      disabled={
                        this.state.filterRegion != '' ||
                        this.state.filterRole != ''
                      }
                      onChange={(e) =>
                        this.setState({ filterCommunity: e.target.value })
                      }
                    >
                      <option value="" title="Site">
                        Community
                      </option>
                      {communities.map((z) => {
                        return (
                          <option key={z.name} value={z.value} title={z.name}>
                            {z.name}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      disabled={
                        this.state.filterCommunity != '' ||
                        this.state.filterRegion != ''
                      }
                      onChange={(e) =>
                        this.setState({ filterRole: e.target.value })
                      }
                    >
                      <option value="" title="Site">
                        Role
                      </option>
                      {roles.map((z) => {
                        return (
                          <option key={z.name} value={z.value} title={z.name}>
                            {z.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : null}
                <div className="ListItemSpeakersDiv">
                  <HorizontalScrollList>
                    {isMobile
                      ? filteredPeopleData.map((item, index) => {
                          return this.renderItemRouter(item, index);
                        })
                      : binnedData.map((item, index) => {
                          return this.renderItemRouter(item, index);
                        })}
                  </HorizontalScrollList>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      } else if (this.state.content.style === 'horizontalBig') {
        const seriesData = data as SeriesData2[];
        const playlistData = data as CustomPlaylistsData[];
        if (this.state.content.class === 'playlists') {
          const content = this.state.content as CustomPlaylistsQuery;
          return (
            <div className="ListItem horizontalBig">
              <div className="ListItemDiv1 ListItemAllSeries">
                <h1 className="ListItemH1">{this.state.content.header1}</h1>
                <div className="ListItemDiv6">
                  <HorizontalScrollList>
                    {playlistData
                      .sort((a, b) => this.sortPlaylistsAlpha(a, b))
                      .sort((a, b) => {
                        return content.forceToTop.includes(b?.title as string)
                          ? 1
                          : content.forceToTop.includes(a?.title as string)
                          ? -1
                          : 0;
                      })
                      .map((item, index) => {
                        return this.renderItemRouter(item, index);
                      })}
                  </HorizontalScrollList>
                  <div className="ListItemDiv5"></div>
                </div>
              </div>
              <VideoOverlay
                onClose={() => {
                  this.videoOverlayClose();
                }}
                data={this.state.overlayData}
              ></VideoOverlay>
            </div>
          );
        }

        return (
          <div className="ListItem horizontalBig">
            <div className="ListItemDiv1 ListItemAllSeries">
              <h1 className="ListItemH1">{this.state.content.header1}</h1>
              <div className="ListItemDiv6">
                {this.state.content.class === 'series' ? (
                  <HorizontalScrollList>
                    {seriesData
                      .concat(
                        this.state.content.limit &&
                          dataLength >= this.state.content.limit
                          ? 'card'
                          : null
                      )
                      .map((item: any, index: any) => {
                        if (item === 'card') return this.renderMoreSeriesCard();
                        return this.renderItemRouter(item, index);
                      })}
                  </HorizontalScrollList>
                ) : (
                  <HorizontalScrollList>
                    {data.map((item: any, index: any) => {
                      return this.renderItemRouter(item, index);
                    })}
                  </HorizontalScrollList>
                )}
                <div className="ListItemDiv5"></div>
              </div>
            </div>
            <VideoOverlay
              onClose={() => {
                this.videoOverlayClose();
              }}
              data={this.state.overlayData}
            ></VideoOverlay>
          </div>
        );
      } else if (
        this.state.content.style === 'grid' &&
        this.state.content.class === 'instagram'
      ) {
        //This renders the instagram div and iterate tiles

        return (
          <div className="ListItem horizontal">
            <div className="InstagramGridRectangle" />
            <div className="ListInstagramContainer">
              {this.state.listData?.map((tile, index: number) => {
                return this.renderItemRouter(tile, index);
              })}
            </div>
            <a
              className="ListInstagramButton"
              target="_blank"
              rel="noreferrer"
              href={
                this.props.content.filterValue
                  ? `https://instagram.com/` +
                    this.getInstaUrl(this.props.content)
                  : `https://instagram.com/themeetinghouse`
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
        );
      } else if (
        this.state.content.style === 'imageList' ||
        this.state.content.style === 'imageListHeader'
      ) {
        return (
          <div className="ListItem imageList">
            <div className="ListItemDiv1">
              <h1
                className={
                  this.state.content.style == 'imageList'
                    ? 'ListItemH1ImageList'
                    : 'ListItemH1ImageListHeader'
                }
              >
                {this.state.content.header1}
              </h1>
              <h2>{this.state.content.header2}</h2>
              <div className="ListItemDiv7">{this.state.content.text1}</div>
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
                        <Link
                          className="container"
                          style={{ display: 'inline-block', padding: 0 }}
                          to={href}
                        >
                          {body}
                        </Link>
                      ) : (
                        body
                      )}
                      <ScaledImage
                        className="ListItemH1ImageList2"
                        image={{ src: item.imageSrc, alt: item.imageAlt }}
                        breakpointSizes={{
                          320: 320,
                          480: 480,
                          640: 640,
                          1280: 1280,
                          1920: 1920,
                          2560: 2560,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      } else if (this.state.content.style === 'ladder') {
        if (data.length > 0) {
          return (
            <div className="ListItem ladder">
              <div className="ListItemDiv1">
                <h1 className="ListItemH1">{this.state.content.header1}</h1>
                {this.state.content.text1 != null ? (
                  <div className="ListItemText1">this.state.content.text1</div>
                ) : null}
                <div className="ListItemSpeakersDiv">
                  <LadderList>
                    {data.map((item: any, index: any) => {
                      return this.renderItemRouter(item, index);
                    })}
                  </LadderList>
                </div>
              </div>
            </div>
          );
        }
      }
      return null;
    };

    const { margin } = this.state.content;
    return <div style={{ ...margin }}>{renderByStyle()}</div>;
  }
}

export default withRouter(ListItem);
