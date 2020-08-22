
import React from 'react';

import HomeMenu from '../components/Menu/HomeMenu.js';
import { withRouter } from 'next/router'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import * as queries from '../src/graphql/queries';
//import * as mutations from '../src/graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../src/aws-exports';

Amplify.configure(awsmobile);



class Sites extends React.Component {
  constructor(props) {
    super(props)
    const { router } = this.props
    this.state = {
      site: router.query.site.toLowerCase(),
      locationDetails: null
    }
    this.listLocations();
    this.getLocationDetails();
  }
  listLocations() {
    const listLocations = API.graphql(graphqlOperation(queries.listLocations, { limit: 50 }));
    listLocations.then(json => {
      console.log("Success queries.listLocations: " + json);
      this.setState({ locations: json.data.listLocations.items })
    }).catch(err => {
      console.log("Error queries.listLocations: " + err);

    });
  }
  getLocationDetails() {
    const listLocationDetails = API.graphql(graphqlOperation(queries.listLocations, { limit: 50, filter: { url: { eq: this.state.site } } }));
    listLocationDetails.then(json => {
      console.log("Success queries.listLocationDetails: " + json);
      this.setState({ locationDetails: json.data.listLocations.items[0] })

    }).catch(err => {
      console.log("Error queries.listLocationDetails: " + err);

    });
  }
  componentDidUpdate(prevProps, prevState) {

    if (prevState.site != this.state.site) {
      this.getLocationDetails();
    }

  }

  renderSite() {

    if (this.state.locationDetails == null) {
      return null;
    }
    else {
      return (
        <div>
          <HomeMenu></HomeMenu>
          Welcome to {this.state.site} site
          <div>{this.state.locationDetails.site_name}</div>
          <div>{this.state.locationDetails.directions}</div>
          <div>{this.state.locationDetails.welcome}</div>
          <div>{this.state.locationDetails.welcome_img}</div>
          <div>{this.state.locationDetails.welcome_vid_youtube}</div>
          <div>{this.state.locationDetails.phone}</div>
          <div>{this.state.locationDetails.email}</div>
          <div>{this.state.locationDetails.instagram}</div>
          <div>{this.state.locationDetails.twitter}</div>
          <div>{this.state.locationDetails.facebook}</div>
          <div>{this.state.locationDetails.location.address}</div>
          <this.MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>

      )
    }
  }
  Markers = (props) => {
    if (this.state.locations == null) return null
    else {
      return this.state.locations.map((item) => {
        return (<Marker position={{ lat: item.location.latitude, lng: item.location.longitude }} />)
      })
    }
  }
  MyMapComponent = withScriptjs(withGoogleMap((props) => {
    return (
      <div>
        <GoogleMap
          defaultZoom={6}
          defaultCenter={{ lat: 44.6, lng: -77.913528 }}
        >
          <this.Markers></this.Markers>
        </GoogleMap>
      </div>);
  }));
  renderMap() {
    return (
      <div>
        Welcome to map site
        <this.MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

      </div>

    )
  }
  render() {

    if (this.state.site != null)
      return this.renderSite()
    else
      return this.renderMap()
  }
}
export default withRouter(Sites)