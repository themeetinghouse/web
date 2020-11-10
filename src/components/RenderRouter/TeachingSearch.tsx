import React from 'react';
import './TeachingSearch.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import * as customQueries from '../../graphql-custom/customQueries';
import {
  SearchVideosQuery,
  SearchVideosQueryVariables,
  SearchBlogsQuery,
  SearchBlogsQueryVariables,
} from 'API';
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import { SearchBarContentProp } from '../types';

interface Props extends RouteComponentProps {
  content: SearchBarContentProp;
}

interface State {
  videos: NonNullable<NonNullable<SearchVideosQuery['searchVideos']>['items']>;
  blogs: NonNullable<NonNullable<SearchBlogsQuery['searchBlogs']>['items']>;
  currentInput: string;
}

class TeachingSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      videos: [],
      blogs: [],
      currentInput: '',
    };
  }

  async searchBlogs(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    this.setState({ currentInput: targetValue });
    try {
      const query: SearchBlogsQueryVariables = {
        filter: {
          blogStatus: { eq: this.props.content.subclass },
          or: [
            { blogTitle: { matchPhrasePrefix: targetValue.toLowerCase() } },
            { tags: { matchPhrasePrefix: targetValue.toLowerCase() } },
            { description: { matchPhrasePrefix: targetValue.toLowerCase() } },
          ],
        },
        limit: 10,
      };
      const json = (await API.graphql(
        graphqlOperation(customQueries.searchBlogs, query)
      )) as GraphQLResult<SearchBlogsQuery>;

      if (json?.data?.searchBlogs?.items)
        this.setState({
          blogs: json.data.searchBlogs.items.sort((a, b) =>
            (b?.publishedDate as string)?.localeCompare(
              a?.publishedDate as string
            )
          ),
        });
    } catch (err) {
      console.error(err);
    }
  }

  async searchVideos(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    this.setState({ currentInput: targetValue });
    try {
      const query: SearchVideosQueryVariables = {
        filter: {
          videoTypes: { eq: this.props.content.subclass },
          or: [
            { seriesTitle: { matchPhrasePrefix: targetValue.toLowerCase() } },
            { episodeTitle: { matchPhrasePrefix: targetValue.toLowerCase() } },
          ],
        },
        limit: 10,
      };
      const json = (await API.graphql(
        graphqlOperation(customQueries.searchVideos, query)
      )) as GraphQLResult<SearchVideosQuery>;
      if (json?.data?.searchVideos?.items)
        this.setState({
          videos: json.data.searchVideos.items.sort((a, b) =>
            (b?.publishedDate as string)?.localeCompare(
              a?.publishedDate as string
            )
          ),
        });
    } catch (err) {
      console.error(err);
    }
  }

  formatVideoDuration(length: string): string {
    let duration = parseInt(length, 10);
    let hours = 0;
    if (duration < 60) {
      return length + 'm';
    }
    while (duration > 59) {
      duration -= 60;
      hours += 1;
    }
    return `${hours.toString()}h ${duration.toString()}m`;
  }

  openVideo(item: State['videos'][0]) {
    if (item && item?.series) {
      this.props.history.push(
        '/videos/' + item.series.id + '/' + item.id,
        'as'
      );
      const unblock = this.props.history.block(
        'Are you sure you want to leave this page?'
      );
      unblock();
    }
  }

  render() {
    switch (this.props.content.style) {
      case 'teaching':
        return (
          <div className="TeachingSearchItem">
            <div className="Header1">{this.props.content.header1}</div>
            <img
              src="/static/svg/Search.svg"
              alt="Search"
              className="SearchIcon"
            ></img>
            <input
              className="TeachingSearchItemInput"
              value={this.state.currentInput}
              onChange={(e) => {
                this.searchVideos(e);
              }}
              placeholder={this.props.content.text1}
            ></input>
            {this.state.videos.length && this.state.currentInput ? (
              <img
                onClick={() => this.setState({ videos: [], currentInput: '' })}
                src="/static/svg/Close-Cancel.svg"
                alt=""
                className="CloseTeachingSearch"
              ></img>
            ) : null}
            <div
              className={
                this.state.videos.length && this.state.currentInput
                  ? 'TeachingSearchItemDiv ShowResults'
                  : 'TeachingSearchItemDiv'
              }
            >
              {this.state.videos.length && this.state.currentInput ? (
                <div className="TeachingSearchNumberOfVideos">
                  {this.state.videos.length} Videos
                </div>
              ) : null}
              {this.state.videos.length && this.state.currentInput
                ? this.state.videos.map((item) => {
                    if (item?.episodeTitle)
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            this.openVideo(item);
                          }}
                          className="TeachingSearchResultItem"
                        >
                          <div className="Content">
                            <div className="Details">
                              <div className="Title">{item.episodeTitle}</div>
                              <div className="RightContainer">
                                {item.publishedDate ? (
                                  <div className="Date">
                                    {item.publishedDate}
                                  </div>
                                ) : null}
                                {item.length ? (
                                  <div className="Length">
                                    &nbsp;•{' '}
                                    {this.formatVideoDuration(item.length)}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="Description">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      );
                    else return null;
                  })
                : null}
            </div>
          </div>
        );
      case 'blog':
        return (
          <div className="TeachingSearchItem">
            <div className="Header1">{this.props.content.header1}</div>
            <img
              src="/static/svg/Search.svg"
              alt="Search"
              className="SearchIcon"
            ></img>
            <input
              className="TeachingSearchItemInput"
              value={this.state.currentInput}
              onChange={(e) => {
                this.searchBlogs(e);
              }}
              placeholder={this.props.content.text1}
            ></input>
            {this.state.blogs.length && this.state.currentInput ? (
              <img
                onClick={() => this.setState({ blogs: [], currentInput: '' })}
                src="/static/svg/Close-Cancel.svg"
                alt=""
                className="CloseTeachingSearch"
              ></img>
            ) : null}
            <div
              className={
                this.state.blogs.length && this.state.currentInput
                  ? 'TeachingSearchItemDiv ShowResults'
                  : 'TeachingSearchItemDiv'
              }
            >
              {this.state.blogs.length && this.state.currentInput ? (
                <div className="TeachingSearchNumberOfVideos">
                  {this.state.blogs.length} Videos
                </div>
              ) : null}
              {this.state.blogs.length && this.state.currentInput
                ? this.state.blogs.map((item) => {
                    if (item?.blogTitle)
                      return (
                        <div
                          key={item.id}
                          onClick={() => null}
                          className="TeachingSearchResultItem"
                        >
                          <div className="Content">
                            <div className="Details">
                              <div className="Title">{item.blogTitle}</div>
                              <div className="RightContainer">
                                {item.publishedDate ? (
                                  <div className="Date">
                                    {item.publishedDate}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="Description">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      );
                    else return null;
                  })
                : null}
            </div>
          </div>
        );
    }
  }
}
export default withRouter(TeachingSearch);
