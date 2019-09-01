
import React from 'react';
import { Button } from 'reactstrap';
interface Props{
    content:any
  }
  interface State {
    content:any
  }
export default class HeaderItem extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            content: props.content
        }
    }
    parallaxDetail=[200, 250];
    render() {
        var image1 = this.state.content.image1[Math.floor(Math.random()*this.state.content.image1.length)];

        return (
            <div className="headerItem" style={{ position: "static", paddingBottom: "5vw" }}>
                <div style={{ position: "relative", zIndex: 100 }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "3vw" }}>{this.state.content.header1}</h1>
                    <h2>{this.state.content.header2}</h2>
                    <div style={{ width: "50vw", fontSize: "1.5vw" }}>{this.state.content.text1}</div>
                    <div style={{ fontSize: "1.5vw" }}>{this.state.content.text2}</div>
                    <Button>{this.state.content.button1Text}</Button>
                    <a href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                    <img src={image1.src} alt={image1.alt} className="example-mask" style={{ position: "absolute", top: "5vw", left: "58vw", maskImage: 'url("' + this.state.content.image1Mask + '")', WebkitMaskImage: 'url("' + this.state.content.image1Mask + '")', width: this.state.content.image1Width }} />
                </div>
            </div>
        )
    }
}