import { GraphQLResult } from '@aws-amplify/api';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './SearchItem.scss';

import { API, graphqlOperation } from '@aws-amplify/api';
import {
  SearchBlogSeriesQuery,
  SearchBlogsQuery,
  SearchCustomPlaylistsQuery,
  SearchF1ListGroup2sQuery,
  SearchNotesQuery,
  SearchSeriesQuery,
  TMHPerson,
} from 'API';
import { BlogImage, ScaledImage } from 'components/ScaledImage';
import Highlighter from 'react-highlight-words';
import { Button } from 'reactstrap';
import * as queries from '../../graphql/queries';
import DataLoader, { CompassionData } from './DataLoader';
import RenderRouter from './RenderRouter';

interface Props extends RouteComponentProps {
  content: any;
}
enum SearchType {
  All = 'All' as any,
  Videos = 'Videos' as any,
  Blogs = 'Blogs' as any,
  Staff = 'Staff' as any,
  Compassion = 'Compassion' as any,
  'Home Church' = 'Home Church' as any,
  Series = 'Series' as any,
  'Custom Playlist' = 'Custom Playlist' as any,
  'Blog Series' = 'Blog Series' as any,
  Notes = 'Notes' as any,
}
interface State {
  content: any;
  searchResults: any;
  searchBlogResults: any;
  searchString: string;
  dataSpeakers: any;
  dataStaff: TMHPerson[];
  dataOverseers: any;
  dataCompassion: CompassionData[];
  currentSearchType: SearchType;
  customData: any;
  customBegin: any;
  searchHomechurch: any;
  searchSeries: any;
  searchCustomPlaylist: any;
  searchBlogSeries: any;
  searchNotes: any;
  videoTypeParser: { [name: string]: string } | null;
}

