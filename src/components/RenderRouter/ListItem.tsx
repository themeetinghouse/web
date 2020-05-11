import React, { EventHandler, SyntheticEvent } from 'react';
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import DataLoader from './DataLoader';
import HorizontalScrollList from './HorizontalScrollList';
import "./ListItem.scss";
import Fireworks from 'fireworks-react';
import Konami from 'react-konami-code';

interface Props extends RouteComponentProps {
  content: any,
  data: any,
  pageConfig: any

}
interface State {
  content: any,
  listData: any,
  overlayData: any,
  urlHistoryState: any,
  showChampion: any,
  showMoreVideos: boolean
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
    window.history.pushState({}, "Videos", this.state.urlHistoryState)

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
    if (data.series == null)
      console.log({ "You need to create a series for:": data })
    else
      window.history.pushState({}, "Videos", "/videos/" + data.series.id + "/" + data.id)

  }
  dataLoader: DataLoader
  constructor(props: Props) {
    super(props);

    this.state = {
      showChampion: false,
      content: props.content,
      listData: ((props.content.list == null) ? [] : props.content.list),
      overlayData: null,
      urlHistoryState: window.history.state,
      showMoreVideos: false
    }
    this.videoHandler = this.videoHandler.bind(this);
    this.navigate = this.navigate.bind(this);
    this.setData = this.setData.bind(this);
    this.dataLoader = new DataLoader({ ...this.props, dataLoaded: (data: any) => { this.setData(data) } }, this.state)
  }

  videoHandler() {
    this.setState({
      showMoreVideos: true,
    })
  }

  componentDidMount() {
    this.dataLoader.loadData()
  }
  setData(data: any) {
    this.setState({
      listData: this.state.listData.concat(data)
    })
  }
  imgUrl(size: any) {

    if (window.location.hostname === "localhost") {

      return "https://localhost:3006"
    }
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/" + size
    else
      return "https://www.themeetinghouse.com/cache/" + size
  }
  navigateUrlNewWindow(to: string) {
    window.open(
      to,
      '_blank' // <- This is what makes it open in a new window.
    );
  }
  navigateUrl(to: string) {
    window.location.href = to;
  }
  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  renderVideo(item: any) {
    return (
      <div onClick={() => { this.handleClick(item) }} key={item.id} className={"ListItemVideo" + (this.props.pageConfig.logoColor === "white" ? " whiteText" : "")} >
        <div>
          <img alt="TBD" className="ListItemVideoThumb" src={item.Youtube.snippet.thumbnails.high.url} />
          <div className="ListItemPlayImageOverlay"><img alt="Play Icon" src="/static/svg/Play.svg"></img></div>
          <div className="ListItemEpisodeNum" >{this.state.content.showEpisodeNumbers === false ? null : item.episodeNumber + ". "}{item.episodeTitle}</div>
          <div className="ListItemSeriesTitle" >{item.seriesTitle != null ? item.seriesTitle : null}</div>
          <div className="ListItemPublishedDate">{item.publishedDate}</div>
        </div>

      </div>)
  }

  renderCurious(item: any) {
    return (
      <div className="CuriousWrapper">
        <div onClick={() => this.handleClick(item)} key={item.id} className={"ListItemVideo" + (this.props.pageConfig.logoColor === "white" ? " whiteText" : "")} >
          <div className="CuriousBox">
            <div className="CuriousText">{this.state.content.showEpisodeNumbers === false ? null : item.episodeNumber + ". "}{item.episodeTitle}</div>
            <div className="WatchVideoTag">{this.state.content.hovertag}</div>
          </div>
        </div>
      </div>)
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

  renderSpeaker(item: any) {

    return (
      <div key={item.id} className="ListItemTeachingImageDiv" >
        <img alt="TBD" className="ListItemTeachingImage" src="/static/images/teaching-3.png" onError={this.fallbackToImage("/static/Individual.png")} />
        <div className="ListItemEpisodeLength" >{item.name}</div>
        <div>{item.videos.items.length === 10 ? item.videos.items.length + "+" : item.videos.items.length} Episodes</div>
      </div>
    )

  }


  renderOverseer(item: any, index: any) {
    const imgsrc: any = "/static/photos/overseers/" + item.FirstName + "_" + item.LastName + "_app.jpg"
    return (
      <div key={index} className="ListItemDiv3" >

        <img alt={item.photoAlt} className="ListItemImage2"
          onError={this.fallbackToImage("/static/Individual.png")}
          src={this.imgUrl(640) + imgsrc}
          srcSet={this.imgUrl(80) + imgsrc + " 80w," +
            this.imgUrl(120) + imgsrc + " 120w," +
            this.imgUrl(180) + imgsrc + " 180w," +
            this.imgUrl(320) + imgsrc + " 320w," +
            this.imgUrl(480) + imgsrc + " 480w," +
            this.imgUrl(640) + imgsrc + " 640w"}
          sizes="(max-width: 320px) 80px,
                  (max-width: 480px) 120px,
                  (max-width: 640px) 180px,
                  (max-width: 1280px) 320px,
                  (max-width: 1920) 480px,
                  640px"
        />


        <div className="ListItemName" >{item.FirstName} {item.LastName}</div>
        <div className="ListItemPosition" >{item.Position}</div>

      </div>
    )
  }
  renderEvent(item: any) {

    var start_date = new Date(item.start_time.substring(0, item.start_time.length - 2) + ":" + item.start_time.substring(item.start_time.length - 2))
    var durationStr = start_date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
    if (item.end_date != null) {
      var end_date = new Date(item.end_date.substring(0, item.end_date.length - 2) + ":" + item.end_date.substring(item.end_date.length - 2))
      durationStr = durationStr + "-" + end_date.toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    var description
    if (item.description.length > 300) {
      if (item.description.indexOf(" ", 300) === -1)
        description = item.description
      else
        description = item.description.substring(0, item.description.indexOf(" ", 300)) + "..."
    }
    else
      description = item.description
    return (
      <div key={item.id} onClick={() => { this.navigateUrlNewWindow("https://facebook.com/" + item.id) }} className="ListItemEvents" >
        <div style={{ float: "left", marginLeft: "10px", marginRight: "40px" }}>
          <div style={{ fontFamily: "Graphik Web", lineHeight: "3vw", fontSize: "2vw", fontWeight: "bold" }}>{start_date.toLocaleString('default', { month: 'long' })}</div>
          <div style={{ fontFamily: "Graphik Web", lineHeight: "3vw", fontSize: "4vw", fontWeight: "bold" }}>{start_date.getDate()}</div>
        </div>
        <div style={{ margin: "10px" }}>
          <div className="ListItemEventsDescription" >{item.name}</div>
          <div className="ListItemEventsDescription2" >{description}</div>
          {item.place != null ? item.place.name != null ? <div className="ListItemEventsLocation" >{item.place.name}</div> : null : null}
          <div className="ListItemEventsDuration" >{durationStr}</div>
          {/*        <Button className="ListItemEventButton" onClick={() => this.navigate("calendar")}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>
        <Button className="ListItemEventButton" onClick={() => this.navigate("share")}><img src="/static/Share.png" alt="Share Icon" />Share</Button>
    */}       </div>
        <div style={{ clear: "left" }}></div>

      </div>
    )

  }
  easterEgg() {
    this.setState({ showChampion: true })
  }
  renderStaff(item: any, index: any) {
    const imgsrc = "/static/photos/" + (item.Staff == null ? "coordinators" : "staff") + "/" + (item.Staff == null ? item.sites[0] + "_" : "") + item.FirstName + "_" + item.LastName + "_app.jpg"
    return (
      <div key={index} className="ListItemDiv3" >
        {item.FirstName === "James" ? <div>
          <Konami action={() => { this.easterEgg() }}></Konami>
          {this.state.showChampion ?
            (<div><Fireworks style={{ position: "fixed", width: "100%", height: "100%", left: 0, top: 0, zIndex: 20005 }} width={500} height={500} />
              <img alt={item.photoAlt} className="ListItemImage2" style={{ position: "fixed", left: "30%", width: "30%", top: "10%", zIndex: 200004 }}
                onError={this.fallbackToImage("/static/Individual.png")}
                src={"/static/photos/" + (item.Staff == null ? "coordinators" : "staff") + "/" + (item.Staff == null ? item.sites[0] + "_" : "") + item.FirstName + "_" + item.LastName + "_app.jpg"} />
              <h1 style={{ color: "#ffffff", fontSize: 100, position: "fixed", width: "80%", height: "20%", left: "10%", top: "70%", zIndex: 200006 }}>Young Adults Champion</h1></div>)
            : null}
        </div>
          : null
        }

        <img alt={item.photoAlt} className="ListItemImage2"
          onError={this.fallbackToImage("/static/Individual.png")}
          src={this.imgUrl(640) + imgsrc}
          srcSet={this.imgUrl(80) + imgsrc + " 80w," +
            this.imgUrl(120) + imgsrc + " 120w," +
            this.imgUrl(180) + imgsrc + " 180w," +
            this.imgUrl(320) + imgsrc + " 320w," +
            this.imgUrl(480) + imgsrc + " 480w," +
            this.imgUrl(640) + imgsrc + " 640w"}
          sizes="(max-width: 320px) 80px,
                  (max-width: 480px) 120px,
                  (max-width: 640px) 180px,
                  (max-width: 1280px) 320px,
                  (max-width: 1920) 480px,
                  640px"
        />

        <div className="ListItemName" >{item.FirstName} {item.LastName}</div>
        <div className="ListItemPosition" >{item.Position}</div>
        {item.Email != null ? <div className="ListItemEmail"><a href={"mailto:" + item.Email}>Email</a></div> : null}
        {item.Phone != null ? <div className="ListItemPhone">{item.Phone}</div> : null}
        {item.facebook != null ? <a href={"https://www.facebook.com/" + item.facebook} className="ListItemA" ><img className="ListItemFB" src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a> : null}
        {item.instagram != null ? <a href={"https://twitter.com/" + item.instagram} className="ListItemA" ><img className="ListItemTwitter" src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a> : null}
        {item.twitter != null ? <a href={"https://www.instagram.com//" + item.twitter} className="ListItemA" ><img className="ListItemInstagram" src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a> : null}

      </div>
    )
  }
  renderCompassion(item: any) {
    return (
      <div key={item.id} className="ListItemCompassion" >
        <img alt={item.imageAlt} className="ListItemCompassionLogo" src={item.image} onError={this.fallbackToImage("/static/NoCompassionLogo.png")} />
        <div className="ListItemEventsDescription" >{item.name}</div>
        <div className="ListItemEventsDescription2" >{item.description}</div>
        <div>{item.location}</div>
        {item.website != null ? (<div><a className="ListItemWebsite" href={item.website}>Website</a></div>) : null}
        {item.facebook != null ? (<a href={"https://www.facebook.com/" + item.facebook} className="ListItemA" ><img className="ListItemFB" src="/static/svg/Facebook.svg" alt="Facebook Logo" /></a>) : null}
        {item.twitter != null ? (<a href={"https://twitter.com/" + item.twitter} className="ListItemA" ><img className="ListItemTwitter" src="/static/svg/Twitter.svg" alt="Twitter Logo" /></a>) : null}
        {item.instagram != null ? (<a href={"https://www.instagram.com//" + item.instagram} className="ListItemA" ><img className="ListItemInstagram" src="/static/svg/Instagram.svg" alt="Instagram Logo" /></a>) : null}



      </div>
    )
  }
  renderSeries(item: any) {
    if (item.videos.items.length > 0) {
      console.log(item.seriesType + "-" + item.title + ".jpg")
      return (
        <div onClick={() => this.handleClick(item.videos.items.sort((a: any, b: any) => a.episodeNumber > b.episodeNumber)[0])} key={item.id} className="ListItemVideo" >
          <img alt={item.title + " series image"}
            className="ListItemImage2"
            src={"/static/photos/series/" + item.seriesType + "-" + item.title.replace("?", "") + ".jpg"}
            onError={this.fallbackToImage("/static/NoCompassionLogo.png")} />
          <div className="ListItemName" >{item.title}</div>
          <div className="ListYearEpisode">{this.showYears(item.startDate, item.endDate)}{item.videos.items.length} {item.videos.items.length === 1 ? "Episode" : "Episodes"}</div>
        </div>
      )
    }
    else {
      console.log({ "None:": item })
      return null
    }
  }
  renderItemRouter(item: any, index: any) {
    if (this.state.content.class === "speakers")
      return this.renderSpeaker(item)
    else if (this.state.content.class === "videos")
      return this.renderVideo(item)
    else if (this.state.content.class === "staff")
      return this.renderStaff(item, index)
    else if (this.state.content.class === "overseers")
      return this.renderOverseer(item, index)
    else if (this.state.content.class === "events")
      return this.renderEvent(item)
    else if (this.state.content.class === "compassion")
      return this.renderCompassion(item)
    else if (this.state.content.class === "series")
      return this.renderSeries(item)
    else if (this.state.content.class === "curious")
      return this.renderCurious(item)
    else return null
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
          <h1 className={"ListItemH1" + (this.props.pageConfig.logoColor === "white" ? " whiteText" : "")} >{this.state.content.header1}</h1>
          {this.state.content.text1 != null ? (<div className="ListItemText1" >{this.state.content.text1}</div>) : null}
          <div className="ListItemDiv2" >
            <HorizontalScrollList darkMode={this.props.pageConfig.logoColor === "white"}>
              {data.map((item: any, index: any) => {
                return this.renderItemRouter(item, index)

              }
              )}
            </HorizontalScrollList>
            <div className="ListItemDiv5" ></div>
          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
      </div>
    )

    else if (this.state.content.style === "horizontal-video-player") return (
      <div className="ListItem horizontal-video-player" >
        <div className="ListItemDiv1 horizontal-video-player" >
          <h1 className={"ListItemH1 horizontal-video-player" + (this.props.pageConfig.logoColor === "white" ? " whiteText" : "")} >{this.state.content.header1}</h1>
          {this.state.content.text1 != null ? (<div className="ListItemText1" >{this.state.content.text1}</div>) : null}
          <div className="ListItemDiv2" >
            <HorizontalScrollList darkMode={this.props.pageConfig.logoColor === "white"}>
              {data.map((item: any, index: any) => {
                return this.renderItemRouter(item, index)

              }
              )}
            </HorizontalScrollList>
            <div className="ListItemDiv5" ></div>
          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
      </div>
    )

    else if (this.state.content.style === "curious-ui") return (
      <div className="ListItem horizontal" >
        <div className="ListItemDiv1" >
          <h1 className={"ListItemH1" + (this.props.pageConfig.logoColor === "white" ? " whiteText" : "")} >{this.state.content.header1}</h1>
          {this.state.content.text1 != null ? (<div className="CuriousText1" >{this.state.content.text1}</div>) : null}
          <div className="hide-mobile">
            <div className="CuriousContainer">
              {data.slice(0, 6).map((item: any, index: any) => {
                return this.renderItemRouter(item, index)
              }
              )}
            </div>
          </div>

          <div className="hide-desktop">
            {data.slice(0, 3).map((item: any, index: any) => {
              return this.renderItemRouter(item, index)
            }
            )}
            {!this.state.showMoreVideos ? <button className="MoreVideos" onClick={this.videoHandler}>Load 3 More Questions</button> : null}
            {this.state.showMoreVideos ? <div>{data.slice(3, 6).map((item: any, index: any) => { return this.renderItemRouter(item, index) })}</div> : null}
          </div>
        </div>
        <VideoOverlay onClose={() => { this.videoOverlayClose() }} data={this.state.overlayData}></VideoOverlay>
      </div>
    )

    else if (this.state.content.style === "vertical") {
      if (data.length > 0) {
        return (
          <div className="ListItem horizontal" >
            <div className="ListItemDiv1" >
              <h1 className="ListItemH1" >{this.state.content.header1}</h1>
              {this.state.content.text1 != null ? (<div className="ListItemText1" >{this.state.content.text1}</div>) : null}
              <div className="ListItemSpeakersDiv" >
                <HorizontalScrollList>
                  {data.map((item: any, index: any) => {
                    return this.renderItemRouter(item, index)
                  })}
                </HorizontalScrollList>
              </div>
            </div>
          </div>
        )
      } else {
        return null
      }
    }
    else if (this.state.content.style === "horizontalBig") return (
      <div className="ListItem horizontalBig" >
        <div className="ListItemDiv1 ListItemAllSeries" >
          <h1 className="ListItemH1" >{this.state.content.header1}</h1>
          <div className="ListItemDiv6" >
            <HorizontalScrollList>
              {data.map((item: any, index: any) => {
                return this.renderItemRouter(item, index)

              })}
            </HorizontalScrollList>
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
                    <div
                      onClick={() => {
                        if (item.navigateTo)
                          this.navigate(item.navigateTo)
                        else
                          if (item.url)
                            this.navigateUrl(item.url)
                      }}
                      className={"imageList " + (item.url || item.navigateTo ? "hoverText" : "noHoverText")}>
                      <h3 className="ListItemH3" ><img className="arrow" alt="" src="/static/svg/ArrowRight black.svg" />{item.title}</h3>
                      <div className="ListItemDiv11" >{item.text}</div>
                    </div>
                    <img className="ListItemH1ImageList2" src={this.imgUrl(480) + item.imageSrc} alt={item.imageAlt}
                      srcSet={this.imgUrl(320) + item.imageSrc + " 320w," +
                        this.imgUrl(480) + item.imageSrc + " 480w," +
                        this.imgUrl(640) + item.imageSrc + " 640w," +
                        this.imgUrl(1280) + item.imageSrc + " 1280w," +
                        this.imgUrl(1920) + item.imageSrc + " 1920w," +
                        this.imgUrl(2560) + item.imageSrc + " 2560w"}
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
