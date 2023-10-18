import {
  F1ListEventSchedulesQuery,
  F1ListGroupsQuery,
  ListHomeChurchInfosQuery,
} from 'API';
import API from '@aws-amplify/api';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import Badge from 'components/Badge/Badge';
import HomeChurchContactModal from 'components/HomeChurchContactModal/HomeChurchContactModal';
import { HomeChurchItemContent } from 'components/types';
import {
  GoogleApiWrapper,
  IMarkerProps,
  InfoWindow,
  IProvidedProps,
  Map,
  Marker,
} from 'google-maps-react';
import moment from 'moment-timezone';
import React, { CSSProperties } from 'react';
import AddToCalendar, { Event } from '../AddToCalendar/AddToCalendar';
import { isMobile } from 'react-device-detect';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Select from 'react-select';
import { Spinner } from 'reactstrap';
import DataLoader, { LocationData } from './DataLoader';
import './HomeChurchItem.scss';

const MAP_BUTTON = '/static/svg/Map, Generic.svg';
const LIST_BUTTON = '/static/svg/List, Generic.svg';

const HOME_CHURCH_PIN_URL = '/static/svg/HomeChurchPin.svg';
const HOME_CHURCH_PIN_SELECTED_URL = '/static/svg/HomeChurchPin-selected.svg';
const CURRENT_LOCATION_URL = '/static/svg/CurrentLocation.svg';
const DEFAULT_LAT_LNG = { lng: -79.685926, lat: 43.511459 };
interface Props extends IProvidedProps {
  content: HomeChurchItemContent;
}
interface HomeChurchItemProps extends Props {
  history: RouteComponentProps['history'];
}
interface State {
  selectedPlace: F1Group | null;
  selectedPlaceMarker?: google.maps.Marker;
  locationFilter: string | null;
  locationsLoaded: string[];
  allLocationsLoaded: boolean;
  mapBounds: google.maps.LatLngBounds | null;
  locations: LocationData[];
  groups: any[];
  groupsExtra: any[];
  currentLatLng: google.maps.LatLngLiteral;
  showContactModal: boolean;
  selectedDay: {
    label?: string;
    value: string;
  };
  activePill: string | undefined;
  mapSelected: boolean;
  contactHomeChurchId: string | null | undefined;
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

function latLngOfGroup(g: F1Group): google.maps.LatLngLiteral {
  return {
    lat: Number(g?.location?.address?.latitude ?? '0'),
    lng: Number(g?.location?.address?.longitude ?? '0'),
  };
}

export class ContentItem extends React.Component<HomeChurchItemProps, State> {
  selectControlDay: any | null = null;
  selectControlLocation: any | null = null;
  homeChurchListScrollContainer: HTMLDivElement | null = null;
  map: google.maps.Map | undefined;

  constructor(props: HomeChurchItemProps) {
    super(props);
    this.state = {
      selectedPlace: null,
      locationFilter: null,
      locationsLoaded: [],
      allLocationsLoaded: false,
      mapBounds: null,
      locations: [],
      groups: [],
      groupsExtra: [],
      currentLatLng: DEFAULT_LAT_LNG,
      showContactModal: false,
      activePill: undefined,
      mapSelected: true,
      selectedDay: { value: 'all' },
      contactHomeChurchId: null,
    };

    DataLoader.getLocations({ class: 'locations' }).then((locations) => {
      console.log('HomeChurchItem.constructor(): Got locations: %o', locations);
      this.setState({ locations });
    });

    if (this.props.content.class === 'home-church') {
      const loadHomeChurchInfo = async () => {
        const data: Array<any> = [];
        const fetchNext = async (next: string | null = null) => {
          try {
            const json = (await API.graphql({
              query: queries.listHomeChurchInfos,
              variables: { nextToken: next },
              authMode: GRAPHQL_AUTH_MODE.API_KEY,
            })) as GraphQLResult<ListHomeChurchInfosQuery>;
            console.log({
              'Success queries.listHomeChurchInfos': json,
            });
            if (json?.data?.listHomeChurchInfos?.items?.length) {
              json?.data?.listHomeChurchInfos?.items?.forEach((hmInfo) => {
                data.push(hmInfo);
              });
            }
            if (json?.data?.listHomeChurchInfos?.nextToken)
              fetchNext(json?.data?.listHomeChurchInfos?.nextToken);
          } catch (e) {
            console.error(e);
          }
        };
        await fetchNext(null);
        this.setState({ groupsExtra: data });
      };

      loadHomeChurchInfo().then(() => {
        DataLoader.listHomeChurches(
          (items) => {
            this.setState({ groups: [...this.state.groups, ...items] });
          },
          async () => {
            const injectHomeChurchInfoData = (
              f1HomeChurches: any,
              homeChurchInfos: any
            ) => {
              return f1HomeChurches.map((f1HomeChurch: any) => {
                const inHomeChurchInfosTable = homeChurchInfos.find(
                  (homeChurchInfo: any) =>
                    f1HomeChurch?.id === homeChurchInfo?.id
                );
                f1HomeChurch.extraData = inHomeChurchInfosTable;
                return f1HomeChurch;
              });
            };
            const injected = injectHomeChurchInfoData(
              this.state.groups,
              this.state.groupsExtra
            );
            console.log({ injected });
            injectHomeChurchInfoData(this.state.groups, this.state.groupsExtra);
            this.setState({ allLocationsLoaded: true });
            await this.updateGeoLocation(false);
            this.updateMap(
              this.state.locationFilter,
              this.state.currentLatLng,
              true,
              this.state.currentLatLng !== DEFAULT_LAT_LNG
            );
          }
        );
      });
    }
  }

