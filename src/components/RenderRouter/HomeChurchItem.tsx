
import { GraphQLResult } from '@aws-amplify/api/lib/types';
import {
  F1ListEventSchedulesQuery,
  F1ListEventSchedulesQueryVariables,
  F1ListGroupsQuery,
  F1ListGroupsQueryVariables,
  F1ListGroupTypesQuery
} from 'API';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import Badge from 'components/Badge/Badge';
import HomeChurchContactModal from 'components/HomeChurchContactModal/HomeChurchContactModal';
import { HomeChurchItemContent } from 'components/types';
import { GoogleApiWrapper, IMarkerProps, InfoWindow, IProvidedProps, Map, Marker } from 'google-maps-react';
import moment from 'moment';
import React, { CSSProperties } from 'react';
import AddToCalendar, { AddToCalendarEvent } from 'react-add-to-calendar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Select, { Styles } from 'react-select';
import { Input, Spinner } from 'reactstrap';
import awsmobile from '../../aws-exports';
import * as queries from '../../graphql/queries';
import DataLoader, { LocationData } from './DataLoader';
import "./HomeChurchItem.scss";

Amplify.configure(awsmobile);

const HOME_CHURCH_PIN_URL = "/static/svg/HomeChurchPin.svg";
const HOME_CHURCH_PIN_SELECTED_URL = "/static/svg/HomeChurchPin-selected.svg";
const CURRENT_LOCATION_URL = "/static/svg/CurrentLocation.svg";
const DEFAULT_LAT_LNG = { lng: -79.685926, lat: 43.511459 };

const Location_ID_to_F1_Group_Type_Map: Record<string, string> = {
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
};

interface Props extends RouteComponentProps, IProvidedProps {
  content: HomeChurchItemContent;
}

interface State {
  selectedPlace: F1Group | null;
  selectedPlaceMarker?: google.maps.Marker;
  filterLocation: {
    label?: string;
    value: string;
  };
  postalCode: string;
  locationsLoaded: string[];
  allLocationsLoaded: boolean;
  mapBounds: google.maps.LatLngBounds | null;
  locations: LocationData[];
  groups: F1Group[];
  currentLatLng: google.maps.LatLngLiteral;
  showContactModal: boolean;
  contactHomeChurchId: string | null;
}

type F1Schedule = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<
        NonNullable<F1ListEventSchedulesQuery['F1ListEventSchedules']>[0]
      >['event']
    >['schedules']
  >['schedule']
>[0];

type F1Group = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<
        NonNullable<F1ListGroupsQuery['F1ListGroups']>['groups']
      >['group']
    >[0]
  >
> & {
  schedule?: F1Schedule;
};

