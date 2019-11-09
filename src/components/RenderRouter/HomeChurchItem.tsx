
import React from 'react';
import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Select from 'react-select';
import AddToCalendar from 'react-add-to-calendar';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import DataLoader from './DataLoader';
import Badge from 'components/Badge/Badge';
import * as queries from '../../graphql/queries';
import awsmobile from '../../aws-exports';
// import { Input } from 'reactstrap';

import "./HomeChurchItem.scss"
import { Input, Spinner } from 'reactstrap';
import HomeChurchContactModal from 'components/HomeChurchContactModal/HomeChurchContactModal';

declare var google:any;

Amplify.configure(awsmobile);

const HOME_CHURCH_PIN_URL = "/static/svg/HomeChurchPin.svg";
const HOME_CHURCH_PIN_SELECTED_URL = "/static/svg/HomeChurchPin-selected.svg";
const CURRENT_LOCATION_URL = "/static/svg/CurrentLocation.svg";
const DEFAULT_LAT_LNG = {lng: -79.685926, lat: 43.511459};

const Location_ID_to_F1_Group_Type_Map:any = {
  "alliston": "62948",
  "ancaster": "58251", 
  "brampton": "58224", 
  "brantford": "58225", 
  "burlington": "58248", 
  "hamilton-downtown": "58249",
  "hamilton-mountain": "58250",
  "kitchener": "58253", 
  "london": "58254",
  "newmarket": "58069",
  "oakville": "58082",
  "ottawa": "58255",
  "owen-sound": "58252",
  "parry-sound": "58256",
  "richmond-hill": "58081",
  "sandbanks": "62947",
  "toronto-downtown": "58083",
  "toronto-east": "58258",
  "toronto-high-park": "58257",
  "toronto-uptown": "58259",
  "waterloo": "57909",
}

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
  postalCode: any,
  locationsLoaded:any,
  allLocationsLoaded: any,
  mapBounds: any,
  listData: any,
  locations: any,
  groupType: any,
  groups: any,
  currentLatLng: {
    lat: number,
    lng: number,
  },
  showContactModal: boolean,
  contactHomeChurchId: any,
}

export class ContentItem extends React.Component<Props, State>  {

