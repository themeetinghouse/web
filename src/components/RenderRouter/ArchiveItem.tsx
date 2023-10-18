import React, { EventHandler, SyntheticEvent } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import './ArchiveItem.scss';
import DataLoader, {
  VideoByVideoTypeData,
  SeriesByTypeData,
} from './DataLoader';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import format from 'date-fns/format';

type listData = SeriesByTypeData | VideoByVideoTypeData;

interface Props {
  content: any;
  data: any;
  pageConfig: any;
}
interface ArchiveItemClass extends Props {
  history: RouteComponentProps['history'];
}
interface State {
  listData: listData[] | null;
  overlayData: listData | null;
  urlHistoryState: string | null;
  selectedYear: string;
  yearOptions: string[];
  currentNextToken: string | null;
}
class ArchiveItem extends React.Component<ArchiveItemClass, State> {
  constructor(props: ArchiveItemClass) {
    super(props);
    this.state = {
      listData: [],
      overlayData: null,
      urlHistoryState: null,
      selectedYear: 'All',
      yearOptions: ['All'],
      currentNextToken: 'placeholder',
    };
  }

  async componentDidMount() {
    const dataLoaded = (data: listData[]) => this.setData(data);
    const listenForNullToken = (data: null) =>
      this.setState({ currentNextToken: data });
    const query = {
      class: this.props.content.class,
      subclass: this.props.data,
      sortOrder: this.props.content.sortOrder,
    };
    switch (query.class) {
      case 'series':
        async function loadSeriesByType() {
          await DataLoader.getSeriesByType(
            query,
            dataLoaded,
            listenForNullToken
          );
        }
        loadSeriesByType().then(() => {
          if (this.state.listData?.length === 0) {
            //no data returned
            this.props.history.replace('/not-found');
          } else {
            console.log(this.state.listData);
          }
        });
        return;
      case 'videos':
        async function loadVideos() {
          await DataLoader.getVideos(query, dataLoaded, listenForNullToken);
        }
        loadVideos().then(() => {
          if (this.state.listData?.length === 0) {
            //no data returned
            this.props.history.replace('/not-found');
          } else {
            console.log(this.state.listData);
          }
        });

        return;
      default:
        console.error(`unknown list data type ${this.props.content.class}`);
        return;
    }
  }

  sliceDate = (item: listData) => {
    if (!item) return null;
    if ('startDate' in item) return item?.startDate?.slice(0, 4);
    if ('publishedDate' in item) return item?.publishedDate?.slice(0, 4);

    return null;
  };

  binByYear(
    data: listData[],
    selector: (item: listData) => string | undefined | null
  ) {
    const binned = [];
    let temp = [];
    const years: string[] = ['All'];
    for (let i = 0; i < data.length; i++) {
      temp.push(data[i]);
      const temp2 = selector(data[i]);
      if (temp2 !== selector(data[i + 1])) {
        binned.push(temp);
        temp = [];
        if (temp2) years.push(temp2);
      }
    }
    return { binned, years };
  }

  setData(data: listData[]) {
    this.setState({
      listData: this.state.listData?.concat(data) ?? null,
    });
  }

  videoOverlayClose() {
    this.setState({
      overlayData: null,
    });
  }

