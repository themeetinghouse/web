import React from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import BlogPreview from './BlogPreview';
import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
import * as customQueries from '../../graphql-custom/customQueries';
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
  title: string
  author: string
  desc: string
  showPreview: boolean
  videoSeriesList: any
  blogSeriesList: any
  selectedVideoSeries: any
  selectedBlogSeries: any
  deselectedBlogSeries: any
  blogBridgeList: any
  selectedTags: any
  editMode: boolean
  blogObject: any
  newBlogSeries: any
  currentTag: string
  moreOptions: boolean
  currentVideoSeries: any
  currentBlogSeries: any
  showEditModal: boolean
  newBlogSeriesModal: boolean
  blogToEditID: any
  blogToEditObject: any
  blogPostsList: any
  publishDate: any
  expireDate: any
  videoSeries: any
  showAlert: any
  disableCalendar: boolean
  blogStatus: string
  delete: string
  understand: string
  deleteBlogSeries: string
  understandBlogSeries: string
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
      author: '',
      desc: '',

      // tags, series, status and date input
      currentTag: '',
      blogStatus: 'Unlisted',
      currentVideoSeries: null,
      currentBlogSeries: null,
      selectedVideoSeries: null,
      selectedBlogSeries: [],
      deselectedBlogSeries: [],
      selectedTags: [],
      publishDate: new Date(),
      expireDate: new Date(),
      disableCalendar: true,

      // queried and loaded data
      videoSeriesList: [],
      blogSeriesList: [],
      blogPostsList: [],
      videoSeries: null,
      blogBridgeList: null,

      // display states
      showPreview: false,
      moreOptions: false,
      showEditModal: false,
      newBlogSeriesModal: false,
      showAlert: '',

      // determines which existing blog the user wishes to edit
      blogToEditID: null,
      blogToEditObject: null,

      // determines if we create a new blog or update an existing blog
      // always start with new post
      editMode: false,

      // mutation inputs
      blogObject: {},
      newBlogSeries: {},

      // the power to delete things
      delete: '',
      understand: '',
      deleteBlogSeries: '',
      understandBlogSeries: ''
    }

    this.listSeries(null)
    this.listBlogs(null)
    this.listBlogSeries(null)
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNewBlogSeries = this.handleNewBlogSeries.bind(this);
    this.handleAddBridge = this.handleAddBridge.bind(this);
    this.handleDeleteBridge = this.handleDeleteBridge.bind(this);
    this.handleDeleteBlogPost = this.handleDeleteBlogPost.bind(this);
    this.handleDeleteBlogSeries = this.handleDeleteBlogSeries.bind(this);
  }

  // QUERY FUNCTIONS

  listSeries(nextToken: any) {
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
  }

  listBlogs(nextToken: any) {
    var listBlogs:any = API.graphql({
        query: queries.listBlogs,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200},
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    listBlogs.then((json: any) => {
      console.log({ "Success queries.listBlogs: ": json });
      this.setState({
          blogPostsList: this.state.blogPostsList.concat(json.data.listBlogs.items).sort(function(a: any, b: any) {
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
      if (json.data.listBlogs.nextToken != null)
          this.listBlogs(json.data.listBlogs.nextToken)

    }).catch((e: any) => { console.log(e) })
  }

  listBlogSeries(nextToken: any) {
    var listBlogSeries:any = API.graphql({
        query: queries.listBlogSeriess,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200},
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    });

    listBlogSeries.then((json: any) => {
      console.log({ "Success queries.listBlogSeries: ": json });
      this.setState({
          blogSeriesList: this.state.blogSeriesList.concat(json.data.listBlogSeriess.items).sort(function(a: any, b: any) {
            var nameA = a.title.toUpperCase();
            var nameB = b.title.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
      })
      if (json.data.listBlogSeriess.nextToken != null)
          this.listBlogSeries(json.data.listBlogSeriess.nextToken)

    }).catch((e: any) => { console.log(e) })
  }

  // HANDLERS

  handlePublishDate = (date: any) => {
    this.setState({
      publishDate: date
    });
  }

  handleExpireDate = (date: any) => {
    this.setState({
      expireDate: date
    });
  }

  handleDeleteBlogPost() {
    if (this.state.understand === "Delete forever") {
      var deleteBlog:any = API.graphql({
          query: mutations.deleteBlog,
          variables: { input: {'id': this.state.delete} },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      deleteBlog.then((json: any) => {
          console.log({ "Success mutations.deleteBlog: ": json });
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

  handleDeleteBlogSeries() {
    if (this.state.understandBlogSeries === "Delete forever") {
      var deleteBlogSeries:any = API.graphql({
          query: mutations.deleteBlogSeries,
          variables: { input: {'id': this.state.deleteBlogSeries} },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      deleteBlogSeries.then((json: any) => {
          console.log({ "Success mutations.deleteBlogSeries: ": json });
          this.setState({
            deleteBlogSeries: '',
            understandBlogSeries: '',
            showAlert: '⚠️ Deleted'
          })

      }).catch((e: any) => { console.log(e) })
      return true;
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' })
    }
  }

  handleSave() {
    if (this.state.title === '' || this.state.author === '' || this.state.desc === '' || this.state.editorState.getCurrentContent().hasText() === false) {
      this.setState({ showAlert: "⚠️ You need a valid title, author, description and body to save." })
      return false;
    } else {
      var titles: any = [];
      this.state.blogPostsList.forEach((post: any) => {
        titles.push(post.blogTitle)
      });
      var contentState = this.state.editorState.getCurrentContent();
      var raw = convertToRaw(contentState);
      var html = draftToHtml(raw)
      this.updateBlogField('content', html)
      if (this.state.selectedVideoSeries) {
        // DynamoDB naming convention is confusing blog(videoSeries)Id
        this.updateBlogField('blogSeriesId', this.state.selectedVideoSeries)
      } else {
        this.updateBlogField('blogSeriesId', 'nonEmptyVoidStringValue')
      }
      this.updateBlogField('publishedDate', format(this.state.publishDate, "yyyy-MM-dd"))

      if (this.state.disableCalendar===true) {
        this.updateBlogField('expirationDate', 'none')
      } else {
        this.updateBlogField('expirationDate', format(this.state.expireDate, "yyyy-MM-dd"))
      }
      console.log(this.state.blogObject)

      if (this.state.editMode === false && titles.includes(this.state.title)) {
        this.setState({ showAlert: "⚠️ Warning: a post with this title exists. Please change your title. If you are trying to edit this post, please close this message then click edit: Edit an existing post"})
        return false;
      }

      this.updateBlogField('tags', this.state.selectedTags)
      this.writeBridges(this.state.selectedBlogSeries, this.state.deselectedBlogSeries);

      this.setState({ editMode: true })

      var createBlog:any = API.graphql({
          query: mutations.createBlog,
          variables: { input: this.state.blogObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      createBlog.then((json: any) => {
          console.log({ "Success mutations.createBlog: ": json });
          this.setState({ showAlert: 'Saved ✅' });
          return true;

      }).catch((e: any) => { console.log(e) })

      var updateBlog:any = API.graphql({
          query: mutations.updateBlog,
          variables: { input: this.state.blogObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      updateBlog.then((json: any) => {
          console.log({ "Success mutations.updateBlog: ": json });
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
    await this.waitForSelection(() => this.state.blogToEditObject);
    console.log(this.state.blogToEditObject);
    const blocksfromHtml = htmlToDraft(this.state.blogToEditObject.content);
    const { contentBlocks, entityMap } = blocksfromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);    
    this.setState({
      title: this.state.blogToEditObject.blogTitle,
      author: this.state.blogToEditObject.author,
      desc: this.state.blogToEditObject.description,
      editorState: EditorState.createWithContent(contentState),
      selectedTags: this.state.blogToEditObject.tags,
      blogStatus: this.state.blogToEditObject.blogStatus
    })

    this.updateBlogField('blogTitle', this.state.title) // sets id so other functions work

    if (this.state.blogToEditObject.expirationDate !== 'none') {
      const exp = parse(this.state.blogToEditObject.expirationDate, "yyyy-MM-dd", new Date())
      this.setState({ expireDate: exp, disableCalendar: false })
    }

    const pub = parse(this.state.blogToEditObject.publishedDate, "yyyy-MM-dd", new Date())
    this.setState({ publishDate: pub })

    if (this.state.blogToEditObject.series) {
      this.setState({ selectedVideoSeries: this.state.blogToEditObject.series.id })
    }

    const blogBridgeByPost:any = API.graphql({
      query: queries.blogBridgeByPost,
      variables: { blogPostID: this.state.blogToEditObject.id },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    blogBridgeByPost.then((json: any) => {
      console.log({"Success queries.blogBridgeByPost: ": json});
      console.log(json)
      this.setState({
          blogBridgeList: json.data.blogBridgeByPost.items
      })
      this.state.blogBridgeList.forEach((bridge: any)=>this.setState({ selectedBlogSeries: this.state.selectedBlogSeries.concat(bridge.blogSeriesID)}))
    }).catch((e: any) => { console.log(e) })

    this.setState({ editMode: true });
  }

  handleNewBlogSeries() {
    this.setState({ newBlogSeriesModal: false });
    if (this.state.newBlogSeries.title !== "") {
      var saveBlogSeries:any = API.graphql({
          query: mutations.createBlogSeries,
          variables: { input: this.state.newBlogSeries },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      saveBlogSeries.then((json: any) => {
          console.log({"Success mutations.createBlogSeries: ": json});

      }).catch((e: any) => { console.log(e) })
      return true;
    }
    return false;
  }

  updateSeriesField(field: any, value: any) {
    let blogSeries = this.state.newBlogSeries
    blogSeries[field] = value
        
    blogSeries.id = blogSeries.title
    this.setState({ newBlogSeries: blogSeries })
    console.log(blogSeries)
  }

  updateBlogField(field: any, value: any) {
    let blog = this.state.blogObject
    blog[field] = value

    blog.id = blog.blogTitle
    this.setState({ blogObject: blog })
  }

  writeBridges(toAdd: string[], toDelete: string[]) {

    var currentPostID = this.state.blogObject.id

    toDelete.forEach((series: string) => {

      var bridgeID = currentPostID+'-'+series

      var deleteBlogSeriesBridge:any = API.graphql({
        query: mutations.deleteBlogSeriesBridge,
        variables: { input: {'id': bridgeID} },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });
  
      deleteBlogSeriesBridge.then((json: any) => {
        console.log({ "Success mutations.deleteBlogSeriesBridge: ": json });
      }).catch((e: any) => { console.log(e) })

    });


    toAdd.forEach((series:string) => {
      
      var bridgeID = currentPostID+'-'+series

      var createBlogSeriesBridge:any = API.graphql({
        query: mutations.createBlogSeriesBridge,
        variables: { input: {'id': bridgeID, 'blogSeriesID': series, 'blogPostID': currentPostID} },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });
  
      createBlogSeriesBridge.then((json: any) => {
        console.log({ "Success mutations.createBlogSeriesBridge: ": json });
      }).catch((e: any) => { console.log(e) })
    });

  }

  handleDeleteBridge() {
    var removed = this.state.selectedBlogSeries
    var toDelete = removed.pop()
    this.setState({ 
      selectedBlogSeries: removed,  
      deselectedBlogSeries: this.state.deselectedBlogSeries.concat(toDelete)
    })
  }

  handleAddBridge() {
    this.setState({ 
      selectedBlogSeries: this.state.selectedBlogSeries.concat(this.state.currentBlogSeries),
      deselectedBlogSeries: this.state.deselectedBlogSeries.filter((elem: any)=>elem!==this.state.currentBlogSeries)
    })
  }

  onChange = (editorState: any) => this.setState({ editorState });

  // RENDER FUNCTIONS

  renderEditBlogModal() {
    return <Modal isOpen={this.state.showEditModal}>
        <div>Edit a blog post</div>
        <select onChange={(event:any) => this.setState({ blogToEditID: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.blogPostsList.map((item: any) => {return <option key={item.id} value={item.id}>{item.id}</option>})}
        </select>
        <button 
          onClick={() => this.setState({ 
            showEditModal: false, 
            blogToEditObject: this.state.blogPostsList.filter((post: any) => post.id === this.state.blogToEditID)[0]
            })
          }>DONE</button>
      </Modal>
  }

  renderNewBlogSeriesModal() {
    return <Modal isOpen={this.state.newBlogSeriesModal}>
        <div>New Blog Series</div>
        <label>
          Title:
          <input value={this.state.newBlogSeries.title} onChange={(item: any) => { this.updateSeriesField("title", item.target.value) }} />
        </label>
        <button onClick={() => this.handleNewBlogSeries()}>DONE</button>
      </Modal>
  }

  renderMoreOptions() {
    return (
      <div>

      <b>Blog Status</b>
        <select style={{width: 200}} onChange={(event:any) => {this.setState({ blogStatus: event.target.value}); this.updateBlogField('blogStatus', this.state.blogStatus)} }>
          <option key="null" value="null">None Selected</option>
          <option key="unlisted" value="Unlisted">Unlisted</option>
          <option key="live" value="Live">Live</option>
        </select>
        <div>Current status: {this.state.blogStatus}</div>
          <br/>

        <label>
          Add tags:
          <input type="text" value={this.state.currentTag} onChange={(event:any) => this.setState({ currentTag: event.target.value})} />
        </label>
        <button className="tags-button" onClick={()=>this.setState({selectedTags: this.state.selectedTags.concat(this.state.currentTag), currentTag: ''}) }>Confirm Tag</button>
        <button className="tags-button" style={{background: "red"}} onClick={() => {this.setState({ selectedTags: [] }); this.updateBlogField('tags', this.state.selectedTags)} }>Clear All Tags</button>
        <div><b>Current tags (click on tag to delete):</b> {this.state.selectedTags.map((item: any) => <div className="tags-item" onClick={() => {this.setState({selectedTags: this.state.selectedTags.filter((elem: any)=>elem!==item)}); this.updateBlogField('tags', this.state.selectedTags)} }>{item + ", "}</div>)}</div>
          <br/>

        <b>Add to Blog Series</b>
        <button className="tags-button" onClick={()=>this.handleAddBridge()}>Select</button>
        <button className="tags-button" style={{background: "red"}} onClick={()=>this.handleDeleteBridge()}>Clear</button>
        <button className="tags-button" style={{background: "green", width: 160}} onClick={()=>this.setState({ newBlogSeriesModal: true })}>New Blog Series</button>
        <select style={{width: 800}} onChange={(event:any) => this.setState({ currentBlogSeries: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.blogSeriesList.map((item: any) => {return <option key={item.id} value={item.id}>{item.title}</option>})}
        </select>
        <div><b>Current blog series: </b> {this.state.selectedBlogSeries.map((item: any) => <div style={{display: "inline"}}>{item + ", "}</div>)}</div>
          <br/>

        <b>Add to Video Series</b>
        <button className="tags-button" onClick={() => this.setState({ selectedVideoSeries: this.state.currentVideoSeries})}>Select</button>
        <button className="tags-button" style={{background: "red"}} onClick={() => this.setState({ selectedVideoSeries: null })}>Clear</button>
        <select style={{width: 800}} onChange={(event:any) => this.setState({ currentVideoSeries: event.target.value})}>
          <option key="null" value="null">None Selected</option>
          {this.state.videoSeriesList.map((item: any) => {return <option key={item.id} value={item.id}>{item.id}</option>})}
        </select>
        <div><b>Current video series: </b> <div style={{display: "inline"}}>{this.state.selectedVideoSeries} </div></div>
          <br/>
        
        <b className="calendar-label">Schedule publish date</b>
        <DatePicker 
          selected={this.state.publishDate} 
          onChange={this.handlePublishDate} 
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        /><br/>

        <b className="calendar-label">{this.state.disableCalendar ? "No expiry" : "Select expiry date"}</b>
        <button className="tags-button" onClick={()=>this.setState({ disableCalendar: !this.state.disableCalendar })}>{this.state.disableCalendar ? "Add expiry" : "No expiry"}</button>
        <DatePicker 
          selected={this.state.expireDate} 
          onChange={this.handleExpireDate} 
          dateFormat="yyyy-MM-dd"
          disabled={this.state.disableCalendar}
          minDate={new Date()}
        /><br/>

        <label>
        {"⚠️ Delete a blog (enter title):"}
          <input style={{width: 400, height: 20}} type="text" value={this.state.delete} onChange={(event:any) => this.setState({ delete: event.target.value})} />
        </label>
        <label>
          Type "Delete forever":
          <input style={{width: 400, height: 20}} type="text" value={this.state.understand} onChange={(event:any) => this.setState({ understand: event.target.value})} />
        </label>
        <button className="tags-button" style={{background: "red"}} onClick={this.handleDeleteBlogPost}>DELETE</button>
          <br/>

        <label>
        {"⚠️ Delete a blog series (enter title):"}
          <input style={{width: 400, height: 20}} type="text" value={this.state.deleteBlogSeries} onChange={(event:any) => this.setState({ deleteBlogSeries: event.target.value})} />
        </label>
        <label>
          Type "Delete forever":
          <input style={{width: 400, height: 20}} type="text" value={this.state.understandBlogSeries} onChange={(event:any) => this.setState({ understandBlogSeries: event.target.value})} />
        </label>
        <button className="tags-button" style={{background: "red"}} onClick={this.handleDeleteBlogSeries}>DELETE</button>
      </div>
    )
  }

  renderTextInput() {
    return (
      <div className="editor-container">
        <label>
          Title:
          <input className="small-input" type="text" value={this.state.title} onChange={(event:any)=> {this.setState({ title: event.target.value, selectedBlogSeries: [], editMode: false}); this.updateBlogField('blogTitle', event.target.value)} } />
        </label>

        <label>
          Author:
          <input className="small-input" type="text" value={this.state.author} onChange={(event:any)=> {this.setState({ author: event.target.value }); this.updateBlogField('author', event.target.value)} } />
        </label>
        <div style={{color: "red", padding: 0, fontSize: "small"}}>{this.state.editMode ? "Warning. Changing your title will create a new post. Please be careful to avoid publishing duplicates." : null}</div>

        <label style={this.state.desc.length >= 180 ? {color: "red"} : {color: "black"}}>
          Description ({this.state.desc.length + " of 210 characters"}):
          <textarea className="big-input" maxLength={210} value={this.state.desc} onChange={(event:any)=> {this.setState({ desc: event.target.value}); this.updateBlogField('description', this.state.desc)} } />
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
                  const filepath = "bloguploads/" + uuidv1() + file.name;
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
        <button className="toolbar-button" onClick={this.handleEdit}>Edit an existing post</button><br/>
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
      <div className="blog-container">
        <AdminMenu></AdminMenu>
        {this.renderAlert()}
        {this.renderEditBlogModal()}
        {this.renderNewBlogSeriesModal()}
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