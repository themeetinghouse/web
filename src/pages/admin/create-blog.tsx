import React from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg'
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import BlogPreview from './BlogPreview';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
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
import { EmptyProps } from '../../utils';
import "react-datepicker/dist/react-datepicker.css";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import './create-blog.scss';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269'
};

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

class Index extends React.Component<EmptyProps, State> {
  deleteConfirmation = "Delete forever";
  constructor(props: EmptyProps) {
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
  }

  // QUERY FUNCTIONS

  async listSeries(nextToken: any) {
    try {
      const listSeries: any = await API.graphql({
        query: customQueries.listSeriess,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });

      console.log({ "Success customQueries.listSeries: ": listSeries });
      this.setState({
        videoSeriesList: this.state.videoSeriesList.concat(listSeries.data.listSeriess.items).sort(function (a: any, b: any) {
          const nameA = a.id.toUpperCase();
          const nameB = b.id.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      })
      if (listSeries.data.listSeriess.nextToken != null)
        this.listSeries(listSeries.data.listSeriess.nextToken)
    } catch (e) {
      console.error(e)
    }
  }

  async listBlogs(nextToken: any) {
    try {
      const listBlogs: any = await API.graphql({
        query: queries.listBlogs,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });

      console.log({ "Success queries.listBlogs: ": listBlogs });
      this.setState({
        blogPostsList: this.state.blogPostsList.concat(listBlogs.data.listBlogs.items).sort(function (a: any, b: any) {
          const nameA = a.id.toUpperCase();
          const nameB = b.id.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      })
      if (listBlogs.data.listBlogs.nextToken != null)
        this.listBlogs(listBlogs.data.listBlogs.nextToken)
    } catch (e) {
      console.error(e)
    }
  }

  async listBlogSeries(nextToken: any) {
    try {
      const listBlogSeries: any = await API.graphql({
        query: queries.listBlogSeriess,
        variables: { nextToken: nextToken, sortDirection: "DESC", limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });

      console.log({ "Success queries.listBlogSeries: ": listBlogSeries });
      this.setState({
        blogSeriesList: this.state.blogSeriesList.concat(listBlogSeries.data.listBlogSeriess.items).sort(function (a: any, b: any) {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      })
      if (listBlogSeries.data.listBlogSeriess.nextToken != null)
        this.listBlogSeries(listBlogSeries.data.listBlogSeriess.nextToken)

    } catch (e) {
      console.error(e)
    }
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

  async handleDeleteBlogPost() {
    if (this.state.understand === this.deleteConfirmation) {
      try {
        const deleteBlog: any = await API.graphql({
          query: mutations.deleteBlog,
          variables: { input: { 'id': this.state.delete } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });

        console.log({ "Success mutations.deleteBlog: ": deleteBlog });
        this.setState({
          delete: '',
          understand: '',
          showAlert: `⚠️ Deleted: ${deleteBlog.data.deleteBlog.id}`
        })
      } catch (e) {
        if (e.data && e.data.deleteBlog) {
          this.setState({
            delete: '',
            understand: '',
            showAlert: `⚠️ Deleted: ${e.data.deleteBlog.id}`
          })
        }
        console.error(e)
      }
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' })
    }
  }

  async handleDeleteBlogSeries() {
    if (this.state.understandBlogSeries === this.deleteConfirmation) {
      try {
        const deleteBlogSeries: any = await API.graphql({
          query: mutations.deleteBlogSeries,
          variables: { input: { 'id': this.state.deleteBlogSeries } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });
        console.log({ "Success mutations.deleteBlogSeries: ": deleteBlogSeries });
        this.setState({
          deleteBlogSeries: '',
          understandBlogSeries: '',
          showAlert: `⚠️ Deleted: ${deleteBlogSeries.data.deleteBlogSeries.id} `
        })
      } catch (e) {
        if (e.data && e.data.deleteBlogSeries) {
          this.setState({
            deleteBlogSeries: '',
            understandBlogSeries: '',
            showAlert: `⚠️ Deleted: ${e.data.deleteBlogSeries.id}`
          })
        }
        console.error(e)
      }
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' })
    }
  }

  async handleSave() {
    if (this.state.title === '' || this.state.author === '' || this.state.desc === '' || this.state.editorState.getCurrentContent().hasText() === false) {
      this.setState({ showAlert: "⚠️ You need a valid title, author, description and body to save." })
      return false;
    }
    const titles: any = [];
    this.state.blogPostsList.forEach((post: any) => {
      titles.push(post.blogTitle)
    });
    const contentState = this.state.editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const html = draftToHtml(raw)
    this.updateBlogField('content', html)
    if (this.state.selectedVideoSeries) {
      // DynamoDB naming convention is confusing blog(videoSeries)Id
      this.updateBlogField('blogSeriesId', this.state.selectedVideoSeries)
    } else {
      this.updateBlogField('blogSeriesId', 'nonEmptyVoidStringValue')
    }
    this.updateBlogField('publishedDate', format(this.state.publishDate, "yyyy-MM-dd"))

    if (this.state.disableCalendar === true) {
      this.updateBlogField('expirationDate', 'none')
    } else {
      this.updateBlogField('expirationDate', format(this.state.expireDate, "yyyy-MM-dd"))
    }
    console.log(this.state.blogObject)

    if (this.state.editMode === false && titles.includes(this.state.title)) {
      this.setState({ showAlert: "⚠️ Warning: A post with this title exists. Please change your title. If you are trying to edit this post, please close this message then click edit: Edit an existing post" })
      return false;
    }

    this.updateBlogField('blogStatus', this.state.blogStatus)
    this.updateBlogField('tags', this.state.selectedTags)
    this.updateBlogField('blogStatus', this.state.blogStatus)
    this.writeBridges(this.state.selectedBlogSeries, this.state.deselectedBlogSeries);

    this.setState({ editMode: true })

    try {
      const updateBlog: any = await API.graphql({
        query: mutations.updateBlog,
        variables: { input: this.state.blogObject },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });
      this.setState({ showAlert: `✅ Saved: ${updateBlog.data.updateBlog.id}` });
      console.log({ "Success mutations.updateBlog: ": updateBlog });
    } catch (e) {
      if (e.data && e.data.updateBlog) {
        this.setState({ showAlert: `✅ Saved: ${e.data.updateBlog.id}` });
      }
      console.error(e)
      try {
        const createBlog: any = await API.graphql({
          query: mutations.createBlog,
          variables: { input: this.state.blogObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });
        this.setState({ showAlert: `✅ Created: ${createBlog.data.createBlog.id}` });
        console.log({ "Success mutations.createBlog: ": createBlog });
      } catch (e) {
        if (e.data && e.data.createBlog) {
          this.setState({ showAlert: `✅ Created: ${e.data.createBlog.id}` });
        }
        console.error(e)
      }
    }
  }

  waitForSelection(conditionFunction: () => boolean) {

    const poll = (resolve: any) => {
      if (conditionFunction()) resolve();
      else setTimeout(() => poll(resolve), 500);
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

    const blogBridgeByPost: any = API.graphql({
      query: queries.blogBridgeByPost,
      variables: { blogPostID: this.state.blogToEditObject.id },
      authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
    blogBridgeByPost.then((json: any) => {
      console.log({ "Success queries.blogBridgeByPost: ": json });
      console.log(json)
      this.setState({
        blogBridgeList: json.data.blogBridgeByPost.items
      })
      this.state.blogBridgeList.forEach((bridge: any) => this.setState({ selectedBlogSeries: this.state.selectedBlogSeries.concat(bridge.blogSeriesID) }))
    }).catch((e: any) => { console.log(e) })

    this.setState({ editMode: true });
  }

  async handleNewBlogSeries() {
    this.setState({ newBlogSeriesModal: false });
    if (this.state.newBlogSeries.title !== "") {
      try {
        const saveBlogSeries: any = await API.graphql({
          query: mutations.createBlogSeries,
          variables: { input: this.state.newBlogSeries },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });
        console.log({ "Success mutations.createBlogSeries: ": saveBlogSeries });
        this.setState({ showAlert: `✅ Created blog series: ${saveBlogSeries.data.saveBlogSeries.id}` })
      } catch (e) {
        if (e.data && e.data.createBlogSeries)
          this.setState({ showAlert: `✅ Created blog series: ${e.data.createBlogSeries.id}` })
        console.error(e)
      }
    }
  }

  updateSeriesField(field: any, value: any) {
    const blogSeries = this.state.newBlogSeries
    blogSeries[field] = value

    blogSeries.id = blogSeries.title
    this.setState({ newBlogSeries: blogSeries })
    console.log(blogSeries)
  }

  updateBlogField(field: any, value: any) {
    const blog = this.state.blogObject
    blog[field] = value

    blog.id = blog.blogTitle
    this.setState({ blogObject: blog })
  }

  writeBridges(toAdd: string[], toDelete: string[]) {

    const currentPostID = this.state.blogObject.id

    toDelete.forEach((series: string) => {

      const bridgeID = currentPostID + '-' + series

      const deleteBlogSeriesBridge: any = API.graphql({
        query: mutations.deleteBlogSeriesBridge,
        variables: { input: { 'id': bridgeID } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      deleteBlogSeriesBridge.then((json: any) => {
        console.log({ "Success mutations.deleteBlogSeriesBridge: ": json });
      }).catch((e: any) => { console.error(e) })

    });


    toAdd.forEach((series: string) => {

      const bridgeID = currentPostID + '-' + series

      const createBlogSeriesBridge: any = API.graphql({
        query: mutations.createBlogSeriesBridge,
        variables: { input: { 'id': bridgeID, 'blogSeriesID': series, 'blogPostID': currentPostID } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
      });

      createBlogSeriesBridge.then((json: any) => {
        console.log({ "Success mutations.createBlogSeriesBridge: ": json });
      }).catch((e: any) => { console.log(e) })
    });

  }

  handleDeleteBridge() {
    const removed = this.state.selectedBlogSeries
    const toDelete = removed.pop()
    this.setState({
      selectedBlogSeries: removed,
      deselectedBlogSeries: this.state.deselectedBlogSeries.concat(toDelete)
    })
  }

  handleAddBridge() {
    this.setState({
      selectedBlogSeries: this.state.selectedBlogSeries.concat(this.state.currentBlogSeries),
      deselectedBlogSeries: this.state.deselectedBlogSeries.filter((elem: any) => elem !== this.state.currentBlogSeries)
    })
  }

  handleRemoveTag(item: string) {
    this.setState({ selectedTags: this.state.selectedTags.filter((elem: any) => elem !== item) })
  }

  onChange = (editorState: any) => this.setState({ editorState });

  // RENDER FUNCTIONS

  renderEditBlogModal() {
    return <Modal isOpen={this.state.showEditModal}>
      <div>Edit a blog post</div>
      <select onChange={(event: any) => this.setState({ blogToEditID: event.target.value })}>
        <option key="null" value="null">None Selected</option>
        {this.state.blogPostsList.map((item: any) => { return <option key={item.id} value={item.id}>{item.id}</option> })}
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
        <select style={{ width: 200 }} onChange={(event: any) => this.setState({ blogStatus: event.target.value })}>
          <option key="null" value="null">None Selected</option>
          <option key="unlisted" value="Unlisted">Unlisted</option>
          <option key="live" value="Live">Live</option>
        </select>
        <div>Current status: {this.state.blogStatus}</div>
        <br />

        <label>
          Add tags:
          <input type="text" value={this.state.currentTag} onChange={(event: any) => this.setState({ currentTag: event.target.value })} />
        </label>
        <button className="tags-button" onClick={() => this.setState({ selectedTags: this.state.selectedTags.concat(this.state.currentTag), currentTag: '' })}>Confirm Tag</button>
        <button className="tags-button" style={{ background: "red" }} onClick={() => this.setState({ selectedTags: [] })}>Clear All Tags</button>
        <div>
          <b>Current tags (click on tag to delete):</b>
          {this.state.selectedTags.map((item: any, index: number) =>
            <div key={index} className="tags-item" onClick={() => this.handleRemoveTag(item)}>
              {index === (this.state.selectedTags.length - 1) ? item : item + ", "}
            </div>
          )}
        </div>
        <br />

        <b>Add to Blog Series</b>
        <button className="tags-button" onClick={() => this.handleAddBridge()}>Select</button>
        <button className="tags-button" style={{ background: "red" }} onClick={() => this.handleDeleteBridge()}>Clear</button>
        <button className="tags-button" style={{ background: "green", width: 160 }} onClick={() => this.setState({ newBlogSeriesModal: true })}>New Blog Series</button>
        <select style={{ width: 800 }} onChange={(event: any) => this.setState({ currentBlogSeries: event.target.value })}>
          <option key="null" value="null">None Selected</option>
          {this.state.blogSeriesList.map((item: any) => { return <option key={item.id} value={item.id}>{item.title}</option> })}
        </select>
        <div><b>Current blog series: </b> {this.state.selectedBlogSeries.map((item: string, index: number) => <div key={index} style={{ display: "inline" }}>{item + ", "}</div>)}</div>
        <br />

        <b>Add to Video Series</b>
        <button className="tags-button" onClick={() => this.setState({ selectedVideoSeries: this.state.currentVideoSeries })}>Select</button>
        <button className="tags-button" style={{ background: "red" }} onClick={() => this.setState({ selectedVideoSeries: null })}>Clear</button>
        <select style={{ width: 800 }} onChange={(event: any) => this.setState({ currentVideoSeries: event.target.value })}>
          <option key="null" value="null">None Selected</option>
          {this.state.videoSeriesList.map((item: any) => { return <option key={item.id} value={item.id}>{item.id}</option> })}
        </select>
        <div><b>Current video series: </b> <div style={{ display: "inline" }}>{this.state.selectedVideoSeries} </div></div>
        <br />

        <b className="calendar-label">Schedule publish date</b>
        <DatePicker
          selected={this.state.publishDate}
          onChange={this.handlePublishDate}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        /><br />

        <b className="calendar-label">{this.state.disableCalendar ? "No expiry" : "Select expiry date"}</b>
        <button className="tags-button" onClick={() => this.setState({ disableCalendar: !this.state.disableCalendar })}>{this.state.disableCalendar ? "Add expiry" : "No expiry"}</button>
        <DatePicker
          selected={this.state.expireDate}
          onChange={this.handleExpireDate}
          dateFormat="yyyy-MM-dd"
          disabled={this.state.disableCalendar}
          minDate={new Date()}
        /><br />

        <label>
          Delete a blog (enter title):
          <input style={{ width: 400, height: 20 }} type="text" value={this.state.delete} onChange={(event: any) => this.setState({ delete: event.target.value })} />
        </label>
        <label>
          Type &quot;{this.deleteConfirmation}&quot;:
          <input style={{ width: 400, height: 20 }} type="text" value={this.state.understand} onChange={(event: any) => this.setState({ understand: event.target.value })} />
        </label>
        <button className="tags-button" style={{ background: "red" }} onClick={() => this.handleDeleteBlogPost()}>DELETE</button>
        <br />

        <label>
          Delete a blog series (enter title):
          <input style={{ width: 400, height: 20 }} type="text" value={this.state.deleteBlogSeries} onChange={(event: any) => this.setState({ deleteBlogSeries: event.target.value })} />
        </label>
        <label>
          Type &quot;{this.deleteConfirmation}&quot;:
          <input style={{ width: 400, height: 20 }} type="text" value={this.state.understandBlogSeries} onChange={(event: any) => this.setState({ understandBlogSeries: event.target.value })} />
        </label>
        <button className="tags-button" style={{ background: "red" }} onClick={() => this.handleDeleteBlogSeries()}>DELETE</button>
      </div>
    )
  }

  renderTextInput() {
    return (
      <div className="editor-container">
        <label>
          Title:
          <input className="small-input" type="text" value={this.state.title} onChange={(event: any) => { this.setState({ title: event.target.value, selectedBlogSeries: [], editMode: false }); this.updateBlogField('blogTitle', event.target.value) }} />
        </label>

        <label>
          Author:
          <input className="small-input" type="text" value={this.state.author} onChange={(event: any) => { this.setState({ author: event.target.value }); this.updateBlogField('author', event.target.value) }} />
        </label>
        <div style={{ color: "red", padding: 0, fontSize: "small" }}>{this.state.editMode ? "Warning: Changing your title will create a new post. Please be careful to avoid publishing duplicates." : null}</div>

        <label style={this.state.desc.length >= 175 ? { color: "red" } : { color: "black" }}>
          Description ({this.state.desc.length + " of 200 characters"}):
          <textarea className="big-input" maxLength={200} value={this.state.desc} onChange={(event: any) => { this.setState({ desc: event.target.value }); this.updateBlogField('description', this.state.desc) }} />
        </label>

        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onChange}
          spellCheck={true}
          toolbar={{
            options: ['inline', 'fontSize', 'list', 'link', 'emoji', 'image', 'history'],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough'],
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
                const download = "https://themeetinghouse-usercontentstoragetmhusercontent-tmhprod.s3.amazonaws.com/public/" + filepath;
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
        <button className="toolbar-button" onClick={() => this.handleSave()}>SAVE</button><br />
        <button className="toolbar-button" onClick={() => this.handleEdit()}>Edit an existing post</button><br />
        <button className="toolbar-button" onClick={() => this.setState({ moreOptions: !this.state.moreOptions })}>More options</button><br />
        <button className="toolbar-button" onClick={() => this.setState({ showPreview: !this.state.showPreview })}>Preview your work</button>{this.state.showPreview ? <div style={{ width: 150 }}>Scroll to bottom of page for preview</div> : null}<br />
      </div>
    )
  }

  renderAlert() {
    return (
      <Modal isOpen={Boolean(this.state.showAlert)}>
        <div>{this.state.showAlert}</div>
        <button onClick={() => this.setState({ showAlert: '' })}>OK</button>
      </Modal>
    )
  }

  render() {
    return (
      <AmplifyAuthenticator federated={federated}>
        <div className="blog-container">
          <AdminMenu></AdminMenu>
          {this.renderAlert()}
          {this.renderEditBlogModal()}
          {this.renderNewBlogSeriesModal()}
          {this.renderToolbar()}
          {this.renderTextInput()}
          <div className="preview">
            {this.state.showPreview ? <BlogPreview data={this.state} content={null} type={"blog"}></BlogPreview> : null}
          </div>
        </div>
      </AmplifyAuthenticator>
    );
  }
}

export default Index