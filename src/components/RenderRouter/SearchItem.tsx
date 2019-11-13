
import React from 'react';
import "./SearchItem.scss"
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
  doSearch(e: any) {
    var targetValue = e.target.value
    this.search(targetValue, null)
  }
  
  search(e: any, nextId: any) {

    console.log(e)
    const listVideos:any = API.graphql(graphqlOperation(queries.fuzzySearchVideos, { filter: e, limit: 10, nextToken: nextId }));
    listVideos.then((json: any) => {
      console.log(json)
      if (nextId == null)
        this.setState({ searchResults: json.data.fuzzySearchVideos.items })
      else
        this.setState({ searchResults: this.state.searchResults.concat(json.data.fuzzySearchVideos.items) })

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
  
  render() {
    const focusInputField = (input:any) => {
      if (input) {
        setTimeout(() => {input.focus()}, 100);
      }
    };
    return (<div className="SearchItem" >
      <input className="SearchItemInput" autoFocus={true} ref={focusInputField} onChange={(e: any) => { this.doSearch(e) }} placeholder="Search..."></input>
      <div className="SearchItemDiv">
        <div className="TrendingSearches"/>
        <div className="SearchLinks">
          <div className="SearchLink HomeChurch">
            <img src="https://www.habitat.co.uk/blog/wp-content/uploads/2017/07/HABITAT_AW19_donovan_coffe_side.jpg"/>
            <p>Find a home church <img alt="Go" src="\static\svg\ArrowRight.svg" /></p>
          </div>
          <div className="SearchLink Videos">
            <img className="Image" src="https://emu.edu/now/news/wp-content/uploads/sites/43/2018/10/20181024-Bruxy-Cavey-Convocation-004-1000px.jpg" />
            <p>Videos</p>
          </div>
          <div className="SearchLink Articles">
            <img className="Image" src="https://cdn.pixabay.com/photo/2016/11/22/23/09/fountain-pen-1851096_960_720.jpg" />
            <p>Articles</p>
          </div>
        </div>
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