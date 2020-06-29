import React from 'react';
import "./TeachingSearch.scss"
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: any
}
interface State {
  content: any,
  searchResults: any[]
  currentInput: string
}

class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      searchResults: [],
      currentInput: ''
    }
  }

  doSearch(e: any, videoType: any) {
    const targetValue = e.target.value
    this.setState({ currentInput: targetValue })
    this.search(targetValue, videoType)
  }

  async search(e: any, videoType: any) {
    try {
      const json: any = await API.graphql(graphqlOperation(queries.fuzzySearchVideos, { videoType: videoType, filter: e, limit: 10, nextToken: null }));
      console.log(json)
      this.setState({ searchResults: json.data.fuzzySearchVideos.items })
    } catch (err) {
      console.error(err)
    }
  }

  formatVideoDuration(length: string): string {
    let duration = parseInt(length, 10)
    let hours = 0
    if (duration < 60) {
      return length + 'm'
    }
    while (duration > 59) {
      duration -= 60
      hours += 1
    }
    return `${hours.toString()}h ${duration.toString()}m`
  }

  openVideo(item: any) {
    this.props.history.push("/videos/" + item.series.id + "/" + item.id, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  render() {
    const focusInputField = (input: any) => {
      if (input) {
        setTimeout(() => { input.focus() }, 100);
      }
    };
    return (<div className="TeachingSearchItem">
      <div className="Header1">{this.props.content.header1}</div>
      <img src="/static/svg/Search.svg" alt="Search" style={{ paddingRight: "30px", paddingBottom: "6px" }}></img>
      <input className="TeachingSearchItemInput" ref={focusInputField} value={this.state.currentInput} onChange={(e: any) => { this.doSearch(e, this.props.content.subclass) }} placeholder={this.props.content.text1}></input>
      {this.state.searchResults.length ? <img onClick={() => this.setState({ searchResults: [], currentInput: '' })} src="/static/svg/Close-Cancel.svg" alt="" className="CloseTeachingSearch"></img> : null}
      <div className="TeachingSearchItemDiv">
        {this.state.searchResults.length ? <div className="TeachingSearchNumberOfVideos">{this.state.searchResults.length} Videos</div> : null}
        {this.state.searchResults.length ? this.state.searchResults.map((item: any) => {
          if (item.episodeTitle !== null)
            return (
              <div key={item.id} onClick={() => { this.openVideo(item) }} className="TeachingSearchResultItem">
                <div className="Content">
                  <div className="Details">
                    <div className="Title">{item.episodeTitle}</div>
                    <div className="RightContainer">
                      {item.publishedDate ? <div className="Date">{item.publishedDate}</div> : null}
                      {item.length ? <div className="Length">&nbsp;• {this.formatVideoDuration(item.length)}</div> : null}
                    </div>
                  </div>
                  <div className="Description">{item.description}</div>
                </div>
              </div>)
          else
            return null
        }) : null}
      </div>
    </div>)
  }
}
export default withRouter(ContentItem)