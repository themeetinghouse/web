
import React from 'react';
import "./IFrameItem.scss"

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
    return (<div className="FormItem iframeItemDiv1" >
      <div className="oneImagePosition">
        <h1 className="oneImageH1" >{this.state.content.header1}</h1>
        <h2>{this.state.content.header2}</h2>
        <div className="iframeItemDiv2" >{this.state.content.text1}</div>
        {this.state.content.isInPopup ?
          <iframe src={this.state.content.src} title="The Meeting House - IFrame" scrolling="no"
            className="iframeItemIframePopup" style={{ height: this.state.content.height }}></iframe> :
          <iframe src={this.state.content.src} title="The Meeting House - IFrame" scrolling="no"
            className="iframeItemIframe" style={{ height: this.state.content.height }}></iframe>
        }
      </div></div>)
  }
}
