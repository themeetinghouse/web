import React from 'react';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import BlogPreview from './BlogPreview';
import * as customQueries from '../../graphql-custom/customQueries';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Storage from '@aws-amplify/storage';
import { Modal, Spinner } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import DatePicker from 'react-datepicker';
import { EmptyProps } from 'utils';
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
  ListBlogSeriesQuery,
  ListBlogsQuery,
  ListSeriesQuery,
  UpdateBlogMutation,
  ImageInput,
  CreateBlogToVideoSeriesInput,
  DeleteBlogToVideoSeriesInput,
} from 'API';

const S3_BUCKET =
  'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';

type ImageSizes = 'babyHeroImage' | 'bannerImage' | 'squareImage';

const imageInputs: Array<{ size: ImageSizes; text: string }> = [
  {
    size: 'babyHeroImage',
    text: 'Baby Hero Image (1280x1024)',
  },
  {
    size: 'bannerImage',
    text: 'Banner Image (2208x1200)',
  },
  {
    size: 'squareImage',
    text: 'Square Image (1024x1024)',
  },
];

type BlogPostList = NonNullable<
  NonNullable<ListBlogsQuery['listBlogs']>['items']
>;

interface State {
  isLoading: boolean;
  blogObject: CreateBlogInput;
  blogToEditObject:
    | NonNullable<NonNullable<ListBlogsQuery['listBlogs']>['items']>[0]
    | null;
  editorState: EditorState;
  disableCalendar: boolean;
  publishDate: Date;
  expireDate: Date;

  videoSeriesList: NonNullable<
    NonNullable<ListSeriesQuery['listSeries']>['items']
  >;
  blogPostsList: BlogPostList;
  blogSeriesList: NonNullable<
    NonNullable<ListBlogSeriesQuery['listBlogSeries']>['items']
  >;
  selectedBlogSeries: string[];
  deselectedBlogSeries: string[];
  blogBridgeList: NonNullable<
    BlogBridgeByPostQuery['blogBridgeByPost']
  >['items'];
  newBlogSeries: CreateBlogSeriesInput;

  currentTag: string;
  currentBlogSeries: string;
  showAlert: string;

  showPreview: boolean;
  editMode: boolean;
  showEditModal: boolean;
  newBlogSeriesModal: boolean;
  moreOptions: boolean;
  showConfirmDelete: boolean;
  delete: string;
  understand: string;
  deleteBlogSeries: string;
  understandBlogSeries: string;

  customId: string;

  blogSeriesFilterList: string[] | null;
  searchQuery: string;
  selectedBlog: string;
  imageTypeWarning: boolean;
  imageSizeWarning: string;

  toAddVideoSeriesIds: string[];
  toRemoveVideoSeriesIds: string[];
  selectedVideoSeriesId: string;
}

