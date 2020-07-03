
import React, { EventHandler, SyntheticEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import "./ArchiveItem.scss"
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import DataLoader, {
    VideoByVideoTypeData,
    SeriesByTypeData
} from './DataLoader';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import format from 'date-fns/format';

Amplify.configure(awsmobile);

type listData = SeriesByTypeData | VideoByVideoTypeData

interface Props extends RouteComponentProps {
    content: any,
    data: any,
    pageConfig: any,
}
interface State {
    listData: listData[]
    overlayData: any
    urlHistoryState: any
    year: number | number[]
}
class ArchiveItem extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            listData: [],
            overlayData: null,
            urlHistoryState: window.history.state,
            year: 2020
        }
    }

    async componentDidMount() {
        const dataLoaded = (data: listData[]) => this.setData(data);
        const query = { selector: 'all', class: this.props.content.class, subclass: this.props.data, sortOrder: this.props.content.sortOrder };
        switch (query.class) {
            case 'series':
                await DataLoader.getSeriesByType(query, dataLoaded);
                return;
            case 'videos':
                await DataLoader.getVideos(query, dataLoaded);
                return;
            default:
                console.error(`unknown list data type ${this.props.content.class}`);
                return;
        }
    }

    binVideosByYear(data: VideoByVideoTypeData[]) {
        const binned: VideoByVideoTypeData[][] = []
        let temp = []
        for (let i = 0; i < data.length; i++) {
            temp.push(data[i])
            if (data[i]?.publishedDate?.slice(0, 4) !== data[i + 1]?.publishedDate?.slice(0, 4)) {
                binned.push(temp)
                temp = []
            }
        }

        return binned
    }

    binSeriesByYear(data: SeriesByTypeData[]) {
        const binned: SeriesByTypeData[][] = []
        let temp = []
        for (let i = 0; i < data.length; i++) {
            temp.push(data[i])
            if (data[i]?.startDate?.slice(0, 4) !== data[i + 1]?.startDate?.slice(0, 4)) {
                binned.push(temp)
                temp = []
            }
        }
        return binned
    }

    setData(data: any) {
        this.setState({
            listData: this.state.listData.concat(data),
        });
    }

    videoOverlayClose() {
        this.setState({
            overlayData: null,
        });
        window.history.pushState({}, 'Videos', this.state.urlHistoryState);
    }

    handleClick(data: any) {
        this.setState({
            overlayData: data,
            urlHistoryState: window.location.href,
        });
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

    fallbackToImage(fallbackUrl: string): EventHandler<SyntheticEvent<HTMLImageElement>> {
        return function (event: SyntheticEvent<HTMLImageElement>) {
            if (!event.currentTarget.src.endsWith(fallbackUrl)) {
                event.currentTarget.src = fallbackUrl;
                event.currentTarget.srcset = '';
            }
        };
    }

    renderVideo(item: VideoByVideoTypeData): JSX.Element | null {
        if (!item) {
            return null;
        }
        return (
            <div onClick={() => this.handleClick(item)} key={item.id ?? ''} className={'ArchiveItemVideo' + (this.props.pageConfig.logoColor === 'white' ? ' whiteText' : '')} >
                <div>
                    <img alt="TBD" className="ArchiveItemVideoThumb" src={(item as VideoByVideoTypeData)?.Youtube?.snippet?.thumbnails?.high?.url ?? ''} />
                    <div className="ArchiveItemPlayImageOverlay"><img alt="Play Icon" src="/static/svg/Play.svg"></img></div>
                    <div className="ArchiveItemEpisodeNum" >{this.props.content.showEpisodeNumbers === false ? null : item.episodeNumber + '. '} {item.episodeTitle}</div>
                    <div className="ArchiveItemSeriesTitle">{item.seriesTitle != null ? item.seriesTitle : null}</div>
                    <div className="ArchiveItemPublishedDate">{item.publishedDate}</div>
                </div>
            </div>);
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
                    key={item.id} className="ArchiveItemVideo">
                    <img alt={item.title + ' series image'}
                        className="ArchiveItemImage2"
                        src={'/static/photos/series/' + item.seriesType + '-' + (item.title ?? '').replace('?', '') + '.jpg'}
                        onError={this.fallbackToImage('/static/NoCompassionLogo.png')}
                    />
                    <div className="ArchiveItemName" >{item.title}</div>
                    <div className="ArchiveItemYearEpisode">{this.showYears(item.startDate, item.endDate)}{videos.length} {videos.length === 1 ? 'Episode' : 'Episodes'}</div>
                </div>
            );
        }
        else {
            console.log({ 'None:': item });
            return null;
        }
    }

    render() {
        if (this.props.data && this.state.listData.length > 0) {
            const videoData = this.state.listData as VideoByVideoTypeData[]
            const seriesData = this.state.listData as SeriesByTypeData[]

            switch (this.props.content.class) {
                case 'series':
                    const binnedSeriesData = this.binSeriesByYear(seriesData);
                    return (
                        <div className="ArchiveItemDiv1">
                            {binnedSeriesData.map((item, index) => {
                                return (
                                    <div key={index} >
                                        <h1 className="ArchiveItemH1">{item[0]?.startDate?.slice(0, 4)}</h1>
                                        <div className="ArchiveItemGrid">
                                            {item.map(item2 => {
                                                return this.renderSeries(item2)
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                            <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
                        </div>
                    )
                case 'videos':
                    const binnedVideoData = this.binVideosByYear(videoData);
                    return (
                        <div className="ArchiveItemDiv1">
                            {binnedVideoData.map((item, index) => {
                                return (
                                    <div key={index} >
                                        <h1 className="ArchiveItemH1">{item[0]?.publishedDate?.slice(0, 4)}</h1>
                                        <div className="ArchiveItemGrid">
                                            {item.map(item2 => {
                                                return this.renderVideo(item2)
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                            <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
                        </div>
                    )
                default:
                    return null
            }
        } else {
            return null
        }
    }
}


export default withRouter(ArchiveItem)
