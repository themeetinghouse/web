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
//import * as queries from '../../graphql/queries';
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
  currentBlogSeries: any
  showEditModal: boolean
  newBlogSeriesModal: boolean
  selectedBlogToEdit: any
  blogPostsList: any
  copied: boolean
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
      selectedVideoSeries: null,
      selectedBlogSeries: [], //need to store list of blog series object not list of ids
      selectedTags: [],
      editMode: false, //always start with new post
      blogObject: { id: '', author: '', publishedDate: '', blogStatus: '', description: '', blogTitle: '', content: null},
      blogSeries: { id: '', title: ''},
      showError: false,
      currentTag: '',
      imgURL: null,
      moreOptions: false,
      currentVideoSeries: null,
      currentBlogSeries: null,
      showEditModal: false,
      newBlogSeriesModal: false,
      selectedBlogToEdit: null,
      blogPostsList: [],
      copied: false
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
    this.handleSave = this.handleSave.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
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
    //check if author and title
    this.updateBlogField('blogTitle', this.state.title)
    this.updateBlogField('author', this.state.author)
    this.updateBlogField('description', this.state.desc)
    this.updateBlogField('content', this.state.editorState)
    this.updateBlogField('blogStatus', 'Unlisted')
    this.updateBlogField('tags', this.state.selectedTags)

    let videoseries = this.state.videoSeriesList.filter((series: any) => series.id === this.state.selectedVideoSeries)[0]
    console.log(videoseries)
    this.updateBlogField('series', videoseries)

    
    //this.updateBlogField('blogSeries', this.state.selectedBlogSeries)
    
    
    //mutations:
    //if this.state.editMode === true
      //update, but don't publish
    if (this.state.editMode === false) {
      //create new unlisted blog object
      this.setState({ editMode: true });
    }

    console.log("saved")
    console.log(this.state.blogObject)
  }

  handlePublish() {
    if (this.state.author === '' || this.state.title === '' || this.state.desc === '' || this.state.editorState.getCurrentContent().hasText() === false) {
      console.log('missing fields')
    } else {
      this.updateBlogField('blogTitle', this.state.title)
      this.updateBlogField('author', this.state.author)
      this.updateBlogField('description', this.state.desc)
      this.updateBlogField('content', this.state.editorState)
      //this.updateBlogField('series', this.state.selectedVideoSeries)
      this.updateBlogField('tags', this.state.selectedTags)
      //this.updateBlogField('blogSeries', this.state.selectedBlogSeries)
      this.updateBlogField('publishedDate', new Date().toJSON().slice(0,10).replace(/-/g,'-'))
      this.updateBlogField('blogStatus', 'Live')
      //mutation to create new or update
      this.setState({
        title: '',
        author: '',
        desc: '',
        editorState: EditorState.createEmpty()
      })
      console.log("published")
      console.log(this.state.blogObject)
    }
  }

  handleEdit() {
    this.setState({ showEditModal: true });
    //set to unlisted (mutation)
    //find existing post
    //set state of title, author, desc, editorState, tags, video series, blog series
    //verbose warning that you need to re-publish
    this.setState({ editMode: true });
  }

  handleNewBlogSeries() {
    //create new blog series
    //fetch blog series
  }

  handleExit() {
    //provide warnings
  }

  updateSeriesField(field: any, value: any) {
    let blogSeries = this.state.blogSeries
    blogSeries[field] = value
        
    blogSeries.id = blogSeries.title + '-' + (new Date().toJSON().slice(0,10).replace(/-/g,'-'))
    this.setState({ blogSeries: blogSeries })
    console.log(blogSeries)
  }

  updateBlogField(field: any, value: any) {
    let blog = this.state.blogObject
    blog[field] = value

    blog.id = blog.blogTitle + '-' + blog.author
    this.setState({ blogObject: blog })
  }

  //MISC FUNCTIONS + HELPERS

  onChange = (editorState: any) => this.setState({ editorState });

  onImageChange(e: any) {
    const file = e.target.files[0];
    const filepath = "bloguploads/" + (new Date().toJSON().slice(0,10).replace(/-/g,'')) + file.name;
    this.setState({ copied: false })
    Storage.put(filepath, file, {
        contentType: 'image/*'
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));

    Storage.get(filepath)
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
        <select onChange={(event:any) => this.setState({ selectedBlogToEdit: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.blogPostsList.map((item: any) => {return <option key={item.id} value={item.id}>{item.id}</option>})}
        </select>
        <button onClick={() => { this.setState({ showEditModal: false }) }}>DONE</button>
      </Modal>
  }

  renderNewBlogSeriesModal() {
    return <Modal isOpen={this.state.newBlogSeriesModal}>
        <div>New Blog Series</div>
        <label>
          Title:
          <input value={this.state.blogSeries.title} onChange={(item: any) => { this.updateSeriesField("title", item.target.value) }} />
        </label>
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
        <button className="tags-button" style={{background: "red"}} onClick={() => this.setState({ selectedTags: [] })}>Clear All Tags</button>
        <div><b>Current tags (click on tag to delete):</b> {this.state.selectedTags.map((item: any) => <div className="tags-item" onClick={() => this.setState({selectedTags: this.state.selectedTags.filter((elem: any)=>elem!==item)})}>{item + ", "}</div>)}</div>
          <br/>

        <b>Add to Blog Series</b>
        <button className="tags-button" onClick={()=>this.setState({ selectedBlogSeries: this.state.selectedBlogSeries.concat(this.state.currentBlogSeries)})}>Add</button>
        <button className="tags-button" style={{background: "red"}} onClick={()=>this.setState({ selectedBlogSeries: [] })}>Clear Selection</button>
        <button className="tags-button" style={{background: "green", width: 160}} onClick={()=>this.setState({ newBlogSeriesModal: true })}>New Blog Series</button>
        <select onChange={(event:any) => this.setState({ currentBlogSeries: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          <option key="test" value="test">test</option>
        </select>
        <div><b>Current blog series: (click on series to delete):</b> {this.state.selectedBlogSeries.map((item: any) => <div className="tags-item" onClick={() => this.setState({selectedBlogSeries: this.state.selectedBlogSeries.filter((elem: any)=>elem!==item)})}>{item + ", "}</div>)}</div>
          <br/>

        <b>Add to Video Series</b>
        <button className="tags-button" onClick={() => this.setState({ selectedVideoSeries: this.state.currentVideoSeries})}>Select</button>
        <button className="tags-button" style={{background: "red"}} onClick={() => this.setState({ selectedVideoSeries: null })}>Clear Selection</button>
        <select onChange={(event:any) => this.setState({ currentVideoSeries: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.videoSeriesList.map((item: any) => {return <option key={item.id} value={item.id}>{item.id}</option>})}
        </select>
        <div><b>Current video series: </b> <div style={{display: "inline"}}>{this.state.selectedVideoSeries} </div></div>
      </div>
    )
  }

  renderTextInput() {
    return (
      <div className="editor-container">
        <label>
          Title:
          <input className="small-input" type="text" value={this.state.title} onChange={(event:any)=> this.setState({ title: event.target.value, editMode: false }) } />
        </label>

        <label>
          Author:
          <input className="small-input" type="text" value={this.state.author} onChange={(event:any)=> this.setState({ author: event.target.value, editMode: false})} />
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
            type="file" accept='.jpg, .jpeg, .gif, .png'
            onChange={(evt) => this.onImageChange(evt)}
          />
        </label>
        {/* add click to copy*/}
        {this.state.imgURL ? <button onClick={() => {navigator.clipboard.writeText(this.state.imgURL); this.setState({copied: true})}}>{this.state.copied ? "Copied" : "Click to Copy URL"}</button> : null}
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