  private daysOfWeek = [
    { label: 'All days', value: 'all' },
    { label: 'Sunday', value: 'Sunday' },
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
  ];

  componentDidUpdate() {
    if (this.state.selectedPlace) {
      const hcListingDOM = document.getElementById(
        'HC-' + this.state.selectedPlace.id
      );
      console.log(
        'hcListingDOM = %o, selectedPlace.id = %o',
        hcListingDOM,
        this.state.selectedPlace.id
      );
      if (hcListingDOM && this.homeChurchListScrollContainer) {
        this.homeChurchListScrollContainer.scrollTop =
          hcListingDOM.offsetTop - this.homeChurchListScrollContainer.offsetTop;
        //hcListingDOM.scrollIntoView();
      }
    }
  }

  private calculateDistance(
    loc1: google.maps.LatLngLiteral,
    loc2: google.maps.LatLngLiteral
  ) {
    const { lat: lat1, lng: lng1 } = loc1;
    const { lat: lat2, lng: lng2 } = loc2;
    if (lat1 === lat2 && lng1 === lng2) {
      return 0;
    } else {
      const radlat1 = (Math.PI * lat1) / 180;
      const radlat2 = (Math.PI * lat2) / 180;
      const theta = lng1 - lng2;
      const radtheta = (Math.PI * theta) / 180;
      let dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515; // Compute in Miles
      dist = dist * 1.609344; // Compute in KM
      return dist;
    }
  }

