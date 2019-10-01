
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Marker } from 'google-maps-react';
import { Map } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./HomeChurchItem.scss"
import { Button } from 'react-bootstrap';
//import { withApollo,WithApolloClient } from "react-apollo";
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: any,
  google: any,
  client: any
}
interface State {
  content: any,
  selectedPlace: any,
  listData: any,
  groupType: any,
  groups: any
}

export class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null,
      listData: null,
      groupType: [],
      groups: []
    }
    this.navigate = this.navigate.bind(this);
    if (this.state.content.class === "home-church") {
      const f1ListGroupTypes = API.graphql(graphqlOperation(queries.f1ListGroupTypes, { }));
      f1ListGroupTypes.then((json: any) => {
            console.log(json)
     
        json.data.F1ListGroupTypes.groupTypes.groupType.map((item: any) => {
          const f1ListGroups = API.graphql(graphqlOperation(queries.f1ListGroups, { itemId: item.id}));
     
          f1ListGroups.then((json2: any) => {
            console.log(json2)
            this.setState({ groups: this.state.groups.concat(json2.data.F1ListGroups.groups.group) });
          });
        });
      })
    }
  }

  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  onMarkerClick() { }
  onInfoWindowClose() { }

  render() {
    var inititalCenter: any;
    var initalZoom;
    if (this.state.content.class === "home-church") {
      inititalCenter = {
        lat: 44,
        lng: -78.0

      }
      initalZoom = 6
    }
    else {
      inititalCenter = {
        lat: 0,
        lng: -0
      }
      initalZoom = 1
    }

    return (

      <div className="ContentItem oneImage" style={{ height: "100vw", position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "80vw" }}>
          <div  >
            <h1  >{this.state.content.header1}</h1>
            <div style={{ position: "absolute", left: "40vw", width: "40vw", height: "40vw" }}>
              <Map google={this.props.google} zoom={initalZoom} initialCenter={inititalCenter}
                style={{ left: "0vw", width: "40vw", height: "40vw" }}>
                {this.state.groups != null ? this.state.groups.map((item: any) => {
                  return (<Marker key={item.id} onClick={this.onMarkerClick}
                    position={{ lat: item.location.address.latitude, lng: item.location.address.longitude }} />
                  )
                }) : null}
              </Map>
            </div>
            <div style={{ position: "absolute", left: "0vw", width: "40vw", height: "40vw" }}>
              {this.state.groups != null ? this.state.groups.map((item: any) => {
                if (this.state.content.class === "home-church") {
                  return (
                    <div key={item.id} >{item.name}
                      <Button onClick={() => this.navigate(item.id)}>Site Page</Button>
                    </div>
                  )
                }
                else {
                  return (
                    <div style={{ borderBottomWidth: "1px", marginBottom: "5px", borderBottomColor: "#C8C8C8", borderBottomStyle: "solid" }}>
                      <h3>{item.name}</h3>
                      <div>{item.description}</div>
                      <div>{item.gender.name}</div>
                      <div>{item.hasChildcare}</div>
                      <div>{item.isOpen}</div>
                      <div>{item.isPublic}</div>
                      <div>{item.isSearchable}</div>
                      <div>{item.maritalStatus.name}</div>

                    </div>
                  )
                }
              }) : null}

            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0')
})(withRouter(ContentItem))
