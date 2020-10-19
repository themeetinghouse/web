import React from 'react';
import './TeachingSearch.scss';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';
import { SearchVideosQuery, SearchVideosQueryVariables } from 'API';
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import { SearchBarContentProp } from '../types';

Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: SearchBarContentProp;
}

interface State {
  searchResults: NonNullable<
    NonNullable<SearchVideosQuery['searchVideos']>['items']
  >;
  currentInput: string;
}

class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchResults: [],
      currentInput: '',
    };
  }

  async search(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    this.setState({ currentInput: targetValue });
    try {
      const query: SearchVideosQueryVariables = {
        filter: {
          videoTypes: { eq: this.props.content.subclass },
          or: [
            { seriesTitle: { wildcard: `${targetValue.toLowerCase()}*` } },
            { episodeTitle: { wildcard: `${targetValue.toLowerCase()}*` } },
          ],
        },
        limit: 10,
      };
      const json = (await API.graphql(
        graphqlOperation(queries.searchVideos, query)
      )) as GraphQLResult<SearchVideosQuery>;
      if (json?.data?.searchVideos?.items)
        this.setState({
          searchResults: json.data.searchVideos.items.sort((a, b) =>
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

  openVideo(item: State['searchResults'][0]) {
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
            this.search(e);
          }}
          placeholder={this.props.content.text1}
        ></input>
        {this.state.searchResults.length && this.state.currentInput ? (
          <img
            onClick={() =>
              this.setState({ searchResults: [], currentInput: '' })
            }
            src="/static/svg/Close-Cancel.svg"
            alt=""
            className="CloseTeachingSearch"
          ></img>
        ) : null}
        <div
          className={
            this.state.searchResults.length && this.state.currentInput
              ? 'TeachingSearchItemDiv ShowResults'
              : 'TeachingSearchItemDiv'
          }
        >
          {this.state.searchResults.length && this.state.currentInput ? (
            <div className="TeachingSearchNumberOfVideos">
              {this.state.searchResults.length} Videos
            </div>
          ) : null}
          {this.state.searchResults.length && this.state.currentInput
            ? this.state.searchResults.map((item) => {
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
                              <div className="Date">{item.publishedDate}</div>
                            ) : null}
                            {item.length ? (
                              <div className="Length">
                                &nbsp;• {this.formatVideoDuration(item.length)}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="Description">{item.description}</div>
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
export default withRouter(ContentItem);