class Index extends React.Component<EmptyProps, State> {
  deleteConfirmation = 'Delete forever';
  nullString = 'NullValueString';
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      isLoading: false,
      showConfirmDelete: false,
      blogObject: {
        id: '',
        author: '',
        blogTitle: '',
        blogSeriesIndex: 0,
        expirationDate: 'none',
        publishedDate: format(new Date(), 'yyyy-MM-dd'),
        description: '',
        blogStatus: 'Unlisted',
        content: '',
        hiddenMainIndex: false,
        tags: [],
        blogSeriesId: this.nullString,
        babyHeroImage: {
          src: '',
          alt: '',
        },
        bannerImage: {
          src: '',
          alt: '',
        },
        squareImage: {
          src: '',
          alt: '',
        },
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

      customId: '',

      blogSeriesFilterList: null,
      searchQuery: '',
      selectedBlog: 'none',
      imageTypeWarning: false,
      imageSizeWarning: '',

      toAddVideoSeriesIds: [],
      toRemoveVideoSeriesIds: [],
      selectedVideoSeriesId: '',
    };
  }
  async componentDidMount() {
    this.setState({ isLoading: true }, async () => {
      await this.listSeries();
      await this.listBlogs();
      await this.listBlogSeries();
      this.setState({ isLoading: false });
    });
  }
  // QUERY FUNCTIONS

  async listSeries(nextToken?: string) {
    try {
      const listSeries = (await API.graphql({
        query: customQueries.listSeries,
        variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListSeriesQuery>;

      console.log({ 'Success customQueries.listSeries: ': listSeries });
      this.setState({
        videoSeriesList: this.state.videoSeriesList
          .concat(listSeries?.data?.listSeries?.items ?? [])
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
      if (listSeries?.data?.listSeries?.nextToken)
        this.listSeries(listSeries.data.listSeries.nextToken);
    } catch (e) {
      console.error(e);
    }
  }

  setBlogPosts = (blogs: BlogPostList | undefined | null) => {
    this.setState({
      blogPostsList: this.state.blogPostsList
        .concat(blogs ?? [])
        .sort((a, b) => {
          const nameA = a?.blogTitle?.toUpperCase() ?? '';
          const nameB = b?.blogTitle?.toUpperCase() ?? '';
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
    });
  };

  async listBlogs(nextToken?: string) {
    try {
      const listBlogs = (await API.graphql({
        query: queries.listBlogs,
        variables: { nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListBlogsQuery>;

      console.log({ 'Success queries.listBlogs: ': listBlogs.data });
      this.setBlogPosts(listBlogs?.data?.listBlogs?.items);
      if (listBlogs?.data?.listBlogs?.nextToken) {
        this.listBlogs(listBlogs.data.listBlogs.nextToken);
      }
    } catch (e: any) {
      if (e.data?.listBlogs?.items) {
        console.log({ 'Success queries.listBlogs: ': e.data });
        this.setBlogPosts(e.data.listBlogs.items);
        if (e.data.listBlogs.nextToken) {
          this.listBlogs(e.data.listBlogs.nextToken);
        }
      }
      console.error(e);
    }
  }

  async listBlogSeries(nextToken?: string) {
    try {
      const listBlogSeries = (await API.graphql({
        query: queries.listBlogSeries,
        variables: { nextToken: nextToken, sortDirection: 'DESC', limit: 200 },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListBlogSeriesQuery>;

      console.log({ 'Success queries.listBlogSeries: ': listBlogSeries });
      this.setState({
        blogSeriesList: this.state.blogSeriesList
          .concat(listBlogSeries?.data?.listBlogSeries?.items ?? [])
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
      if (listBlogSeries?.data?.listBlogSeries?.nextToken)
        this.listBlogSeries(listBlogSeries.data.listBlogSeries.nextToken);
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
      return true;
    } catch (e: any) {
      if (e.data?.deleteBlog) {
        this.setState({
          delete: '',
          understand: '',
          showAlert: `⚠️ Deleted: ${e.data.deleteBlog.id}`,
        });
        return true;
      }
      return false;
      console.error(e);
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
      } catch (e: any) {
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

  validCustomId(customId: string) {
    if (!customId) return true;
    const lowercaseAndHyphens = new RegExp(/^[a-z\-]+$/);
    return lowercaseAndHyphens.test(customId);
  }

  async handleSave() {
    const { blogObject, blogPostsList, editorState, customId, editMode } =
      this.state;
    const { babyHeroImage, bannerImage, squareImage } = blogObject;
    const images = [babyHeroImage, bannerImage, squareImage];
    const numberOfTags = blogObject?.tags?.length ?? 0;
    if (numberOfTags <= 0) {
      this.setState({
        showAlert: '⚠️ Blog Posts must contain tags...',
      });
      return false;
    }
    if (
      !blogObject.blogTitle ||
      !blogObject.author ||
      !blogObject.description ||
      !editorState.getCurrentContent().hasText()
    ) {
      this.setState({
        showAlert:
          '⚠️ You need a valid title, author, description and body to save.',
      });
      return false;
    }

    if (images.some((image) => image?.src && !image.alt)) {
      this.setState({
        showAlert: '⚠️ images must have alt text.',
      });
      return false;
    }

    const titles: string[] = [];
    blogPostsList.forEach((post) => {
      if (post?.blogTitle) titles.push(post?.blogTitle);
    });
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const html = draftToHtml(raw);
    this.updateBlogField('content', html);

    if (!this.validCustomId(customId)) {
      this.setState({
        showAlert: '⚠️ Invalid custom id: lowercase letters and hyphens only!',
      });
      return false;
    }

    this.updateBlogField('id', customId || blogObject.blogTitle);

    if (
      !(
        typeof this.state.blogObject.id === 'string' &&
        this.state.blogObject.id.length > 0
      )
    ) {
      this.setState({
        showAlert: 'Warning: blog ID is invalid',
      });
      return false;
    }

    if (!editMode && titles.includes(blogObject?.blogTitle)) {
      this.setState({
        showAlert:
          '⚠️ Warning: A post with this title exists. Please change your title. If you are trying to edit this post, please close this message then click edit: Edit an existing post',
      });
      return false;
    }

    await this.writeVideoSeriesConnections();

    const { added, deleted } = await this.writeBridges(
      this.state.selectedBlogSeries,
      this.state.deselectedBlogSeries
    );
    this.setState({ editMode: true });

    const { blogObject: input } = this.state;
    if (added.length > 0) {
      console.log(`setting blogSeriesId to ${added[0]}`);
      input.blogSeriesId = added[0];
    } else if (deleted.length > 0) {
      console.log(`setting blogSeriesId to empty`);
      input.blogSeriesId = '';
    }

    console.log({ updatingBlog: input });
    try {
      const updateBlog = (await API.graphql({
        query: mutations.updateBlog,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateBlogMutation>;
      this.setState({
        showAlert: `✅ Saved: ${updateBlog?.data?.updateBlog?.id}`,
      });
      console.log({ 'Success mutations.updateBlog: ': updateBlog });
    } catch (e: any) {
      if (e.data?.updateBlog) {
        this.setState({ showAlert: `✅ Saved: ${e.data?.updateBlog?.id}` });
      }
      console.error(e);
      try {
        const createBlog = (await API.graphql({
          query: mutations.createBlog,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<CreateBlogMutation>;
        this.setState({
          showAlert: `✅ Created: ${createBlog?.data?.createBlog?.id}`,
        });
        console.log({ 'Success mutations.createBlog: ': createBlog });
      } catch (e: any) {
        if (e.data?.createBlog) {
          this.setState({ showAlert: `✅ Created: ${e.data?.createBlog?.id}` });
        }
        console.error(e);
      }
    }
  }

  handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    size: ImageSizes
  ): Promise<void> => {
    try {
      const image = event?.target?.files?.[0];

      this.setState({ imageTypeWarning: !image?.name.endsWith('jpg') });

      if (image) {
        const filepath = 'bloguploads/' + uuidv4() + image?.name;
        await Storage.put(filepath, image, {
          contentType: 'image/*',
          acl: 'public-read',
        });

        this.updateBlogField(size, {
          src: S3_BUCKET + filepath,
          alt: this.state.blogObject[size]?.alt ?? '',
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  validateImageSize = (
    {
      currentTarget: { naturalWidth, naturalHeight },
    }: React.SyntheticEvent<HTMLImageElement, Event>,
    size: ImageSizes
  ): void => {
    let imageSizeWarning = '';

    switch (size) {
      case 'babyHeroImage':
        if (naturalWidth !== 1280 || naturalHeight !== 1024) {
          imageSizeWarning = 'Baby Hero';
        }
        break;
      case 'bannerImage':
        if (naturalWidth !== 2208 || naturalHeight !== 1200) {
          imageSizeWarning = 'Banner';
        }
        break;
      case 'squareImage':
        if (naturalWidth !== 1024 || naturalHeight !== 1024) {
          imageSizeWarning = 'Square';
        }
        break;
    }

    this.setState({ imageSizeWarning });
  };

  async handleEdit() {
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

      const temp = { ...this.state.blogToEditObject };

      this.setState({
        toAddVideoSeriesIds:
          temp.videoSeries?.items
            ?.map((item) => item?.videoSeriesId ?? '')
            .filter((id) => id !== '') ?? [],
      });

      delete (temp as any).__typename;
      delete (temp as any).createdAt;
      delete (temp as any).updatedAt;
      delete temp.blogSeries;
      delete temp.createdBy;
      delete temp.createdBy;
      delete temp.series;
      delete temp.videoSeries;

      this.setState({ blogObject: temp });

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

    if (
      this.state.blogToEditObject?.id &&
      this.validCustomId(this.state.blogToEditObject.id)
    ) {
      this.setState({ customId: this.state.blogToEditObject.id });
    }
    try {
      const json = (await API.graphql({
        query: queries.blogBridgeByPost,
        variables: { blogPostID: this.state.blogToEditObject?.id ?? '' },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<BlogBridgeByPostQuery>;
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
    } catch (e) {
      console.error(e);
    }

    this.setState({ editMode: true });
  }

  async handleNewBlogSeries() {
    this.setState({ newBlogSeriesModal: false });
    if (this.state.newBlogSeries.title) {
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
      } catch (e: any) {
        if (e.data?.createBlogSeries)
          this.setState({
            showAlert: `✅ Created blog series: ${e.data?.createBlogSeries?.id}`,
          });
        console.error(e);
      }
    }
  }

  updateBlogSeries(value: string) {
    this.setState({
      newBlogSeries: { title: value, id: value },
    });
  }

  updateBlogField(
    field: keyof CreateBlogInput,
    value: boolean | string | (string | null)[] | ImageInput
  ) {
    this.setState((prevState) => ({
      blogObject: { ...prevState.blogObject, [field]: value },
    }));
  }

  async writeBridges(toAdd: string[], toDelete: string[]) {
    try {
      const currentPostID = this.state.blogObject.id;
      const deletePromises = toDelete.map((series: string) => {
        const bridgeID = currentPostID + '-' + series;
        const deleteBlogSeriesBridge = API.graphql({
          query: mutations.deleteBlogSeriesBridge,
          variables: { input: { id: bridgeID } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        }) as Promise<GraphQLResult<DeleteBlogSeriesBridgeMutation>>;
        return deleteBlogSeriesBridge;
      });
      const deleted = await Promise.all(deletePromises);
      console.log({ deleted });
      const createPromises = toAdd.map((series: string) => {
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
        return createBlogSeriesBridge;
      });
      const added = await Promise.all(createPromises);
      return {
        added: added.map(
          (item) => item.data?.createBlogSeriesBridge?.blogSeriesID
        ),
        deleted: deleted.map(
          (item) => item.data?.deleteBlogSeriesBridge?.blogSeriesID
        ),
      };
    } catch (error) {
      console.error({ error });
      return {
        added: [],
        deleted: [],
      };
    }
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

  renderNewBlogSeriesModal() {
    return (
      <Modal isOpen={this.state.newBlogSeriesModal}>
        <div>New Blog Series</div>
        <label>
          Title:
          <input
            className="blogInput"
            value={this.state.newBlogSeries.title ?? ''}
            onChange={(item) => {
              this.updateBlogSeries(item.target.value);
            }}
          />
        </label>
        <button onClick={() => this.handleNewBlogSeries()}>DONE</button>
      </Modal>
    );
  }

  removeVideoSeries(toRemove: string): void {
    const { toAddVideoSeriesIds, toRemoveVideoSeriesIds } = this.state;

    const filteredVideoSeriesIds = toAddVideoSeriesIds.filter(
      (id) => id !== toRemove
    );

    this.setState({
      toAddVideoSeriesIds: filteredVideoSeriesIds,
      toRemoveVideoSeriesIds: [...toRemoveVideoSeriesIds, toRemove],
    });
  }

  async writeVideoSeriesConnections(): Promise<void> {
    const {
      toAddVideoSeriesIds: toAdd,
      toRemoveVideoSeriesIds: toRemove,
      blogObject,
    } = this.state;

    const { id: blogId } = blogObject;

    if (blogId) {
      for (const videoSeriesId of toAdd) {
        const id = blogId + '-' + videoSeriesId;
        const input: CreateBlogToVideoSeriesInput = {
          id,
          videoSeriesId,
          blogId,
        };
        try {
          const json = await API.graphql({
            query: mutations.createBlogToVideoSeries,
            variables: {
              input,
            },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          });
          console.log({
            'Success mutations.createBlogToVideoSeries': json,
          });
        } catch (e) {
          console.error(e);
        }
      }

      for (const videoSeriesId of toRemove) {
        const id = blogId + '-' + videoSeriesId;
        const input: DeleteBlogToVideoSeriesInput = {
          id,
        };
        try {
          const json = await API.graphql({
            query: mutations.deleteBlogToVideoSeries,
            variables: { input },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          });
          console.log({
            'Success mutations.deleteBlogToVideoSeries': json,
          });
        } catch (e) {
          console.error(e);
        }
      }
    }

    this.setState({ toRemoveVideoSeriesIds: [] });
  }

  renderMoreOptions() {
    const { videoSeriesList, selectedVideoSeriesId, toAddVideoSeriesIds } =
      this.state;

    return (
      <div style={{ flex: 1 }}>
        <b>Blog Status</b>
        <select
          className="blogInput"
          style={{ marginBottom: 16 }}
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
            className="blogInput"
            type="text"
            value={this.state.currentTag}
            onChange={(event) =>
              this.setState({ currentTag: event.target.value })
            }
          />
        </label>
        <button
          className="toolbar-button"
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
          className="toolbar-button black"
          onClick={() => this.updateBlogField('tags', [])}
        >
          Clear All Tags
        </button>
        <div style={{ marginTop: 16 }}>
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

        <b style={{ marginRight: 16 }}>Add to Blog Series</b>
        <button
          className="toolbar-button"
          onClick={() => this.handleAddBridge()}
        >
          Select
        </button>
        <button
          className="toolbar-button black"
          onClick={() => this.handleDeleteBridge()}
        >
          Clear
        </button>
        <button
          className="toolbar-button"
          onClick={() => this.setState({ newBlogSeriesModal: true })}
        >
          New Blog Series
        </button>
        <select
          className="blogInput"
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
        <div style={{ marginTop: 16, marginBottom: 16 }}>
          <b>Current blog series: </b>{' '}
          {this.state.selectedBlogSeries.map((item: string, index: number) => (
            <div key={index} style={{ display: 'inline' }}>
              {item + ', '}
            </div>
          ))}
        </div>
        <b>Blog Number in Series</b>
        <label>
          <input
            className="blogInput"
            type="text"
            pattern="[0-9]{1,5}"
            value={this.state.blogObject.blogSeriesIndex ?? 0}
            onChange={(event) => {
              let newValue = event.target.value;
              if (newValue === '') newValue = '0';
              const value = parseInt(newValue);
              if ((!isNaN(value) && value < 1000) || newValue === '')
                this.setState({
                  blogObject: {
                    ...this.state.blogObject,
                    blogSeriesIndex: value,
                  },
                });
            }}
          />
        </label>
        <br />

        <div>
          <h4>Video Series</h4>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <select
              className="blogInput"
              onChange={(e) =>
                this.setState({
                  selectedVideoSeriesId: e.target.value,
                })
              }
            >
              <option key="null" value="">
                None Selected
              </option>
              {videoSeriesList.map((item) => {
                if (item) {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.id}
                    </option>
                  );
                }
              })}
            </select>
            <button
              className="toolbar-button"
              onClick={() => {
                if (
                  selectedVideoSeriesId &&
                  !toAddVideoSeriesIds.includes(selectedVideoSeriesId)
                ) {
                  this.setState({
                    toAddVideoSeriesIds: [
                      ...toAddVideoSeriesIds,
                      selectedVideoSeriesId,
                    ],
                  });
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          Connected video series{' '}
          {toAddVideoSeriesIds.length > 0
            ? '(click a on series to remove)'
            : ''}
          :
          {toAddVideoSeriesIds.map((id) => {
            return (
              <button
                onClick={() => this.removeVideoSeries(id)}
                key={id}
                className="video-series-button"
              >
                {id}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 16, marginBottom: 16 }}>
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
            className="toolbar-button"
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
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            marginTop: 16,
            columnGap: 16,
          }}
        >
          <label style={{ flex: 1, marginBottom: 0 }}>
            Delete a blog series (enter id):
            <input
              className="blogInput"
              type="text"
              value={this.state.deleteBlogSeries}
              onChange={(event) =>
                this.setState({ deleteBlogSeries: event.target.value })
              }
            />
          </label>
          <label style={{ flex: 1, marginBottom: 0 }}>
            Type &quot;{this.deleteConfirmation}&quot;:
            <input
              className="blogInput"
              type="text"
              value={this.state.understandBlogSeries}
              onChange={(event) =>
                this.setState({ understandBlogSeries: event.target.value })
              }
            />
          </label>
          <label
            style={{
              flex: 1,
              marginBottom: 0,
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}
          >
            <button
              className="toolbar-button"
              onClick={() => this.handleDeleteBlogSeries()}
            >
              DELETE
            </button>
          </label>
        </div>
      </div>
    );
  }

  renderTextInput() {
    const { imageSizeWarning, imageTypeWarning, blogObject } = this.state;
    const { babyHeroImage } = blogObject;

    return (
      <div className="editor-container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            rowGap: 10,
            columnGap: 10,
          }}
        >
          <label
            style={{
              flex: 1,
            }}
          >
            Select blog:
            <select
              className="blogInput"
              onChange={(event) => {
                this.setState({ selectedBlog: event.target.value });
                if (event.target.value === 'none') {
                  this.setState({
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
                    editorState: EditorState.createEmpty(),
                    disableCalendar: true,
                    publishDate: new Date(),
                    expireDate: new Date(),
                    editMode: false,
                  });
                } else {
                  this.setState(
                    {
                      blogToEditObject:
                        this.state.blogPostsList.find(
                          (post) => post?.id === event.target.value
                        ) ?? null,
                    },
                    () => this.handleEdit()
                  );
                }
              }}
              value={this.state.selectedBlog}
            >
              <option key="none" value="none">
                None
              </option>
              {this.state.blogPostsList
                .filter(
                  (item) =>
                    !this.state.blogSeriesFilterList ||
                    this.state.blogSeriesFilterList?.includes(item?.id ?? '')
                )
                .map((item) => {
                  return (
                    <option key={item?.id} value={item?.id}>
                      {item?.blogTitle}
                    </option>
                  );
                })}
            </select>
          </label>
          <label style={{ flex: 1 }}>
            Filter by blog series:
            <select
              className="blogInput"
              onChange={(event) => {
                this.setState({
                  blogSeriesFilterList:
                    event.target.value === ''
                      ? null
                      : this.state.blogSeriesList[
                          parseInt(event.target.value, 10)
                        ]?.blogs?.items?.flatMap((blog) =>
                          blog?.blogPostID ? blog.blogPostID : []
                        ) ?? [],
                });
              }}
            >
              <option key="" value="">
                None
              </option>
              {this.state.blogSeriesList.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item?.title}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Search all blogs:
            <input
              className="blogInput"
              value={this.state.searchQuery}
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            />
            <div style={{ position: 'absolute' }}>
              {this.state.searchQuery &&
                this.state.blogPostsList
                  .filter((item) =>
                    item?.blogTitle
                      ?.toLowerCase()
                      .includes(this.state.searchQuery.toLowerCase())
                  )
                  .map((blog) => {
                    return (
                      <div key={blog?.id}>
                        <button
                          onClick={() => {
                            this.setState(
                              {
                                selectedBlog: blog?.id ?? 'none',
                                blogToEditObject:
                                  this.state.blogPostsList.find(
                                    (post) => post?.id === blog?.id
                                  ) ?? null,
                              },
                              () => this.handleEdit()
                            );
                            this.setState({ searchQuery: '' });
                          }}
                          style={{ width: 400, background: 'white' }}
                        >
                          {blog?.blogTitle}
                        </button>
                      </div>
                    );
                  })}
            </div>
          </label>
        </div>
        <hr />
        <label>
          Title:
          <input
            className="blogInput"
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
            className="blogInput"
            type="text"
            value={this.state.blogObject.author ?? ''}
            onChange={(event) => {
              this.updateBlogField('author', event.target.value);
            }}
          />
        </label>
        <div style={{ color: 'red', padding: 0, fontSize: 'small' }}>
          {this.state.editMode
            ? 'Warning: Changing your title OR custom ID will create a new post. Please be careful to avoid publishing duplicates.'
            : null}
        </div>

        <label
          style={
            this.state.blogObject?.description &&
            this.state.blogObject.description?.length >= 175
              ? { color: 'red', display: 'flex', flexDirection: 'column' }
              : { color: 'black', display: 'flex', flexDirection: 'column' }
          }
        >
          Description (
          {this.state.blogObject.description?.length + ' of 200 characters'}):
          <textarea
            className="blogInput"
            style={{ flex: 1 }}
            maxLength={200}
            value={this.state.blogObject.description ?? ''}
            onChange={(event) => {
              this.updateBlogField('description', event.target.value);
            }}
          />
        </label>
        <label>
          Custom ID:
          <input
            className="blogInput"
            type="text"
            value={this.state.customId}
            onChange={(event) => {
              this.setState({
                customId: event.target.value,
                selectedBlogSeries: [],
                editMode: false,
              });
            }}
          />
        </label>
        <small>Lowercase letters and hyphens only (e.g. this-is-a-blog)</small>
        <br />

        <label
          style={{
            flexDirection: 'row',
          }}
        >
          Hide from main index
          <input
            type="checkbox"
            style={{ marginLeft: 4 }}
            checked={this.state.blogObject.hiddenMainIndex ?? false}
            onChange={(e) =>
              this.updateBlogField('hiddenMainIndex', e.target.checked)
            }
          ></input>
        </label>
        <hr />

        <h5>Preview Images</h5>
        <h6>Please upload .jpg images</h6>
        {imageTypeWarning && (
          <h6 style={{ color: 'red' }}>Warning: images should be .jpg</h6>
        )}
        {imageSizeWarning && (
          <h6 style={{ color: 'red' }}>
            Warning: {imageSizeWarning} image may have incorrect dimensions
          </h6>
        )}
        {imageInputs.map(({ size, text }) => (
          <label style={{ marginRight: 12, maxWidth: 250 }} key={size}>
            {text}
            <input
              type="file"
              accept="image/jpg"
              onChange={(e) => this.handleImageUpload(e, size)}
            />
            {blogObject[size]?.src && (
              <img
                src={blogObject[size]?.src ?? ''}
                alt={blogObject[size]?.alt ?? ''}
                onLoad={(e) => this.validateImageSize(e, size)}
                style={{ maxWidth: 150 }}
              />
            )}
          </label>
        ))}
        <label>
          Alt text:
          <input
            className="blogInput"
            onChange={(e) => {
              (
                ['babyHeroImage', 'bannerImage', 'squareImage'] as ImageSizes[]
              ).forEach((image) => {
                this.updateBlogField(image, {
                  src: blogObject[image]?.src ?? '',
                  alt: e.target.value,
                });
              });
            }}
            value={babyHeroImage?.alt ?? ''}
          />
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
                const filepath = 'bloguploads/' + uuidv4() + file.name;
                await Storage.put(filepath, file, {
                  contentType: 'image/*',
                  acl: 'public-read',
                });
                const download = S3_BUCKET + filepath;
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
        <button
          disabled={this.state.isLoading}
          className={`toolbar-button ${
            this.state.isLoading ? 'disabled' : 'black'
          }`}
          onClick={() => this.handleSave()}
        >
          SAVE
        </button>
        <button
          className="toolbar-button"
          onClick={() =>
            this.setState({ moreOptions: !this.state.moreOptions })
          }
        >
          More options
        </button>
        <button
          className="toolbar-button"
          onClick={() =>
            this.setState({ showPreview: !this.state.showPreview }, () => {
              document.getElementById('blogs-preview')?.scrollIntoView({
                behavior: 'smooth',
              });
            })
          }
        >
          {this.state.showPreview ? 'Hide Preview' : 'Preview your work'}
        </button>
        {this.state.selectedBlog !== 'none' ? (
          <button
            onClick={() => this.setState({ showConfirmDelete: true })}
            className="toolbar-button"
          >
            Delete
          </button>
        ) : null}
        {this.state.isLoading ? (
          <Spinner style={{ alignSelf: 'center' }} size="sm" />
        ) : null}
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
  renderConfirmDelete() {
    return (
      <Modal isOpen={Boolean(this.state.showConfirmDelete)}>
        <div style={{ padding: 16 }}>
          <div style={{ paddingBottom: 40 }}>
            Are you sure you want to delete {this.state.selectedBlog}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              className="toolbar-button black"
              onClick={async () => {
                const success = await this.handleDeleteBlogPost();
                if (success) this.setState({ showConfirmDelete: false });
              }}
            >
              Confirm
            </button>
            <button
              className="toolbar-button"
              onClick={() => this.setState({ showConfirmDelete: false })}
            >
              Dismiss
            </button>
          </div>
        </div>
      </Modal>
    );
  }
  render() {
    return (
      <div className="blog-container">
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
          {this.renderAlert()}
          {this.renderConfirmDelete()}
          {this.renderNewBlogSeriesModal()}
          {this.renderToolbar()}
          {this.renderTextInput()}
        </div>

        <div className="preview">
          {this.state.showPreview ? (
            <div id="blogs-preview">
              <BlogPreview
                data={this.state}
                content={null}
                type={'blog'}
              ></BlogPreview>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Index;
