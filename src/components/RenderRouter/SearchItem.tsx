
import React from 'react';
import "./SearchItem.scss"
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';
Amplify.configure(awsmobile);

interface Props {
  content: any

}
interface State {
  content: any,
  searchResults: any
}

export default class ContentItem extends React.Component<Props, State>  {
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
    else
      return "https://beta.themeetinghouse.com/cache/" + size
  }
  doSearch(e: any) {
    var targetValue = e.target.value
    this.search(targetValue, null)
  }
  search(e: any, nextId: any) {

    console.log(e)
    const listVideos = API.graphql(graphqlOperation(queries.fuzzySearchVideos, { filter: e, limit: 10, nextToken: nextId }));
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
  }
  render() {
    return (<div className="SearchItem" >
      <input className="SearchItemInput" onChange={(e: any) => { this.doSearch(e) }} placeholder="Search"></input>
      <div className="SearchItemDiv">Results:
      <div>
          {this.state.searchResults !== null ? this.state.searchResults.map((item: any) => {
            if (item.episodeTitle !== null)
              return (
                <div key={item.id} onClick={(item) => { this.openVideo(item) }} style={{ cursor: "pointer" }}>
                  <img alt="TBD" className="SearchItemVideoThumb" src={item.Youtube.snippet.thumbnails.high.url} />
                  <div>{item.episodeNumber}. {item.episodeTitle} - {item.seriesTitle}</div>
                  <div>{item.description}</div>
                </div>)
            else
              return null
          }) : null}
        </div>
      </div>
    </div>)
  }
}
