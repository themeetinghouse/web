
import React from 'react';
import "./VideoPlayerLive.scss"
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
//import moment from 'moment';
import moment from 'moment-timezone';
import { Helmet } from 'react-helmet';

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
  listData: any,
  kidData: any,
  isLive: boolean,
  liveEventJson: any,
  currentSundayDate: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listData: null,
      kidData: null,
      content: props.content,
      data: props.data,
      isLive: false,
      liveEventJson: null,
      currentSundayDate: moment().tz("America/Toronto").isoWeekday(7).format('YYYY-MM-DD')
    }
    fetch('/static/data/sunday-live.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ liveEventJson: myJson })

      })
    console.log({ "VideoPlayer": props.data })
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
  tick() {
    this.state.liveEventJson.forEach((item: any) => {
     
      let start = moment.tz(item.startTime, 'HH:mm',"America/Toronto")
      let end = moment.tz(item.endTime, 'HH:mm',"America/Toronto")
      var rightNow = moment().tz("America/Toronto")
      console.log(rightNow.format())
      console.log(rightNow.weekday())
      console.log(start.format())
      //console.log(rightNow.day())
     
      let pastStart = rightNow.isAfter(start) 
      let beforeEnd = rightNow.isBefore(end) 
      if (item.dayOfWeek === rightNow.weekday() && pastStart === true && beforeEnd === true) {
        console.log("ShowLive")
        this.setState({ isLive: true })
      }
      else {
        this.setState({ isLive: false })
      }
    })
  }
  interval: any
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="LiveVideoPlayerDiv" >
        <Helmet>
          <meta property="og:image" content={"https://img.youtube.com/vi/" + this.state.content.liveYoutubeId + "/maxresdefault.jpg"}/>
          <meta property="og:image:secure_url" content={"https://img.youtube.com/vi/" + this.state.content.liveYoutubeId + "/maxresdefault.jpg"}/>
        </Helmet>
        <div>

          {this.state.content.showLiveVideos ?
            <div>
              <div className="LiveVideoPlayerEpisodeTitleMain">{this.state.content.title}</div>
              <div className="LiveVideoPlayerSeriesMenuContainer" >
                {this.state.content.menu.map((item:any) => {

                  if (item.title === "Notes" && item.linkto === "sunday web notes") {
                    return <div className="LiveVideoPlayerSeriesMenu"><a target="_blank" rel="noopener noreferrer" href={"/notes/" + this.state.currentSundayDate}>{item.title}</a></div>
                  } else {
                    return <div className="LiveVideoPlayerSeriesMenu"><a target="_blank" rel="noopener noreferrer" href={item.linkto}>{item.title}</a></div>
                  }

                })}
               </div>
              {this.state.isLive ?
                <div>
                  <iframe title="Live Teaching" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.content.liveYoutubeId + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  <iframe title="Live Teaching Chat" frameBorder="0" className="LiveVideoPlayerIframe" height="270" src={"https://www.youtube.com/live_chat?v=" + this.state.content.liveYoutubeId + "&embed_domain=www.themeetinghouse.com"} width="480"></iframe><br />
                </div> :
                <div>
                  <iframe title="Teaching Pre-roll" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.content.preRollYoutubeId + "?color=white&autoplay=1&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  <iframe title="Teaching Pre-roll Chat" frameBorder="0" className="LiveVideoPlayerIframe" height="270" src={"https://www.youtube.com/live_chat?v=" + this.state.content.liveYoutubeId + "&embed_domain=www.themeetinghouse.com"} width="480"></iframe><br />
                </div>
              }
            </div>
            : null
          }
          {this.state.content.showAlternateLiveVideos ?
            <div>
              <div className="LiveVideoPlayerEpisodeTitle">Livestream</div>
              <iframe title="Live Teaching" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.content.liveYoutubeId + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              <iframe title="Live Teaching Chat" frameBorder="0" className="LiveVideoPlayerIframe" height="270" src={"https://www.youtube.com/live_chat?v=" + this.state.content.liveYoutubeId + "&embed_domain=www.themeetinghouse.com"} width="480"></iframe><br />

            </div>
            : null
          }

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

      </div>
    )
  }
}