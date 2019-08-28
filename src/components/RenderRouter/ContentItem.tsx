
import React from 'react';
import "./ContentItem.scss"

interface Props {
  data: any
}
interface State {
  data: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  render() {
    if (this.state.data.style === "oneImage") {
      var image1 = this.state.data.image1[Math.floor(Math.random() * this.state.data.image1.length)];

      return (
        <div className="ContentItem oneImage" style={{ position: "static", paddingBottom: "5vw" }}>
          <div style={{ position: "relative", zIndex: 100 }}>
            <div className="oneImageGreyBox" >
              <h1 className="oneImageH1" >{this.state.data.header1}</h1>
              <h2>{this.state.data.header2}</h2>
              <div style={{fontSize: "1.5vw", fontFamily:"Graphik Web" }}>{this.state.data.text1}</div>
              <a style={{fontSize: "1.5vw",fontFamily:"Graphik Web"}} href={this.state.data.link1Action}>{this.state.data.link1Text}</a>
            </div>
            <img src={image1.src} alt={image1.alt} className="oneImageImage"  />
          </div>
        </div>
      )
    }


    return (null)
  }
}