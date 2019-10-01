
import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from 'react-router-dom';

//import { Button } from 'reactstrap';
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import VideoOverlay from '../VideoOverlay/VideoOverlay'
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import "./ListItem.scss"

//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: any,
  data:any

}
interface State {
  content: any,
  listData: any,
  overlayData: any,
  urlHistoryState: any
}
class ListItem extends React.Component<Props, State> {
  static contextTypes = {
    router: PropTypes.object,
    history: PropTypes.object
  }
  videoOverlayClose() {
    this.setState({
      overlayData: null
    })
    window.history.pushState({},"Videos",this.state.urlHistoryState, )

  }
  showYears(start: any, end: any) {
    if (start === null || end === null)
      return null
    else
      if (new Date(start).getFullYear() === new Date(end).getFullYear())
        return new Date(start).getFullYear() + " • "
      else
        return new Date(start).getFullYear() + " - " + new Date(end).getFullYear() + " • "
  }
  handleClick(data: any) {
    this.setState({
      overlayData: data,
      urlHistoryState: window.location.href
    })
    window.history.pushState({},"Videos","videos/"+data.series.id+"/"+data.episodeNumber, )
   
  }
  constructor(props: Props) {
    super(props);

    this.state = {
      content: props.content,
      listData: ((props.content.list == null) ? [] : props.content.list),
      overlayData: null,
      urlHistoryState:window.history.state
    }
    this.navigate = this.navigate.bind(this);


    if (this.state.content.class === "videos") {
      if (this.state.content.selector==="sameSeries")
      {
        const getSeries = API.graphql({
          query: queries.getSeries,
          //    const listVideos = API.graphql({query:queries.getVideo, 
          variables: { sortDirection: this.state.content.sortOrder, limit: 50, id: this.props.data.series.id},
          //variables:{ sortDirection: this.state.content.sortOrder, limit: 50, id { lt: "a" } },
          authMode: GRAPHQL_AUTH_MODE.API_KEY
        });
        getSeries.then((json: any) => {
          console.log("Success queries.getSeries: " + json);
          console.log(json)
          this.setState({
            listData: json.data.getSeries.videos.items
          })
        }).catch((e: any) => { console.log(e) })
      }
      else{
      const listVideos = API.graphql({
        query: queries.getVideoByVideoType,
        //    const listVideos = API.graphql({query:queries.getVideo,
        variables: { sortDirection: this.state.content.sortOrder, limit: 50, videoTypes: this.state.content.subclass, publishedDate: { lt: "a" } },
        //variables:{ sortDirection: this.state.content.sortOrder, limit: 50, id { lt: "a" } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      listVideos.then((json: any) => {
        console.log("Success queries.listVideos: " + json);
        console.log(json)
        this.setState({
          listData: json.data.getVideoByVideoType.items
        })
      }).catch((e: any) => { console.log(e) })
    }
    }
    else if (this.state.content.class === "speakers") {
      const listSpeakers = API.graphql(graphqlOperation(queries.listSpeakers, { sortOrder: this.state.content.sortOrder, limit: 50 }));
      listSpeakers.then((json: any) => {
        console.log("Success queries.listSpeakers: " + json);
        console.log(json)
        this.setState({
          listData: json.data.listSpeakers.items
        })
      }).catch((e: any) => { console.log(e) })
    }
    else if (this.state.content.class === "series") {

      const listSeriess = API.graphql({
        query: queries.getSeriesBySeriesType,
        variables: { sortDirection: this.state.content.sortOrder, limit: 50,seriesType: this.state.content.subclass,publishedDate: { lt: "a" } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      listSeriess.then((json: any) => {
        console.log("Success queries.listSeriess: " + json);
        console.log(json)
        this.setState({
          listData: json.data.getSeriesBySeriesType.items
        })
      }).catch((e: any) => { console.log(e) })
    }
    else if (this.state.content.class === "staff") {
      fetch('./static/data/staff.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          if (this.state.content.filterField === "sites") {
            fetch('./static/data/coordinators.json').then(function (response) {
              return response.json();
            }).then((myJson2) => {
              this.setState({ listData: myJson.concat(myJson2) })
            })

          }
          else {
            this.setState({ listData: myJson });
          }
        })

    }
    else if (this.state.content.class === "overseers") {
      fetch('./static/data/overseers.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          this.setState({ listData: myJson });
        })

    }
    else if (this.state.content.class === "events") {
      fetch('./static/data/events.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          this.setState({ listData: myJson });
        })

    }
    else if (this.state.content.class === "compassion") {
      fetch('./static/data/compassion.json').then(function (response) {
        return response.json();
      })
        .then((myJson) => {
          this.setState({ listData: myJson });
        })

    }
  }

  imgUrl(size:any){
   
    if (window.location.hostname==="localhost"){
   
        return "https://localhost:3006"
    }
    else
     return "https://beta.themeetinghouse.com/cache/"+size
}

  navigateUrl(to:string){
    window.location.href=to;
  }
  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }
  render() {
    var data
    (this.props.content.filterField == null) ? data = this.state.listData :
      data = this.state.listData.filter((item: any) => {
        return item[this.props.content.filterField].includes(this.props.content.filterValue)
      })

    if (this.state.content.style === "horizontal") return (
      <div className="ListItem horizontal" >
        <div className="ListItemDiv1" >
          <h1 className="ListItemH1" >{this.state.content.header1}</h1>
          <div className="ListItemDiv2" >
            {data.map((item: any) => {
              if (this.state.content.class === "speakers") {
                return (
                  <div className="ListItemDiv3" key={item.id} >
                    <img className="ListItemImage" alt="TBD" src="/static/images/teaching-3.png" />
                    <div className="ListItemDiv4" >{item.name}</div>
                    <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.content.class === "videos") {
                return (
                  <div onClick={() => this.handleClick(item)} key={item.id} className="ListItemVideo" >
                    <div>
                      <img alt="TBD" className="ListItemVideoThumb" src={item.Youtube.snippet.thumbnails.high.url} />
                      <div className="ListItemEpisodeNum" >{item.episodeNumber}. {item.episodeTitle}</div>
                      <div className="ListItemSeriesTitle" >{item.seriesTitle != null ? item.seriesTitle : null}</div>
                      <div>{item.publishedDate}</div>
                    </div>

                  </div>
                )
              }
              else return null
            }

            )}

            <div className="ListItemDiv5" ></div>
          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
      </div>
    )
    else if (this.state.content.style === "vertical") return (
      <div className="ListItem horizontal" >
        <div className="ListItemDiv1" >
          <h1 className="ListItemH1" >{this.state.content.header1}</h1>
          {this.state.content.text1 != null ? (<div className="ListItemText1" >{this.state.content.text1}</div>) : null}
          <div className="ListItemSpeakersDiv" >
            {data.map((item: any, index: any) => {
              if (this.state.content.class === "speakers") {
                return (
                  <div key={item.id} className="ListItemTeachingImageDiv" >
                    <img alt="TBD" className="ListItemTeachingImage" src="/static/images/teaching-3.png"
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/Individual.png") target.target.src = "/static/Individual.png"; }}
                    />
                    <div className="ListItemEpisodeLength" >{item.name}</div>
                    <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.content.class === "videos") {
                return (
                  <div key={item.id} className="ListItemDiv3" >
                    <img alt="TBD" className="ListItemImage"  src={item.Youtube.snippet.thumbnails.default.url} />
                    <div className="ListItemDiv4" >{item.episodeTitle}</div>
                    <div className="ListItemDiv4" >{item.series != null ? item.series : null}</div>
                    <div>{item.publishedDate}</div>

                  </div>
                )
              }
              else if (this.state.content.class === "staff") {
                return (
                  <div key={index} className="ListItemDiv3" >

                    <img alt={item.photoAlt} className="ListItemImage2"
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/Individual.png") target.target.src = "/static/Individual.png"; }}
                      src={"/static/photos/" + (item.Staff == null ? "coordinators" : "staff") + "/" + (item.Staff == null ? item.sites[0] + "_" : "") + item.FirstName + "_" + item.LastName + "_app.jpg"} />

                    <div className="ListItemName" >{item.FirstName} {item.LastName}</div>
                    <div className="ListItemContact" >{item.Position}</div>
                    <div>{item.Email}</div>
                    <div>{item.Phone}</div>
                    <a href={"https://www.facebook.com/" + item.facebook} className="ListItemA" ><img className="ListItemFB"  src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>
                    <a href={"https://twitter.com/" + item.instagram} className="ListItemA" ><img className="ListItemTwitter"  src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>
                    <a href={"https://www.instagram.com//" + item.twitter} className="ListItemA" ><img className="ListItemInstagram"  src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>

                  </div>
                )
              }
              else if (this.state.content.class === "overseers") {
                return (
                  <div key={index} className="ListItemDiv3" >

                    <img alt={item.photoAlt} className="ListItemImage2"
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/Individual.png") target.target.src = "/static/Individual.png"; }}
                      src={"/static/photos/overseers/" + item.FirstName + "_" + item.LastName + "_app.jpg"} />

                    <div className="ListItemName" >{item.FirstName} {item.LastName}</div>
                    <div className="ListItemPosition" >{item.Position}</div>

                  </div>
                )
              }
              else if (this.state.content.class === "events") {
                return (
                  <div key={item.id} className="ListItemEvents" >
                    <div className="ListItemEventsDescription" >{item.name}</div>
                    <div className="ListItemEventsDescription2" >{item.description}</div>
                    <div>{item.location}</div>
                    <div>{item.time}</div>
                    <Button onClick={() => this.navigate("calendar")}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>
                    <Button onClick={() => this.navigate("share")}><img src="/static/Share.png" alt="Share Icon" />Share</Button>



                  </div>
                )
              }
              else if (this.state.content.class === "compassion") {
                return (
                  <div key={item.id} className="ListItemCompassion" >
                    <img alt={item.imageAlt} className="ListItemCompassionLogo"  src={item.image}
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/NoCompassionLogo.png") target.target.src = "/static/NoCompassionLogo.png"; }} />
                    <div className="ListItemEventsDescription" >{item.name}</div>
                    <div className="ListItemEventsDescription2" >{item.description}</div>
                    <div>{item.location}</div>
                    {item.website != null ? (<div><a href={item.website}>Website</a></div>) : null}
                    {item.facebook != null ? (<a href={"https://www.facebook.com/" + item.facebook} className="ListItemA" ><img className="ListItemFB"  src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>) : null}
                    {item.twitter != null ? (<a href={"https://twitter.com/" + item.twitter} className="ListItemA" ><img className="ListItemTwitter"  src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>) : null}
                    {item.instagram != null ? (<a href={"https://www.instagram.com//" + item.instagram} className="ListItemA" ><img className="ListItemInstagram"  src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>) : null}



                  </div>
                )
              }
              else return null
            })}

            <div style={{ clear: "left" }} ></div>
          </div>
        </div>
      </div>
    )
    else if (this.state.content.style === "horizontalBig") return (
      <div className="ListItem horizontalBig" >
        <div className="ListItemDiv1" >
          <h1 className="ListItemH1" >{this.state.content.header1}</h1>
          <div className="ListItemDiv6" >
            {data.map((item: any) => {
              if (item.videos.items.length > 0)
                return (
                  <div onClick={() => this.handleClick(item.videos.items.sort((a: any, b: any) => a.episodeNumber > b.episodeNumber)[0])} key={item.id} className="ListItemVideo" >
                    <img alt="TBD" className="ListItemImage2"  src="/static/images/teaching-4.png" />
                    <div className="ListItemName" >{item.title}</div>
                    <div>{this.showYears(item.startDate, item.endDate)}{item.videos.items.length} Episodes</div>
                  </div>
                )
              else return null
            })}

            <div className="ListItemDiv5" ></div>

          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>

      </div>
    )
    else if (this.state.content.style === "imageList") return (
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
                    <div onClick={() => {item.navigateTo?this.navigate(item.navigateTo):this.navigateUrl(item.url)}} className="imageList hoverText">
                      <h3 className="ListItemH3" >{item.title}</h3>
                      <div className="ListItemDiv11" >{item.text}</div>
                    </div>
                    <img className="ListItemH1ImageList2"  src={this.imgUrl(480)+item.imageSrc} alt={item.imageAlt} 
                        srcSet={this.imgUrl(320)+item.imageSrc+" 320w,"+
                        this.imgUrl(480)+item.imageSrc+" 480w,"+
                        this.imgUrl(640)+item.imageSrc+" 640w,"+
                        this.imgUrl(1280)+item.imageSrc+" 1280w,"+
                        this.imgUrl(1920)+item.imageSrc+" 1920w,"+
                        this.imgUrl(2560)+item.imageSrc+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
    return (null)
  }
}
export default withRouter(ListItem)
