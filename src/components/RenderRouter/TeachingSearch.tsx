import React from 'react';
import "./TeachingSearch.scss"
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';

Amplify.configure(awsmobile);

interface Props extends RouteComponentProps{
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
    this.search(targetValue, videoType, null)
  }

  search(e: any, videoType: any, nextId: any) {

    console.log(e)
    const fuzzySearchVideos:any = API.graphql(graphqlOperation(queries.fuzzySearchVideos, { videoTypes: videoType, filter: e, limit: 10, nextToken: nextId }));
    fuzzySearchVideos.then((json: any) => {
      console.log(json)
      if (nextId == null)
        this.setState({ searchResults: json.data.fuzzySearchVideos.items })
      else
        this.setState({ searchResults: this.state.searchResults.concat(json.data.fuzzySearchVideos.items) })

    }).catch((e: any) => {
      console.log(e)
    })
  }

  formatVideoDuration(length: string): string {
    let duration = parseInt(length, 10)
    let hours = 0
    if (duration < 60) {
      return length + 'm'
    }
    while (duration > 59) {
      duration-=60
      hours+=1
    }
    return `${hours.toString()}h ${duration.toString()}m`
  }

  openVideo(item: any) {
    console.log(item)
    console.log("/videos/"+item.series.id+"/"+item.id)
    this.navigateTo("/videos/"+item.series.id+"/"+item.id)
//    this.navigateTo("/videos/"+item.series+"/"+item.episodeId)
  }

  navigateTo(location:any) {
    this.props.history.push(location, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }



  // need an acutal fn for trending searches (don't use content from json)
  render() {
    const focusInputField = (input:any) => {
      if (input) {
        setTimeout(() => {input.focus()}, 100);
      }
    };
    return (<div className="SearchItem">
      <div className="Header1">{this.props.content.header1}</div>
      <img src="/static/svg/Search.svg" alt="Search" style={{paddingRight: "30px", paddingBottom:"6px"}}></img>
      <input className="SearchItemInput" ref={focusInputField} value={this.state.currentInput} onChange={(e: any) => { this.doSearch(e, this.props.content.subclass) }} placeholder={this.props.content.text1}></input>
      {this.state.searchResults.length ? <img onClick={()=>this.setState({ searchResults: [], currentInput: '' })} src="/static/svg/Close-Cancel.svg" alt="" className="CloseTeachingSearch"></img> : null}
      <div className="SearchItemDiv">
        <div className="TrendingSearches"/>
          {this.state.searchResults.length ? <div>{this.state.searchResults.length} Videos</div> : null}
          {this.state.searchResults.length ? this.state.searchResults.map((item: any) => {
            if (item.episodeTitle !== null)
              return (
                <div key={item.id} onClick={() => { this.openVideo(item) }} className="SearchResultItem">
                  <div className="Content">
                    <div className="Title">{item.episodeTitle} - {item.seriesTitle}</div>
                    {item.publishedDate ? <div>{item.publishedDate}</div> : null}
                    {item.length ? <div>{this.formatVideoDuration(item.length)}</div> : null}
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