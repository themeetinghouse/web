
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Marker } from 'google-maps-react';
import { Map } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./HomeChurchItem.scss"
//import { withApollo,WithApolloClient } from "react-apollo";
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { Input } from 'reactstrap';

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

      const f1ListGroupTypes = API.graphql(graphqlOperation(queries.f1ListGroupTypes, {}));
      f1ListGroupTypes.then((json: any) => {
        console.log(json)

        json.data.F1ListGroupTypes.groupTypes.groupType.forEach((item: any) => {
          const f1ListGroups = API.graphql(graphqlOperation(queries.f1ListGroups, { itemId: item.id }));

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

      <div className="HomeChurchItem">
        <div className="HomeChurchItemDiv1">

          <h1 className="SundayMorningH1"   >{this.state.content.header1}</h1>
          <div className="HomeChurchItemDiv2">
            <Map google={this.props.google} zoom={initalZoom} initialCenter={inititalCenter}
              className="HomeChurchItemMap">
              {this.state.groups != null ? this.state.groups.map((item: any) => {
                return (<Marker key={item.id} onClick={this.onMarkerClick}
                  position={{ lat: item.location.address.latitude, lng: item.location.address.longitude }} />
                )
              }) : null}
            </Map>
          </div>
          <div className="HomeChurchItemDiv3">
            <div className="SundayMorningItemDiv4" >
              <Input placeholder="Current Location" ></Input>
              <button className="SundayMorningButton">Driving</button>
              <button className="SundayMorningButton">Transit</button>
              <button className="SundayMorningButton">Bike</button>
            </div>
            <div className="SundayMorningItemListData" >
              {this.state.groups != null ? this.state.groups.map((item: any) => {
                return (item.isPublic?
                  <div key={item.id} >
                    <h3 className="HomeChurchH3">{item.name}</h3>
                    <div className="HomeChurchAddress">{item.description}</div>
                    <div>{item.churchCampus.name}</div>
                  </div>:null
                )
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
