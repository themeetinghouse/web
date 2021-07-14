import { SundayMorningItemContent } from 'components/types';
import {
  GoogleApiWrapper,
  IMarkerProps,
  InfoWindow,
  IProvidedProps,
  Map,
  Marker,
} from 'google-maps-react';
import moment from 'moment';
import React, { ChangeEvent } from 'react';
import AddToCalendar, { Event } from '../AddToCalendar/AddToCalendar';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Input } from 'reactstrap';
import './SundayMorningItem.scss';
import { LinkButton } from 'components/Link/Link';
import DataLoader, { LocationQuery } from './DataLoader';

interface ListData {
  id: string;
  name: string;
  pastorEmail: string;
  location: {
    longitude: number;
    latitude: number;
    address: string;
  };
  serviceTimes: string[];
  live?: boolean;
}

interface Props extends RouteComponentProps, IProvidedProps {
  content: SundayMorningItemContent;
}

interface State {
  selectedPlace: ListData | null;
  selectedPlaceMarker?: google.maps.Marker;
  listData: (ListData & {
    distance?: google.maps.DistanceMatrixResponseElement;
  })[];
  origin: [string, string];
  travelMode: google.maps.TravelMode;
  currentLatLng: {
    lat: number;
    lng: number;
  };
  postalCode: string;
}

const SITE_PIN_URL = '/static/svg/SiteLocationPin.svg';
const SITE_PIN_SELECTED_URL = '/static/svg/SiteLocationPin-selected.svg';
const CURRENT_LOCATION_URL = '/static/svg/CurrentLocation.svg';
const DEFAULT_LAT_LNG = { lng: -79.685926, lat: 43.511459 };

