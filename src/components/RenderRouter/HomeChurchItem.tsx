
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Map, InfoWindow, Marker } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Select from 'react-select';

import "./HomeChurchItem.scss"
//import { withApollo,WithApolloClient } from "react-apollo";
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
// import { Input } from 'reactstrap';
import DataLoader from './DataLoader';

Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
  content: any,
  google: any,
  client: any,
}
interface State {
  content: any,
  selectedPlace: any,
  selectedPlaceMarker: any,
  filterLocation: any,
  mapBounds: any,
  listData: any,
  locations: any,
  groupType: any,
  groups: any,
  currentLatLng: {
    lat: number,
    lng: number,
  },
}

export class ContentItem extends React.Component<Props, State>  {

  dataLoader: DataLoader;

  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null,
      selectedPlaceMarker: null,
      filterLocation: null,
      mapBounds: null,
      listData: null,
      locations: [],
      groupType: [],
      groups: [],
      currentLatLng: {
        lng: -79.685926,
        lat: 43.511459,
      }
    }

    this.dataLoader = new DataLoader({
      ...this.props, data: {}, dataLoaded: (data: any) => {
        console.log("HomeChurchItem.constructor(): Got locations: %o", data);
        this.setState({ locations: data });
      }
    }, { content: { class: "locations" } })
    this.dataLoader.loadData();

    this.navigate = this.navigate.bind(this);
    let geoLocationPromise = this.getGeoLocation();
    if (this.state.content.class === "home-church") {
     
      const f1ListGroupTypes = API.graphql(graphqlOperation(queries.f1ListGroupTypes, {}));
      f1ListGroupTypes.then((json: any) => {
        console.log(json)
        json.data.F1ListGroupTypes.groupTypes.groupType.filter((item: any) => {
          return (item.isWebEnabled === "true")
        }).forEach((item: any) => {
          const f1ListGroups = API.graphql(graphqlOperation(queries.f1ListGroups, { itemId: item.id }));

          f1ListGroups.then((json2: any) => {
            console.log(json2)
            let unsortedGroups = this.state.groups.concat(json2.data.F1ListGroups.groups.group.filter((item:any)=>{
              return (item.isOpen==="true" && item.isSearchable==="true")
            }));
            geoLocationPromise.then((currentLatLng: any) => {
              let distanceSorter = (loc1: any, loc2: any) => {
                let dist1 = this.calculateDistance(currentLatLng.lat, currentLatLng.lng, +loc1.location.address.latitude || 0, +loc1.location.address.longitude || 0)
                let dist2 = this.calculateDistance(currentLatLng.lat, currentLatLng.lng, +loc2.location.address.latitude || 0, +loc2.location.address.longitude || 0)
                return (dist1 < dist2 ? -1 : 1);
              }
              let sortedGroups = unsortedGroups.sort(distanceSorter);
              this.setState({ groups: sortedGroups });
            })
          });
        });

      })
    }
  }

  componentDidMount() {
    this.getGeoLocation();
  }

  getGeoLocation = () => {
    return new Promise((resolve, reject) => {
      let currentLatLng = this.state.currentLatLng;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords);
          currentLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          resolve(currentLatLng);
        }, error => {
          resolve(currentLatLng);
        })
      } else {
        console.log("Could not get current location.  Using default");
        resolve(currentLatLng);
      }
    })
  }

  calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
    if ((lat1 === lat2) && (lng1 === lng2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lng1 - lng2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515; // Compute in Miles
      dist = dist * 1.609344; // Compute in KM
      return dist;
    }
  }

  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  getMarkerClickHandler = (item: any) => (props: any, marker: any) => {
    this.setState({ selectedPlaceMarker: marker, selectedPlace: item });
  }

  handleSiteSelection = (locationItem: any) => {
    // Filter the list of Home Churches by the selected site
    console.log("HomeChurchItem.handleSiteSelection(): locationItem: %o", locationItem);
    var bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < this.state.groups.length; i++) {
      let p = { lat: +this.state.groups[i].location.address.latitude, lng: +this.state.groups[i].location.address.longitude };
      console.log("HomeChurchItem.handleSiteSelection(): map bounds point:%o", p);
      if (p.lat !== 0 && p.lng !== 0) {
        bounds.extend(p);
      }
    }
    this.setState({ filterLocation: locationItem, mapBounds: bounds });
  }

  render() {
    var inititalCenter: any;
    var initalZoom;
    if (this.state.content.class === "home-church") {
      inititalCenter = { lat: 44, lng: -78.0 }
      initalZoom = 6
    } else {
      inititalCenter = { lat: 0, lng: -0 }
      initalZoom = 1
    }

    return (

      <div className="HomeChurchItem">
        <div className="HomeChurchItemDiv1">

          <h1 className="SundayMorningH1">{this.state.content.header1}</h1>
          <div className="HomeChurchItemDiv2">
            <Map google={this.props.google} zoom={initalZoom} initialCenter={inititalCenter} bounds={this.state.mapBounds}
              className="HomeChurchItemMap">
              {this.state.groups != null
                ? this.state.groups
                  .filter((item: any) => {
                    return this.state.filterLocation ? item.churchCampus.name === this.state.filterLocation.label : true;
                  })
                  .map((item: any) => {
                    return (<Marker key={item.id} onClick={this.getMarkerClickHandler(item)}
                      position={{ lat: item.location.address.latitude, lng: item.location.address.longitude }} />
                    )
                  })
                : null}
              <InfoWindow marker={this.state.selectedPlaceMarker} visible={true}>
                {
                  this.state.selectedPlace ? (
                    <div>
                      <div className="HomeChurchItemMapInfoWindowDiv1">{this.state.selectedPlace.name}</div>
                      <div className="HomeChurchItemMapInfoWindowDiv2">Site affiliation: {this.state.selectedPlace.churchCampus.name}</div>
                      <div className="HomeChurchItemMapInfoWindowDiv3">{this.state.selectedPlace.description}</div>
                    </div>
                  ) : <div></div>
                }
              </InfoWindow>
            </Map>
          </div>
          <div className="HomeChurchItemDiv3">
            <div className="HomeChurchItemDiv4" >
              {<Select onChange={this.handleSiteSelection} placeholder="Select a Meeting House location" className="LocationSelect"
                options={this.state.locations.map(
                  (item: any) => ({ label: item.name, value: item.id })).sort((a: any, b: any) => a.label.localeCompare(b.label)
                  )}></Select>}
              {/* <Input placeholder="Current Location" ></Input> */}
              <button className="SundayMorningButton">Driving</button>
              <button className="SundayMorningButton">Transit</button>
              <button className="SundayMorningButton">Bike</button>
            </div>
            <div className="HomeChurchItemListData" >
              {this.state.groups != null
                ? this.state.groups
                  .filter((item: any) => {
                    return this.state.filterLocation ? item.churchCampus.name === this.state.filterLocation.label : true;
                  })
                  .map((item: any) => {
                    return (item.isPublic ?
                      <div className="HomeChurchItemDiv5" key={item.id} >
                        <h3 className="HomeChurchH3">{item.name}</h3>
                        <div className="HomeChurchAddress">{item.description}</div>
                        <div className="HomeChurchSiteAffiliation">Affiliated with location: {item.churchCampus.name}</div>
                      </div> : null
                    )
                  })
                : null}
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
