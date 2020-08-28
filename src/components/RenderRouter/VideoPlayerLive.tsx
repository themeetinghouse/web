
import React from 'react';
import "./VideoPlayerLive.scss"
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
//import moment from 'moment';
import moment from 'moment-timezone';
import { Helmet } from 'react-helmet';
import { ListLivestreamsQuery } from '../../API';
import { Link } from 'components/Link/Link';

type LiveData = NonNullable<NonNullable<NonNullable<ListLivestreamsQuery['listLivestreams']>['items']>[0]>;

interface Props {
  content: any,
}
interface State {
  content: any,
  listData: any,
  kidData: any,
  isLive: boolean,
  liveEvent: LiveData | null,
  currentSundayDate: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listData: null,
      kidData: null,
      content: props.content,
      isLive: false,
      liveEvent: null,
      currentSundayDate: moment().tz("America/Toronto").isoWeekday(7).format('YYYY-MM-DD')
    }
    this.getLive()
    const getVideoByVideoType: any = API.graphql({
      query: queries.getVideoByVideoType,
      variables: { sortDirection: "DESC", limit: 2, videoTypes: 'adult-sunday', publishedDate: { lt: "a" } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    getVideoByVideoType.then((json: any) => {
      console.log("Success queries.getVideoByVideoType: " + json);
      console.log(json)
      this.setState({
        listData: json.data.getVideoByVideoType.items
      })
    }).catch((e: any) => { console.log(e) })

    const getVideoByVideoType1: any = API.graphql({
      query: queries.getVideoByVideoType,
      variables: { sortDirection: "DESC", limit: 1, videoTypes: "ky-kids", publishedDate: { lt: "a" } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    const getVideoByVideoType2: any = API.graphql({
      query: queries.getVideoByVideoType,
      variables: { sortDirection: "DESC", limit: 1, videoTypes: "ky-jrhigh", publishedDate: { lt: "a" } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    const getVideoByVideoType3: any = API.graphql({
      query: queries.getVideoByVideoType,
      variables: { sortDirection: "DESC", limit: 1, videoTypes: "ky-youth", publishedDate: { lt: "a" } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    const getVideoByVideoType4: any = API.graphql({
      query: queries.getVideoByVideoType,
      variables: { sortDirection: "DESC", limit: 1, videoTypes: "ky-srhigh", publishedDate: { lt: "a" } },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    getVideoByVideoType1.then((json1: any) => {
      console.log({ "Success queries.getVideoByVideoType: ": json1 });
      this.setState({
        kidData: json1.data.getVideoByVideoType.items
      })
      getVideoByVideoType2.then((json2: any) => {
        console.log({ "Success queries.getVideoByVideoType: ": json2 });
        this.setState({
          kidData: this.state.kidData.concat(json2.data.getVideoByVideoType.items)
        })
        getVideoByVideoType3.then((json3: any) => {
          console.log({ "Success queries.getVideoByVideoType: ": json3 });
          this.setState({
            kidData: this.state.kidData.concat(json3.data.getVideoByVideoType.items)
          })
          getVideoByVideoType4.then((json4: any) => {
            console.log({ "Success queries.getVideoByVideoType: ": json4 });
            this.setState({
              kidData: this.state.kidData.concat(json4.data.getVideoByVideoType.items)
            })
          }).catch((e: any) => { console.log(e) })
        }).catch((e: any) => { console.log(e) })
      }).catch((e: any) => { console.log(e) })
    }).catch((e: any) => { console.log(e) })

  }

  async getLive() {
    const today = moment.tz("America/Toronto").format('YYYY-MM-DD')
    try {
      const json: any = await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const livestreams: ListLivestreamsQuery = json.data
      livestreams?.listLivestreams?.items?.forEach(item => {
        const rightNow = moment().tz("America/Toronto").format('HH:mm')
        const showTime = item?.startTime && item?.endTime && rightNow >= item.startTime && rightNow <= item.endTime
        if (showTime) {
          this.setState({ liveEvent: item })
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  tick() {
    const start = this.state.liveEvent?.videoStartTime
    const end = this.state.liveEvent?.endTime
    const rightNow = moment().tz("America/Toronto").format('HH:mm')
    if (start && end) {
      const showTime = rightNow >= start && rightNow <= end
      if (showTime) {
        console.log("ShowLive")
        this.setState({ isLive: true })
      }
    }
    else {
      this.setState({ isLive: false })
    }
  }
  interval: any
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.liveEvent) {
      return (
        <div className="LiveVideoPlayerDiv" >
          <Helmet>
            <meta property="og:url" content="https://www.themeetinghouse.com/live" />
            <meta property="og:title" content="The Meeting House - Live" />
            <meta property="og:description" content="" />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="579712102531269" />
            <meta property="og:image" content={"https://img.youtube.com/vi/" + this.state.liveEvent.liveYoutubeId + "/maxresdefault.jpg"} />
            <meta property="og:image:secure_url" content={"https://img.youtube.com/vi/" + this.state.liveEvent.liveYoutubeId + "/maxresdefault.jpg"} />
            <meta property="og:image:type" content="image/jpeg" />

            <meta property="twitter:title" content="The Meeting House - Live" />
            <meta property="twitter:creator" content="@TheMeetingHouse" />
            <meta property="twitter:image" content={"https://img.youtube.com/vi/" + this.state.liveEvent.liveYoutubeId + "/maxresdefault.jpg"} />
            <meta property="twitter:description" content="" />
            <meta property="twitter:url" content="https://www.themeetinghouse.com/live" />
            <meta property="twitter:card" content="summary" />
          </Helmet>
          <div>
            <div>
              <div className="LiveVideoPlayerEpisodeTitleMain">{this.state.content.title}</div>
              <div className="LiveVideoPlayerSeriesMenuContainer" >
                {this.state.liveEvent.menu && this.state.liveEvent.menu.length > 0 ? this.state.liveEvent.menu.map((item: any, index: number) => {
                  if (item.linkType !== 'notes' && item.linkType !== 'link') {
                    return null;
                  }
                  const href = item.linkType === 'notes'
                    ? `/notes/${this.state.currentSundayDate}`
                    : item.link;
                  return <div key={index} className="LiveVideoPlayerSeriesMenu">
                    <Link newWindow to={href}>{item.title}</Link>
                  </div>
                }) : null}
              </div>
              {this.state.isLive ?
                <div>
                  <iframe title="Live Teaching" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.liveEvent.liveYoutubeId + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  {this.state.liveEvent.showChat ? <iframe title="Live Teaching Chat" frameBorder="0" className="LiveVideoPlayerIframe" height="270" src={"https://www.youtube.com/live_chat?v=" + this.state.liveEvent.liveYoutubeId + "&embed_domain=www.themeetinghouse.com"} width="480"></iframe> : null}
                  <br />
                </div> :
                <div>
                  <iframe title="Teaching Pre-roll" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.liveEvent.prerollYoutubeId + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  {this.state.liveEvent.showChat ? <iframe title="Teaching Pre-roll Chat" frameBorder="0" className="LiveVideoPlayerIframe" height="270" src={"https://www.youtube.com/live_chat?v=" + this.state.liveEvent.prerollYoutubeId + "&embed_domain=www.themeetinghouse.com"} width="480"></iframe> : null}
                  <br />
                </div>
              }
              {this.state.liveEvent.zoom && this.state.liveEvent.zoom.length > 0 ?
                <div className="ZoomGrid">
                  {this.state.liveEvent.zoom.map((item, index) => {
                    const watchText =
                      item?.link.toLowerCase().includes('zoom') ? 'Watch on Zoom'
                        : item?.link.toLowerCase().includes('youtube') || item?.link.toLowerCase().includes('youtu.be') ? 'Watch on YouTube'
                          : item?.link.toLowerCase().includes('crowdcast') ? 'Watch on Crowdcast'
                            : 'Watch'
                    return <a className="ZoomItem" key={index} href={item?.link} target="_blank" rel="noopener noreferrer">
                      <div className="ZoomText" >{item?.title}</div>
                      <div className="WatchVideoTag">{watchText}</div>
                    </a>
                  })}
                </div> : null}
            </div>
            {this.state.liveEvent.showKids ?
              <div>
                <div className="LiveVideoPlayerEpisodeTitle">Parent Blog</div>
                <div className="LiveVideoPlayerText">For Church at Home activities and more, check out the <a href="http://kidsandyouth.themeetinghouse.com/blog/">Parent Blog</a></div>
                <div className="LiveVideoPlayerEpisodeTitle">Kidmax (6-10 Years Old)</div>
                {this.state.kidData ?
                  <iframe title="Kids Video" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[0].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">JrHigh (11-13 Years Old)</div>
                {this.state.kidData ?
                  this.state.kidData[1] ?
                    <iframe title="Jr High Video" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[1].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    : null : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">Youth (14-18 Years Old)</div>
                {this.state.kidData ?
                  this.state.kidData[2] ?
                    <iframe title="Youth Video" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[2].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    : null : null
                }
              </div>
              :
              null}
          </div>
        </div>
      )
    } else {
      return (
        <div className="LiveVideoPlayerDiv" >
          <div className="LiveVideoPlayerEpisodeTitleMain">{this.state.content.title}</div>
          <div className="LiveVideoPlayerSeriesMenuContainer" >
            {this.state.content.menu.map((item: any, index: number) => {
              const href = item.title === 'Notes' && item.linkto === 'web-notes'
                ? `/notes/${this.state.currentSundayDate}`
                : item.linkto;
              return <div key={index} className="LiveVideoPlayerSeriesMenu">
                <Link newWindow to={href}>{item.title}</Link>
              </div>
            })}
          </div>
          <div>
            <iframe title="Teaching Pre-roll" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/na1g4ht-yNs?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe><br />
          </div>
        </div>
      )
    }

  }
}