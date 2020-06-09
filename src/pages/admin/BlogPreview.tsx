
import React from 'react';
import "./BlogPreview.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import ReactHtmlParser from 'react-html-parser';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import format from 'date-fns/format';

interface Props {
  content: any,
  data: any,
  type: string
}
interface State {
  data: any,
  content: any,
  type: string
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data,
      type: props.type
    }
  }

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.data.editorState.getCurrentContent()));
    return markup
  }

  shareButton() {
    return (
      <Dropdown>
        <Dropdown.Toggle id="share-custom"><img className="button-icon" src="/static/svg/Share-white.svg" alt=""/>Share</Dropdown.Toggle>
      </Dropdown>
    )
  }

  render() {
    if (this.state.type === "blog") {
      return (
        <div className="blog-content">
          <div>Below is a preview... To refresh, please toggle "Preview Your Work".</div>
          <h1 className="blog-h1" >{this.state.data.title}</h1>
          {this.state.data.author ? <div className="blog-details">by <span className="blog-author">{this.state.data.author}</span> on {format(this.state.data.publishDate, "yyyy-MM-dd")}</div> : null}
          <div className="ShareButtonDesktop">{this.shareButton()}</div>
          <div className="body">{ReactHtmlParser(this.getMarkup())}</div>
        </div>
      )
    } else if (this.state.type === "notes") {
      return (
        <div className="blog-content">
          <div>Below is a preview... To refresh, please toggle "Preview Your Work".</div>
          <h1 className="blog-h1" >{this.state.data.title}</h1>
          <div className="body">{ReactHtmlParser(this.getMarkup())}</div>
        </div>
      )
    } else {
      return null
    }
  }
}
