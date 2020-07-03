
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
    selectedYear: string
    yearOptions: string[]
    currentNextToken: string | null
}
class ArchiveItem extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            listData: [],
            overlayData: null,
            urlHistoryState: window.history.state,
            selectedYear: 'All',
            yearOptions: ['All'],
            currentNextToken: 'placeholder'
        }
    }

    async componentDidMount() {
        const dataLoaded = (data: listData[]) => this.setData(data);
        const checkNext = (data: string | null) => this.setState({ currentNextToken: data })
        const query = { selector: 'all', class: this.props.content.class, subclass: this.props.data, sortOrder: this.props.content.sortOrder };
        switch (query.class) {
            case 'series':
                await DataLoader.getSeriesByType(query, dataLoaded, checkNext);
                return;
            case 'videos':
                await DataLoader.getVideos(query, dataLoaded, checkNext);
                return;
            default:
                console.error(`unknown list data type ${this.props.content.class}`);
                return;
        }
    }

    componentDidUpdate() {
        console.log(this.state.currentNextToken)
    }

    binVideosByYear(data: VideoByVideoTypeData[]) {
        const binned: VideoByVideoTypeData[][] = []
        let temp = []
        const years: string[] = ['All']
        for (let i = 0; i < data.length; i++) {
            temp.push(data[i])
            if (data[i]?.publishedDate?.slice(0, 4) !== data[i + 1]?.publishedDate?.slice(0, 4)) {
                const temp2 = data[i]?.publishedDate?.slice(0, 4)
                if (temp2)
                    years.push(temp2)
                binned.push(temp)
                temp = []
            }
        }

        return { binned: binned, years: years }
    }

    binSeriesByYear(data: SeriesByTypeData[]) {
        const binned: SeriesByTypeData[][] = []
        let temp = []
        const years: string[] = ['All']
        for (let i = 0; i < data.length; i++) {
            temp.push(data[i])
            if (data[i]?.startDate?.slice(0, 4) !== data[i + 1]?.startDate?.slice(0, 4)) {
                const temp2 = data[i]?.startDate?.slice(0, 4)
                if (temp2)
                    years.push(temp2)
                binned.push(temp)
                temp = []
            }
        }
        return { binned: binned, years: years }
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

    renderYearSelector(options: string[]) {
        return (
            <div className="ArchiveSelectByYear">
                {options.map((option, index) => {
                    return <div className={this.state.selectedYear === option ? "SelectedYearOption" : "SelectByYearOption"} key={index} onClick={() => this.setState({ selectedYear: option })}>{option}</div>
                })}
            </div>
        )
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
            return null;
        }
    }

    render() {
        if (this.props.data && !this.state.currentNextToken && this.state.listData.length > 0) {
            const videoData = this.state.listData as VideoByVideoTypeData[]
            const seriesData = this.state.listData as SeriesByTypeData[]

            switch (this.props.content.class) {
                case 'series':
                    const binnedSeriesData = this.binSeriesByYear(seriesData);
                    return (
                        <div className="ArchiveItemDiv1">
                            {this.renderYearSelector(binnedSeriesData.years)}
                            {binnedSeriesData.binned.filter(i => this.state.selectedYear === 'All' ? true : i[0]?.startDate?.slice(0, 4) === this.state.selectedYear.toString()).map((item, index) => {
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
                            {this.renderYearSelector(binnedVideoData.years)}
                            {binnedVideoData.binned.filter(i => this.state.selectedYear === 'All' ? true : i[0]?.publishedDate?.slice(0, 4) === this.state.selectedYear.toString()).map((item, index) => {
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
            if (this.state.listData.length > 0) {
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
                )
            }
            return null
        }
    }
}


export default withRouter(ArchiveItem)
