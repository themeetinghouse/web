import React from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import BlogPreview from './BlogPreview';
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
//import * as queries from '../../graphql/queries';
//import * as mutations from '../../graphql/mutations';
//import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
//import { API } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import { Modal } from 'reactstrap';
import { v1 as uuidv1 } from 'uuid';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './create-notes.scss';

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
  title: string
  image: string
  showPreview: boolean
  notesList: any
  selectedTags: any
  editMode: boolean
  noteObject: any
  showAlert: string
  currentTag: string
  moreOptions: boolean
  showEditModal: boolean
  delete: string
  understand: string
  noteEdit: any
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
      // text input
      editorState: EditorState.createEmpty(),
      title: '',

      // banner image
      image: '',

      // tags
      selectedTags: [],
      currentTag: '',

      // display state
      showPreview: false,
      moreOptions: false,
      showEditModal: false,
      editMode: false,
      showAlert: '',

      // imports
      notesList: [],
      noteEdit: null,

      // the power to delete things
      delete: '',
      understand: '',

      // upload object
      noteObject: {}
    }

    this.listNotes(null);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  listNotes(nextToken: any) {

    // convert to list notes

    /*
    var listSeries:any = API.graphql({
        query: customQueries.listSeriess,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    listSeries.then((json: any) => {
        console.log({ "Success customQueries.listSeries: ": json });
        this.setState({
            videoSeriesList: this.state.videoSeriesList.concat(json.data.listSeriess.items).sort(function(a: any, b: any) {
              var nameA = a.id.toUpperCase();
              var nameB = b.id.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            })
        })
        if (json.data.listSeriess.nextToken != null)
            this.listSeries(json.data.listSeriess.nextToken)

    }).catch((e: any) => { console.log(e) })
    */
  }

  handleDeleteNote() {
    if (this.state.understand === "Delete forever") {
      /*
      var deleteNotes:any = API.graphql({
          query: mutations.deleteNotes,
          variables: { input: {'id': this.state.delete} },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      deleteNotes.then((json: any) => {
          console.log({ "Success mutations.deleteNotes: ": json });
          this.setState({
            delete: '',
            understand: '',
            showAlert: '⚠️ Deleted'
          })

      }).catch((e: any) => { console.log(e) })
      return true;
      */
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' })
    }
  }

  handleSave() {
    if (this.state.title === '' || this.state.editorState.getCurrentContent().hasText() === false) {
      this.setState({ showAlert: "⚠️ You need a valid title and content to save." })
      return false;
    } else {
      var contentState = this.state.editorState.getCurrentContent();
      var raw = convertToRaw(contentState);
      var html = draftToHtml(raw)
      this.updateField('content', html)

      console.log(this.state.noteObject)

      this.updateField('tags', this.state.selectedTags)

      this.setState({ editMode: true })

      /*

      var createNotes:any = API.graphql({
          query: mutations.createNotes,
          variables: { input: this.state.noteObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      createNotes.then((json: any) => {
          console.log({ "Success mutations.createNotes: ": json });
          this.setState({ showAlert: 'Saved ✅' });
          return true;

      }).catch((e: any) => { console.log(e) })

      var updateNotes:any = API.graphql({
          query: mutations.updateNotes,
          variables: { input: this.state.noteObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      updateNotes.then((json: any) => {
          console.log({ "Success mutations.updateNotes: ": json });
          this.setState({ showAlert: 'Saved ✅' });
          return true;

      }).catch((e: any) => { console.log(e) })

      return false;
      */
    }
  }

  waitForSelection(conditionFunction: () => boolean) {

    const poll = (resolve: any) => {
      if(conditionFunction()) resolve();
      else setTimeout(_ => poll(resolve), 500);
    }
  
    return new Promise(poll);
  }

  async handleEdit() {
    this.setState({ showEditModal: true });
    await this.waitForSelection(() => this.state.noteEdit);
    const blocksfromHtml = htmlToDraft(this.state.noteEdit.content);
    const { contentBlocks, entityMap } = blocksfromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);    
    this.setState({
      title: this.state.noteEdit.title,
      editorState: EditorState.createWithContent(contentState),
      selectedTags: this.state.noteEdit.tags,
    })

    this.updateField('title', this.state.title) // sets id so other functions work

    this.setState({ editMode: true });
  }

  updateField(field: any, value: any) {
    let note = this.state.noteObject
    note[field] = value

    note.id = note.title
    this.setState({ noteObject: note })
  }

  onChange = (editorState: any) => this.setState({ editorState });

  // RENDER FUNCTIONS

  renderEditModal() {
    return <Modal isOpen={this.state.showEditModal}>
        <div>Edit existing notes</div>
        <select onChange={(event:any) => this.setState({ noteEdit: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.notesList.map((item: any) => {return <option key={item.id} value={item.id}>{item.id}</option>})}
        </select>
        <button 
          onClick={() => this.setState({ 
            showEditModal: false, 
            noteEdit: this.state.notesList.filter((post: any) => post.id === this.state.noteEdit)[0]
            })
          }>DONE</button>
      </Modal>
  }

  renderMoreOptions() {
    return (
      <div>

        <label>
          Add tags:
          <input type="text" value={this.state.currentTag} onChange={(event:any) => this.setState({ currentTag: event.target.value})} />
        </label>
        <button className="tags-button" onClick={()=>this.setState({selectedTags: this.state.selectedTags.concat(this.state.currentTag), currentTag: ''}) }>Confirm Tag</button>
        <button className="tags-button" style={{background: "red"}} onClick={() => {this.setState({ selectedTags: [] }); this.updateField('tags', this.state.selectedTags)} }>Clear All Tags</button>
        <div><b>Current tags (click on tag to delete):</b> {this.state.selectedTags.map((item: any) => <div className="tags-item" onClick={() => {this.setState({selectedTags: this.state.selectedTags.filter((elem: any)=>elem!==item)}); this.updateField('tags', this.state.selectedTags)} }>{item + ", "}</div>)}</div>
          <br/>
      

        <label>
        {"⚠️ Delete existing notes (enter title):"}
          <input style={{width: 400, height: 20}} type="text" value={this.state.delete} onChange={(event:any) => this.setState({ delete: event.target.value})} />
        </label>
        <label>
          Type "Delete forever":
          <input style={{width: 400, height: 20}} type="text" value={this.state.understand} onChange={(event:any) => this.setState({ understand: event.target.value})} />
        </label>
        <button className="tags-button" style={{background: "red"}} onClick={this.handleDeleteNote}>DELETE</button>

      </div>
    )
  }

  renderTextInput() {
    return (
      <div className="editor-container">
        <label>
          Title:
          <input className="small-input" type="text" value={this.state.title} onChange={(event:any)=> {this.setState({ title: event.target.value }); this.updateField('title', event.target.value)} } />
        </label>

        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onChange}
          spellCheck={true}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'list', 'link', 'emoji', 'image', 'history'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
            },
            list: {
              options: ['unordered', 'ordered']
            },
            image: {
              uploadEnabled: true,
              uploadCallback: async (file: any) => {
                  const filepath = "notesuploads/" + uuidv1() + file.name;
                  await Storage.put(filepath, file, {
                      contentType: "image/*",
                      acl: "public-read"
                  })
                  var download = "https://themeetinghouse-usercontentstoragetmhusercontent-tmhprod.s3.amazonaws.com/public/" + filepath;
                  return { data: { link: download } }
              },
              previewImage: true,
              alt: { 
                present: true, 
                mandatory: true 
              },
              defaultSize: {
                  height: 'auto',
                  width: '100%',
              },
              alignmentEnabled: false
            }
          }}
        />
        {this.state.moreOptions ? this.renderMoreOptions() : null}
      </div>
    )
  }

  renderToolbar() {
    return (
      <div className="toolbar-button-container">
        <button className="toolbar-button" onClick={this.handleSave}>SAVE</button><br/>
        <button className="toolbar-button" onClick={this.handleEdit}>Edit existing notes</button><br/>
        <button className="toolbar-button" onClick={()=>this.setState({ moreOptions: !this.state.moreOptions })}>More options</button><br/>
        <button className="toolbar-button" onClick={()=>this.setState({ showPreview: !this.state.showPreview })}>Preview your work</button>{this.state.showPreview ? <div style={{width: 150}}>Scroll to bottom of page for preview</div> : null}<br/>
      </div>
    )
  }

  renderAlert() {
    return (
      <Modal isOpen={this.state.showAlert ? true : false}>
        <div>{this.state.showAlert}</div>
        <button onClick={() => this.setState({ showAlert: '' })}>OK</button>
      </Modal>
    )
  }

  render() {
    return (
      <div className="note-container">
        <AdminMenu></AdminMenu>
        {this.renderAlert()}
        {this.renderEditModal()}
        {this.renderToolbar()}
        {this.renderTextInput()}
        <div className="preview">
          {this.state.showPreview ? <BlogPreview data={this.state} content={null}></BlogPreview> : null}
        </div>
      </div>
    );
  }
}

export default Index