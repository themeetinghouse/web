
import React from 'react';
import "./ContentItem.scss"

interface Props {
  content: any
}
interface State {
  content: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content
    }
  }

  render() {
    if (this.state.content.style === "oneImage") {
      var image1 = this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreyBox" >
              <h1 className="oneImageH1" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2">{this.state.content.header2}</h2>
              <div className="oneImageText" >{this.state.content.text1}</div>
              <a className="oneImageA"href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
            </div>
            <img src={image1.src} alt={image1.alt} className="oneImageImage"  />
          </div>
        </div>
      )
    }


    return (null)
  }
}
