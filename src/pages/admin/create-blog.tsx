import React from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import AdminMenu from '../../components/Menu/AdminMenu';
import BlogPreview from './BlogPreview';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import awsmobile from '../../aws-exports';
import * as customQueries from '../../graphql-custom/customQueries';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api/lib/types';
import Amplify, { API, Storage } from 'aws-amplify';
import { Modal } from 'reactstrap';
import { v1 as uuidv1 } from 'uuid';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import DatePicker from 'react-datepicker';
import { EmptyProps } from '../../utils';
import 'react-datepicker/dist/react-datepicker.css';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import './create-blog.scss';
import {
  BlogBridgeByPostQuery,
  CreateBlogInput,
  CreateBlogMutation,
  CreateBlogSeriesBridgeMutation,
  CreateBlogSeriesInput,
  CreateBlogSeriesMutation,
  DeleteBlogMutation,
  DeleteBlogSeriesBridgeMutation,
  DeleteBlogSeriesMutation,
  ListBlogSeriessQuery,
  ListBlogsQuery,
  ListSeriessQuery,
  UpdateBlogMutation,
} from '../../API';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269',
};

interface State {
  blogObject: CreateBlogInput;
  blogToEditObject: NonNullable<
    NonNullable<ListBlogsQuery['listBlogs']>['items']
  >[0];
  editorState: EditorState;
  disableCalendar: boolean;
  publishDate: Date;
  expireDate: Date;

  videoSeriesList: NonNullable<
    NonNullable<ListSeriessQuery['listSeriess']>['items']
  >;
  blogPostsList: NonNullable<NonNullable<ListBlogsQuery['listBlogs']>['items']>;
  blogSeriesList: NonNullable<
    NonNullable<ListBlogSeriessQuery['listBlogSeriess']>['items']
  >;
  selectedBlogSeries: string[];
  deselectedBlogSeries: string[];
  blogBridgeList: NonNullable<
    BlogBridgeByPostQuery['blogBridgeByPost']
  >['items'];
  newBlogSeries: CreateBlogSeriesInput;

  currentTag: string;
  currentBlogSeries: string;
  blogToEditId: string;
  showAlert: string;

  showPreview: boolean;
  editMode: boolean;
  showEditModal: boolean;
  newBlogSeriesModal: boolean;
  moreOptions: boolean;

  delete: string;
  understand: string;
  deleteBlogSeries: string;
  understandBlogSeries: string;
}

class Index extends React.Component<EmptyProps, State> {
  deleteConfirmation = 'Delete forever';
  nullString = 'NullValueString';
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      blogObject: {
        id: '',
        author: '',
        blogTitle: '',
        expirationDate: 'none',
        publishedDate: format(new Date(), 'yyyy-MM-dd'),
        description: '',
        blogStatus: 'Unlisted',
        content: '',
        hiddenMainIndex: false,
        tags: [],
        blogSeriesId: this.nullString,
      },
      blogToEditObject: null,
      editorState: EditorState.createEmpty(),
      disableCalendar: true,
      publishDate: new Date(),
      expireDate: new Date(),

      videoSeriesList: [],
      blogPostsList: [],
      blogSeriesList: [],
      selectedBlogSeries: [],
      deselectedBlogSeries: [],
      blogBridgeList: [],
      newBlogSeries: {
        id: '',
        title: '',
      },

      currentTag: '',
      currentBlogSeries: '',
      blogToEditId: '',
      showAlert: '',

      showPreview: false,
      editMode: false,
      showEditModal: false,
      newBlogSeriesModal: false,
      moreOptions: false,

