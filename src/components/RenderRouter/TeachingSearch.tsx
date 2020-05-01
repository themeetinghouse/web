
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
  searchResults: any
}

 class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      searchResults: null
    }
  }
  imgUrl(size: any) {
    if (window.location.hostname === "localhost")
      return "https://localhost:3006"
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/"+size
    else
      return "https://www.themeetinghouse.com/cache/"+size
  }
  doSearch(e: any, videoType: any) {
    var targetValue = e.target.value
    this.search(targetValue, videoType, null)
  }
  
  search(e: any, videoType: any, nextId: any) {

    console.log(e)
    const fuzzySearchVideosByType:any = API.graphql(graphqlOperation(queries.fuzzySearchVideosByType, { videoTypes: videoType, filter: e, limit: 10, nextToken: nextId }));
    fuzzySearchVideosByType.then((json: any) => {
      console.log(json)
      if (nextId == null)
        this.setState({ searchResults: json.data.fuzzySearchVideosByType.items })
      else
        this.setState({ searchResults: this.state.searchResults.concat(json.data.fuzzySearchVideosByType.items) })

      //   this.search(e, json.data.searchVideos.nextToken)
    }).catch((e: any) => {
      console.log(e)
    })
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
    return (<div className="SearchItem" >
      <div className="Header1">{this.props.content.header1}</div>
      <img src="/static/svg/Search.svg" alt="Search" style={{paddingRight: "30px", paddingBottom:"6px"}}></img>
      <input className="SearchItemInput" autoFocus={true} ref={focusInputField} onChange={(e: any) => { this.doSearch(e, this.props.content.subclass) }} placeholder={this.props.content.text1}></input>
      <div className="SearchItemDiv">
        <div className="TrendingSearches"/>
          {this.state.searchResults !== null ? this.state.searchResults.map((item: any) => {
            if (item.episodeTitle !== null)
              return (
                <div key={item.id} onClick={(item2) => { this.openVideo(item) }} className="SearchResultItem">
                  <img alt="TBD" className="Thumb" src={item.Youtube.snippet.thumbnails.high.url} />
                  <div className="Content">
                    <div className="ContentType">Video</div> 
                    <div className="Title">{item.episodeTitle} - {item.seriesTitle}</div>
                    <div className="Description">{item.description}</div>
                  </div>
                  <div className="Link">
                    <img alt="GO" src="\static\svg\ArrowRight black.svg" />
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