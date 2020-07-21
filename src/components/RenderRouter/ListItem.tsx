import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import DataLoader, {
  StaffData,
  OverseerData,
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
} from './DataLoader';
import HorizontalScrollList from './HorizontalScrollList';
import './ListItem.scss';
import format from 'date-fns/format';
import Fireworks from 'fireworks-react';
import Konami from 'react-konami-code';
import ScaledImage, { fallbackToImage } from 'components/ScaledImage/ScaledImage';

interface Props extends RouteComponentProps {
  content: any;
  data: any;
  pageConfig: any;
}
interface State {
  content: DataQuery & {
    style: string;
    header1: string;
    header2: string;
    text1: string;

    showEpisodeNumbers: boolean;
    hovertag: string;
  };
  listData: ListData[];
  overlayData: any;
  urlHistoryState: any;
  showChampion: any;
  showMoreVideos: boolean;
}

type VideoData = SeriesData | VideoByVideoTypeData | CustomPlaylistVideoData;

type SeriesData2 = SeriesData | string | null;

type ListData =
  | SpeakerData
  | VideoData
  | StaffData
  | OverseerData
  | EventData
  | CompassionData
  | SeriesByTypeData
  | BlogData;

const hideEpisodeNumbers = [
  'adult-sunday-shortcut',
  'kidmax-live'
]

