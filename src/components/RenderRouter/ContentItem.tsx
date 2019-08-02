
import React from 'react';
interface Props {
  data: any
}
interface State {
  data: any
}
//            <img src={this.state.data.image1Src} alt={this.state.data.image1Alt} style={{maskImage: "url("+this.state.data.image1Mask+")",width:this.state.data.image1Width}}/>

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
 
  render() {
    if (this.state.data.style === "oneImage") return (
      <div className="ContentItem oneImage" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <div style={{ padding:"10vw",position: "relative", width: "50vw", height: "40vw", left: "50vw", top: "0vw", backgroundColor: "#EFEFF0" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
            <h2>{this.state.data.header2}</h2>
            <div>{this.state.data.text1}</div>
            <a href={this.state.data.link1Action}>{this.state.data.link1Text}</a>
          </div>
          <img src={this.state.data.image1Src} alt={this.state.data.image1Alt} style={{ position: "absolute", height: "35vw", left: "20vw", top: "4vw",boxShadow: "0px 20px 40px rgba(26, 26, 26, 0.16);"}} />
        </div>
      </div>
    )

    else if (this.state.data.style === "twoImage") return (
      <div className="ContentItem twoImage" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <h2>{this.state.data.header2}</h2>
          <div>{this.state.data.text1}</div>
          <a href={this.state.data.link1Action}>{this.state.data.link1Text}</a>
          <img src={this.state.data.image1Source} alt={this.state.data.image1Alt} style={{ width: this.state.data.image1Width }} />
          <img src={this.state.data.image2Source} alt={this.state.data.image2Alt} style={{ width: this.state.data.image2Width }} />
        </div>
      </div>
    )

    return (null)
  }
}