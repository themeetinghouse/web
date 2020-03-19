
import React from 'react';
import "./VideoPlayerLive.scss"
import * as queries from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';

interface Props {
  content: any,
  data: any
}
interface State {
  data: any,
  content: any,
  listData: any,
  kidData: any
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listData: null,
      kidData: null,
      content: props.content,
      data: props.data
    }
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
  render() {
    return (
      
          <div className="LiveVideoPlayerDiv" >
            {this.state.content.showNotes ?
            <div>
              <div className="LiveVideoPlayerEpisodeTitle">Today's Teaching Notes</div>
              <div className="LiveVideoPlayerExtra">
                <div className="LiveVideoPlayerSeriesNotes"><a href="http://media.themeetinghouse.com/podcast/handouts/Oakville.pdf">Oakville Location</a></div>
                <br />
                <div className="LiveVideoPlayerSeriesNotes"><a href="http://media.themeetinghouse.com/podcast/handouts/Regional.pdf">Regional Locations</a></div>
                <div className="LiveVideoPlayerClear"></div>
              </div>
              <div className="LiveVideoPlayerExtra">
                <div className="LiveVideoPlayerSeriesNotes">Click on one of the locations above to access today's teaching notes. Notes are updated on Sunday and will be available again on Monday on the teaching page.</div>
              </div>
            </div>:null
          }
        {/* <div className="LiveVideoPlayerExtra">
          <div className="LiveVideoPlayerSeriesNotes"><a href="TODO">KidMax Sign-In</a></div>
          <div className="LiveVideoPlayerClear"></div>
        </div>
        */}
            {this.state.content.showLiveVideos ? (
              <div>
                <br />
                <br />
                <br />
                <div className="LiveVideoPlayerEpisodeTitle">&nbsp;</div>
                {this.state.content.showOakvilleLiveExperience ?

                  <div><div className="LiveVideoPlayerEpisodeTitle">All Sites Livestream</div>
                    <div className="LiveVideoPlayerExtra">
                      <div className="LiveVideoPlayerSeriesNotes">
                        <a href="https://themeetinghouse.online.church">All Sites Live Experience</a> @ 10:00am
              </div>
                    </div><br /><br />
                  </div> : null
                }
                {this.state.content.showRegionalLiveExperience ?
                  <div>
                    <div className="LiveVideoPlayerEpisodeTitle">Regional Livestream</div>
                    <div className="LiveVideoPlayerExtra">
                      <div className="LiveVideoPlayerSeriesNotes">
                        <a href="https://tmhregional.online.church">Regional Live Experience</a> @ 10am
              </div>
                    </div><br /><br /><br /><br /><br /><br />
                  </div> : null
                }
                {this.state.content.showOakvilleLiveVideos ?
                  <div>
                    <div className="LiveVideoPlayerEpisodeTitle">Oakville Livestream</div>

                    <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.content.oakvilleLiveYoutubeId + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  </div>
                  : null
                }
                {this.state.content.showRegionalLiveVideos ?
                  <div>
                    <div className="LiveVideoPlayerEpisodeTitle">Regional Livestream</div>

                    <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.content.regionalLiveYoutubeId + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  </div>
                  : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">Regional Recording</div>
                {this.state.listData ?
                  <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.listData[0].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">KidMax Recording</div>
                {this.state.kidData ?
                  <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[0].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">JrHigh Recording</div>
                {this.state.kidData ?
                  this.state.kidData[1] ?
                    <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[1].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    : null : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">Youth Recording</div>
                {this.state.kidData ?
                  this.state.kidData[2] ?
                    <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[2].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    : null : null
                }
                <div className="LiveVideoPlayerEpisodeTitle">Sr High Recording</div>
                {this.state.kidData ?
                  this.state.kidData[3] ?
                    <iframe title="Youtube Player" className="LiveVideoPlayerIframe" allowFullScreen src={"https://www.youtube.com/embed/" + this.state.kidData[3].id + "?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0"} frameBorder="0" allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    : null : null
                }
              </div>
            ) : null}
          </div>


    )

      }
}
