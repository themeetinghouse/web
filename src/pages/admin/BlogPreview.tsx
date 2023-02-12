import React from 'react';
import './BlogPreview.scss';
import { Dropdown, DropdownToggle } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import format from 'date-fns/format';

interface Props {
  content: any;
  data: any;
  type: string;
}
interface State {
  data: any;
  content: any;
  type: string;
}
export default class VideoPlayer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      data: props.data,
      type: props.type,
    };
  }

  getMarkup() {
    const markup = draftToHtml(
      convertToRaw(this.state.data.editorState.getCurrentContent())
    );
    return markup;
  }

  getNotesMarkup(type: 'notes' | 'questions') {
    const notes = draftToHtml(
      convertToRaw(this.state.data.notesEditorState.getCurrentContent())
    );
    const questions = draftToHtml(
      convertToRaw(this.state.data.questionsEditorState.getCurrentContent())
    );
    if (type === 'notes') return notes;

    return questions;
  }

  shareButton() {
    return (
      <Dropdown toggle={() => null}>
        <DropdownToggle id="share-custom">
          <img
            className="button-icon"
            src="/static/svg/Share-white.svg"
            alt=""
          />
          Share
        </DropdownToggle>
      </Dropdown>
    );
  }

  render() {
    if (this.state.type === 'blog') {
      return (
        <>
          <div style={{ paddingBottom: 4 }}>
            Below is a preview... To refresh, please toggle &quot;Preview Your
            Work&quot;
          </div>
          <div className="blog-content">
            <h1 className="blog-h1">{this.state.data.title}</h1>
            {this.state.data.author ? (
              <div className="blog-details">
                by <span className="blog-author">{this.state.data.author}</span>{' '}
                on {format(this.state.data.publishDate, 'yyyy-MM-dd')}
              </div>
            ) : null}
            <div className="ShareButtonDesktop">{this.shareButton()}</div>
            <div className="body">{ReactHtmlParser(this.getMarkup())}</div>
          </div>
        </>
      );
    } else if (this.state.type === 'notes') {
      return (
        <>
          <div style={{ paddingBottom: 4 }}>
            Below is a preview... To refresh, please toggle &quot;Preview Your
            Work&quot;
          </div>
          <div className="blog-content">
            <h1 className="blog-h1">{this.state.data.title}</h1>
            <div className="body">
              {ReactHtmlParser(this.getNotesMarkup('notes'))}
            </div>
            <div
              style={{ borderBottom: 'black 1px solid', width: '48.33vw' }}
            ></div>
            <div className="body">
              {ReactHtmlParser(this.getNotesMarkup('questions'))}
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}
