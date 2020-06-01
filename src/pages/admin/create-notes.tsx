import React from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import BlogPreview from './BlogPreview';
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import { Modal } from 'reactstrap';
import { v1 as uuidv1 } from 'uuid';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/getDay';
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
  showPreview: boolean
  notesList: any
  selectedTags: any
  noteObject: any
  noteEditObject: any
  showAlert: string
  currentTag: string
  moreOptions: boolean
  showEditModal: boolean
  delete: string
  understand: string
  noteEdit: any
  date: any
  pdf: string
  dateWarning: string
  title: string
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
      // input
      editorState: EditorState.createEmpty(),
      date: null,
      pdf: '',
      title: 'Unlisted',

      // tags
      selectedTags: [],
      currentTag: '',

      // display state
      showPreview: false,
      moreOptions: false,
      showEditModal: false,
      showAlert: '',
      dateWarning: '',

      // imports
      notesList: [],
      noteEdit: null,
      noteEditObject: null,

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

    var listNotess:any = API.graphql({
        query: queries.listNotess,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    listNotess.then((json: any) => {
        console.log({ "Success customQueries.listNotess: ": json });
        this.setState({
              notesList: this.state.notesList.concat(json.data.listNotess.items).sort(function(a: any, b: any) {
              var nameA = a.id.toUpperCase();
              var nameB = b.id.toUpperCase();
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            })
        })
        if (json.data.listNotess.nextToken != null)
            this.listNotes(json.data.listNotess.nextToken)

    }).catch((e: any) => { console.log(e) })
  }

  handleDeleteNote() {
    if (this.state.understand === "Delete forever") {
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
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' })
    }
  }

  handleSave() {
    if (this.state.editorState.getCurrentContent().hasText() === false || this.state.date === null) {
      this.setState({ showAlert: "⚠️ You need a valid content and date to save." })
      return false;
    } else {
      var contentState = this.state.editorState.getCurrentContent();
      var raw = convertToRaw(contentState);
      var html = draftToHtml(raw)
      this.updateField('content', html)

      console.log(this.state.noteObject)

      this.updateField('tags', this.state.selectedTags)

      this.updateField('title', this.state.title)
      this.updateField('pdf', this.state.pdf)

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
    await this.waitForSelection(() => this.state.noteEditObject);
    const blocksfromHtml = htmlToDraft(this.state.noteEditObject.content);
    const { contentBlocks, entityMap } = blocksfromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const date = parse(this.state.noteEditObject.id, "yyyy-MM-dd", new Date())    
    this.setState({
      editorState: EditorState.createWithContent(contentState),
      selectedTags: this.state.noteEditObject.tags,
      date: date,
      title: this.state.noteEditObject.title,
      pdf: this.state.noteEditObject.pdf
    })
    this.updateField('title', this.state.noteEditObject.title) // call updateField to set id
  }

  updateField(field: any, value: any) {
    let note = this.state.noteObject
    note[field] = value

    note.id = format(this.state.date, "yyyy-MM-dd")
    this.setState({ noteObject: note })
  }

  onChange = (editorState: any) => this.setState({ editorState });

  handlePublishDate = (date: any) => {
    this.setState({
      date: date
    });

    var dayofweek = getDay(date)
    if (dayofweek !== 0) {
      this.setState({
        dateWarning: 'Warning: this date is not a Sunday'
      })
    } else {
      this.setState({
        dateWarning: ''
      })
    }
  }

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
            noteEditObject: this.state.notesList.filter((post: any) => post.id === this.state.noteEdit)[0]
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
        {"⚠️ Delete existing notes (teaching date):"}
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
          <input type="text" style={{width:400}} value={this.state.title} onChange={(event:any)=> this.setState({ title: event.target.value })}/>
        </label>
        <div>Notes will remain hidden if the title is "Unlisted"</div>

        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onChange}
          spellCheck={true}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'list', 'link', 'textAlign', 'emoji', 'colorPicker', 'image', 'history'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
            },
            list: {
              options: ['unordered', 'ordered'],
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
        <div>
          <b className="calendar-label">Teaching date</b>
          <DatePicker 
            selected={this.state.date} 
            onChange={this.handlePublishDate} 
            dateFormat="yyyy-MM-dd"
          />
          <div style={{color:"red"}}>{this.state.dateWarning}</div>
        </div>
        <div>
        <label>
          PDF Link:
          <input type="text" style={{width:800}}value={this.state.pdf} onChange={(event:any)=> this.setState({ pdf: event.target.value })}/>
        </label>
        </div>
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
          {this.state.showPreview ? <BlogPreview data={this.state} content={null} type={"notes"}></BlogPreview> : null}
        </div>
      </div>
    );
  }
}

export default Index