export class ContentItem extends React.Component<Props, State> {
  selectControl: Select<{ label: string; value: string }> | null = null;
  homeChurchListScrollContainer: HTMLDivElement | null = null;
  map: google.maps.Map | undefined;

  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      selectedPlace: null,
      filterLocation: { value: "all" },
      postalCode: "",
      locationsLoaded: [],
      allLocationsLoaded: false,
      mapBounds: null,
      locations: [],
      groups: [],
      currentLatLng: DEFAULT_LAT_LNG,
      showContactModal: false,
      contactHomeChurchId: null,
    };

    DataLoader.getLocations({ class: 'locations' }).then((locations) => {
      locations.sort((l1, l2) => l1.name.localeCompare(l2.name));
      console.log('HomeChurchItem.constructor(): Got locations: %o', locations);
      this.setState({ locations });
    });

    if (this.props.content.class === "home-church") {
      const loadGroupPromises: Array<Promise<void>> = [];
      const allGroups: F1Group[] = [];
      const locationsLoaded: string[] = [];

      this.getRetryableGraphQLOperationPromise<F1ListGroupTypesQuery, unknown>(queries.f1ListGroupTypes, {})
        .then((listGroupTypesResponse) => {
          (listGroupTypesResponse.data?.F1ListGroupTypes?.groupTypes?.groupType ?? [])
            .filter((item) => item?.isWebEnabled === 'true')
            .forEach((groupTypeItem) => {
              //console.log("HomeChurchItem.constructor(): F1ListGroupTypes response - groupTypeItem = %o", groupTypeItem);
              // Get the home churches for this location and update the loading progress when done
              const f1LocationId = groupTypeItem?.id;
              const loadGroupPromise = this.getRetryableGraphQLOperationPromise<F1ListGroupsQuery, F1ListGroupsQueryVariables>(queries.f1ListGroups, { itemId: f1LocationId })
                .then((listGroupsResponse) => {
                  const openGroupsForLocation: Array<F1Group> = (listGroupsResponse.data?.F1ListGroups?.groups?.group ?? []).filter(
                    (item: F1Group | null): item is F1Group =>
                      item?.isOpen === 'true' && item.isSearchable === 'true'
                  );
                  const eventIdsForLocation = openGroupsForLocation.map((g) => g.event?.id ?? null);
                  //console.log("HomeChurchItem.constructor(): location: %o, eventIds = %o", groupTypeItem.name, eventIdsForLocation);

                  // Get the schedules for the home churches in this location
                  return this.getRetryableGraphQLOperationPromise<F1ListEventSchedulesQuery, F1ListEventSchedulesQueryVariables>(queries.f1ListEventSchedules, { itemId: eventIdsForLocation })
                    .then((listEventSchedulesResponse) => {
                      //console.log("HomeChurchItem.constructor(): eventScheduleResponse = %o", listEventSchedulesResponse);
                      for (const group of openGroupsForLocation) {
                        const eventSchedule = (
                          listEventSchedulesResponse.data?.F1ListEventSchedules ??
                          []
                        ).find((s) => s?.id === group.event?.id);
                        const schedules = eventSchedule?.event?.schedules?.schedule;
                        if (schedules) {
                          group.schedule = schedules[0];
                        }
                      }
                      allGroups.push(...openGroupsForLocation);
                      if (f1LocationId) {
                        locationsLoaded.push(f1LocationId);
                      }
                      this.setState({ groups: Array.from(allGroups), locationsLoaded: Array.from(locationsLoaded) });
                      //console.log("HomeChurchItem.constructor(): All groups (so far): %o", allGroups);
                    });
                }
                );
              loadGroupPromises.push(loadGroupPromise);
            });
          Promise.all(loadGroupPromises).then(() => {
            // When everything has resolved, we have loaded all locations
            console.log('ALL LOCATIONS LOADED');
            this.setState({ allLocationsLoaded: true });
          });
        });
    }
  }

  // This will create a promise that will retry until successful.  Need to do this because AWS returns random
  // errors when trying to run this many queries in parallel...
  private async getRetryableGraphQLOperationPromise<T extends Record<string, unknown>, V>(query: string, args: V): Promise<GraphQLResult<T>> {
    const qry = API.graphql(graphqlOperation(query, args)) as Promise<GraphQLResult<T>>;
    try {
      return await qry;
    } catch (error) {
      console.log('Promise failure caught: %o', error);
      return this.getRetryableGraphQLOperationPromise(query, args);
    }
  }

  componentDidMount() {
    this.setGeoLocation();
  }

  componentDidUpdate() {
    if (this.state.selectedPlace) {
      const hcListingDOM = document.getElementById("HC-" + this.state.selectedPlace.id);
      console.log("hcListingDOM = %o, selectedPlace.id = %o", hcListingDOM, this.state.selectedPlace.id);
      if (hcListingDOM && this.homeChurchListScrollContainer) {
        this.homeChurchListScrollContainer.scrollTop = hcListingDOM.offsetTop - this.homeChurchListScrollContainer.offsetTop;
        //hcListingDOM.scrollIntoView();
      }
    }
  }

  private calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
    if ((lat1 === lat2) && (lng1 === lng2)) {
      return 0;
    }
    else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lng1 - lng2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
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

  private async setGeoLocation(postalCode?: string): Promise<void> {
    let newLatLng = DEFAULT_LAT_LNG;
    if (postalCode) {
      new google.maps.Geocoder().geocode({ address: postalCode }, (results, status) => {
        if (status === 'OK') {
          newLatLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
        }
        this.setState({ currentLatLng: newLatLng });
      }
      );
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            newLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            this.setState({ currentLatLng: newLatLng });
          },
          () => {
            this.setState({ currentLatLng: newLatLng });
          }
        );
      } else {
        console.log('Could not get current location.  Using default');
        this.setState({ currentLatLng: newLatLng });
      }
    }
  }

  private distanceSorter = (loc1: F1Group, loc2: F1Group) => {
    const dist1 = this.calculateDistance(this.state.currentLatLng.lat, this.state.currentLatLng.lng, Number(loc1?.location?.address?.latitude ?? '0'), Number(loc1?.location?.address?.longitude ?? '0'));
    const dist2 = this.calculateDistance(this.state.currentLatLng.lat, this.state.currentLatLng.lng, Number(loc2?.location?.address?.latitude ?? '0'), Number(loc2?.location?.address?.longitude ?? '0'));
    return (dist1 < dist2 ? -1 : 1);
  };

  private getMarkerClickHandler(item: F1Group): (props?: IMarkerProps, marker?: google.maps.Marker) => void {
    return (_props?: IMarkerProps, marker?: google.maps.Marker) => {
      console.log('Marker clicked: %o', marker);
      this.setState({ selectedPlaceMarker: marker, selectedPlace: item });
    }
  }

  private getHomeChurchClickHandler(item: F1Group): () => void {
    return () => {
      this.setState({ selectedPlaceMarker: undefined, selectedPlace: item });
    };
  }

  private handleSiteSelection = (locationItem: { label?: string; value: string } | null) => {
    // Filter the list of Home Churches by the selected site
    const location = locationItem ?? { value: 'all' };
    console.log('HomeChurchItem.handleSiteSelection(): locationItem: %o', locationItem);
    const filteredGroups = this.state.groups.filter((g) => location.value === 'all' || g.groupType?.id === Location_ID_to_F1_Group_Type_Map[location.value]);
    const bounds = new this.props.google.maps.LatLngBounds();
    bounds.extend(this.state.currentLatLng);
    for (let i = 0; i < filteredGroups.length; i++) {
      const p = { lat: Number(filteredGroups[i].location?.address?.latitude), lng: Number(filteredGroups[i].location?.address?.longitude) };
      //console.log("HomeChurchItem.handleSiteSelection(): map bounds point:%o", p);
      if (p.lat !== 0 && p.lng !== 0) {
        bounds.extend(p);
      }
    }
    this.setState({ filterLocation: location, mapBounds: bounds });
  };

  private handlePostalCodeChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ postalCode: value });
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const isValid = regex.test(value);
    console.log("HomeChurchItem.handlePostalCodeChange(): Postal Code value: %o.  Valid? %b", value, regex.test(value));
    if (isValid) {
      await this.setGeoLocation(value);
    } else if (!value) {
      await this.setGeoLocation();
    }
    this.handleSiteSelection(this.state.filterLocation);
  }

  private async clearLocationSelection() {
    this.setState({ postalCode: '' });
    if (this.selectControl) {
      this.selectControl.select.clearValue();
    }
    await this.setGeoLocation();
    this.handleSiteSelection(this.state.filterLocation);
  }

  private formatGroupAddress(group: F1Group) {
    const address: Array<string | null> = [];
    for (const field of ['address1', 'address2', 'address3', 'city', 'postalCode'] as Array<keyof NonNullable<F1Group['location']>['address']>) {
      if (group?.location?.address && group.location.address[field]) {
        address.push(group.location.address[field]);
      }
    }
    return address;
  }

  private getCalendarEventForLocation(group: F1Group): AddToCalendarEvent {
    let nextMeeting = moment();
    //console.log('HomeChurchItem.getCalendarEventForLocation(): group = %o', group);
    for (const dayNum of [0, 1, 2, 3, 4, 5, 6]) {
      const recurrenceWeekly = group.schedule?.recurrences?.recurrence?.recurrenceWeekly as Record<
        string,
        string
      > | undefined | null;
      if (
        recurrenceWeekly && recurrenceWeekly['occurOn' + moment().day(dayNum).format('dddd')]
      ) {
        const nextMeetingTime = moment(group.schedule?.startTime);
        nextMeeting = moment().day(dayNum).hours(nextMeetingTime.get('hours')).minutes(nextMeetingTime.get('minutes'));
        break;
      }
    }
    const event = {
      title: group.name ?? undefined,
      description: 'Join us at home church!',
      location: this.formatGroupAddress(group).join(', '),
      startTime: nextMeeting.format(),
      endTime: moment(nextMeeting).add(2, "hours").format()
    }
    return event;
  }

  private getContactLeadersHandler(item: F1Group) {
    return () => {
      // Open a modal with a form...
      this.setState({ contactHomeChurchId: item.id })
      this.handleToggleModal();
    };
  }

  private handleToggleModal() {
    this.setState({ showContactModal: !this.state.showContactModal });
  }

  private styleSelect: Partial<Styles> = {
    container: (provided: CSSProperties) => ({
      ...provided,
      height: "43px",
    }),
    control: (provided: CSSProperties) => ({
      ...provided,
      borderRadius: 0,
    }),
    indicatorSeparator: (provided: CSSProperties) => ({
      ...provided,
      display: "none"
    }),
    menu: (provided: CSSProperties) => ({
      ...provided,
      borderRadius: 0,
      marginTop: 2
    }),
  };
  private getDayOfWeek(item: F1Group['schedule']) {
    if (item?.recurrences?.recurrence?.recurrenceWeekly)
      if (item.recurrences.recurrence.recurrenceWeekly.occurOnSunday)
        return "Sundays"
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnMonday)
        return "Mondays"
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnTuesday)
        return "Tuesdays"
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnWednesday)
        return "Wednesdays"
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnThursday)
        return "Thursdays"
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnFriday)
        return "Fridays"
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnSaturday)
        return "Saturdays";
      else
        return moment(item.startDate).format('dddd') + 's';
    else
      return moment(item?.startDate).format('dddd') + 's';
  }
  render() {
    const inititalCenter = { lat: 44, lng: -78.0 };
    const initalZoom = 6;

    const filteredGroups = (this.state.groups || []).filter((item) => (
      item.isPublic && (this.state.filterLocation.value === "all" || item.groupType?.id === Location_ID_to_F1_Group_Type_Map[this.state.filterLocation.value])
    ));

    filteredGroups.sort(this.distanceSorter);

    return (

      <div className="HomeChurchItem">
        <div className="HomeChurchItemDiv1">

          <h1 className="HomeChurchH1">{this.props.content.header1}</h1>
          <div className="HomeChurchItemDiv2">
            <div className="HomeChurchItemMap">
              <Map google={this.props.google} zoom={initalZoom} initialCenter={inititalCenter} bounds={this.state.mapBounds ?? undefined} mapTypeControl={false} onReady={(_props, map) => (this.map = map)}>
                <Marker icon={CURRENT_LOCATION_URL} position={{ ...this.state.currentLatLng }} />
                {filteredGroups.map((item) => {
                  const { latitude, longitude } = item.location?.address ?? {};
                  if (!latitude || !longitude) {
                    console.error(`missing address coordinates in ${item}`);
                    return null;
                  }
                  return <Marker key={item.id ?? ''} onClick={this.getMarkerClickHandler(item)} icon={this.state.selectedPlace === item ? HOME_CHURCH_PIN_SELECTED_URL : HOME_CHURCH_PIN_URL}
                    position={{ lat: Number(latitude), lng: Number(longitude) }} />
                })
                }
                <InfoWindow
                  google={this.props.google}
                  // These types are wrong, they should be optional. So just cast to fix the issues.
                  map={this.map as google.maps.Map}
                  marker={this.state.selectedPlaceMarker as google.maps.Marker}
                  visible={true}>
                  {
                    this.state.selectedPlace ? (
                      <div>
                        <div className="HomeChurchItemMapInfoWindowDiv1">{this.state.selectedPlace.name}</div>
                        <div className="HomeChurchItemMapInfoWindowDiv2"><Badge>{this.state.selectedPlace.churchCampus?.name}</Badge></div>
                        <div className="HomeChurchItemMapInfoWindowDiv3">{this.state.selectedPlace.description}</div>
                        <div className="HomeChurchItemMapInfoWindowDayOfWeek">{this.getDayOfWeek(this.state.selectedPlace.schedule)} {(this.state.selectedPlace.schedule?.recurrences?.recurrence?.recurrenceWeekly?.recurrenceFrequency ?? 0) > 1 ? "(every " + this.state.selectedPlace.schedule?.recurrences?.recurrence?.recurrenceWeekly?.recurrenceFrequency + " weeks)" : null}</div>
                        <div className="HomeChurchItemMapInfoWindowTimeOfDay">{moment(this.state.selectedPlace.schedule?.startTime).format('h:mm a')}</div>

                      </div>
                    ) : <div></div>
                  }
                </InfoWindow>
              </Map>
            </div>
          </div>
          <div className="HomeChurchItemDiv3">

            <div className="HomeChurchFormItemContainer" >
              {<Select
                onChange={(value) => this.handleSiteSelection(value as { label: string; value: string } | null)}
                placeholder="All sites" className="LocationSelect" styles={this.styleSelect} ref={(ref) => this.selectControl = ref} menuShouldScrollIntoView={true}
                options={this.state.locations.map((item) => ({ label: item.name, value: item.id }))}></Select>}
              <Input className="PostalCodeInput" placeholder="Add postal code" onChange={this.handlePostalCodeChange} value={this.state.postalCode}></Input>
              {/* <Button className="ClearAllButton" onClick={this.clearLocationSelection}>Clear All</Button> */}
              <button className="ClearAllButton" onClick={this.clearLocationSelection} tabIndex={0}>Clear All</button>
            </div>

            <div className="HomeChurchItemListData" ref={(ref) => this.homeChurchListScrollContainer = ref}>

              <ReactCSSTransitionGroup transitionName="HomeChurchLoading" transitionLeaveTimeout={750} transitionEnterTimeout={300}>
                {!this.state.allLocationsLoaded ? (
                  <div className="LoadingContainer">
                    <div className="LoadingTitleContainer"><Spinner color="dark" /><span className="LoadingTitle">Loading home church listings</span></div>
                    {this.state.locations.map((location) => {
                      const isLocationLoaded = this.state.locationsLoaded.includes(Location_ID_to_F1_Group_Type_Map[location.id]);
                      return (
                        <div className={"LoadingItem " + (isLocationLoaded ? "Loaded" : "")} key={location.id}>
                          <img alt="Loading Icon" className="LoadingImage" src="/static/svg/Home-Church-Location.svg"></img>
                          <img alt="Loaded Icon" className="LoadedImage" src="/static/svg/Check-green.svg"></img>
                          <span className="LoadingLocationLabel">{location.name}</span>
                        </div>
                      )
                    })}
                  </div>
                ) : null}
              </ReactCSSTransitionGroup>

              {filteredGroups.map((item) => (
                <div className="HomeChurchItemDiv5" key={item.id ?? undefined} id={"HC-" + item.id} >
                  <h3 className={"HomeChurchH3 " + (this.state.selectedPlace === item ? "selected" : "")} onClick={this.getHomeChurchClickHandler(item)}>{item.name}</h3>
                  <div className="HomeChurchAddress">{item.description}</div>
                  <div className="HomeChurchSiteAffiliation"><Badge>{item.churchCampus?.name}</Badge></div>
                  <div className="HomeChurchDayOfWeek">{this.getDayOfWeek(item.schedule)} {(item.schedule?.recurrences?.recurrence?.recurrenceWeekly?.recurrenceFrequency ?? 0) > 1 ? "(every " + item.schedule?.recurrences?.recurrence?.recurrenceWeekly?.recurrenceFrequency + " weeks)" : null}</div>
                  <div className="HomeChurchTimeOfDay">{moment(item.schedule?.startTime).format('h:mm a')}</div>
                  <div className="HomeChurchButtonContainer">
                    {item.schedule?.recurrences?.recurrence?.recurrenceWeekly
                      ?
                      <div className="AddToCalendarButtonContainer">
                        <img className="AddToCalendarIcon" src="/static/svg/Calendar, Add To.svg" alt="Calendar Icon" />
                        <AddToCalendar buttonLabel="Add to Calendar" event={this.getCalendarEventForLocation(item)}></AddToCalendar>
                      </div>
                      : null
                    }
                    <button className="ContactLeadersButton" onClick={this.getContactLeadersHandler(item)} tabIndex={0}><img className="ContactLeadersIcon" src="/static/svg/Contact.svg" alt="Contact Icon" />Contact Leaders</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div >
        <HomeChurchContactModal show={this.state.showContactModal} handleClose={() => this.handleToggleModal()} homeChurchId={this.state.contactHomeChurchId}></HomeChurchContactModal>
      </div >

    )

  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0')
})(withRouter(ContentItem))