      delete: '',
      understand: '',
      deleteBlogSeries: '',
      understandBlogSeries: '',
    };

    this.listSeries();
    this.listBlogs();
    this.listBlogSeries();
  }

  // QUERY FUNCTIONS

  async listSeries(nextToken?: string) {
    try {
      const listSeries = (await API.graphql({
        query: customQueries.listSeriess,
        variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListSeriessQuery>;

      console.log({ 'Success customQueries.listSeries: ': listSeries });
      this.setState({
        videoSeriesList: this.state.videoSeriesList
          .concat(listSeries?.data?.listSeriess?.items ?? [])
          .sort((a, b) => {
            const nameA = a?.id?.toUpperCase() ?? '';
            const nameB = b?.id?.toUpperCase() ?? '';
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }),
      });
      if (listSeries?.data?.listSeriess?.nextToken)
        this.listSeries(listSeries.data.listSeriess.nextToken);
    } catch (e) {
      console.error(e);
    }
  }

  async listBlogs(nextToken?: string) {
    try {
      const listBlogs = (await API.graphql({
        query: queries.listBlogs,
        variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListBlogsQuery>;

      console.log({ 'Success queries.listBlogs: ': listBlogs });
      this.setState({
        blogPostsList: this.state.blogPostsList
          .concat(listBlogs?.data?.listBlogs?.items ?? [])
          .sort((a, b) => {
            const nameA = a?.id?.toUpperCase() ?? '';
            const nameB = b?.id?.toUpperCase() ?? '';
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }),
      });
      if (listBlogs?.data?.listBlogs?.nextToken)
        this.listBlogs(listBlogs.data.listBlogs.nextToken);
    } catch (e) {
      console.error(e);
    }
  }

  async listBlogSeries(nextToken?: string) {
    try {
      const listBlogSeries = (await API.graphql({
        query: queries.listBlogSeriess,
        variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListBlogSeriessQuery>;

      console.log({ 'Success queries.listBlogSeries: ': listBlogSeries });
      this.setState({
        blogSeriesList: this.state.blogSeriesList
          .concat(listBlogSeries?.data?.listBlogSeriess?.items ?? [])
          .sort((a, b) => {
            const nameA = a?.title?.toUpperCase() ?? '';
            const nameB = b?.title?.toUpperCase() ?? '';
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }),
      });
      if (listBlogSeries?.data?.listBlogSeriess?.nextToken)
        this.listBlogSeries(listBlogSeries.data.listBlogSeriess.nextToken);
    } catch (e) {
      console.error(e);
    }
  }

  // HANDLERS

  handlePublishDate = (date: Date) => {
    this.setState({
      publishDate: date,
    });
    this.updateBlogField('publishedDate', format(date, 'yyyy-MM-dd'));
  };

  handleExpireDate = (date: Date) => {
    this.setState({
      expireDate: date,
    });
    this.updateBlogField('expirationDate', format(date, 'yyyy-MM-dd'));
  };

  async handleDeleteBlogPost() {
    if (this.state.understand === this.deleteConfirmation) {
      try {
        const deleteBlog = (await API.graphql({
          query: mutations.deleteBlog,
          variables: { input: { id: this.state.delete } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<DeleteBlogMutation>;

        console.log({ 'Success mutations.deleteBlog: ': deleteBlog });
        this.setState({
          delete: '',
          understand: '',
          showAlert: `⚠️ Deleted: ${deleteBlog?.data?.deleteBlog?.id}`,
        });
      } catch (e) {
        if (e.data?.deleteBlog) {
          this.setState({
            delete: '',
            understand: '',
            showAlert: `⚠️ Deleted: ${e.data.deleteBlog.id}`,
          });
        }
        console.error(e);
      }
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' });
    }
  }

  async handleDeleteBlogSeries() {
    if (this.state.understandBlogSeries === this.deleteConfirmation) {
      try {
        const deleteBlogSeries = (await API.graphql({
          query: mutations.deleteBlogSeries,
          variables: { input: { id: this.state.deleteBlogSeries } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<DeleteBlogSeriesMutation>;
        console.log({
          'Success mutations.deleteBlogSeries: ': deleteBlogSeries,
        });
        this.setState({
          deleteBlogSeries: '',
          understandBlogSeries: '',
          showAlert: `⚠️ Deleted: ${deleteBlogSeries?.data?.deleteBlogSeries?.id} `,
        });
      } catch (e) {
        if (e.data?.deleteBlogSeries) {
          this.setState({
            deleteBlogSeries: '',
            understandBlogSeries: '',
            showAlert: `⚠️ Deleted: ${e.data.deleteBlogSeries.id}`,
          });
        }
        console.error(e);
      }
    } else {
      this.setState({ showAlert: '⚠️ You must type the confirmation message' });
    }
  }

  async handleSave() {
    if (
      !this.state.blogObject.blogTitle ||
      !this.state.blogObject.author ||
      !this.state.blogObject.description ||
      !this.state.editorState.getCurrentContent().hasText()
    ) {
      this.setState({
        showAlert:
          '⚠️ You need a valid title, author, description and body to save.',
      });
      return false;
    }
    const titles: string[] = [];
    this.state.blogPostsList.forEach((post) => {
      if (post?.blogTitle) titles.push(post?.blogTitle);
    });
    const contentState = this.state.editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const html = draftToHtml(raw);
    this.updateBlogField('content', html);
    this.updateBlogField('id', this.state.blogObject.blogTitle);

    if (
      !this.state.editMode &&
      titles.includes(this.state.blogObject?.blogTitle)
    ) {
      this.setState({
        showAlert:
          '⚠️ Warning: A post with this title exists. Please change your title. If you are trying to edit this post, please close this message then click edit: Edit an existing post',
      });
      return false;
    }

    this.writeBridges(
      this.state.selectedBlogSeries,
      this.state.deselectedBlogSeries
    );

    this.setState({ editMode: true });

    try {
      const updateBlog = (await API.graphql({
        query: mutations.updateBlog,
        variables: { input: this.state.blogObject },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateBlogMutation>;
      this.setState({
        showAlert: `✅ Saved: ${updateBlog?.data?.updateBlog?.id}`,
      });
      console.log({ 'Success mutations.updateBlog: ': updateBlog });
    } catch (e) {
      if (e.data?.updateBlog) {
        this.setState({ showAlert: `✅ Saved: ${e.data?.updateBlog?.id}` });
      }
      console.error(e);
      try {
        const createBlog = (await API.graphql({
          query: mutations.createBlog,
          variables: { input: this.state.blogObject },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<CreateBlogMutation>;
        this.setState({
          showAlert: `✅ Created: ${createBlog?.data?.createBlog?.id}`,
        });
        console.log({ 'Success mutations.createBlog: ': createBlog });
      } catch (e) {
        if (e.data?.createBlog) {
          this.setState({ showAlert: `✅ Created: ${e.data?.createBlog?.id}` });
        }
        console.error(e);
      }
    }
  }

  waitForSelection(conditionFunction: () => boolean) {
    const poll = (resolve: any) => {
      if (conditionFunction()) resolve();
      else setTimeout(() => poll(resolve), 500);
    };

    return new Promise(poll);
  }

  async handleEdit() {
    this.setState({ showEditModal: true });
    await this.waitForSelection(() => Boolean(this.state.blogToEditObject));

    if (this.state.blogToEditObject?.content) {
      const blocksfromHtml = htmlToDraft(this.state.blogToEditObject?.content);
      const { contentBlocks, entityMap } = blocksfromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      this.setState({
        editorState: EditorState.createWithContent(contentState),
      });

      this.setState({ blogObject: this.state.blogToEditObject });

      if (
        this.state.blogToEditObject.expirationDate !== 'none' &&
        this.state.blogToEditObject.expirationDate
      ) {
        const exp = parse(
          this.state.blogToEditObject.expirationDate,
          'yyyy-MM-dd',
          new Date()
        );
        this.setState({ expireDate: exp, disableCalendar: false });
      }
    }

    if (this.state.blogToEditObject?.publishedDate) {
      const pub = parse(
        this.state.blogToEditObject?.publishedDate,
        'yyyy-MM-dd',
        new Date()
      );
      this.setState({ publishDate: pub });
    }

    const blogBridgeByPost = API.graphql({
      query: queries.blogBridgeByPost,
      variables: { blogPostID: this.state.blogToEditObject?.id ?? '' },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }) as Promise<GraphQLResult<BlogBridgeByPostQuery>>;
    blogBridgeByPost
      .then((json) => {
        console.log({ 'Success queries.blogBridgeByPost: ': json });
        this.setState({
          blogBridgeList: json?.data?.blogBridgeByPost?.items ?? [],
        });
        if (this.state.blogBridgeList)
          this.state.blogBridgeList.forEach((bridge) => {
            if (bridge?.blogSeriesID)
              this.setState({
                selectedBlogSeries: this.state.selectedBlogSeries.concat(
                  bridge.blogSeriesID
                ),
              });
          });
      })
      .catch((e) => {
        console.error(e);
      });

    this.setState({ editMode: true });
  }

  async handleNewBlogSeries() {
    this.setState({ newBlogSeriesModal: false });
    if (this.state.newBlogSeries.title) {
      this.updateSeriesField('id', this.state.newBlogSeries.title);
      try {
        const saveBlogSeries = (await API.graphql({
          query: mutations.createBlogSeries,
          variables: { input: this.state.newBlogSeries },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<CreateBlogSeriesMutation>;
        console.log({ 'Success mutations.createBlogSeries: ': saveBlogSeries });
        this.setState({
          showAlert: `✅ Created blog series: ${saveBlogSeries?.data?.createBlogSeries?.id}`,
        });
      } catch (e) {
        if (e.data?.createBlogSeries)
          this.setState({
            showAlert: `✅ Created blog series: ${e.data?.createBlogSeries?.id}`,
          });
        console.error(e);
      }
    }
  }

  updateSeriesField(field: keyof CreateBlogSeriesInput, value: string) {
    this.setState((prevState) => ({
      newBlogSeries: { ...prevState.newBlogSeries, [field]: value },
    }));
  }

  updateBlogField(
    field: keyof CreateBlogInput,
    value: boolean | string | (string | null)[]
  ) {
    this.setState((prevState) => ({
      blogObject: { ...prevState.blogObject, [field]: value },
    }));
  }

  writeBridges(toAdd: string[], toDelete: string[]) {
    const currentPostID = this.state.blogObject.id;

    toDelete.forEach((series: string) => {
      const bridgeID = currentPostID + '-' + series;

      const deleteBlogSeriesBridge = API.graphql({
        query: mutations.deleteBlogSeriesBridge,
        variables: { input: { id: bridgeID } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      }) as Promise<GraphQLResult<DeleteBlogSeriesBridgeMutation>>;

      deleteBlogSeriesBridge
        .then((json) => {
          console.log({ 'Success mutations.deleteBlogSeriesBridge: ': json });
        })
        .catch((e) => {
          console.error(e);
        });
    });

    toAdd.forEach((series: string) => {
      const bridgeID = currentPostID + '-' + series;

      const createBlogSeriesBridge = API.graphql({
        query: mutations.createBlogSeriesBridge,
        variables: {
          input: {
            id: bridgeID,
            blogSeriesID: series,
            blogPostID: currentPostID,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      }) as Promise<GraphQLResult<CreateBlogSeriesBridgeMutation>>;

      createBlogSeriesBridge
        .then((json) => {
          console.log({ 'Success mutations.createBlogSeriesBridge: ': json });
        })
        .catch((e) => {
          console.error(e);
        });
    });
  }

  handleDeleteBridge() {
    const removed = this.state.selectedBlogSeries;
    const toDelete = removed.pop();
    if (toDelete) {
      this.setState({
        selectedBlogSeries: removed,
        deselectedBlogSeries: this.state.deselectedBlogSeries.concat(toDelete),
      });
    }
  }

  handleAddBridge() {
    if (this.state.currentBlogSeries) {
      this.setState({
        selectedBlogSeries: this.state.selectedBlogSeries.concat(
          this.state.currentBlogSeries
        ),
        deselectedBlogSeries: this.state.deselectedBlogSeries.filter(
          (elem) => elem !== this.state.currentBlogSeries
        ),
      });
    }
  }

  handleRemoveTag(item: string | null) {
    if (item)
      this.updateBlogField(
        'tags',
        this.state.blogObject?.tags?.filter((elem) => elem !== item) ?? []
      );
  }

  onChange = (editorState: EditorState) => this.setState({ editorState });

  // RENDER FUNCTIONS

  renderEditBlogModal() {
    return (
      <Modal isOpen={this.state.showEditModal}>
        <div>Edit a blog post</div>
        <select
          onChange={(event) =>
            this.setState({ blogToEditId: event.target.value })
          }
        >
          <option key="null" value="null">
            None Selected
          </option>
          {this.state.blogPostsList.map((item) => {
            return (
              <option key={item?.id} value={item?.id}>
                {item?.id}
              </option>
            );
          })}
        </select>
        <button
          onClick={() =>
            this.setState({
              showEditModal: false,
              blogToEditObject: this.state.blogPostsList.filter(
                (post) => post?.id === this.state.blogToEditId
              )[0],
            })
          }
        >
          DONE
        </button>
      </Modal>
    );
  }

  renderNewBlogSeriesModal() {
    return (
      <Modal isOpen={this.state.newBlogSeriesModal}>
        <div>New Blog Series</div>
        <label>
          Title:
          <input
            value={this.state.newBlogSeries.title ?? ''}
            onChange={(item) => {
              this.updateSeriesField('title', item.target.value);
            }}
          />
        </label>
        <button onClick={() => this.handleNewBlogSeries()}>DONE</button>
      </Modal>
    );
  }

  renderMoreOptions() {
    return (
      <div>
        <b>Blog Status</b>
        <select
          style={{ width: 200 }}
          onChange={(event) =>
            this.updateBlogField('blogStatus', event.target.value)
          }
        >
          <option key="null" value="null">
            None Selected
          </option>
          <option key="unlisted" value="Unlisted">
            Unlisted
          </option>
          <option key="live" value="Live">
            Live
          </option>
        </select>
        <div>Current status: {this.state.blogObject.blogStatus}</div>
        <br />

        <label>
          Add tags:
          <input
            type="text"
            value={this.state.currentTag}
            onChange={(event) =>
              this.setState({ currentTag: event.target.value })
            }
          />
        </label>
        <button
          className="tags-button"
          onClick={() => {
            this.updateBlogField(
              'tags',
              this.state.blogObject.tags?.concat(this.state.currentTag) ?? []
            );
            this.setState({ currentTag: '' });
          }}
        >
          Confirm Tag
        </button>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => this.updateBlogField('tags', [])}
        >
          Clear All Tags
        </button>
        <div>
          <b>Current tags (click on tag to delete):</b>
          {this.state.blogObject?.tags?.map((item, index: number) => (
            <div
              key={index}
              className="tags-item"
              onClick={() => this.handleRemoveTag(item)}
            >
              {index === (this.state.blogObject?.tags?.length ?? 0) - 1
                ? item
                : item + ', '}
            </div>
          ))}
        </div>
        <br />

        <b>Add to Blog Series</b>
        <button className="tags-button" onClick={() => this.handleAddBridge()}>
          Select
        </button>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => this.handleDeleteBridge()}
        >
          Clear
        </button>
        <button
          className="tags-button"
          style={{ background: 'green', width: 160 }}
          onClick={() => this.setState({ newBlogSeriesModal: true })}
        >
          New Blog Series
        </button>
        <select
          style={{ width: 800 }}
          onChange={(event) =>
            this.setState({ currentBlogSeries: event.target.value })
          }
        >
          <option key="null" value="null">
            None Selected
          </option>
          {this.state.blogSeriesList.map((item) => {
            return (
              <option key={item?.id} value={item?.id}>
                {item?.title}
              </option>
            );
          })}
        </select>
        <div>
          <b>Current blog series: </b>{' '}
          {this.state.selectedBlogSeries.map((item: string, index: number) => (
            <div key={index} style={{ display: 'inline' }}>
              {item + ', '}
            </div>
          ))}
        </div>
        <br />

        <b>Add to Video Series</b>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => this.updateBlogField('blogSeriesId', this.nullString)}
        >
          Clear
        </button>
        <select
          style={{ width: 800 }}
          onChange={(event) =>
            this.updateBlogField('blogSeriesId', event.target.value)
          }
        >
          <option key="null" value="null">
            None Selected
          </option>
          {this.state.videoSeriesList.map((item) => {
            return (
              <option key={item?.id} value={item?.id}>
                {item?.id}
              </option>
            );
          })}
        </select>
        <div>
          <b>Current video series: </b>{' '}
          <div style={{ display: 'inline' }}>
            {this.state.blogObject.blogSeriesId === this.nullString
              ? ''
              : this.state.blogObject.blogSeriesId}
          </div>
        </div>
        <br />

        <b className="calendar-label">Schedule publish date</b>
        <DatePicker
          selected={this.state.publishDate}
          onChange={this.handlePublishDate}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        />
        <br />

        <b className="calendar-label">
          {this.state.disableCalendar ? 'No expiry' : 'Select expiry date'}
        </b>
        <button
          className="tags-button"
          onClick={() =>
            this.setState({ disableCalendar: !this.state.disableCalendar })
          }
        >
          {this.state.disableCalendar ? 'Add expiry' : 'No expiry'}
        </button>
        <DatePicker
          selected={this.state.expireDate}
          onChange={this.handleExpireDate}
          dateFormat="yyyy-MM-dd"
          disabled={this.state.disableCalendar}
          minDate={new Date()}
        />
        <br />

        <label>
          Delete a blog (enter title):
          <input
            style={{ width: 400, height: 20 }}
            type="text"
            value={this.state.delete}
            onChange={(event) => this.setState({ delete: event.target.value })}
          />
        </label>
        <label>
          Type &quot;{this.deleteConfirmation}&quot;:
          <input
            style={{ width: 400, height: 20 }}
            type="text"
            value={this.state.understand}
            onChange={(event) =>
              this.setState({ understand: event.target.value })
            }
          />
        </label>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => this.handleDeleteBlogPost()}
        >
          DELETE
        </button>
        <br />

        <label>
          Delete a blog series (enter title):
          <input
            style={{ width: 400, height: 20 }}
            type="text"
            value={this.state.deleteBlogSeries}
            onChange={(event) =>
              this.setState({ deleteBlogSeries: event.target.value })
            }
          />
        </label>
        <label>
          Type &quot;{this.deleteConfirmation}&quot;:
          <input
            style={{ width: 400, height: 20 }}
            type="text"
            value={this.state.understandBlogSeries}
            onChange={(event) =>
              this.setState({ understandBlogSeries: event.target.value })
            }
          />
        </label>
        <button
          className="tags-button"
          style={{ background: 'red' }}
          onClick={() => this.handleDeleteBlogSeries()}
        >
          DELETE
        </button>
      </div>
    );
  }

  renderTextInput() {
    return (
      <div className="editor-container">
        <label>
          Title:
          <input
            className="small-input"
            type="text"
            value={this.state.blogObject.blogTitle ?? ''}
            onChange={(event) => {
              this.updateBlogField('blogTitle', event.target.value);
              this.setState({
                selectedBlogSeries: [],
                editMode: false,
              });
            }}
          />
        </label>

        <label>
          Author:
          <input
            className="small-input"
            type="text"
            value={this.state.blogObject.author ?? ''}
            onChange={(event) => {
              this.updateBlogField('author', event.target.value);
            }}
          />
        </label>
        <div style={{ color: 'red', padding: 0, fontSize: 'small' }}>
          {this.state.editMode
            ? 'Warning: Changing your title will create a new post. Please be careful to avoid publishing duplicates.'
            : null}
        </div>

        <label
          style={
            this.state.blogObject?.description &&
            this.state.blogObject.description?.length >= 175
              ? { color: 'red' }
              : { color: 'black' }
          }
        >
          Description (
          {this.state.blogObject.description?.length + ' of 200 characters'}):
          <textarea
            className="big-input"
            maxLength={200}
            value={this.state.blogObject.description ?? ''}
            onChange={(event) => {
              this.updateBlogField('description', event.target.value);
            }}
          />
        </label>

        <label>
          Hide from main index
          <input
            type="checkbox"
            checked={this.state.blogObject.hiddenMainIndex ?? false}
            onChange={(e) =>
              this.updateBlogField('hiddenMainIndex', e.target.checked)
            }
          ></input>
        </label>

        <Editor
          editorState={this.state.editorState}
          onEditorStateChange={this.onChange}
          spellCheck={true}
          toolbar={{
            options: [
              'inline',
              'fontSize',
              'list',
              'link',
              'emoji',
              'image',
              'history',
            ],
            inline: {
              options: ['bold', 'italic', 'underline', 'strikethrough'],
            },
            list: {
              options: ['unordered', 'ordered'],
            },
            image: {
              uploadEnabled: true,
              uploadCallback: async (file: any) => {
                const filepath = 'bloguploads/' + uuidv1() + file.name;
                await Storage.put(filepath, file, {
                  contentType: 'image/*',
                  acl: 'public-read',
                });
                const download =
                  'https://themeetinghouse-usercontentstoragetmhusercontent-tmhprod.s3.amazonaws.com/public/' +
                  filepath;
                return { data: { link: download } };
              },
              previewImage: true,
              alt: {
                present: true,
                mandatory: true,
              },
              defaultSize: {
                height: 'auto',
                width: '100%',
              },
              alignmentEnabled: false,
            },
          }}
        />
        {this.state.moreOptions ? this.renderMoreOptions() : null}
      </div>
    );
  }

  renderToolbar() {
    return (
      <div className="toolbar-button-container">
        <button className="toolbar-button" onClick={() => this.handleSave()}>
          SAVE
        </button>
        <br />
        <button className="toolbar-button" onClick={() => this.handleEdit()}>
          Edit an existing post
        </button>
        <br />
        <button
          className="toolbar-button"
          onClick={() =>
            this.setState({ moreOptions: !this.state.moreOptions })
          }
        >
          More options
        </button>
        <br />
        <button
          className="toolbar-button"
          onClick={() =>
            this.setState({ showPreview: !this.state.showPreview })
          }
        >
          Preview your work
        </button>
        {this.state.showPreview ? (
          <div style={{ width: 150 }}>Scroll to bottom of page for preview</div>
        ) : null}
        <br />
      </div>
    );
  }

  renderAlert() {
    return (
      <Modal isOpen={Boolean(this.state.showAlert)}>
        <div>{this.state.showAlert}</div>
        <button onClick={() => this.setState({ showAlert: '' })}>OK</button>
      </Modal>
    );
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
            {this.state.showPreview ? (
              <BlogPreview
                data={this.state}
                content={null}
                type={'blog'}
              ></BlogPreview>
            ) : null}
          </div>
        </div>
      </AmplifyAuthenticator>
    );
  }
}

export default Index;
