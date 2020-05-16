import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html';
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import BlogPreview from './BlogPreview';
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
import * as customQueries from '../../graphql-custom/customQueries';
//import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import { Modal } from 'reactstrap';
import './create-blog.scss';

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
  content: any
  saveReminder: boolean
  videoSeriesList: any
  blogSeriesList: any
  selectedVideoSeries: any
  selectedBlogSeries: any
  selectedTags: any
  editMode: boolean
  blogObject: any
  blogSeries: any
  showError: boolean
  currentTag: string
  imgURL: any
  moreOptions: boolean
  currentVideoSeries: any
  showEditModal: boolean
  newBlogSeriesModal: boolean
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
      showPreview: false,
      content: null,
      saveReminder: false,
      videoSeriesList: [],
      blogSeriesList: [],
      selectedVideoSeries: [],
      selectedBlogSeries: [],
      selectedTags: [],
      editMode: false, //always start with new post
      blogObject: { id: '', author: '', publishedDate: '', blogStatus: '', description: '', blogTitle: '', content: null},
      blogSeries: { id: '', title: ''},
      showError: false,
      currentTag: '',
      imgURL: null,
      moreOptions: false,
      currentVideoSeries: null,
      showEditModal: false,
      newBlogSeriesModal: false
    }

    fetch('/static/content/blog-post.json').then(function (response) {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        this.setState({ content: myJson })
      })

    this.listSeries(null)
    this.handleEdit = this.handleEdit.bind(this);
  }

  //QUERY FUNCTIONS

  listSeries(nextToken: any) {
    var listSeries:any = API.graphql({
        query: customQueries.listSeriess,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    listSeries.then((json: any) => {
        console.log({ "Success customQueries.listSeries: ": json });
        this.setState({
            videoSeriesList: this.state.videoSeriesList.concat(json.data.listSeriess.items).sort((a: any, b: any) => a.id > b.id)
        })
        if (json.data.listSeriess.nextToken != null)
            this.listSeries(json.data.listSeriess.nextToken)

    }).catch((e: any) => { console.log(e) })
  }

  //HANDLERS

  handleSave() {
    //if this.state.editMode === true
      //save, but don't publish
    //if this.state.editMode === false
      //create new unlisted blog object
    console.log("saved")
  }

  handlePublish() {
    //same as save
    //but add date and set blogStatus: Live
    console.log("published")
  }

  handleEdit() {
    this.setState({ editMode: true });
    this.setState({ showEditModal: true});
    //set to unlisted (mutation)
    //find existing post
    //set state of title, author, desc, editorState, tags, video series, blog series
    //verbose warning that you need to re-publish
  }

  //add new blog series function

  handleExit() {
    //provide warnings
  }

  //MISC FUNCTIONS + HELPERS

  onChange = (editorState: any) => this.setState({ editorState });

  onImageChange(e: any) {
    const file = e.target.files[0];
    const filename = file.name;
    Storage.put(filename, file, {
        contentType: 'image/*'
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));

    Storage.get(filename)
    .then(result => this.setState({imgURL: result}))
    .catch(err => console.log(err));
  }

  getMarkup() {
    const markup = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    return markup
  }

  interval: any;
  componentDidMount() {
    //reminder to save every 10 mins
    this.interval = setInterval(() => this.saveReminder(), 600000);
  }

  async saveReminder() {
    this.setState({ saveReminder: !this.state.saveReminder })
    //display for 10 sec
    await new Promise(r => setTimeout(r, 10000));
    this.setState({ saveReminder: !this.state.saveReminder })
  }

  //RENDER FUNCTIONS

  renderEditBlogModal() {
    return <Modal isOpen={this.state.showEditModal}>
        <div>Edit a blog post</div>
        <button onClick={() => { this.setState({ showEditModal: false }) }}>DONE</button>
      </Modal>
  }

  renderNewBlogSeriesModal() {
    return <Modal isOpen={this.state.newBlogSeriesModal}>
        <div>New Blog Series</div>
        <button onClick={() => { this.setState({ newBlogSeriesModal: false }) }}>DONE</button>
      </Modal>
  }

  renderMoreOptions() {
    return (
      <div>
        <label>
          Add tags:
          <input type="text" value={this.state.currentTag} onChange={(event:any) => this.setState({ currentTag: event.target.value})} />
        </label>
        <button className="tags-button" onClick={()=>this.setState({selectedTags: this.state.selectedTags.concat(this.state.currentTag), currentTag: ''})}>Confirm Tag</button>
        <button className="tags-button" style={{background: "red"}} onClick={() => this.setState({ selectedTags: [] })}>Clear Selection</button>
        <div>Current tags: {this.state.selectedTags.map((item: any) => item + ", ")}</div>
          <br/>

        <b>Add to Video Series</b>
        <button className="tags-button" onClick={() => this.setState({ selectedVideoSeries: this.state.selectedVideoSeries.concat(this.state.currentVideoSeries)})}>Add</button>
        <button className="tags-button" style={{background: "red"}} onClick={() => this.setState({ selectedVideoSeries: [] })}>Clear Selection</button>
        <select onChange={(event:any) => this.setState({ currentVideoSeries: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.videoSeriesList.map((item: any) => {return <option key={item.id} value={item.id}>{item.id}</option>})}
        </select>
        <div>Current video series: {this.state.selectedVideoSeries.map((item: any) => item + ", ")}</div>
          <br/>

        <b>Add to Blog Series</b>
        <button className="tags-button" onClick={()=>this.setState({ selectedVideoSeries: this.state.selectedVideoSeries.concat('')})}>Add</button>
        <button className="tags-button" style={{background: "red"}} onClick={()=>this.setState({ selectedBlogSeries: [] })}>Clear Selection</button>
        <button className="tags-button" style={{background: "green", width: 160}} onClick={()=>this.setState({ newBlogSeriesModal: true })}>New Blog Series</button>
        <select>
          <option>test</option>
        </select>
        <div>Current blog series: {this.state.selectedBlogSeries.map((item: any) => item + ", ")}</div>
      </div>
    )
  }

  renderTextInput() {
    return (
      <div className="editor-container">
        <label>
          Title:
          <input className="small-input" type="text" value={this.state.title} onChange={(event:any)=> this.setState({ title: event.target.value})} />
        </label>

        <label>
          Author:
          <input className="small-input" type="text" value={this.state.author} onChange={(event:any)=> this.setState({ author: event.target.value})} />
        </label>

        <label style={this.state.desc.length >= 180 ? {color: "red"} : {color: "black"}}>
          Description ({this.state.desc.length + " of 220 characters"}):
          <textarea className="big-input" maxLength={220} value={this.state.desc} onChange={(event:any)=> this.setState({ desc: event.target.value})} />
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
              alignmentEnabled: false,
              defaultSize: {
                height: 'auto',
                width: '50vw'
              }
            }
          }}
        />
        <label>
          Upload an image:
          <br/>
          <input
            type="file" accept='image/*'
            onChange={(evt) => this.onImageChange(evt)}
          />
        </label>
        {/* add click to copy*/}
        <div className="imageURL-output">{this.state.imgURL ? "Please use this URL: " + this.state.imgURL : null}</div>                   
        {this.state.moreOptions ? this.renderMoreOptions() : null}
      </div>
    )
  }

  renderToolbar() {
    return (
      <div className="toolbar-button-container">
        <button className="toolbar-button" onClick={this.handleSave}>SAVE</button><br/>
        <button className="toolbar-button" onClick={this.handlePublish}>PUBLISH</button><br/>
        <button className="toolbar-button" onClick={this.handleEdit}>Edit an existing post</button><br/>
        <button className="toolbar-button" onClick={()=>this.setState({ moreOptions: !this.state.moreOptions })}>Add tags + series</button><br/>
        <button className="toolbar-button" onClick={()=>this.setState({ showPreview: !this.state.showPreview })}>Preview your work</button>{this.state.showPreview ? <div style={{width: 150}}>Scroll to bottom of page for preview</div> : null}<br/>
        {this.state.saveReminder ? <div style={{color: "red", fontWeight: 'bold', width: 180}}>Save Your Work!</div>: null}
      </div>
    )
  }

  render() {
    return (
      <div className="blog-container">
        <AdminMenu></AdminMenu>
        {this.renderEditBlogModal()}
        {this.renderNewBlogSeriesModal()}
        {this.renderToolbar()}
        {this.renderTextInput()}
        <div className="preview">
          {this.state.showPreview ? <BlogPreview data={this.state} content={this.state.content}></BlogPreview> : null}
        </div>
      </div>
    );
  }
}

export default Index