class ListItem extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object,
    history: PropTypes.object,
  };
  videoOverlayClose() {
    this.setState({
      overlayData: null,
    });
    window.history.pushState({}, 'Videos', this.state.urlHistoryState);
  }
  showYears(start: any, end: any) {
    if (start === null || end === null)
      return null;
    else
      if (new Date(start).getFullYear() === new Date(end).getFullYear())
        return new Date(start).getFullYear() + ' • ';
      else
        return new Date(start).getFullYear() + ' - ' + new Date(end).getFullYear() + ' • ';
  }
  handleClick(data: any) {
    this.setState({
      overlayData: data,
      urlHistoryState: window.location.href,
    });
    if (data.series == null)
      console.log({ 'You need to create a series for:': data });
    else
      window.history.pushState({}, 'Videos', '/videos/' + data.series.id + '/' + data.id);
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      showChampion: false,
      content: props.content,
      listData: props.content.list ?? [],
      overlayData: null,
      urlHistoryState: window.history.state,
      showMoreVideos: false
    };
    this.videoHandler = this.videoHandler.bind(this);
    this.navigate = this.navigate.bind(this);
    this.setData = this.setData.bind(this);
  }

  videoHandler() {
    this.setState({
      showMoreVideos: true,
    });
  }

  async componentDidMount() {
    const dataLoaded = (data: ListData[]) => this.setData(data);
    const checkNext = () => null;
    let data: ListData[];
    const query: DataQuery = this.props.content;
    switch (query.class) {
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
      case 'videos':
      case 'curious':
      case 'watch-page':
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
          case 'custom-playlist':
            data = await DataLoader.getVideosCustomPlaylist(
              query as CustomPlaylistQuery
            );
            break;
          case 'popular':
            await DataLoader.getPopularVideos(query as PopularVideosQuery, dataLoaded);
            return;
          default:
            await DataLoader.getVideos(query as VideoSeriesQuery, dataLoaded, checkNext);
            return;
        }
        break;
      case 'blogs':
        await DataLoader.getBlogs(query, dataLoaded);
        return;
      default:
        console.error(`unknown list data type ${this.state.content.class}`);
        return;
    }
    this.setData(data);
  }

  setData(data: any) {
    this.setState({
      listData: this.state.listData.concat(data),
    });
  }

  navigateUrlNewWindow(to: string) {
    window.open(
      to,
      '_blank', // <- This is what makes it open in a new window.
      'noopener noreferrer'
    );
  }
  navigateUrl(to: string) {
    window.location.href = to;
  }
  navigate(to: string) {
    this.props.history.push(to, 'as');
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  sortByDate(a: BlogData, b: BlogData, dir: 'oldFirst' | 'newFirst') {
    const nameA = (a?.publishedDate ?? '').toUpperCase();
    const nameB = (b?.publishedDate ?? '').toUpperCase();
    if (nameA > nameB) {
      return dir === 'newFirst' ? -1 : 1;
    }
    if (nameA < nameB) {
      return dir === 'newFirst' ? 1 : -1;
    }
    return 0;
  }

  sortByViews(a: VideoData, b: VideoData) {
    if (!a?.viewCount || !b?.viewCount)
      return -1
    return parseInt(b.viewCount, 10) - parseInt(a.viewCount, 10)
  }

  renderMoreVideosCard() {
    const temp = this.state.content as any
    return (
      <div key='load-more-card' onClick={() => window.location.href = '/archive/video/' + temp.subclass} className={'ListItemVideo' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')} >
        <div className="LoadMoreVideosCard">
          <div className="LoadMoreVideosText">Click for more videos</div>
        </div>
      </div>);
  }

  renderMoreSeriesCard() {
    const temp = this.state.content as any
    return (
      <div key='load-more-card' onClick={() => window.location.href = '/archive/series/' + temp.subclass} >
        <div className="LoadMoreSeriesCard">
          <div className="LoadMoreSeriesText">Click for more series</div>
        </div>
      </div>);
  }

  renderVideo(item: VideoData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div onClick={() => { this.handleClick(item); }} key={item.id ?? ''} className={'ListItemVideo' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')} >
        <div>
          <img alt="TBD" className="ListItemVideoThumb" src={(item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high?.url ?? ''} />
          <div className="ListItemPlayImageOverlay"><img alt="Play Icon" src="/static/svg/Play.svg"></img></div>
          <div className="ListItemEpisodeNum" >{this.state.content.showEpisodeNumbers === false ? null : item.episodeNumber + '. '} {item.episodeTitle}</div>
          <div className="ListItemSeriesTitle">{item.seriesTitle != null ? item.seriesTitle : null}</div>
          <div className="ListItemPublishedDate">{item.publishedDate}</div>
        </div>

      </div>);
  }

  renderWatchPageVideo(item: VideoData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div onClick={() => { this.handleClick(item); }} key={item.id} className={'WatchPageVideo' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')} >
        <div>
          <img alt="TBD" className="WatchPageThumb" src={(item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high?.url ?? ''} />
          <div className="WatchPagePlayImageOverlay"><img alt="Play Icon" src="/static/svg/Play.svg"></img></div>
          <div className="WatchPageEpisodeTitle">{item.episodeNumber && !hideEpisodeNumbers.includes(item.videoTypes ? item.videoTypes : "") ? item.episodeNumber + ". " : null}{item.episodeTitle}</div>
          <div className="WatchPagePublishedDate">{item.publishedDate}</div>
        </div>

      </div>);
  }

  renderCurious(item: VideoData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div className="CuriousWrapper">
        <div onClick={() => this.handleClick(item)} key={item.id} className={'ListItemVideo' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')} >
          <div className="CuriousBox">
            <div className="CuriousText">{this.state.content.showEpisodeNumbers === false ? null : item.episodeNumber + '. '}{item.episodeTitle}</div>
            <div className="WatchVideoTag">{this.state.content.hovertag}</div>
          </div>
        </div>
      </div>);
  }

  renderBlogs(item: BlogData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div className="BlogItem" key={item.id} onClick={() => this.navigateUrl('/posts/' + item.id)}>
        <img alt={item.blogTitle + ' series image'}
          className="BlogSquareImage"
          src={'/static/photos/blogs/square/' + (item.blogTitle ?? '').replace(/\?|[']/g, '') + '.jpg'}
          onError={fallbackToImage('/static/NoCompassionLogo.png')}
        />
        <div className="BlogContentContainer">
          <div className="BlogTitle">{item.blogTitle}<img className="blogarrow" alt="" src="/static/svg/ArrowRight black.svg" /></div>
          <div className="BlogDetails">by <span className="author-only">{item.author}</span> on{' '}{item.publishedDate}</div>
          <div className="BlogDesc">{item.description}</div>
        </div>
      </div>
    );
  }

  renderSpeaker(item: SpeakerData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div key={item.id} className="ListItemTeachingImageDiv">
        <img alt="TBD" className="ListItemTeachingImage" src="/static/images/teaching-3.png" onError={fallbackToImage('/static/Individual.png')} />
        <div className="ListItemEpisodeLength">{item.name}</div>
        <div>{item?.videos?.items?.length === 10 ? item.videos.items.length + '+' : item?.videos?.items?.length} Episodes</div>
      </div>
    );
  }

  renderOverseer(item: OverseerData, index: number): JSX.Element {
    const image = {
      src: `/static/photos/overseers/${item.FirstName}_${item.LastName}_app.jpg`,
      alt: `${item.FirstName} ${item.LastName}`,
    }
    return (
      <div key={index} className="ListItemDiv3">
        <ScaledImage image={image} className="ListItemImage2" fallbackUrl="/static/Individual.png" breakpointSizes={{
          320: 80,
          480: 120,
          640: 180,
          1280: 320,
          1920: 480,
          2560: 640,
        }} />
        <div className="ListItemName">{item.FirstName} {item.LastName}</div>
        <div className="ListItemPosition">{item.Position}</div>
      </div>
    );
  }

  renderEvent(item: EventData): JSX.Element | null {
    if (!item) {
      return null;
    }

    const start_date = new Date(item?.start_time?.substring(0, item.start_time.length - 2) + ':' + item?.start_time?.substring(item.start_time.length - 2));
    let durationStr = start_date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    });
    if (item.end_time) {
      const end_date = new Date(item.end_time.substring(0, item.end_time.length - 2) + ':' + item.end_time.substring(item.end_time.length - 2));
      durationStr = durationStr + '-' + end_date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    let description;
    if (item.description && item.description.length > 300) {
      if (item.description.indexOf(' ', 300) === -1)
        description = item.description;
      else
        description = item.description.substring(0, item.description.indexOf(' ', 300)) + '...';
    }
    else
      description = item.description;
    return (
      <div key={item.id ?? ''} onClick={() => { this.navigateUrlNewWindow('https://facebook.com/' + item.id) }} className="ListItemEvents" >
        <div style={{ float: 'left', marginLeft: '10px', marginRight: '40px' }}>
          <div style={{ fontFamily: 'Graphik Web', lineHeight: '3vw', fontSize: '2vw', fontWeight: 'bold' }}>{start_date.toLocaleString('default', { month: 'long' })}</div>
          <div style={{ fontFamily: 'Graphik Web', lineHeight: '3vw', fontSize: '4vw', fontWeight: 'bold' }}>{start_date.getDate()}</div>
        </div>
        <div style={{ margin: '10px' }}>
          <div className="ListItemEventsDescription" >{item.name}</div>
          <div className="ListItemEventsDescription2" >{description}</div>
          {item.place != null ? item.place.name != null ? <div className="ListItemEventsLocation" >{item.place.name}</div> : null : null}
          <div className="ListItemEventsDuration" >{durationStr}</div>
          {/*        <Button className="ListItemEventButton" onClick={() => this.navigate("calendar")}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>
        <Button className="ListItemEventButton" onClick={() => this.navigate("share")}><img src="/static/Share.png" alt="Share Icon" />Share</Button>
    */}       </div>
        <div style={{ clear: 'left' }}></div>

      </div>
    );

  }
  easterEgg() {
    this.setState({ showChampion: true });
  }
  renderStaff(item: any, index: any) {
    const imgsrc = '/static/photos/' + (item.Staff == null ? 'coordinators' : 'staff') + '/' + (item.Staff == null ? item.sites[0] + '_' : '') + item.FirstName + '_' + item.LastName + '_app.jpg';
    return (
      <div key={index} className="ListItemDiv3" >
        {item.FirstName === 'James' ? <div>
          <Konami action={() => { this.easterEgg() }}></Konami>
          {this.state.showChampion ?
            (<div><Fireworks style={{ position: 'fixed', width: '100%', height: '100%', left: 0, top: 0, zIndex: 20005 }} width={500} height={500} />
              <img alt={item.photoAlt} className="ListItemImage2" style={{ position: 'fixed', left: '30%', width: '30%', top: '10%', zIndex: 200004 }}
                onError={fallbackToImage('/static/Individual.png')}
                src={'/static/photos/' + (item.Staff == null ? 'coordinators' : 'staff') + '/' + (item.Staff == null ? item.sites[0] + '_' : '') + item.FirstName + '_' + item.LastName + '_app.jpg'} />
              <h1 style={{ color: '#ffffff', fontSize: 100, position: 'fixed', width: '80%', height: '20%', left: '10%', top: '70%', zIndex: 200006, }}>Young Adults Champion</h1></div>)
            : null}
        </div>
          : null
        }

        <ScaledImage image={{ src: imgsrc, alt: item.photoAlt }} className="ListItemImage2" fallbackUrl="/static/Individual.png"
          breakpointSizes={{
            320: 80,
            480: 120,
            640: 180,
            1280: 320,
            1920: 480,
            2560: 640,
          }} />

        <div className="ListItemName" >{item.FirstName} {item.LastName}</div>
        <div className="ListItemPosition" >{item.Position}</div>
        {item.Email != null ? <div className="ListItemEmail"><a className="ListItemEmailText" href={'mailto:' + item.Email}>Email</a></div> : null}
        {item.Phone != null ? <div className="ListItemPhone">{item.Phone}</div> : null}
        {item.facebook != null ? <a href={'https://www.facebook.com/' + item.facebook} className="ListItemA" ><img className="ListItemFB" src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a> : null}
        {item.instagram != null ? <a href={'https://twitter.com/' + item.instagram} className="ListItemA" ><img className="ListItemTwitter" src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a> : null}
        {item.twitter != null ? <a href={'https://www.instagram.com//' + item.twitter} className="ListItemA" ><img className="ListItemInstagram" src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a> : null}

      </div>
    );
  }
  renderCompassion(item: any) {
    return (
      <div key={item.id} className="ListItemCompassion" >
        <img alt={item.imageAlt} className="ListItemCompassionLogo" src={item.image} onError={fallbackToImage('/static/NoCompassionLogo.png')} />
        <div className="ListItemEventsDescription" >{item.name}</div>
        <div className="ListItemEventsDescription2" >{item.description}</div>
        <div>{item.location}</div>
        {item.website != null ? (<div className="ListItemWebsiteContainer"><a className="ListItemWebsite" href={item.website}>Website</a></div>) : null}
        {item.facebook != null ? (<a href={'https://www.facebook.com/' + item.facebook} className="ListItemA" ><img className="ListItemFB" src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>) : null}
        {item.twitter != null ? (<a href={'https://twitter.com/' + item.twitter} className="ListItemA"><img className="ListItemTwitter" src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>) : null}
        {item.instagram != null ? (<a href={'https://www.instagram.com//' + item.instagram} className="ListItemA" ><img className="ListItemInstagram" src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>) : null}



      </div>
    );
  }
  renderSeries(item: SeriesByTypeData) {
    if (!item) {
      return null;
    }
    const seriesEnded = item.endDate && format(new Date(), 'yyyy-MM-dd') > item.endDate;
    const videos = item.videos?.items ?? [];
    if (videos.length > 0) {
      console.log(item.seriesType + '-' + item.title + '.jpg');
      return (
        <div onClick={() => this.handleClick(videos.sort((a, b) => {
          const aNumber = a?.episodeNumber ?? 0;
          const bNumber = b?.episodeNumber ?? 0;
          return seriesEnded ? aNumber - bNumber : bNumber - aNumber;
        })[0])}
          key={item.id} className="ListItemVideo">
          <img alt={item.title + ' series image'}
            className="ListItemImage2"
            src={'/static/photos/series/' + item.seriesType + '-' + (item.title ?? '').replace('?', '') + '.jpg'}
            onError={fallbackToImage('/static/NoCompassionLogo.png')}
          />
          <div className="ListItemName" >{item.title}</div>
          <div className="ListYearEpisode">{this.showYears(item.startDate, item.endDate)}{videos.length} {videos.length === 1 ? 'Episode' : 'Episodes'}</div>
        </div>
      );
    }
    else {
      console.log({ 'None:': item });
      return null;
    }
  }
  renderItemRouter(item: ListData, index: number) {
    if (this.state.content.class === 'speakers')
      return this.renderSpeaker(item as SpeakerData);
    else if (this.state.content.class === 'videos')
      return this.renderVideo(item as VideoData);
    else if (this.state.content.class === 'staff')
      return this.renderStaff(item as StaffData, index);
    else if (this.state.content.class === 'overseers')
      return this.renderOverseer(item as OverseerData, index);
    else if (this.state.content.class === 'events')
      return this.renderEvent(item as EventData);
    else if (this.state.content.class === 'compassion')
      return this.renderCompassion(item as CompassionData);
    else if (this.state.content.class === 'series')
      return this.renderSeries(item as SeriesByTypeData);
    else if (this.state.content.class === 'curious')
      return this.renderCurious(item as VideoData);
    else if (this.state.content.class === 'watch-page')
      return this.renderWatchPageVideo(item as VideoData);
    else if (this.state.content.class === 'blogs')
      return this.renderBlogs(item as BlogData);
    else return null;
  }

  render() {
    const data: Array<ListData | string> =
      this.props.content.filterField == null
        ? this.state.listData
        : this.state.listData.filter((item) => {
          if (!item) {
            return false;
          }
          return (item[
            this.props.content.filterField as keyof ListData
          ] as string).includes(this.props.content.filterValue);
        });

    const dataLength = data.length

    if (this.state.content.style === 'horizontal') {
      const videoData = data as VideoData[];
      return (
        <div className="ListItem horizontal" >
          <div className="ListItemDiv1" >
            <h1 className={'ListItemH1' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')} >{this.state.content.header1}</h1>
            {this.state.content.text1 != null ? (<div className="ListItemText1">{this.state.content.text1}</div>) : null}
            <div className="ListItemDiv2" >

              {this.state.content.class === 'videos' ?
                this.state.content.selector === 'popular' ?
                  <HorizontalScrollList darkMode={this.props.pageConfig.logoColor === 'white'}>
                    {videoData.slice(0, 100).sort((a, b) => this.sortByViews(a, b)).map((item, index) => {
                      return this.renderItemRouter(item as ListData, index);
                    }
                    )}
                  </HorizontalScrollList>
                  : <HorizontalScrollList darkMode={this.props.pageConfig.logoColor === 'white'}>
                    {data.concat(this.state.content.limit && dataLength >= this.state.content.limit ? 'card' : null).map((item, index) => {
                      if (item === 'card')
                        return this.renderMoreVideosCard();

                      return this.renderItemRouter(item as ListData, index);
                    }
                    )}
                  </HorizontalScrollList>
                : <HorizontalScrollList darkMode={this.props.pageConfig.logoColor === 'white'}>
                  {data.map((item: any, index: any) => {
                    return this.renderItemRouter(item, index);
                  }
                  )}
                </HorizontalScrollList>}
              <div className="ListItemDiv5" ></div>
            </div>
          </div>
          <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
        </div>
      );
    }
    else if (this.state.content.style === 'blogs') {
      data.sort((a: any, b: any) => this.sortByDate(a, b, 'newFirst'));

      const today = format(new Date(), 'yyyy-MM-dd');
      const dateChecked = data.filter((post: any) => post.publishedDate <= today && (post.expirationDate >= today || post.expirationDate));

      return (
        <div className="ListItemDiv1 BlogItem" >
          <div className="BlogItemContainer">
            {dateChecked.map((item: any, index: any) => {
              return this.renderItemRouter(item, index);
            }
            )}
          </div>
        </div>
      );
    }

    else if (this.state.content.style === 'horizontal-video-player') {
      if (!data.length) {
        return null;
      }
      const videoData = data as VideoData[];
      //videos are not stored in order within a series, so we sort here
      if (videoData[0]?.videoTypes === 'questions')
        data.sort((a: any, b: any) => a.episodeNumber - b.episodeNumber);
      else
        data.sort((a: any, b: any) => this.sortByDate(a, b, 'oldFirst'));
      return (
        <div className="ListItem horizontal-video-player">
          <div className="ListItemDiv1 horizontal-video-player">
            <h1 className={'ListItemH1 horizontal-video-player' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')}>{this.state.content.header1}</h1>
            {this.state.content.text1 != null ? (<div className="ListItemText1" >{this.state.content.text1}</div>) : null}
            <div className="WatchPageContainer">
              {data.map((item: any, index: any) => {
                return this.renderItemRouter(item, index);
              }
              )}
            </div>
            <div className="HorizontalLine"></div>
          </div>
          <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
        </div>
      );
    }

    else if (this.state.content.style === 'curious-ui') {
      data.sort(function (a: any, b: any) { return a.episodeNumber - b.episodeNumber });
      return (
        <div className="ListItem horizontal" >
          <div className="ListItemDiv1" >
            <h1 className={'ListItemH1' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')}>{this.state.content.header1}</h1>
            {this.state.content.text1 != null ? (<div className="CuriousText1">{this.state.content.text1}</div>) : null}
            <div className="hide-mobile">
              <div className="CuriousContainer">
                {data.slice(0, 6).map((item: any, index: any) => {
                  return this.renderItemRouter(item, index);
                }
                )}
              </div>
            </div>

            <div className="hide-desktop">
              {data.slice(0, 3).map((item: any, index: any) => {
                return this.renderItemRouter(item, index);
              }
              )}
              {!this.state.showMoreVideos ? <button className="MoreVideos" onClick={this.videoHandler}>Load 3 More Questions</button> : null}
              {this.state.showMoreVideos ? <div>{data.slice(3, 6).map((item: any, index: any) => { return this.renderItemRouter(item, index) })}</div> : null}
            </div>
          </div>
          <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
        </div>
      );
    }

    else if (this.state.content.style === 'vertical') {
      if (data.length > 0) {
        return (
          <div className="ListItem horizontal" >
            <div className="ListItemDiv1" >
              <h1 className="ListItemH1" >{this.state.content.header1}</h1>
              {this.state.content.text1 != null ? (<div className="ListItemText1" >{this.state.content.text1}</div>) : null}
              <div className="ListItemSpeakersDiv" >
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
    }
    else if (this.state.content.style === 'horizontalBig') {

      const seriesData = data as SeriesData2[]
      return (
        <div className="ListItem horizontalBig" >
          <div className="ListItemDiv1 ListItemAllSeries" >
            <h1 className="ListItemH1" >{this.state.content.header1}</h1>
            <div className="ListItemDiv6" >
              {this.state.content.class === 'series' ?
                <HorizontalScrollList>
                  {seriesData.concat(this.state.content.limit && dataLength >= this.state.content.limit ? 'card' : null).map((item: any, index: any) => {
                    if (item === 'card')
                      return this.renderMoreSeriesCard();
                    return this.renderItemRouter(item, index);
                  })}
                </HorizontalScrollList>
                : <HorizontalScrollList>
                  {data.map((item: any, index: any) => {
                    return this.renderItemRouter(item, index);
                  })}
                </HorizontalScrollList>}
              <div className="ListItemDiv5" ></div>

            </div>
          </div>
          <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>

        </div>
      )
    }

    else if (this.state.content.style === 'imageList') return (
      <div className="ListItem imageList" >
        <div className="ListItemDiv1" >
          <h1 className="ListItemH1ImageList" >{this.state.content.header1}</h1>
          <h2>{this.state.content.header2}</h2>
          <div className="ListItemDiv7" >{this.state.content.text1}</div>
          <div className="ListItemDiv8" >
            <div className="ListItemDiv9" ></div>
            {
              data.map((item: any, index: any) => {
                return (
                  <div className="ListItemDiv10" key={index}>
                    <div
                      onClick={() => {
                        if (item.navigateTo)
                          this.navigate(item.navigateTo);
                        else
                          if (item.url)
                            this.navigateUrl(item.url);
                      }}
                      className={'imageList ' + (item.url || item.navigateTo ? 'hoverText' : 'noHoverText')}>
                      <h3 className="ListItemH3" ><img className="arrow" alt="" src="/static/svg/ArrowRight black.svg" />{item.title}</h3>
                      <div className="ListItemDiv11" >{item.text}</div>
                    </div>
                    <ScaledImage className="ListItemH1ImageList2" image={{ src: item.imageSrc, alt: item.imageAlt }}
                      breakpointSizes={{
                        320: 320,
                        480: 480,
                        640: 640,
                        1280: 1280,
                        1920: 1920,
                        2560: 2560,
                      }} />
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>
    );
    return null;
  }
}

export default withRouter(ListItem);
