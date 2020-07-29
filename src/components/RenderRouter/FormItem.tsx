
import React from 'react';
import "./FormItem.scss";
import { FormItem } from '../types';

interface Props {
  content: FormItem
}

export default class ContentItem extends React.Component<Props>  {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="FormContainer">
        <div className="FormItem">
          {this.props.content.style === "white" ?
            <h1 className="FormItemH1 black" >{this.props.content.header1}</h1> :
            <h1 className="FormItemH1 white" >{this.props.content.header1}</h1>
          }
          {this.props.content.header2 ? <h2>{this.props.content.header2}</h2> : null}
          {this.props.content.text1 ? <div className="FormItemText1">{this.props.content.text1}</div> : null}
          <iframe
            src={"https://meeting.formstack.com/forms/" + this.props.content.formId}
            title="The Meeting House - Forms"
            className="FormId" id="form-embed" scrolling="yes"></iframe>
        </div>
      </div>
    )
  }
}