  handleClick(data: any) {
    this.setState({
      overlayData: data,
    });
    if (data.series == null)
      console.error({ 'You need to create a series for:': data });
    else this.props.history.push('/videos/' + data.series.id + '/' + data.id);
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

  fallbackToImage(
    fallbackUrl: string
  ): EventHandler<SyntheticEvent<HTMLImageElement>> {
    return function (event: SyntheticEvent<HTMLImageElement>) {
      if (!event.currentTarget.src.endsWith(fallbackUrl)) {
        event.currentTarget.src = fallbackUrl;
        event.currentTarget.srcset = '';
      }
    };
  }

  renderYearSelector(options: string[]) {
    return (
      <div className="ArchiveSelectByYear">
        {options.map((option, index) => {
          return (
            <div
              className={
                this.state.selectedYear === option
                  ? 'SelectedYearOption'
                  : 'SelectByYearOption'
              }
              key={index}
              onClick={() => this.setState({ selectedYear: option })}
            >
              {option}
            </div>
          );
        })}
      </div>
    );
  }

  renderVideo(item: VideoByVideoTypeData): JSX.Element | null {
    if (!item) {
      return null;
    }
    return (
      <div
        onClick={() => this.handleClick(item)}
        key={item.id ?? ''}
        className={
          'ArchiveItemVideo' +
          (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')
        }
      >
        <div>
          <img
            alt={
              (item as VideoByVideoTypeData)?.thumbnailDescription ||
              'Video Thumbnail'
            }
            className="ArchiveItemVideoThumb"
            src={
              (item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high
                ?.url ?? ''
            }
          />
          <div className="ArchiveItemPlayImageOverlay">
            <img alt="Play Icon" src="/static/svg/Youtube.svg"></img>
          </div>
          <div className="ArchiveItemEpisodeNum">
            {this.props.content.showEpisodeNumbers === false
              ? null
              : item.episodeNumber + '. '}{' '}
            {item.episodeTitle}
          </div>
          <div className="ArchiveItemSeriesTitle">
            {item.seriesTitle != null ? item.seriesTitle : null}
          </div>
          <div className="ArchiveItemPublishedDate">{item.publishedDate}</div>
        </div>
      </div>
    );
  }

  renderSeries(item: SeriesByTypeData) {
    if (!item) {
      return null;
    }
    const seriesEnded =
      item.endDate && format(new Date(), 'yyyy-MM-dd') > item.endDate;
    const videos = item.videos?.items ?? [];
    if (videos.length > 0) {
      return (
        <div
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
          className="ArchiveItemVideo"
        >
          <img
            alt={
              'Graphic for the ' + item.title?.replace(/^The /, '') + ' series.'
            }
            className="ArchiveItemImage2"
            src={
              '/static/photos/series/' +
              item.seriesType +
              '-' +
              (item.title ?? '').replace('?', '') +
              '.jpg'
            }
            onError={this.fallbackToImage(
              '/static/photos/series/series-fallback.jpg'
            )}
          />
          <div className="ArchiveItemName">{item.title}</div>
          <div className="ArchiveItemYearEpisode">
            {this.showYears(item.startDate, item.endDate)}
            {videos.length} {videos.length === 1 ? 'Episode' : 'Episodes'}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  renderMedia(item: listData) {
    if (!item) return null;
    if ('publishedDate' in item) return this.renderVideo(item);
    if ('startDate' in item) return this.renderSeries(item);

    return null;
  }

  render() {
    if (
      this.props.data &&
      !this.state.currentNextToken &&
      (this.state.listData?.length ?? 0) > 0
    ) {
      const binnedData = this.binByYear(
        this.state.listData ?? [],
        this.sliceDate
      );
      return (
        <div className="ArchiveItemDiv1">
          {this.renderYearSelector(binnedData.years)}
          {binnedData.binned
            .filter(
              (i) =>
                this.state.selectedYear === 'All' ||
                this.sliceDate(i[0]) === this.state.selectedYear.toString()
            )
            .map((item, index) => {
              return (
                <div key={index}>
                  <h1 className="ArchiveItemH1">{this.sliceDate(item[0])}</h1>
                  <div className="ArchiveItemGrid">
                    {item.map((item2) => {
                      return this.renderMedia(item2);
                    })}
                  </div>
                </div>
              );
            })}
          <VideoOverlay
            onClose={() => {
              this.videoOverlayClose();
            }}
            data={this.state.overlayData}
          ></VideoOverlay>
        </div>
      );
    } else {
      if (this.state.listData?.length === 0) {
        return null;
      }
      return (
        <div className="LoadingArchivesDiv1">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
          <div className="LoadingArchivesText">Loading</div>
        </div>
      );
    }
  }
}

function ArchiveItemWrapper(props: Props) {
  const history = useHistory();
  return <ArchiveItem {...props} history={history} />;
}

export default ArchiveItemWrapper;