  private getCurrentPosition(
    isUserAction = false
  ): Promise<google.maps.LatLngLiteral> {
    return new Promise((resolve, reject) => {
      if (!('geolocation' in navigator)) {
        console.log('Could not get current location. Using default');
        resolve(DEFAULT_LAT_LNG);
        return;
      }
      if (navigator.permissions)
        navigator.permissions
          .query({ name: 'geolocation' })
          .then((permissionStatus) => {
            if (permissionStatus.state === 'denied') {
              if (isUserAction) {
                alert(
                  'This function is unavailable until you allow location permissions.'
                );
                reject();
              } else {
                resolve(DEFAULT_LAT_LNG);
              }
              return;
            }

            navigator.geolocation.getCurrentPosition(
              (position) => {
                resolve({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              },
              (e) => {
                console.error(`failed to retrieve current position: %o`, e);
                resolve(DEFAULT_LAT_LNG);
              }
            );
          });
    });
  }

  private async updateGeoLocation(isUserAction: boolean): Promise<void> {
    const newLatLng = await this.getCurrentPosition(isUserAction);
    this.setState({ currentLatLng: newLatLng });
  }

  private distanceSorter = (loc1: F1Group, loc2: F1Group) => {
    const dist1 = this.calculateDistance(
      this.state.currentLatLng,
      latLngOfGroup(loc1)
    );
    const dist2 = this.calculateDistance(
      this.state.currentLatLng,
      latLngOfGroup(loc2)
    );
    return dist1 < dist2 ? -1 : 1;
  };

  private getMarkerClickHandler(
    item: F1Group
  ): (props?: IMarkerProps, marker?: google.maps.Marker) => void {
    return (_props?: IMarkerProps, marker?: google.maps.Marker) => {
      console.log('Marker clicked: %o', marker);
      this.setState({ selectedPlaceMarker: marker, selectedPlace: item });
    };
  }

  private getHomeChurchClickHandler(item: F1Group): () => void {
    return () => {
      this.setState({ selectedPlaceMarker: undefined, selectedPlace: item });
    };
  }

  private updateMap = (
    locationFilter: string | null,
    currentLocation: google.maps.LatLngLiteral,
    showCurrent: boolean,
    limitToRadius: boolean
  ) => {
    // Filter the list of Home Churches by the selected site
    const filteredGroups = this.state.groups.filter(
      (g) =>
        locationFilter === null ||
        g.groupType?.id ===
          this.state.locations.find(
            (location) => location.id === locationFilter
          )?.homeChurchGroupID
    );
    const bounds = new this.props.google.maps.LatLngBounds();
    if (showCurrent) {
      bounds.extend(currentLocation);
    }
    for (const group of filteredGroups) {
      const p = latLngOfGroup(group);
      if (
        p.lat !== 0 &&
        p.lng !== 0 &&
        (!limitToRadius || this.calculateDistance(currentLocation, p) < 20)
      ) {
        bounds.extend(p);
      }
    }
    this.setState({ locationFilter, mapBounds: bounds });
  };

  private handleDaySelection = (
    selectedDay: { label?: string; value: string } | null
  ) => {
    this.setState({ selectedDay: selectedDay ?? { value: 'all' } });
  };

  private async clearLocationSelection() {
    if (this.selectControlLocation) {
      this.selectControlLocation?.select.clearValue();
    }
    if (this.selectControlDay) {
      this.selectControlDay?.select.clearValue();
    }
    this.setState({
      locationFilter: null,
      selectedPlace: null,
      selectedPlaceMarker: undefined,
    });
    await this.updateGeoLocation(false);
    this.updateMap(
      this.state.locationFilter,
      this.state.currentLatLng,
      true,
      this.state.currentLatLng !== DEFAULT_LAT_LNG
    );
  }

  private formatGroupAddress(group: F1Group) {
    const address: Array<string | null> = [];
    for (const field of [
      'address1',
      'address2',
      'address3',
      'city',
      'postalCode',
    ] as Array<keyof NonNullable<F1Group['location']>['address']>) {
      if (group?.location?.address && group.location.address[field]) {
        address.push(group.location.address[field]);
      }
    }
    return address;
  }

  private getAdjustedTime(group: F1Group) {
    let dayOfWeek = 0;
    for (const dayNum of [0, 1, 2, 3, 4, 5, 6]) {
      const recurrenceWeekly = group.schedule?.recurrences?.recurrence
        ?.recurrenceWeekly as Record<string, string> | undefined | null;
      if (
        recurrenceWeekly &&
        recurrenceWeekly['occurOn' + moment().day(dayNum).format('dddd')]
      ) {
        dayOfWeek = dayNum;
        break;
      }
    }
    const eventStartTime = moment
      .tz('America/Toronto')
      .isoWeekday(dayOfWeek)
      .set({
        hour: moment(group.schedule?.startTime).get('hour'),
        minute: moment(group.schedule?.startTime).get('minute'),
        second: moment(group.schedule?.startTime).get('second'),
      });
    const hasDatePassed = moment() > eventStartTime;
    if (hasDatePassed) return eventStartTime.add(7, 'days');
    return eventStartTime;
  }

  private getCalendarEventForLocation(group: F1Group): Event {
    const nextMeeting = this.getAdjustedTime(group);
    const event = {
      summary: group.name ?? 'Home Church',
      description: 'Join us at home church!',
      location: this.formatGroupAddress(group).join(', '),
      start: nextMeeting.format(),
      end: nextMeeting.add(2, 'hours').format(),
    };
    return event;
  }

  private getContactLeadersHandler(item: F1Group) {
    return () => {
      // Open a modal with a form...
      this.setState({ contactHomeChurchId: item.id });
      this.handleToggleModal();
    };
  }

  private handleToggleModal() {
    this.setState({ showContactModal: !this.state.showContactModal });
  }

  private styleSelect: any = {
    container: (provided: CSSProperties) => ({
      ...provided,
      height: '43px',
    }),
    control: (provided: CSSProperties) => ({
      ...provided,
      borderRadius: 0,
    }),
    indicatorSeparator: (provided: CSSProperties) => ({
      ...provided,
      display: 'none',
    }),
    menu: (provided: CSSProperties) => ({
      ...provided,
      borderRadius: 0,
      marginTop: 2,
    }),
  };
  private getDayOfWeek(item: F1Group['schedule']) {
    if (item?.recurrences?.recurrence?.recurrenceWeekly)
      if (item.recurrences.recurrence.recurrenceWeekly.occurOnSunday)
        return 'Sunday';
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnMonday)
        return 'Monday';
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnTuesday)
        return 'Tuesday';
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnWednesday)
        return 'Wednesday';
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnThursday)
        return 'Thursday';
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnFriday)
        return 'Friday';
      else if (item.recurrences.recurrence.recurrenceWeekly.occurOnSaturday)
        return 'Saturday';
      else return moment(item.startDate).format('dddd');
    else return moment(item?.startDate).format('dddd');
  }

  private async updateLocation(): Promise<void> {
    try {
      await this.updateGeoLocation(true);
    } catch {
      // The user has denied us location permissions, just do nothing.
      return;
    }
    this.updateMap(
      this.state.locationFilter,
      this.state.currentLatLng,
      true,
      this.state.locationFilter === null
    );
  }

  render() {
    const inititalCenter = { lat: 44, lng: -78.0 };
    const initalZoom = 6;

    const filteredGroups = (this.state.groups || []).filter(
      (item) =>
        item.isPublic &&
        (this.state.locationFilter === null ||
          item.groupType?.id ===
            this.state.locations.find(
              (location) => location.id === this.state.locationFilter
            )?.homeChurchGroupID)
    );
    filteredGroups.sort(this.distanceSorter);
    const badgeHelper = (keyName: string) => {
      switch (keyName) {
        case 'vaccinationRequired':
          return 'Vaccination Required';
        case 'isFamilyFriendly':
          return 'Family Friendly';
        case 'isOnline':
          return 'Online';
        case 'isHybrid':
          return 'Hybrid';
        case 'petFree':
          return 'Pet Free';
        case 'isYoungAdult':
          return 'Young Adult';
        case 'transitAccessible':
          return 'Transit Accessible';
        default:
          return keyName;
      }
    };
    return (
      <div className="HomeChurchItem">
        <div className="HomeChurchItemDiv1">
          <h1 className="HomeChurchH1">{this.props.content.header1}</h1>

          <div>
            <img
              onClick={() => {
                this.setState({ mapSelected: false });
              }}
              style={
                this.state.mapSelected ? {} : { backgroundColor: '#EFEFF0' }
              }
              className="ListButton"
              alt="List_Button"
              src={LIST_BUTTON}
            ></img>
            <img
              onClick={() => {
                this.setState({ mapSelected: true });
              }}
              style={
                this.state.mapSelected ? { backgroundColor: '#EFEFF0' } : {}
              }
              className="ListButton"
              alt="Map_Button"
              src={MAP_BUTTON}
            ></img>
          </div>
          <div
            className={
              'HomeChurchItemDiv2 ' +
              (this.state.mapSelected ? 'MapView' : 'ListView') +
              (!this.state.allLocationsLoaded ? ' loadingMargin' : '')
            }
          >
            <div className="HomeChurchItemMap">
              <Map
                google={this.props.google}
                zoom={initalZoom}
                initialCenter={inititalCenter}
                bounds={this.state.mapBounds ?? undefined}
                mapTypeControl={false}
                onReady={(_props, map) => (this.map = map)}
              >
                <Marker
                  icon={CURRENT_LOCATION_URL}
                  position={{ ...this.state.currentLatLng }}
                />
                {filteredGroups
                  .filter((day) => {
                    if (this.state.selectedDay.value === 'all') return true;
                    else {
                      return (
                        this.getDayOfWeek(day.schedule) ===
                        this.state.selectedDay.value
                      );
                    }
                  })
                  .map((item) => {
                    const { latitude, longitude } =
                      item.location?.address ?? {};
                    if (!latitude || !longitude) {
                      console.error(`missing address coordinates in ${item}`);
                      return null;
                    }
                    return (
                      <Marker
                        key={item.id ?? ''}
                        onClick={this.getMarkerClickHandler(item)}
                        anchorPoint={new google.maps.Point(0, 0)}
                        icon={
                          this.state.selectedPlace === item
                            ? HOME_CHURCH_PIN_SELECTED_URL
                            : HOME_CHURCH_PIN_URL
                        }
                        position={{
                          lat: Number(latitude),
                          lng: Number(longitude),
                        }}
                      />
                    );
                  })}
                <InfoWindow
                  pixelOffset={new google.maps.Size(0, -32)}
                  google={this.props.google}
                  // These types are wrong, they should be optional. So just cast to fix the issues.
                  map={this.map as google.maps.Map}
                  marker={this.state.selectedPlaceMarker as google.maps.Marker}
                  position={{
                    lat: parseFloat(
                      this.state.selectedPlace?.location?.address
                        ?.latitude as string
                    ) as number,
                    lng: parseFloat(
                      this.state.selectedPlace?.location?.address
                        ?.longitude as string
                    ) as number,
                  }}
                  visible={
                    !!(
                      this.state.selectedPlace || this.state.selectedPlaceMarker
                    )
                  }
                >
                  {this.state.selectedPlace ? (
                    <div>
                      <div className="HomeChurchItemMapInfoWindowDiv1">
                        {this.state.selectedPlace.name}
                      </div>
                      {this.state.selectedPlace.churchCampus?.name ? (
                        <div className="HomeChurchItemMapInfoWindowDiv2">
                          <Badge>
                            {this.state.selectedPlace.churchCampus?.name}
                          </Badge>
                        </div>
                      ) : null}
                      <div className="HomeChurchItemMapInfoWindowDiv3">
                        {this.state.selectedPlace.description}
                      </div>
                      <div className="HomeChurchItemMapInfoWindowDayOfWeek">
                        {this.getDayOfWeek(this.state.selectedPlace.schedule)}{' '}
                        {(this.state.selectedPlace.schedule?.recurrences
                          ?.recurrence?.recurrenceWeekly?.recurrenceFrequency ??
                          0) > 1
                          ? '(every ' +
                            this.state.selectedPlace.schedule?.recurrences
                              ?.recurrence?.recurrenceWeekly
                              ?.recurrenceFrequency +
                            ' weeks)'
                          : null}
                      </div>
                      <div className="HomeChurchItemMapInfoWindowTimeOfDay">
                        {moment
                          .tz(
                            this.getAdjustedTime(this.state.selectedPlace),
                            moment.tz.guess()
                          )
                          .format('h:mm a z')}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </InfoWindow>
              </Map>
            </div>
          </div>
          <div
            className={
              'HomeChurchItemDiv3 ' +
              (this.state.mapSelected ? 'MapView' : 'ListView')
            }
            style={this.state.mapSelected ? {} : { marginBottom: '-52vh' }}
          >
            <div
              className="HomeChurchFormItemContainer"
              style={!this.state.allLocationsLoaded ? { height: '221px' } : {}}
            >
              {
                <Select
                  onChange={(value) =>
                    this.updateMap(
                      (value as { label: string; value: string } | null)
                        ?.value ?? 'all',
                      DEFAULT_LAT_LNG,
                      false,
                      false
                    )
                  }
                  placeholder="Select Region/Community"
                  styles={this.styleSelect}
                  ref={(ref) => this.selectControlLocation == ref}
                  menuShouldScrollIntoView={true}
                  options={this.state.locations.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                ></Select>
              }
              <Select
                onChange={(value) => {
                  this.handleDaySelection(
                    value as { label: string; value: string } | null
                  );
                }}
                placeholder="Select Day"
                className="DaySelect"
                styles={this.styleSelect}
                ref={(ref) => this.selectControlDay == ref}
                menuShouldScrollIntoView={true}
                options={this.daysOfWeek.map((item) => {
                  return { label: item.label, value: item.value };
                })}
              ></Select>
              {navigator.geolocation ? (
                <button
                  className="UpdateLocationButton"
                  onClick={() => this.updateLocation()}
                >
                  <img
                    alt="Use my location"
                    src="/static/svg/FindMyLocation.svg"
                  />
                </button>
              ) : null}
              <button
                className="ClearAllButton"
                onClick={() => this.clearLocationSelection()}
                tabIndex={0}
              >
                Clear All
              </button>

              {!this.state.allLocationsLoaded ? (
                <div className="LoadingContainer">
                  <div className="LoadingTitleContainer">
                    <Spinner color="dark" />
                    <span className="LoadingTitle">
                      Loading home church listings
                    </span>
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className={
                'HomeChurchItemListData ' +
                (!this.state.allLocationsLoaded ? 'LoadingMargin' : '')
              }
              style={
                !this.state.allLocationsLoaded && !isMobile
                  ? { height: 'calc(88vh - 221px)' }
                  : {}
              }
              ref={(ref) => (this.homeChurchListScrollContainer = ref)}
            >
              {filteredGroups
                .filter((day) => {
                  if (this.state.selectedDay.value === 'all') return true;
                  else {
                    return (
                      this.getDayOfWeek(day.schedule) ===
                      this.state.selectedDay.value
                    );
                  }
                })
                .map((item) => {
                  return (
                    <div
                      className="HomeChurchItemDiv5"
                      key={item.id ?? undefined}
                      id={'HC-' + item.id}
                    >
                      <button
                        className={
                          'HomeChurchH3 ' +
                          (this.state.selectedPlace === item ? 'selected' : '')
                        }
                        onClick={this.getHomeChurchClickHandler(item)}
                      >
                        {item.name}
                      </button>
                      <div className="HomeChurchAddress">
                        {item?.extraData?.extendedDescription &&
                        item?.extraData?.extendedDescription !== ''
                          ? item?.extraData?.extendedDescription
                          : item.description}
                      </div>

                      <div
                        style={{
                          marginLeft: '-4px',
                          marginTop: '15px',
                          marginBottom: '15px',
                          display: 'flex',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ minWidth: '100%', marginBottom: 4 }}>
                          {item?.churchCampus?.name ? (
                            <div
                              className="HomeChurchSiteAffiliation"
                              style={{ marginLeft: 4, marginRight: 4 }}
                            >
                              <Badge>{item.churchCampus?.name}</Badge>
                            </div>
                          ) : null}

                          <div
                            className="HomeChurchDayOfWeek"
                            style={{ marginLeft: 4, marginRight: 4 }}
                          >
                            <Badge>{this.getDayOfWeek(item.schedule)}</Badge>
                          </div>
                        </div>
                        {item?.extraData
                          ? Object.keys(item?.extraData)
                              ?.filter((value: string) => {
                                return item?.extraData?.[value] === 'Yes';
                              })
                              .map((homeChurchKey) => (
                                <div
                                  key={homeChurchKey}
                                  className="HomeChurchSiteAffiliation"
                                  style={{ marginLeft: 4, marginRight: 4 }}
                                >
                                  <Badge style={{ backgroundColor: '#A0E2BA' }}>
                                    {badgeHelper(homeChurchKey)}
                                  </Badge>
                                </div>
                              ))
                          : null}
                      </div>
                      <div className="HomeChurchTimeOfDay">
                        {moment
                          .tz(this.getAdjustedTime(item), moment.tz.guess())
                          .format('h:mm a z')}
                      </div>
                      <div className="HomeChurchButtonContainer">
                        {item.schedule?.recurrences?.recurrence
                          ?.recurrenceWeekly ? (
                          <AddToCalendar
                            style={{ marginRight: 25 }}
                            textDecoration="hover"
                            color="black"
                            event={this.getCalendarEventForLocation(item)}
                          />
                        ) : null}
                        <button
                          className="ContactLeadersButton"
                          onClick={this.getContactLeadersHandler(item)}
                          tabIndex={0}
                        >
                          <img
                            className="ContactLeadersIcon"
                            src="/static/svg/Contact.svg"
                            alt="Contact Icon"
                          />
                          Contact Leaders
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <HomeChurchContactModal
          show={this.state.showContactModal}
          handleClose={() => this.handleToggleModal()}
          homeChurchId={this.state.contactHomeChurchId}
        ></HomeChurchContactModal>
      </div>
    );
  }
}

function HomeChurchItemWrapper(props: Props) {
  const history = useHistory();
  return <ContentItem {...props} history={history} />;
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0',
})(HomeChurchItemWrapper);
