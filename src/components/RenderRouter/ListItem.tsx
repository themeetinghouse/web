
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
//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: any
}
interface State {
  content: any,
  listData: any,
  overlayData: any
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
      overlayData: data

    })
  }
  constructor(props: Props) {
    super(props);

    this.state = {
      content: props.content,
      listData: ((props.content.list == null) ? [] : props.content.list),
      overlayData: null
    }
    this.navigate = this.navigate.bind(this);


    if (this.state.content.class === "videos") {

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
        query: queries.listSeriess,
        variables: { sortOrder: this.state.content.sortOrder, limit: 50 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      listSeriess.then((json: any) => {
        console.log("Success queries.listSeriess: " + json);
        console.log(json)
        this.setState({
          listData: json.data.listSeriess.items
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
      <div className="ListItem horizontal" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 99, left: "20vw", width: "80vw" }}>
          <h1 style={{ position: "relative", left: "0vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.content.header1}</h1>
          <div style={{ position: "relative", left: "0vw", width: "80vw", overflowX: "scroll", whiteSpace: "nowrap" }}>
            {data.map((item: any) => {
              if (this.state.content.class === "speakers") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src="/static/images/teaching-3.png" />
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.content.class === "videos") {
                return (
                  <div onClick={() => this.handleClick(item)} key={item.id} style={{ cursor: "pointer", display: "inline-block", verticalAlign: "top" }}>
                    <div>
                      <img alt="TBD" style={{ width: "20vw", marginRight: "1vw", objectFit: "cover", height: "12vw" }} src={item.Youtube.snippet.thumbnails.high.url} />
                      <div style={{ width: "20vw", fontWeight: "bold", whiteSpace: "normal" }}>{item.episodeNumber}. {item.episodeTitle}</div>
                      <div style={{ width: "20vw", whiteSpace: "normal" }}>{item.seriesTitle != null ? item.seriesTitle : null}</div>
                      <div>{item.publishedDate}</div>
                    </div>

                  </div>
                )
              }
              else return null
            }

            )}

            <div style={{ clear: "left" }} ></div>
          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
      </div>
    )
    else if (this.state.content.style === "vertical") return (
      <div className="ListItem horizontal" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 99, left: "20vw", width: "80vw" }}>
          <h1 style={{ position: "relative", left: "0vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.content.header1}</h1>
          {this.state.content.text1 != null ? (<div style={{ position: "relative", left: "0vw", width: "80vw", fontSize: "1.5vw" }}>{this.state.content.text1}</div>) : null}
          <div style={{ position: "relative", left: "0vw", width: "80vw", overflowX: "scroll", height: "15vw", whiteSpace: "nowrap" }}>
            {data.map((item: any, index: any) => {
              if (this.state.content.class === "speakers") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src="/static/images/teaching-3.png"
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/Individual.png") target.target.src = "/static/Individual.png"; }}
                    />
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.content.class === "videos") {
                return (
                  <div key={item.id} style={{ display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src={item.Youtube.snippet.thumbnails.default.url} />
                    <div style={{ fontWeight: "bold" }}>{item.episodeTitle}</div>
                    <div style={{ fontWeight: "bold" }}>{item.series != null ? item.series : null}</div>
                    <div>{item.publishedDate}</div>

                  </div>
                )
              }
              else if (this.state.content.class === "staff") {
                return (
                  <div key={index} style={{ display: "inline-block", verticalAlign: "top" }}>

                    <img alt={item.photoAlt} style={{ width: "20vw", marginRight: "1vw" }}
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/Individual.png") target.target.src = "/static/Individual.png"; }}
                      src={"/static/photos/" + (item.Staff == null ? "coordinators" : "staff") + "/" + (item.Staff == null ? item.sites[0] + "_" : "") + item.FirstName + "_" + item.LastName + "_app.jpg"} />

                    <div style={{  width: "20vw",whiteSpace: "normal",fontWeight: "bold" }}>{item.FirstName} {item.LastName}</div>
                    <div style={{  width: "20vw",whiteSpace: "normal" }}>{item.Position}</div>
                    <div>{item.Email}</div>
                    <div>{item.Phone}</div>
                    <a href={"https://www.facebook.com/" + item.facebook} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", }} src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>
                    <a href={"https://twitter.com/" + item.instagram} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>
                    <a href={"https://www.instagram.com//" + item.twitter} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>

                  </div>
                )
              }
              else if (this.state.content.class === "overseers") {
                return (
                  <div key={index} style={{ display: "inline-block", verticalAlign: "top" }}>

                    <img alt={item.photoAlt} style={{ width: "20vw", marginRight: "1vw" }}
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/Individual.png") target.target.src = "/static/Individual.png"; }}
                      src={"/static/photos/overseers/" + item.FirstName + "_" + item.LastName + "_app.jpg"} />

                    <div style={{ width: "20vw",whiteSpace: "normal",fontWeight: "bold" }}>{item.FirstName} {item.LastName}</div>
                    <div style={{ width: "20vw",whiteSpace: "normal" }}>{item.Position}</div>

                  </div>
                )
              }
              else if (this.state.content.class === "events") {
                return (
                  <div key={item.id} style={{ display: "inline-block", width: "23vw", verticalAlign: "top" }}>
                    <div style={{ whiteSpace: "normal", fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ whiteSpace: "normal" }}>{item.description}</div>
                    <div>{item.location}</div>
                    <div>{item.time}</div>
                    <Button onClick={() => this.navigate("calendar")}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>
                    <Button onClick={() => this.navigate("share")}><img src="/static/Share.png" alt="Share Icon" />Share</Button>



                  </div>
                )
              }
              else if (this.state.content.class === "compassion") {
                return (
                  <div key={item.id} style={{ display: "inline-block", width: "23vw", verticalAlign: "top" }}>
                    <img alt={item.imageAlt} style={{ height: "10vw", marginRight: "1vw" }} src={item.image}
                      onError={(target: any) => { console.log(target.target); if (target.target.src !== "/static/NoCompassionLogo.png") target.target.src = "/static/NoCompassionLogo.png"; }} />
                    <div style={{ whiteSpace: "normal", fontWeight: "bold" }}>{item.name}</div>
                    <div style={{ whiteSpace: "normal" }}>{item.description}</div>
                    <div>{item.location}</div>
                    {item.website != null ? (<div><a href={item.website}>Website</a></div>) : null}
                    {item.facebook != null ? (<a href={"https://www.facebook.com/" + item.facebook} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", }} src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>) : null}
                    {item.twitter != null ? (<a href={"https://twitter.com/" + item.twitter} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>) : null}
                    {item.instagram != null ? (<a href={"https://www.instagram.com//" + item.instagram} style={{ color: "#1A1A1A" }}><img style={{ marginRight: "0.5vw", marginLeft: "3vw" }} src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>) : null}



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
      <div className="ListItem horizontalBig" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 99, left: "20vw", width: "80vw" }}>
          <h1 style={{ position: "relative", left: "0vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.content.header1}</h1>
          <div style={{ position: "relative", left: "0vw", width: "80vw", overflowX: "scroll", height: "30vw", whiteSpace: "nowrap" }}>
            {data.map((item: any) => {
              if (item.videos.items.length > 0)
                return (
                  <div onClick={() => this.handleClick(item.videos.items.sort((a: any, b: any) => a.episodeNumber > b.episodeNumber)[0])} key={item.id} style={{ cursor: "pointer", display: "inline-block", verticalAlign: "top" }}>
                    <img alt="TBD" style={{ width: "20vw", marginRight: "1vw" }} src="/static/images/teaching-4.png" />
                    <div style={{ width: "20vw", whiteSpace: "normal", fontWeight: "bold" }}>{item.title}</div>
                    <div>{this.showYears(item.startDate, item.endDate)}{item.videos.items.length} Episodes</div>
                  </div>
                )
              else return null
            })}

            <div style={{ clear: "left" }} ></div>

          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>

      </div>
    )
    else if (this.state.content.style === "imageList") return (
      <div className="ListItem imageList" style={{ position: "static", width: "100vw", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "80vw", zIndex: 99 }}>
          <h1 style={{ fontSize: "3vw", fontWeight: "bold", fontFamily: "Graphik Web" }}>{this.state.content.header1}</h1>
          <h2>{this.state.content.header2}</h2>
          <div style={{ width: "80vw", fontSize: "1.5vw", fontFamily: "Graphik Web", paddingBottom: "1vw" }}>{this.state.content.text1}</div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "12.5vw", width: "5vw", bottom: "0vw", top: "0vw", borderColor: "#0000ff", border: "solid 10px" }}></div>
            {
              data.map((item: any, index: any) => {
                return (
                  <div style={{ position: "relative", zIndex: 99 }} key={index}>
                    <div onClick={() => {item.navigateTo?this.navigate(item.navigateTo):this.navigateUrl(item.url)}} className="imageList hoverText">
                      <h3 style={{ width: "40vw", fontSize: "2vw", fontFamily: "Graphik Web" }}>{item.title}</h3>
                      <div style={{ width: "40vw", fontSize: "1.25vw", fontFamily: "Graphik Web" }}>{item.text}</div>
                    </div>
                    <img style={{ position: "absolute", height: "20vw", width: "30vw", left: "0vw", objectFit: "cover", top: "2.5vw" }} src={item.imageSrc} alt={item.imageAlt} />
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
