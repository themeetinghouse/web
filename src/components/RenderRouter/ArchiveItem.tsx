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
    content: any;
    data: any;
    pageConfig: any;
}
interface State {
    listData: listData[];
    overlayData: listData;
    urlHistoryState: string | null;
    selectedYear: string;
    yearOptions: string[];
    currentNextToken: string | null;
}
class ArchiveItem extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            listData: [],
            overlayData: null,
            urlHistoryState: null,
            selectedYear: 'All',
            yearOptions: ['All'],
            currentNextToken: 'placeholder'
        }
    }


    async componentDidMount() {
        const dataLoaded = (data: listData[]) => this.setData(data);
        const listenForNullToken = (data: null) => this.setState({ currentNextToken: data })
        const query = { class: this.props.content.class, subclass: this.props.data, sortOrder: this.props.content.sortOrder };
        switch (query.class) {
            case 'series':
                await DataLoader.getSeriesByType(query, dataLoaded, listenForNullToken);
                return;
            case 'videos':
                await DataLoader.getVideos(query, dataLoaded, listenForNullToken);
                return;
            default:
                console.error(`unknown list data type ${this.props.content.class}`);
                return;
        }
    }

    sliceDate = (item: any) => {
        if (item?.startDate) {
            return item?.startDate?.slice(0, 4)
        }

        if (item?.publishedDate) {
            return item?.publishedDate?.slice(0, 4)
        }

        return null
    }

    binByYear<T>(data: T[], selector: (item: T) => string | undefined | null) {
        const binned = []
        let temp = []
        const years: string[] = ['All']
        for (let i = 0; i < data.length; i++) {
            temp.push(data[i])
            const temp2 = selector(data[i])
            if (temp2 !== selector(data[i + 1])) {
                binned.push(temp)
                temp = []
                if (temp2)
                    years.push(temp2)
            }
        }
        return { binned, years }
    }

    setData(data: listData[]) {
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

    showYears(start: string | null, end: string | null) {
        if (start === null || end === null)
            return null;

        const startYear = new Date(start).getFullYear()
        const endYear = new Date(end).getFullYear()

        if (startYear === endYear)
            return startYear + ' • ';
        else
            return startYear + ' - ' + endYear + ' • ';
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

    renderMedia(item: any) {
        if (item?.publishedDate)
            return this.renderVideo(item)
        if (item?.startDate)
            return this.renderSeries(item)

        return null
    }

    render() {
        if (this.props.data && !this.state.currentNextToken && this.state.listData.length > 0) {
            const binnedData = this.binByYear(this.state.listData, this.sliceDate);
            return (
                <div className="ArchiveItemDiv1">
                    {this.renderYearSelector(binnedData.years)}
                    {binnedData.binned.filter(i => this.state.selectedYear === 'All' || this.sliceDate(i[0]) === this.state.selectedYear.toString()).map((item, index) => {
                        return (
                            <div key={index} >
                                <h1 className="ArchiveItemH1">{this.sliceDate(item[0])}</h1>
                                <div className="ArchiveItemGrid">
                                    {item.map(item2 => {
                                        return this.renderMedia(item2)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
                </div>
            )
        } else {
            if (this.state.listData.length === 0) {
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
            )
        }
    }
}

export default withRouter(ArchiveItem)
