
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
    const listVideos = API.graphql(graphqlOperation(queries.searchVideos, { filter: { episodeTitle: { regexp: e } }, limit: 10, nextToken: nextId }));
    listVideos.then((json: any) => {
      console.log(json)
      if (nextId == null)
        this.setState({ searchResults: json.data.searchVideos.items })
      else
        this.setState({ searchResults: this.state.searchResults.concat(json.data.searchVideos.items) })

   //   this.search(e, json.data.searchVideos.nextToken)
    }).catch((e: any) => {
      console.log(e)
    })
  }
  render() {
    return (<div style={{ position: "relative", top: "2vw", left: "20vw" }}>
      <input style={{ width: "70vw" }} onChange={(e: any) => { this.doSearch(e) }} placeholder="Search"></input>
      <div style={{ height: "100vw" }}>Results:
      <div>
          {this.state.searchResults !== null ? this.state.searchResults.map((item: any) => {
            if (item.episodeTitle !== null)
              return (<div style={{ color: "#ffffff" }}>{item.episodeTitle}</div>)
            else
              return null
          }) : null}
        </div>
      </div>
    </div>)
  }
}