class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      customData: null,
      customBegin: null,
      content: props.content,
      searchResults: null,
      searchBlogResults: null,
      searchHomechurch: null,
      searchSeries: null,
      searchCustomPlaylist: null,
      searchBlogSeries: null,
      searchNotes: null,
      searchString: '',
      dataSpeakers: [],
      dataStaff: [],
      dataOverseers: [],
      dataCompassion: [],
      currentSearchType: SearchType.All,
      videoTypeParser: null,
    };
  }
  convertMapToObject(
    metricArguments: { name: string; value: string }[]
  ): Record<string, string> {
    const newObject: Record<string, string> = {};
    for (const { name, value } of metricArguments) {
      newObject[name] = value;
    }
    return newObject;
  }
  async componentDidMount(): Promise<void> {
    this.setState({
      dataStaff: await DataLoader.loadStaff({
        class: 'staff',

        filterField: '',
      }),
      dataOverseers: await DataLoader.loadOverseers(),
      //dataE = await DataLoader.loadEvents(query);
      dataCompassion: await DataLoader.loadCompassion(),
    });

    fetch('/static/data/import-video.json')
      .then(async (e: Response) => {
        try {
          const json = await e.json();
          const videoTypeParser = json.map((item: any) => {
            console.log(item.id);
            console.log(item.name);

            return { name: item.id, value: item.name };
          });

          this.setState({
            videoTypeParser: this.convertMapToObject(videoTypeParser),
          });
        } catch (err) {
          console.log(err);
        }
      })
      .catch((e: any) => console.log(e));
    fetch('/static/content/search/beginSearch.json')
      .then(async (e: Response) => {
        try {
          console.log(e);
          console.log(e.body);
          this.setState({ customBegin: await e.json() });
        } catch (e: any) {
          console.log(e);
          this.setState({ customBegin: null });
        }
      })
      .catch((e: Error) => {
        this.setState({ customBegin: null });
        console.log(e);
      });
    //dataSpeakers: await DataLoader.getSpeakers(query, dataLoaded);
  }
  imgUrl(size: any) {
    if (window.location.hostname === 'localhost')
      return 'https://localhost:3006';
    else if (window.location.hostname.includes('beta'))
      return 'https://beta.themeetinghouse.com/cache/' + size;
    else return 'https://www.themeetinghouse.com/cache/' + size;
  }
  doSearch(str: string) {
    this.search(str);
  }

  getBlogImageURI(
    title: string | undefined | null,
    style: 'baby-hero' | 'banner' | 'square'
  ): string {
    if (!title) return '';
    return (
      `/static/photos/blogs/${style}/` + title.replace(/\?|[']/g, '') + '.jpg'
    );
  }
  searchCustom(e: any) {
    fetch('/static/content/search/' + e + '.json')
      .then(async (e: Response) => {
        try {
          console.log(e);
          console.log(e.body);
          this.setState({ customData: await e.json() });
        } catch (e: any) {
          console.log(e);
          this.setState({ customData: null });
        }
      })
      .catch((e: Error) => {
        this.setState({ customData: null });
        console.log(e);
      });
  }
  searchBlogs(e: any, nextId: any) {
    const searchBlogs: any = API.graphql(
      graphqlOperation(queries.searchBlogs, {
        filter: {
          or: [
            { blogTitle: { match: e } },
            { author: { match: e } },
            { tags: { match: e } },
            { description: { match: e } },
          ],
        },
        limit: 10,
        nextToken: nextId,
      })
    ) as Promise<GraphQLResult<SearchBlogsQuery>>;
    searchBlogs
      .then((json: GraphQLResult<SearchBlogsQuery>) => {
        console.log(json);
        if (nextId == null)
          this.setState({ searchBlogResults: json.data?.searchBlogs?.items });
        else
          this.setState({
            searchBlogResults: this.state.searchBlogResults.concat(
              json.data?.searchBlogs?.items
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  searchVideos(e: any, nextId: any) {
    const fuzzySearchVideos: any = API.graphql(
      graphqlOperation(queries.fuzzySearchVideos, {
        filter: e,
        limit: 10,
        nextToken: nextId,
      })
    );
    fuzzySearchVideos
      .then((json: any) => {
        console.log(json);
        if (nextId == null)
          this.setState({
            searchResults: json.data.fuzzySearchVideos.items.filter(
              (z: any) => !z.series.seriesType.includes('hidden')
            ),
          });
        else
          this.setState({
            searchResults: this.state.searchResults.concat(
              json.data.fuzzySearchVideos.items.filter(
                (z: any) => !z.series.seriesType.includes('hidden')
              )
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  searchHomechurch(e: any, nextId: any) {
    const searchHomechurch: any = API.graphql(
      graphqlOperation(queries.searchF1ListGroup2s, {
        filter: {
          or: [{ name: { match: e } }, { description: { match: e } }],
        },
        limit: 10,
        nextToken: nextId,
      })
    ) as Promise<GraphQLResult<SearchF1ListGroup2sQuery>>;
    searchHomechurch
      .then((json: GraphQLResult<SearchF1ListGroup2sQuery>) => {
        console.log(json);
        if (nextId == null)
          this.setState({
            searchHomechurch: json.data?.searchF1ListGroup2s?.items,
          });
        else
          this.setState({
            searchHomechurch: this.state.searchHomechurch.concat(
              json.data?.searchF1ListGroup2s?.items
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  searchSeries(e: any, nextId: any) {
    const searchSeries: any = API.graphql(
      graphqlOperation(queries.searchSeries, {
        filter: {
          or: [{ title: { match: e } }, { description: { match: e } }],
        },
        limit: 10,
        nextToken: nextId,
      })
    ) as Promise<GraphQLResult<SearchSeriesQuery>>;
    searchSeries
      .then((json: GraphQLResult<SearchSeriesQuery>) => {
        console.log(json);
        if (nextId == null)
          this.setState({
            searchSeries: json.data?.searchSeries?.items.filter(
              (z: any) => !z?.seriesType?.includes('hidden')
            ),
          });
        else
          this.setState({
            searchSeries: this.state.searchSeries.concat(
              json.data?.searchSeries?.items.filter(
                (z: any) => !z?.seriesType?.includes('hidden')
              )
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  searchCustomPlaylist(e: any, nextId: any) {
    const searchCustomPlaylist: any = API.graphql(
      graphqlOperation(queries.searchCustomPlaylists, {
        filter: {
          or: [{ title: { match: e } }, { description: { match: e } }],
        },
        limit: 10,
        nextToken: nextId,
      })
    ) as Promise<GraphQLResult<SearchCustomPlaylistsQuery>>;
    searchCustomPlaylist
      .then((json: GraphQLResult<SearchCustomPlaylistsQuery>) => {
        console.log(json);
        if (nextId == null)
          this.setState({
            searchCustomPlaylist: json.data?.searchCustomPlaylists?.items,
          });
        else
          this.setState({
            searchCustomPlaylist: this.state.searchCustomPlaylist.concat(
              json.data?.searchCustomPlaylists?.items
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  searchBlogSeries(e: any, nextId: any) {
    const searchBlogSeries: any = API.graphql(
      graphqlOperation(queries.searchBlogSeries, {
        filter: {
          or: [{ title: { match: e } }, { description: { match: e } }],
        },
        limit: 10,
        nextToken: nextId,
      })
    ) as Promise<GraphQLResult<SearchBlogSeriesQuery>>;
    searchBlogSeries
      .then((json: GraphQLResult<SearchBlogSeriesQuery>) => {
        console.log(json);
        if (nextId == null)
          this.setState({
            searchBlogSeries: json.data?.searchBlogSeries?.items,
          });
        else
          this.setState({
            searchBlogSeries: this.state.searchBlogSeries.concat(
              json.data?.searchBlogSeries?.items
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  searchNotes(e: any, nextId: any) {
    const searchNotes: any = API.graphql(
      graphqlOperation(queries.searchNotes, {
        filter: {
          or: [
            { title: { match: e } },
            { content: { match: e } },
            { tags: { match: e } },
            { questions: { match: e } },
          ],
        },
        limit: 10,
        nextToken: nextId,
      })
    ) as Promise<GraphQLResult<SearchNotesQuery>>;
    searchNotes
      .then((json: GraphQLResult<SearchNotesQuery>) => {
        console.log(json);
        if (nextId == null)
          this.setState({
            searchNotes: json.data?.searchNotes?.items,
          });
        else
          this.setState({
            searchNotes: this.state.searchNotes.concat(
              json.data?.searchNotes?.items
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
  }
  async search(e: any) {
    console.log(e);
    this.searchCustom(e);
    this.searchBlogs(e, null);
    this.searchVideos(e, null);
    this.searchHomechurch(e, null);
    this.searchSeries(e, null);
    this.searchCustomPlaylist(e, null);
    this.searchBlogSeries(e, null);
    this.searchNotes(e, null);
  }
  openBlog(item: any) {
    console.log(item);
    this.props.history.push('/posts/' + item.id);
  }
  openSeries(item: any) {
    console.log(item);
    this.props.history.push('/videos/' + item.id);
  }
  openVideo(item: any) {
    console.log(item);
    console.log('/videos/' + item.series.id + '/' + item.id);
    this.navigateTo('/videos/' + item.series.id + '/' + item.id);
    //    this.navigateTo("/videos/"+item.series+"/"+item.episodeId)
  }

  navigateTo(location: any) {
    this.props.history.push(location, 'as');
    const unblock = this.props.history.block(
      'Are you sure you want to leave this page?'
    );
    unblock();
  }
  compassionItems = (): CompassionData[] => {
    return this.state.dataCompassion.filter(
      (compassion: CompassionData) =>
        (compassion.name
          .toLowerCase()
          .includes(this.state.searchString.toLowerCase()) ||
          compassion.description
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase())) &&
        this.state.searchString.length > 4
    );
  };
  staffItems = (): TMHPerson[] => {
    return this.state.dataStaff.filter(
      (staff) =>
        staff?.firstName
          ?.toLowerCase()
          .includes(this.state.searchString.toLowerCase()) ||
        staff?.lastName
          ?.toLowerCase()
          .includes(this.state.searchString.toLowerCase()) ||
        (staff?.position
          ?.toLowerCase()
          .includes(this.state.searchString.toLowerCase()) &&
          this.state.searchString.length > 5)
    );
  };
  renderCompassion(compassion: CompassionData): React.ReactNode {
    const image = {
      src: compassion.image,
      alt: compassion.imagealt,
    };
    return (
      <Button key={compassion.id} className="SearchResultItem">
        <ScaledImage
          image={image}
          className="SearchThumb"
          fallbackUrl="/static/NoCompassionLogo.png"
          breakpointSizes={{
            320: 80,
            480: 120,
            640: 180,
            1280: 320,
            1920: 480,
            2560: 640,
          }}
        />
        <div className="Content">
          <div className="Title">
            <Highlighter
              highlightClassName="Highlight"
              searchWords={this.state.searchString.split(' ')}
              autoEscape={true}
              textToHighlight={compassion.name ?? ''}
            />
          </div>
          <div className="Description">
            <Highlighter
              highlightClassName="Highlight"
              searchWords={this.state.searchString.split(' ')}
              autoEscape={true}
              textToHighlight={compassion.description ?? ''}
            />
          </div>
        </div>
      </Button>
    );
  }
  renderStaff(staff: TMHPerson): React.ReactNode {
    const image = {
      src: `/static/photos/staff/${staff.firstName}_${staff.lastName}_app.jpg`,
      alt: `${staff.firstName} ${staff.lastName}`,
    };
    return (
      <a
        href={'mailto:' + staff.email}
        key={staff.email}
        className="SearchResultItem"
      >
        <ScaledImage
          image={image}
          className="SearchThumb"
          fallbackUrl="/static/Individual.png"
          breakpointSizes={{
            320: 80,
            480: 120,
            640: 180,
            1280: 320,
            1920: 480,
            2560: 640,
          }}
        />
        <div className="Content">
          <div className="Title">
            <Highlighter
              highlightClassName="Highlight"
              searchWords={this.state.searchString.split(' ')}
              autoEscape={true}
              textToHighlight={staff.firstName + ' ' + staff.lastName}
            />
          </div>
          <div className="Description">
            <Highlighter
              highlightClassName="Highlight"
              searchWords={this.state.searchString.split(' ')}
              autoEscape={true}
              textToHighlight={staff.position ?? ''}
            />
          </div>
        </div>
        <div className="Link">
          <img alt="Send email icon" src="/static/svg/Contact.svg" />
        </div>
      </a>
    );
  }
  renderBlog(item: any): React.ReactNode {
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openBlog(item);
          }}
          className="SearchResultItem"
        >
          <BlogImage
            image={item.squareImage}
            blogTitle={item.blogTitle}
            imageType="square"
            className="SearchThumb"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.blogTitle ?? ''}
              />
            </div>

            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderNotes(item: any): React.ReactNode {
    const image = {
      src: this.getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <ScaledImage
            image={image}
            className="SearchThumb"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.blogTitle ?? ''}
              />
            </div>

            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderBlogSeries(item: any): React.ReactNode {
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <BlogImage
            image={item.squareImage}
            blogTitle={item.blogTitle}
            imageType="square"
            className="SearchThumb"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.blogTitle ?? ''}
              />
            </div>

            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderCustomPlaylist(item: any): React.ReactNode {
    const image = {
      src: this.getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <ScaledImage
            image={image}
            className="SearchThumb"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.blogTitle ?? ''}
              />
            </div>

            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderSeries(item: any): React.ReactNode {
    const image = {
      src:
        '/static/photos/series/' +
        item.seriesType +
        '-' +
        (item.title ?? '').replace('?', '') +
        '.jpg',
      alt: `${item.title} series image`,
    };

    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openSeries(item);
          }}
          className="SearchResultItem"
        >
          <ScaledImage
            image={image}
            className="SearchThumb"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.title ?? ''}
              />
            </div>
            <div className="VideoType">
              {this.state.videoTypeParser &&
                this.state.videoTypeParser[item.seriesType]}
            </div>
            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderHomechurch(item: any): React.ReactNode {
    const image = {
      src: this.getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <ScaledImage
            image={image}
            className="SearchThumb"
            fallbackUrl="/static/photos/blogs/square/fallback.jpg"
            breakpointSizes={{
              320: 80,
              480: 120,
              640: 180,
              1280: 320,
              1920: 480,
              2560: 640,
            }}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.name ?? ''}
              />
            </div>

            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderVideo(item: any): React.ReactNode {
    if (item.episodeTitle !== null)
      return (
        <Button
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <img
            alt={item.thumbnailDescription || 'Video Thumbnail'}
            className="SearchThumb"
            src={item.Youtube.snippet.thumbnails.high.url}
          />
          <div className="Content">
            <div className="Title">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.episodeTitle + ' - ' + item.seriesTitle}
              />
            </div>
            <div className="VideoType">
              {this.state.videoTypeParser &&
                this.state.videoTypeParser[item.videoTypes]}
            </div>
            <div className="Description">
              <Highlighter
                highlightClassName="Highlight"
                searchWords={this.state.searchString.split(' ')}
                autoEscape={true}
                textToHighlight={item.description ?? ''}
              />
            </div>
          </div>
          <div className="Link">
            <img alt="GO" src="\static\svg\ArrowRight black.svg" />
          </div>
        </Button>
      );
    else return null;
  }
  renderSearchTypes(): React.ReactNode {
    return (
      this.state.customData?.page?.pageConfig?.searchResult?.hideShowMenu !==
        true &&
      this.state.searchString != '' && (
        <div className="TrendingSearches">
          Show:
          {Object.keys(SearchType).map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;
                <Button
                  style={{
                    fontWeight:
                      this.state.currentSearchType ==
                      (item as unknown as SearchType)
                        ? 'bold'
                        : 'normal',
                  }}
                  onClick={() => {
                    this.setState({
                      currentSearchType: SearchType[
                        item as any
                      ] as unknown as SearchType,
                    });
                    //  this.doSearch(item);
                  }}
                  className="TrendingItem"
                  key={item}
                >
                  {item}
                </Button>
              </>
            );
          })}
        </div>
      )
    );
  }
  renderTrending(): React.ReactNode {
    return (
      this.state.searchString == '' && (
        <div className="TrendingSearches">
          <strong>Trending:</strong>
          {this.state.content.trending.map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => {
                    this.setState({
                      searchResults: null,
                      searchString: item,
                    });
                    this.doSearch(item);
                  }}
                  className="TrendingItem"
                  key={item}
                >
                  {item}
                </Button>
              </>
            );
          })}
        </div>
      )
    );
  }
  renderCustom(): React.ReactNode {
    return <RenderRouter data={null} content={this.state.customData} />;
  }
  renderBegin(): React.ReactNode {
    return <RenderRouter data={null} content={this.state.customBegin} />;
  }
  render(): React.ReactNode {
    const focusInputField = (input: any) => {
      if (input) {
        setTimeout(() => {
          input.focus();
        }, 100);
      }
    };
    return (
      <>
        <form id="search" role="search" className="SearchItem">
          <input
            value={this.state.searchString}
            className="SearchItemInput"
            autoFocus={true}
            ref={focusInputField}
            onChange={(e: any) => {
              this.setState({ searchString: e.target.value });
              this.doSearch(e.target.value);
            }}
            placeholder="Search..."
          ></input>

          <div className="SearchItemDiv">
            {this.renderTrending()}
            {this.renderSearchTypes()}
          </div>
        </form>
        {this.state.customBegin != null &&
          this.state.searchString == '' &&
          this.renderBegin()}
        {this.state.customData != null &&
          this.state.searchString != '' &&
          this.renderCustom()}
        <div className="SearchItem">
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Staff) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult?.hideStaff !==
              true &&
            this.staffItems().map((staff: TMHPerson) =>
              this.renderStaff(staff)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType['Home Church']) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult
              ?.hideHomechurch !== true &&
            this.state.searchHomechurch?.map((homechurch: any) =>
              this.renderHomechurch(homechurch)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Series) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult
              ?.hideSeries !== true &&
            this.state.searchSeries?.map((series: any) =>
              this.renderSeries(series)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType['Custom Playlist']) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult
              ?.hideCustomPlaylist !== true &&
            this.state.searchCustomPlaylist?.map((customPlaylist: any) =>
              this.renderCustomPlaylist(customPlaylist)
            )}

          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType['Blog Series']) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult
              ?.hideBlogSeries !== true &&
            this.state.searchBlogSeries?.map((blogSeries: any) =>
              this.renderBlogSeries(blogSeries)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Notes) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult?.hideNotes !==
              true &&
            this.state.searchNotes?.map((note: any) => this.renderNotes(note))}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Compassion) &&
            this.state.searchString != '' &&
            this.state.customData?.page?.pageConfig?.searchResult
              ?.hideCompassion !== true &&
            this.compassionItems().map((compassion: CompassionData) =>
              this.renderCompassion(compassion)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Blogs) &&
            this.state.searchBlogResults !== null &&
            this.state.customData?.page?.pageConfig?.searchResult?.hideBlogs !==
              true &&
            this.state.searchBlogResults.map((item: any) =>
              this.renderBlog(item)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Videos) &&
            this.state.searchResults !== null &&
            this.state.customData?.page?.pageConfig?.searchResult
              ?.hideVideos !== true &&
            this.state.searchResults.map((item: any) => this.renderVideo(item))}
        </div>
      </>
    );
  }
}
export default withRouter(ContentItem);
