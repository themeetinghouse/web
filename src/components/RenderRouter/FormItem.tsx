
import React from 'react';
import "./FormItem.scss"
import { Helmet } from "react-helmet";

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
    return (
      <div className="FormItem">
        <Helmet>
          <meta property="og:image" content="/static/logos/house-black.png" />
          <meta property="og:image:width" content="1024" />
          <meta property="og:image:height" content="1024" />
        </Helmet>
        <div className="oneImagePosition">
          {this.state.content.style === "white" ?
            <h1 className="FormItemH1 black" >{this.state.content.header1}</h1> :
            <h1 className="FormItemH1 white" >{this.state.content.header1}</h1>
          }
          <h2>{this.state.content.header2}</h2>
          <div className="FormItemText1">{this.state.content.text1}</div>
          <iframe
            src={"https://meeting.formstack.com/forms/" + this.state.content.formId}
            title="The Meeting House - Forms"
            scrolling="yes" className="FormId"></iframe>

        </div>
      </div>
    )


  }
}