export class SundayMorningItem extends React.Component<Props, State> {
  siteListScrollContainer: HTMLDivElement | null = null;
  map: google.maps.Map | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      selectedPlace: null,
      listData: [],
      origin: ['43', '-79.8707'],
      travelMode: google.maps.TravelMode.DRIVING,
      currentLatLng: DEFAULT_LAT_LNG,
      postalCode: '',
    };

    const today = moment.tz('America/Toronto').format('YYYY-MM-DD');
    if (this.props.content.alternate === 'christmas') {
      if (today === '2020-12-24')
        this.interval = setInterval(() => this.tick(), 1500);
    }
    DataLoader.getLocations(this.props.content as LocationQuery).then(
      (myJson) => {
        if (
          this.props.content.alternate === 'christmas' &&
          today === '2020-12-24'
        ) {
          const rightNow = moment().tz('America/Toronto').format('HH:mm');
          const filteredEvents = myJson.filter((livestream: any) => {
            const endTime = moment(
              livestream?.serviceTimes?.[0].split('-')[1],
              'HH:mm a'
            )
              .add(3, 'h')
              .format('HH:mm');
            if (rightNow >= endTime) {
              return false;
            } else return true;
          });
          this.setState({
            listData: filteredEvents.map((item: any) => {
              return { ...item, live: false };
            }),
          });
        } else this.setState({ listData: myJson });
      }
    );
  }
  /* Used for the christmas page */
  tick() {
    console.log('tick');
    const rightNow = moment().tz('America/Toronto').format('HH:mm');
    if (this.state.listData.length === 0) {
      clearInterval(this.interval);
    }
    const temp = [...this.state.listData];
    temp.forEach((livestream, currentIndex) => {
      const startTime = moment(
        livestream?.serviceTimes?.[0].split('-')[1],
        'HH:mm a'
      )
        .subtract(15, 'minutes')
        .format('HH:mm');
      const endTime = moment(
        livestream?.serviceTimes?.[0].split('-')[1],
        'HH:mm a'
      )
        .add(2.75, 'h')
        .format('HH:mm');
      if (
        startTime &&
        endTime &&
        rightNow >= startTime &&
        rightNow <= endTime
      ) {
        if (!temp[currentIndex].live) {
          temp[currentIndex].live = true;
          this.setState({ listData: temp });
        }
      }
      if (rightNow >= endTime) {
        this.setState({
          listData: temp.filter((event, index) => {
            return index !== currentIndex;
          }),
        });
      }
    });
  }
  interval: any;

  componentDidMount() {
    this.setGeoLocation();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentDidUpdate() {
    if (this.state.selectedPlace) {
      const siteListingDOM = document.getElementById(
        'SITE-' + this.state.selectedPlace.id
      );
      console.log(
        'siteListingDOM = %o, selectedPlace.id = %o',
        siteListingDOM,
        this.state.selectedPlace.id
      );
      if (siteListingDOM && this.siteListScrollContainer) {
        this.siteListScrollContainer.scrollTop =
          siteListingDOM.offsetTop - this.siteListScrollContainer.offsetTop;
        //hcListingDOM.scrollIntoView();
      }
    }
  }

  private getMarkerClickHandler =
    (item: ListData) =>
    (_props?: IMarkerProps, marker?: google.maps.Marker) => {
      this.setState({ selectedPlaceMarker: marker, selectedPlace: item });
    };

  private async setGeoLocation(postalCode?: string): Promise<void> {
    const currentLatLng = await new Promise<google.maps.LatLngLiteral>(
      (resolve) => {
        let newLatLng = DEFAULT_LAT_LNG;
        if (postalCode) {
          new google.maps.Geocoder().geocode(
            { address: postalCode },
            (results, status) => {
              if (status === 'OK') {
                newLatLng = {
                  lat: results[0].geometry.location.lat(),
                  lng: results[0].geometry.location.lng(),
                };
              }
              resolve(newLatLng);
            }
          );
        } else {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                newLatLng = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                resolve(newLatLng);
              },
              () => {
                resolve(newLatLng);
              }
            );
          } else {
            console.log('Could not get current location.  Using default');
            resolve(newLatLng);
          }
        }
      }
    );
    this.setState({ currentLatLng });
    this.calculateDistances();
  }

  private calculateDistances() {
    if (this.state.listData) {
      console.log('Calculating distances to sites...');
      const service = new this.props.google.maps.DistanceMatrixService();
      const destinations = this.state.listData.map((item) => {
        return new this.props.google.maps.LatLng(
          item.location.latitude,
          item.location.longitude
        );
      });
      const start = new this.props.google.maps.LatLng(
        this.state.currentLatLng.lat,
        this.state.currentLatLng.lng
      );

      service.getDistanceMatrix(
        {
          origins: [start],
          destinations: destinations,
          travelMode: this.state.travelMode,
        },
        (res, status) => {
          console.log(res);
          if (status === 'OK') {
            for (const distanceItem of res.rows[0].elements) {
              const site =
                this.state.listData[res.rows[0].elements.indexOf(distanceItem)];
              console.log('Site: %o, distance: %o', site, distanceItem);
              site.distance = distanceItem;
            }
            //this.setState({ distances: res })
            this.setState({ listData: [...this.state.listData] });
          }
        }
      );
    }
  }

  private handlePostalCodeChange = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    this.setState({ postalCode: value });
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const isValid = regex.test(value);
    console.log(
      'SundayMorningItemItem.handlePostalCodeChange(): Postal Code value: %o.  Valid? %b',
      value,
      regex.test(value)
    );
    if (isValid) {
      await this.setGeoLocation(value);
    } else if (!value) {
      await this.setGeoLocation();
    }
  };

  private clearLocationSelection = async () => {
    this.setState({ postalCode: '' });
    await this.setGeoLocation();
  };

  private getSiteClickHandler = (item: ListData | null) => () => {
    this.setState({ selectedPlaceMarker: undefined, selectedPlace: item });
  };

  getCalendarEventForLocation(locationItem: ListData): Event {
    if (this.props.content.alternate === 'christmas') {
      const nextSunday = moment(locationItem.serviceTimes, 'MMMM D, h:mma');
      console.log(nextSunday);
      const event = {
        summary: 'Christmas at The Meeting House',
        description: 'Join us at The Meeting House for Christmas!',
        location: locationItem.location.address,
        start: nextSunday.format(),
        end: moment(nextSunday).add(90, 'minutes').format(),
      };
      return event;
    } else {
      let nextSunday;
      if (moment().day() === 0 && moment().isBefore(moment('10:00', 'hh:mm')))
        nextSunday = moment().startOf('day');
      else nextSunday = moment().add(1, 'week').day(0).startOf('day');
      let serviceHour =
        locationItem.serviceTimes[locationItem.serviceTimes.length - 1];
      serviceHour = serviceHour.substr(0, serviceHour.indexOf(':'));
      nextSunday = nextSunday.hour(+serviceHour);
      const event = {
        summary: 'Church at The Meeting House',
        description: 'Join us at The Meeting House on Sunday!',
        location: locationItem.location.address,
        start: nextSunday.format(),
        end: moment(nextSunday).add(90, 'minutes').format(),
      };
      return event;
    }
  }

  render() {
    if (
      (this.state.listData && this.state.listData.length > 0) ||
      this.props.content.alternate !== 'christmas'
    )
      return (
        <div
          className="SundayMorningItem"
          style={
            this.props.content.alternate === 'christmas'
              ? { position: 'relative', height: 'auto' }
              : {}
          }
        >
          <div className="SundayMorningItemDiv1">
            <div>
              <h1 className="SundayMorningH1">{this.props.content.header1}</h1>

              <div
                className="SundayMorningItemDiv2"
                style={
                  this.props.content.alternate === 'christmas'
                    ? { display: 'none' }
                    : {}
                }
              >
                <div className="SundayMorningMap">
                  <Map
                    google={this.props.google}
                    zoom={6}
                    initialCenter={{ lat: 44, lng: -78.0 }}
                    mapTypeControl={false}
                    fullscreenControl={false}
                    onReady={(_props, map) => {
                      this.map = map;
                    }}
                  >
                    <Marker
                      icon={CURRENT_LOCATION_URL}
                      position={{ ...this.state.currentLatLng }}
                    />
                    {this.state.listData.map((item, index) => {
                      return (
                        <Marker
                          key={index}
                          anchorPoint={new google.maps.Point(0, 0)}
                          onClick={this.getMarkerClickHandler(item)}
                          icon={
                            this.state.selectedPlace === item
                              ? SITE_PIN_SELECTED_URL
                              : SITE_PIN_URL
                          }
                          position={{
                            lat: item.location.latitude,
                            lng: item.location.longitude,
                          }}
                        />
                      );
                    })}

                    <InfoWindow
                      pixelOffset={new google.maps.Size(0, -32)}
                      google={this.props.google}
                      // These types are wrong, they should be optional. So just cast to fix the issues.
                      map={this.map as google.maps.Map}
                      marker={
                        this.state.selectedPlaceMarker as google.maps.Marker
                      }
                      position={{
                        lat: this.state.selectedPlace?.location
                          .latitude as number,
                        lng: this.state.selectedPlace?.location
                          .longitude as number,
                      }}
                      visible={
                        !!(
                          this.state.selectedPlace ||
                          this.state.selectedPlaceMarker
                        )
                      }
                    >
                      {this.state.selectedPlace ? (
                        <div>
                          <div className="SundayMorningMapInfoWindowSiteName">
                            {this.state.selectedPlace.name}
                          </div>
                          <div className="SundayMorningMapInfoWindowAddress">
                            {this.state.selectedPlace.location.address}
                          </div>
                          {this.props.content.alternate ===
                          'christmas' ? null : (
                            <div className="SundayMorningMapInfoWindowDay">
                              Sundays
                            </div>
                          )}
                          {this.props.content.alternate === 'christmas' ? (
                            <div className="SundayMorningServiceTimes">
                              {this.state.selectedPlace.serviceTimes}
                            </div>
                          ) : (
                            <div className="SundayMorningMapInfoWindowTimes">
                              {this.state.selectedPlace.serviceTimes
                                .map((t) => t + ' am')
                                .join(', ')}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </InfoWindow>
                  </Map>
                </div>
              </div>
              <div
                className="SundayMorningItemDiv3"
                style={
                  this.props.content.alternate === 'christmas'
                    ? { width: '100%', position: 'relative', height: 'auto' }
                    : {}
                }
              >
                <div
                  className="SundayMorningFormItemContainer"
                  style={
                    this.props.content.alternate === 'christmas'
                      ? { display: 'none' }
                      : {}
                  }
                >
                  <Input
                    className="PostalCodeInput"
                    placeholder="Add postal code"
                    onChange={this.handlePostalCodeChange}
                    value={this.state.postalCode}
                  ></Input>
                  <button
                    className="ClearAllButton"
                    onClick={this.clearLocationSelection}
                    tabIndex={0}
                  >
                    Use current location
                  </button>
                </div>

                <div
                  className="SundayMorningItemListData"
                  style={
                    this.props.content.alternate === 'christmas'
                      ? {
                          paddingBottom: 0,
                          top: 0,
                          height: 'auto',
                          overflow: 'unset',
                        }
                      : {}
                  }
                  ref={(ref) => (this.siteListScrollContainer = ref)}
                >
                  {this.state.listData
                    .sort((a, b) => {
                      if (a.distance && b.distance) {
                        return a.distance.duration.value <
                          b.distance.duration.value
                          ? -1
                          : 1;
                      } else {
                        return a.name.localeCompare(b.name);
                      }
                    })
                    .map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="SundayMorningItemDiv5"
                          style={
                            this.props.content.alternate === 'christmas'
                              ? { width: '100%' }
                              : {}
                          }
                          id={'SITE-' + item.id}
                        >
                          <div className="SundayMorningItemDiv4">
                            <div>
                              {this.props.content.alternate === 'christmas' ? (
                                <button
                                  className={'SundayMorningH3'}
                                  style={
                                    this.props.content.alternate === 'christmas'
                                      ? {
                                          textDecoration: 'none',
                                          cursor: 'unset',
                                        }
                                      : {}
                                  }
                                >
                                  {item.name}
                                </button>
                              ) : (
                                <>
                                  <button
                                    className={
                                      'SundayMorningH3 ' +
                                      (this.state.selectedPlace === item
                                        ? 'selected '
                                        : ' ') +
                                      (this.props.content.alternate ===
                                      'christmas'
                                        ? 'christmas '
                                        : ' ')
                                    }
                                    onClick={this.getSiteClickHandler(item)}
                                  >
                                    {item.name}
                                  </button>
                                  <div
                                    className="SundayMorningAddress"
                                    dangerouslySetInnerHTML={{
                                      __html: item.location.address
                                        .split(',')
                                        .join('<br/>'),
                                    }}
                                  ></div>
                                </>
                              )}
                              {/* <div className="SundayMorningDistances" >{this.state.distances != null ? this.state.distances.rows[0].elements[index].distance.text + " away (" + this.state.distances.rows[0].elements[index].duration.text + ")": null}</div> */}
                              <div className="SundayMorningDistances">
                                {item.distance != null
                                  ? item.distance.distance.text +
                                    ' away (' +
                                    item.distance.duration.text +
                                    ')'
                                  : null}
                              </div>
                              {this.props.content.alternate === 'christmas' ||
                              this.props.content.alternate ===
                                'easter' ? null : (
                                <div className="SundayMorningServiceDay">
                                  Sundays
                                </div>
                              )}
                              {this.props.content.alternate === 'christmas' ||
                              this.props.content.alternate === 'easter' ? (
                                <div className="SundayMorningServiceTimes">
                                  {item.serviceTimes.map((val, index) => (
                                    <div key={index}>{val}</div>
                                  ))}
                                </div>
                              ) : (
                                <div className="SundayMorningServiceTimes">
                                  {item.serviceTimes
                                    .map((t) => t + ' am')
                                    .join(', ')}
                                </div>
                              )}
                            </div>

                            <div
                              className="SundayMorningItemDiv6"
                              style={
                                this.props.content.alternate === 'christmas'
                                  ? item.live
                                    ? {}
                                    : { display: 'none' }
                                  : {}
                              }
                            >
                              <LinkButton
                                id="customBlackButton"
                                className="SundayMorningButton1"
                                to={
                                  this.props.content.alternate === 'christmas'
                                    ? 'live'
                                    : item.id
                                }
                              >
                                {this.props.content.alternate === 'christmas'
                                  ? 'Watch'
                                  : 'Visit Page'}
                              </LinkButton>
                            </div>
                          </div>

                          <div className="SundayMorningButtonContainer">
                            <AddToCalendar
                              style={{ marginRight: 25 }}
                              textDecoration="hover"
                              color="black"
                              event={this.getCalendarEventForLocation(item)}
                            />
                            <a
                              className="emailText"
                              href={
                                this.props.content.alternate === 'christmas'
                                  ? 'mailto:' + 'hello@themeetinghouse.com'
                                  : 'mailto:' + item.pastorEmail
                              }
                            >
                              <img
                                style={{ marginRight: 10 }}
                                className="ContactPastorIcon"
                                src="/static/svg/Contact.svg"
                                alt="Contact Icon"
                              />
                              {this.props.content.alternate === 'christmas'
                                ? 'Connect'
                                : 'Contact Pastor'}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    else return null;
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0',
})(withRouter(SundayMorningItem));