  dataLoader: DataLoader;
  selectControl: any;
  inputControl: any;
  homeChurchListScrollContainer:any;

  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null,
      selectedPlaceMarker: null,
      filterLocation: {value: "all"},
      postalCode: "",
      locationsLoaded: [],
      allLocationsLoaded: false,
      mapBounds: null,
      listData: null,
      locations: [],
      groupType: [],
      groups: [],
      currentLatLng: DEFAULT_LAT_LNG,
      showContactModal: false,
      contactHomeChurchId: null,
    }

    this.dataLoader = new DataLoader({
      ...this.props, data: {}, dataLoaded: (data: any) => {
        data.sort((l1:any, l2:any) => l1.name.localeCompare(l2.name));
        console.log("HomeChurchItem.constructor(): Got locations: %o", data);
        this.setState({ locations: data });
      }
    }, { content: { class: "locations" } })
    this.dataLoader.loadData();

    if (this.state.content.class === "home-church") {

      const loadGroupPromises:Array<Promise<any>> = [];
      const allGroups:any = [];
      const locationsLoaded:any = [];
     
      this.getRetryableGraphQLOperationPromise(queries.f1ListGroupTypes, {})
      .then((listGroupTypesResponse: any) => {
        listGroupTypesResponse.data.F1ListGroupTypes.groupTypes.groupType
        .filter((item: any) => item.isWebEnabled === "true")
        .forEach((groupTypeItem: any) => {
          //console.log("HomeChurchItem.constructor(): F1ListGroupTypes response - groupTypeItem = %o", groupTypeItem);
          // Get the home churches for this location and update the loading progress when done
          let f1LocationId = groupTypeItem.id;
          let loadGroupPromise = this.getRetryableGraphQLOperationPromise(queries.f1ListGroups, { itemId: f1LocationId })
          .then((listGroupsResponse:any) => {
            let openGroupsForLocation = listGroupsResponse.data.F1ListGroups.groups.group.filter( (item:any) => (item.isOpen==="true" && item.isSearchable==="true") );
            let eventIdsForLocation = openGroupsForLocation.map((g:any) => g.event.id);
            //console.log("HomeChurchItem.constructor(): location: %o, eventIds = %o", groupTypeItem.name, eventIdsForLocation);

            // Get the schedules for the home churches in this location
            return this.getRetryableGraphQLOperationPromise(queries.f1ListEventSchedules, { itemId: eventIdsForLocation })
            .then ((listEventSchedulesResponse:any) => {
              //console.log("HomeChurchItem.constructor(): eventScheduleResponse = %o", listEventSchedulesResponse);
              for (let group of openGroupsForLocation){
                let eventSchedule = listEventSchedulesResponse.data.F1ListEventSchedules.find((s:any) => s.id === group.event.id);
                group.schedule = eventSchedule.event.schedules.schedule[0];
              }
              allGroups.push(...openGroupsForLocation);
              locationsLoaded.push(f1LocationId);
              this.setState({groups: allGroups.concat(), locationsLoaded: locationsLoaded.concat()})
              //console.log("HomeChurchItem.constructor(): All groups (so far): %o", allGroups);
            }) 
          })
          loadGroupPromises.push(loadGroupPromise);
        })
        Promise.all(loadGroupPromises).then(_ => {
          // When everything has resolved, we have loaded all locations
          console.log("ALL LOCATIONS LOADED");
          this.setState({allLocationsLoaded: true});
        });

      })
    }
  }

  // This will create a promise that will retry until successful.  Need to do this because AWS returns random
  // errors when trying to run this many queries in parallel...
  getRetryableGraphQLOperationPromise(query:any, args:any): Promise<any> {
    return API.graphql(graphqlOperation(query, args))    
    .catch((error:any) => {
      console.log("Promise failure caught: %o", error);
      return this.getRetryableGraphQLOperationPromise(query, args);
    })
  }

  componentDidMount() {
    this.setGeoLocation();
  }

  componentDidUpdate(){
    if (this.state.selectedPlace){
      let hcListingDOM = document.getElementById("HC-" + this.state.selectedPlace.id);
      console.log("hcListingDOM = %o, selectedPlace.id = %o", hcListingDOM, this.state.selectedPlace.id);
      if (hcListingDOM){
        this.homeChurchListScrollContainer.scrollTop = hcListingDOM.offsetTop - this.homeChurchListScrollContainer.offsetTop;
        //hcListingDOM.scrollIntoView();
      }
    }
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

  async setGeoLocation(postalCode?:any) {
    return new Promise((resolve, reject) => {
      let newLatLng = DEFAULT_LAT_LNG;
      if (postalCode){
        new google.maps.Geocoder().geocode( { 'address': postalCode}, (results:any, status:any) => {
          if (status === 'OK') {
            newLatLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
          } 
          this.setState({currentLatLng: newLatLng});
          resolve(newLatLng);
        });
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            newLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            this.setState({currentLatLng: newLatLng});
            resolve(newLatLng);
          }, error => {
            this.setState({currentLatLng: newLatLng});
            resolve(newLatLng);
          })
        } else {
          console.log("Could not get current location.  Using default");
          this.setState({currentLatLng: newLatLng});
          resolve(newLatLng);
        }
      }
    })      
  }

  distanceSorter = (loc1: any, loc2: any) => {
    let dist1 = this.calculateDistance(this.state.currentLatLng.lat, this.state.currentLatLng.lng, +loc1.location.address.latitude || 0, +loc1.location.address.longitude || 0)
    let dist2 = this.calculateDistance(this.state.currentLatLng.lat, this.state.currentLatLng.lng, +loc2.location.address.latitude || 0, +loc2.location.address.longitude || 0)
    return (dist1 < dist2 ? -1 : 1);
  }  


  getMarkerClickHandler = (item: any) => {
    return (props: any, marker: any) => {
      console.log("Marker clicked: %o", marker);
      this.setState({ selectedPlaceMarker: marker, selectedPlace: item });
    }
  }

  getHomeChurchClickHandler = (item: any) => (
    () => {
      this.setState({ selectedPlaceMarker: null, selectedPlace: item })
    }
  )

  handleSiteSelection = (locationItem: any) => {
    // Filter the list of Home Churches by the selected site
    locationItem = locationItem || {value: "all"};
    console.log("HomeChurchItem.handleSiteSelection(): locationItem: %o", locationItem);
    let filteredGroups = this.state.groups.filter((g:any) => locationItem.value === "all" || (g.groupType.id === Location_ID_to_F1_Group_Type_Map[locationItem.value]));
    var bounds = new this.props.google.maps.LatLngBounds();
    bounds.extend(this.state.currentLatLng);
    for (let i = 0; i < filteredGroups.length; i++) {
      let p = { lat: +filteredGroups[i].location.address.latitude, lng: +filteredGroups[i].location.address.longitude };
      //console.log("HomeChurchItem.handleSiteSelection(): map bounds point:%o", p);
      if (p.lat !== 0 && p.lng !== 0) {
        bounds.extend(p);
      }
    }
    this.setState({ filterLocation: locationItem, mapBounds: bounds });
  }

  handlePostalCodeChange = async (event:any) => {
    const value = event.target.value;
    this.setState({postalCode: value});
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const isValid = regex.test(value);
    console.log("HomeChurchItem.handlePostalCodeChange(): Postal Code value: %o.  Valid? %b", value, regex.test(value));
    if (isValid){
      await this.setGeoLocation(value);
    } else if (!value){
      await this.setGeoLocation();
    }
    this.handleSiteSelection(this.state.filterLocation);
  }

  clearLocationSelection = async () => {
    this.setState({postalCode: ""});
    this.selectControl.select.clearValue();    
    await this.setGeoLocation();
    this.handleSiteSelection(this.state.filterLocation);
  }

  formatGroupAddress(group:any){
    let address = [];
    for (let field of ['address1', 'address2', 'address3', 'city', 'postalCode']){
      if (group.location.address[field]){
        address.push(group.location.address[field]);
      }
    }
    return address;
  }

  getCalendarEventForLocation(group:any){
    let nextMeeting = moment();
    //console.log('HomeChurchItem.getCalendarEventForLocation(): group = %o', group);
    for (let dayNum of [0, 1, 2, 3, 4, 5, 6]){
      if (group.schedule.recurrences.recurrence.recurrenceWeekly['occurOn' + moment().day(dayNum).format("dddd")]){
        let nextMeetingTime = moment(group.schedule.startTime);
        nextMeeting = moment().day(dayNum).hours(nextMeetingTime.get('hours')).minutes(nextMeetingTime.get('minutes'));
        break;
      }
    }
    let event = {
      title: group.name,
      description: 'Join us at home church!',
      location: this.formatGroupAddress(group).join(', '),
      startTime: nextMeeting.format(),
      endTime: moment(nextMeeting).add(2, "hours").format()
    }
    return event;
  }  

  getContactLeadersHandler = (item:any) => (
    (event:any) => {
      // Open a modal with a form...
      this.setState({contactHomeChurchId: item.id})
      this.handleToggleModal();
    }
  )

  handleToggleModal = () => {
    this.setState({showContactModal: !this.state.showContactModal});
  }

  styleSelect = {
    container: (provided:any, state:any) => ({
      ...provided,
      height: "43px",
    }),
    control: (provided:any, state:any) => ({
      ...provided,
      borderRadius: 0,
    }),
    indicatorSeparator: (provided:any, state:any) => ({
      ...provided,
      display: "none"
    }),
    menu: (provided:any, state:any) => ({
      ...provided,
      borderRadius: 0,
      marginTop: 2
    })
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

    let filteredGroups = (this.state.groups || []).filter((item: any) => (
      item.isPublic && (this.state.filterLocation.value === "all" || (item.groupType.id === Location_ID_to_F1_Group_Type_Map[this.state.filterLocation.value]))
    ));

    filteredGroups.sort(this.distanceSorter);

    return (

      <div className="HomeChurchItem">
        <div className="HomeChurchItemDiv1">

          <h1 className="HomeChurchH1">{this.state.content.header1}</h1>
          <div className="HomeChurchItemDiv2">
            <Map google={this.props.google} zoom={initalZoom} initialCenter={inititalCenter} bounds={this.state.mapBounds} mapTypeControl={false}
              className="HomeChurchItemMap">
              <Marker icon={CURRENT_LOCATION_URL} position={{ lat: this.state.currentLatLng.lat, lng: this.state.currentLatLng.lng }} />
              { filteredGroups.map((item: any) => (
                    <Marker key={item.id} onClick={this.getMarkerClickHandler(item)} icon={this.state.selectedPlace === item ? HOME_CHURCH_PIN_SELECTED_URL : HOME_CHURCH_PIN_URL}
                      position={{ lat: item.location.address.latitude, lng: item.location.address.longitude }} />
                ))
              }
              <InfoWindow marker={this.state.selectedPlaceMarker} visible={true}>
                {
                  this.state.selectedPlace ? (
                    <div>
                      <div className="HomeChurchItemMapInfoWindowDiv1">{this.state.selectedPlace.name}</div>
                      <div className="HomeChurchItemMapInfoWindowDiv2"><Badge>{this.state.selectedPlace.churchCampus.name}</Badge></div>
                      <div className="HomeChurchItemMapInfoWindowDiv3">{this.state.selectedPlace.description}</div>
                      <div className="HomeChurchItemMapInfoWindowDayOfWeek">{moment(this.state.selectedPlace.schedule.startDate).format('dddd') + "s"} {this.state.selectedPlace.schedule.recurrences.recurrence.recurrenceWeekly && this.state.selectedPlace.schedule.recurrences.recurrence.recurrenceWeekly.recurrenceFrequency > 1 ? "(every " + this.state.selectedPlace.schedule.recurrences.recurrence.recurrenceWeekly.recurrenceFrequency + " weeks)" : null}</div>
                      <div className="HomeChurchItemMapInfoWindowTimeOfDay">{moment(this.state.selectedPlace.schedule.startTime).format('h:mm a')}</div>

                    </div>
                  ) : <div></div>
                }
              </InfoWindow>
            </Map>
          </div>
          <div className="HomeChurchItemDiv3">

            <div className="HomeChurchFormItemContainer" >
              {<Select onChange={this.handleSiteSelection} placeholder="All sites" className="LocationSelect" styles={this.styleSelect} ref={(ref) => this.selectControl = ref} menuShouldScrollIntoView={true}
                options={this.state.locations.map((item: any) => ({ label: item.name, value: item.id }))}></Select>}
              <Input className="PostalCodeInput" placeholder="Add postal code" onChange={this.handlePostalCodeChange} value={this.state.postalCode} ref={(ref:any) => this.inputControl = ref}></Input>
              {/* <Button className="ClearAllButton" onClick={this.clearLocationSelection}>Clear All</Button> */}
              <a className="ClearAllButton" onClick={this.clearLocationSelection} tabIndex={0}>Clear All</a>
            </div>

            <div className="HomeChurchItemListData" ref={(ref) => this.homeChurchListScrollContainer = ref}>

            <ReactCSSTransitionGroup transitionName="HomeChurchLoading" transitionLeaveTimeout={750} transitionEnterTimeout={300}>
            { !this.state.allLocationsLoaded ? (
              <div className="LoadingContainer">
                <div className="LoadingTitleContainer"><Spinner color="dark" /><span className="LoadingTitle">Loading home church listings</span></div>
                  { this.state.locations.map((location:any) => {
                    let isLocationLoaded = this.state.locationsLoaded.includes(Location_ID_to_F1_Group_Type_Map[location.id as string]);
                    return (
                      <div className={"LoadingItem " + (isLocationLoaded ? "Loaded" : "")} key={location.id}>
                        <img alt="Loading Icon" className="LoadingImage" src="/static/svg/Home-Church-Location.svg"></img>
                        <img alt="Loaded Icon" className="LoadedImage" src="/static/svg/Check-green.svg"></img>
                        <span className="LoadingLocationLabel">{location.name}</span>
                      </div>
                    )
                  })}
              </div>
            ) : null }
            </ReactCSSTransitionGroup>              

              { filteredGroups.map((item: any) => (
                <div className="HomeChurchItemDiv5" key={item.id} id={"HC-" + item.id} >
                  <h3 className={"HomeChurchH3 " + (this.state.selectedPlace === item ? "selected" : "")} onClick={this.getHomeChurchClickHandler(item)}>{item.name}</h3>
                  <div className="HomeChurchAddress">{item.description}</div>
                  <div className="HomeChurchSiteAffiliation"><Badge>{item.churchCampus.name}</Badge></div>
                  <div className="HomeChurchDayOfWeek">{moment(item.schedule.startDate).format('dddd') + "s"} {item.schedule.recurrences.recurrence.recurrenceWeekly && item.schedule.recurrences.recurrence.recurrenceWeekly.recurrenceFrequency > 1 ? "(every " + item.schedule.recurrences.recurrence.recurrenceWeekly.recurrenceFrequency + " weeks)" : null}</div>
                  <div className="HomeChurchTimeOfDay">{moment(item.schedule.startTime).format('h:mm a')}</div>
                  <div className="HomeChurchButtonContainer">
                    { item.schedule && item.schedule.recurrences && item.schedule.recurrences.recurrence.recurrenceWeekly
                      ? 
                        <div className="AddToCalendarButtonContainer">
                          <img className="AddToCalendarIcon" src="/static/Calendar.png" alt="Calendar Icon" />                          
                          <AddToCalendar event={this.getCalendarEventForLocation(item)}></AddToCalendar>
                        </div>
                      : null
                    }
                    <a className="ContactLeadersButton" onClick={this.getContactLeadersHandler(item)} tabIndex={0}><img className="ContactLeadersIcon" src="/static/Contact.png" alt="Contact Icon" />Contact Leaders</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <HomeChurchContactModal show={this.state.showContactModal} handleClose={this.handleToggleModal} homeChurchId={this.state.contactHomeChurchId}></HomeChurchContactModal>     
      </div>

    )

  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0')
})(withRouter(ContentItem))
