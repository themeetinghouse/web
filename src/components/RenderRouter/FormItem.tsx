
import React from 'react';
import "./FormItem.scss"
import Button from 'react-bootstrap/Button';
import { Input } from 'reactstrap';

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
    if (this.state.content.class === "formstack")
      return (<div className="FormItem">
        <div className="oneImagePosition">
          <h1 className="oneImageH1" >{this.state.content.header1}</h1>
          <h2>{this.state.content.header2}</h2>
          <div className="FormItemText1">{this.state.content.text1}</div>
          <iframe src={"https://meeting.formstack.com/forms/" + this.state.content.formId} title="The Meeting House - Forms" scrolling="no" className="FormId" style={{height: this.state.content.height }}></iframe>

        </div></div>)
    else
      return (


        <div className="FormItem">
          <div className="oneImagePosition">
            <h1 className="oneImageH1" >{this.state.content.header1}</h1>
            <h2>{this.state.content.header2}</h2>
            <div className="FormItemText1">{this.state.content.text1}</div>
            <a className="FormItemText1" href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
            {this.state.content.fields.map((item: any) => {
              if (item.type === "input")
                return (<div>
                  <div>{item.label}</div>
                  <div><Input></Input></div>
                </div>)
              else if (item.type === "checkboxes")
                return (<div>
                  <div>{item.label}</div>
                  <div>{item.items.map((item: any) => {
                    return (<div><Input type="checkbox" />{item.label}</div>)
                  })}</div>
                </div>)
              else if (item.type === "text")
                return (<div>
                  <div>{item.label}</div>
                  <div><Input></Input></div>
                </div>)
              else
                return null
            })
            }
            <Button>{this.state.content.button.label}</Button>
          </div>
        </div>
      )

  }
}
