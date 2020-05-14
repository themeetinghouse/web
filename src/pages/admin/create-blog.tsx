import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
import Preview from './blog-preview';
import './create-blog.scss'

Amplify.configure(awsmobile);
const federated = {
    google_client_id: '',
    facebook_app_id: '579712102531269',
    amazon_client_id: ''
};

const Index = () => (
    <div>
        <Authenticator federated={federated} hide={[Greetings, SignOut]}>
            <AuthIndexApp></AuthIndexApp>
        </Authenticator>
    </div>
)
interface Props {
    authState?: any
}
interface State {
  editorState: any
  imageUpload: any
  title: string
  author: string
  desc: string
  showPreview: boolean
}

class AuthIndexApp extends React.Component<Props, State> {

  render() {
      if (this.props.authState === "signedIn") {
          return (
              <div>
                  <IndexApp></IndexApp>
              </div>
          );
      } else {
          return null;
      }
  }
}

class IndexApp extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = { 
      editorState: EditorState.createEmpty(),
      imageUpload: null,
      title: '',
      author: '',
      desc: '',
      showPreview: false
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleTitleSubmit = this.handleTitleSubmit.bind(this);
    this.handleAuthorSubmit = this.handleAuthorSubmit.bind(this);
    this.handleDescSubmit = this.handleDescSubmit.bind(this);
    this.showPreview = this.showPreview.bind(this);
  }

  onChange = (editorState: any) => this.setState({ editorState });

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    return markup
  }

  saveReminder() {
    //reminder every 10 mins
    //option to turn off
  }

  handleSave() {
    //save, but don't publish
    //if completely new post, create new unlisted blog object
    console.log("saved")
  }

  handlePublish() {
    //add date (default to toronto time)
    console.log("published")
  }

  handleEdit() {
    //modal for existing posts -> enter id
    //message to say what's going to happen
    //pull in existing post
    //set to unlistsed
  }

  handleExit() {
    //check if save
    //check if published
  }

  handleTitleSubmit(event:any) {
    alert(this.state.title);
    event.preventDefault();
    //write values
  }

  handleAuthorSubmit(event:any) {
    alert(this.state.author);
    event.preventDefault();
    //write values
  }

  handleDescSubmit(event:any) {
    alert(this.state.desc);
    event.preventDefault();
    //write values
  }

  handleChangeTitle(event: any) {
    this.setState({title: event.target.value});
  }

  handleChangeAuthor(event: any) {
    this.setState({author: event.target.value});
  }

  handleChangeDesc(event: any) {
    this.setState({desc: event.target.value});
  }

  showPreview() {
    this.state.showPreview ? this.setState({ showPreview: false }) : this.setState({ showPreview: true })
  }

  //preview should be an iframe (new window) that mirrors live site

  render() {
    return (
      <div className="blog-container">
        <AdminMenu></AdminMenu>
        <h4>TMH Blog</h4>
        <div className="editor-container">
        <button className="toolbar-button" onClick={this.handleSave}>SAVE</button>
        <button className="toolbar-button" onClick={this.handlePublish}>PUBLISH</button>
        <button className="toolbar-button" onClick={this.handleEdit}>Edit an existing post</button>
        <button className="toolbar-button" onClick={this.showPreview}>Preview Your Work</button>
        <form className="details-form" onSubmit={this.handleTitleSubmit}>
          <label>
            Title:
            <input className="small-input" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
          </label>
          <input type="submit" value="Submit Title" />
        </form>

        <form className="details-form" onSubmit={this.handleAuthorSubmit}>
          <label>
            Author:
            <input className="small-input" type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
          </label>
          <input type="submit" value="Submit Author Name" />
        </form>

        <form onSubmit={this.handleDescSubmit}>
          <label>
            Description:
            <textarea className="big-input" maxLength={250} value={this.state.desc} onChange={this.handleChangeDesc} />
          </label>
          <input className="desc-button" type="submit" value="Submit Description" />
        </form>

          <Editor
            editorState={this.state.editorState}
            onEditorStateChange={this.onChange}
            spellCheck={true}
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'list', 'link', 'embedded', 'emoji', 'image', 'history'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
              },
              blockType: {
                options: ['Normal', 'H3', 'Blockquote']
              },
              list: {
                options: ['unordered', 'ordered']
              }
            }}
          />
        </div>
        {this.state.showPreview ?
        <Preview>
          <div><h4>Preview your work</h4>{this.state.author}{this.state.title}{this.state.desc}{ReactHtmlParser(this.getMarkup())}</div>
        </Preview> : null}
      </div>
    );
  }
}

export default Index