import React from 'react';
import './SearchItem.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';
import Highlighter from 'react-highlight-words';
import DataLoader, { CompassionData, StaffData } from './DataLoader';
import ScaledImage from 'components/ScaledImage/ScaledImage';
import { SearchBlogsQuery } from 'API';
import { GraphQLResult } from '@aws-amplify/api';
Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: any;
}
enum SearchType {
  All = 'All' as any,
  Videos = 'Videos' as any,
  Blogs = 'Blogs' as any,
  Staff = 'Staff' as any,
  Compassion = 'Compassion' as any,
}
interface State {
  content: any;
  searchResults: any;
  searchBlogResults: any;
  searchString: string;
  dataSpeakers: any;
  dataStaff: StaffData[];
  dataOverseers: any;
  dataCompassion: CompassionData[];
  currentSearchType: SearchType;
}
const videoTypeParser: { [name: string]: string } = {
  'adult-sunday': 'Sunday Teaching',
  'ky-youth': 'Youth',
  'ky-kids': 'Kids',
};

class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      searchResults: null,
      searchBlogResults: null,
      searchString: '',
      dataSpeakers: [],
      dataStaff: [],
      dataOverseers: [],
      dataCompassion: [],
      currentSearchType: SearchType.All,
    };
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
    this.search(str, null);
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
  search(e: any, nextId: any) {
    console.log(e);
    const searchBlogs: any = API.graphql(
      graphqlOperation(queries.searchBlogs, {
        filter: {
          blogTitle: { matchPhrase: e },
          or: [
            { author: { matchPhrase: e } },
            { tags: { matchPhrase: e } },
            { description: { matchPhrase: e } },
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
          this.setState({ searchResults: json.data.fuzzySearchVideos.items });
        else
          this.setState({
            searchResults: this.state.searchResults.concat(
              json.data.fuzzySearchVideos.items
            ),
          });

        //   this.search(e, json.data.searchVideos.nextToken)
      })
      .catch((e: any) => {
        console.log(e);
      });
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
  staffItems = (): StaffData[] => {
    return this.state.dataStaff.filter(
      (staff: StaffData) =>
        staff.FirstName.toLowerCase().includes(
          this.state.searchString.toLowerCase()
        ) ||
        staff.LastName.toLowerCase().includes(
          this.state.searchString.toLowerCase()
        ) ||
        (staff.Position.toLowerCase().includes(
          this.state.searchString.toLowerCase()
        ) &&
          this.state.searchString.length > 5)
    );
  };
  renderCompassion(compassion: CompassionData): React.ReactNode {
    const image = {
      src: compassion.image,
      alt: compassion.imagealt,
    };
    return (
      <div key={compassion.id} className="SearchResultItem">
        <ScaledImage
          image={image}
          className="StaffImage"
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
      </div>
    );
  }
  renderStaff(staff: StaffData): React.ReactNode {
    const image = {
      src: `/static/photos/staff/${staff.FirstName}_${staff.LastName}_app.jpg`,
      alt: `${staff.FirstName} ${staff.LastName}`,
    };
    return (
      <div key={staff.Email} className="SearchResultItem">
        <ScaledImage
          image={image}
          className="StaffImage"
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
              textToHighlight={staff.FirstName + ' ' + staff.LastName}
            />
          </div>
          <div className="Description">
            <Highlighter
              highlightClassName="Highlight"
              searchWords={this.state.searchString.split(' ')}
              autoEscape={true}
              textToHighlight={staff.Position ?? ''}
            />
          </div>
        </div>
      </div>
    );
  }
  renderBlog(item: any): React.ReactNode {
    const image = {
      src: this.getBlogImageURI(item.blogTitle, 'square'),
      alt: item.blogTitle + ' series image',
    };
    if (item.episodeTitle !== null)
      return (
        <div
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <ScaledImage
            image={image}
            className="BlogSquareImage"
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
        </div>
      );
    else return null;
  }
  renderVideo(item: any): React.ReactNode {
    if (item.episodeTitle !== null)
      return (
        <div
          key={item.id}
          onClick={() => {
            this.openVideo(item);
          }}
          className="SearchResultItem"
        >
          <img
            alt={item.thumbnailDescription || 'Video Thumbnail'}
            className="Thumb"
            src={item.Youtube.snippet.thumbnails.high.url}
            style={{ width: 160, height: 90, objectFit: 'cover' }}
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
            <div className="VideoType">{videoTypeParser[item.videoTypes]}</div>
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
        </div>
      );
    else return null;
  }
  renderSearchTypes(): React.ReactNode {
    return (
      this.state.searchString != '' && (
        <div className="TrendingSearches">
          Show:
          {Object.keys(SearchType).map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;
                <div
                  style={{
                    fontWeight:
                      this.state.currentSearchType ==
                      ((item as unknown) as SearchType)
                        ? 'bold'
                        : 'normal',
                  }}
                  onClick={() => {
                    this.setState({
                      currentSearchType: (SearchType[
                        item as any
                      ] as unknown) as SearchType,
                    });
                    //  this.doSearch(item);
                  }}
                  className="TrendingItem"
                  key={item}
                >
                  {item}
                </div>
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
          Trending:
          {this.state.content.trending.map((item: string) => {
            return (
              <>
                &nbsp;&nbsp;
                <div
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
                </div>
              </>
            );
          })}
        </div>
      )
    );
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
      <div className="SearchItem">
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

          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Staff) &&
            this.state.searchString != '' &&
            this.staffItems().map((staff: StaffData) =>
              this.renderStaff(staff)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Compassion) &&
            this.state.searchString != '' &&
            this.compassionItems().map((compassion: CompassionData) =>
              this.renderCompassion(compassion)
            )}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Blogs) &&
          this.state.searchBlogResults !== null
            ? this.state.searchBlogResults.map((item: any) =>
                this.renderBlog(item)
              )
            : null}
          {(this.state.currentSearchType == SearchType.All ||
            this.state.currentSearchType == SearchType.Videos) &&
          this.state.searchResults !== null
            ? this.state.searchResults.map((item: any) =>
                this.renderVideo(item)
              )
            : null}
        </div>
      </div>
    );
  }
}
export default withRouter(ContentItem);
