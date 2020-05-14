import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
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
      imageUpload: null
    };
  }

  onChange = (editorState: any) => this.setState({ editorState });

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    return markup
  }

  autoSave() {
    //auto save every 5 mins
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

  //preview should be an iframe of the live site

  render() {
    return (
      <div className="blog-container">
        <AdminMenu></AdminMenu>
        <h4>TMH Blog</h4>
        <div className="editor-container">
        <button className="toolbar-button" onClick={this.handleSave}>SAVE</button>
        <button className="toolbar-button" onClick={this.handlePublish}>PUBLISH</button>
        <button className="toolbar-button" onClick={this.handleEdit}>Edit an existing post</button>
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
        <div className="preview"><h4>Preview your work</h4>{ReactHtmlParser(this.getMarkup())}</div>
      </div>
    );
  }
}

export default Index