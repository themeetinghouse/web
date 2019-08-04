
import React from 'react';
import { Button } from 'reactstrap';
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);

interface Props {
  data: any
}
interface State {
  data: any,
  listData: any
}
export default class ListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data,
      listData: []
    }

    if (this.state.data.class == "videos") {
      const listVideos = API.graphql(graphqlOperation(queries.getVideoByVideoType, { limit: 50, videoTypes: this.state.data.subclass, publishedDate: { lt: "a" } }));
      listVideos.then((json: any) => {
        console.log("Success queries.listVideos: " + json);
        console.log(json)
        this.setState({
          listData: json.data.getVideoByVideoType.items
        })
      })
    }
    else if (this.state.data.class == "speakers") {
      const listSpeakers = API.graphql(graphqlOperation(queries.listSpeakers, { limit: 50 }));
      listSpeakers.then((json: any) => {
        console.log("Success queries.listSpeakers: " + json);
        console.log(json)
        this.setState({
          listData: json.data.listSpeakers.items
        })
      })
    }
    else if (this.state.data.class == "series") {
      const listSeriess = API.graphql(graphqlOperation(queries.listSeriess, { limit: 50 }));
      listSeriess.then((json: any) => {
        console.log("Success queries.listSeriess: " + json);
        console.log(json)
        this.setState({
          listData: json.data.listSeriess.items
        })
      })
    }
  }
  render() {

    if (this.state.data.style === "text") return (
      <div className="ListItem text">
        <h1>{this.state.data.header1}</h1>
        <div>List TBD</div>
        <Button>{this.state.data.button1Text}</Button>
      </div>
    )
    else if (this.state.data.style === "images") return (
      <div className="ListItem images">
        <h1>{this.state.data.header1}</h1>
        <h2>{this.state.data.header2}</h2>
        <div>{this.state.data.text1}</div>
        <div>List TBD</div>
        <Button>{this.state.data.button1Text}</Button><Button>{this.state.data.button2Text}</Button>
      </div>
    )
    else if (this.state.data.style === "horizontal") return (
      <div className="ListItem horizontal" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <div style={{ position: "relative", left: "20vw", width: "80vw",overflowX: "scroll" , height:"15vw", whiteSpace:"nowrap"}}>
            {this.state.listData.map((item: any) => {
              if (this.state.data.class == "speakers") {
                return (
                  <div key={item.id} style={{display:"inline-block",verticalAlign:"top"}}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src="./static/images/teaching-3.png" />
                    <div style={{ fontWeight: "bold" }}>{item.name}</div>
                    <div>{item.videos.items.length==10?item.videos.items.length +"+" :item.videos.items.length} Episodes</div>
                  </div>
                )
              }
              else if (this.state.data.class == "videos") {
                return (
                  <div key={item.id} style={{display:"inline-block",verticalAlign:"top"}}>
                    <img alt="TBD" style={{ height: "10vw", marginRight: "1vw" }} src={item.Youtube.snippet.thumbnails.default.url} />
                    <div style={{ fontWeight: "bold" }}>{item.episodeTitle}</div>
                    <div style={{ fontWeight: "bold" }}>{item.series!=null?item.series:null}</div>
                    <div>{item.publishedDate}</div>
                  </div>
                )
              }
            })}

            <div style={{ clear: "left" }} ></div>
          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "horizontalBig") return (
      <div className="ListItem horizontalBig" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width: "80vw", fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <div style={{ position: "relative", left: "20vw", width: "80vw",overflowX: "scroll" , height:"30vw", whiteSpace:"nowrap" }}>
            {this.state.listData.map((item: any) => {
              return (
                <div key={item.id} style={{ display:"inline-block",verticalAlign:"top" }}>
                  <img alt="TBD" style={{ height: "25vw", marginRight: "1vw" }} src="./static/images/teaching-4.png" />
                  <div style={{ fontWeight: "bold" }}>{item.title}</div>
                  <div>2019 • 4 Episodes</div>
                </div>
              )
            })}

            <div style={{ clear: "left" }} ></div>

          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "imageList") return (
      <div className="ListItem imageList" style={{ position: "static", width: "50vw", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "50vw", zIndex: 100 }}>
          <h1>{this.state.data.header1}</h1>
          <h2>{this.state.data.header2}</h2>
          <div style={{ width: "50vw" }}>{this.state.data.text1}</div>
          <div>
            {
              this.state.data.list.map((item: any, index: any) => {
                return (
                  <div style={{ width: "50vw" }} key={index}>
                    <h3 style={{ width: "50vw" }}>{item.title}</h3>
                    <div style={{ width: "50vw" }}>{item.text}</div>
                    <img src={item.imageSrc} alt={item.imageAlt} />
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