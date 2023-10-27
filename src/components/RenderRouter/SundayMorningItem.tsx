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
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { Input } from 'reactstrap';
import './SundayMorningItem.scss';
import { LinkButton } from 'components/Link/Link';
import DataLoader from './DataLoader';
import { TMHLocation, TMHLocationMeeting } from 'API';

interface Props extends IProvidedProps {
  content: SundayMorningItemContent;
}

interface SundayMorningItemProps extends Props {
  navigate: NavigateFunction;
}
interface State {
  selectedPlace: TMHLocation | null;
  selectedPlaceMarker?: google.maps.Marker;
  listData: TMHLocation[];
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
export function getNextMeetingDate(meeting: TMHLocationMeeting) {
  const now = moment();
  const past = moment(meeting?.date, 'YYYY-MM-DD');
  const daysSinceLastMeeting = now.diff(past, 'days');
  const daysToAdd =
    meeting.frequency === 'WEEKLY'
      ? 7
      : meeting.frequency === 'BIWEEKLY'
      ? 14
      : meeting.frequency === 'MONTHLY'
      ? 28
      : 7; //defaults to weekly
  for (let i = 0; i < daysSinceLastMeeting; i += daysToAdd) {
    if (meeting.frequency === 'WEEKLY') {
      past.add(daysToAdd, 'days');
    } else if (meeting.frequency === 'BIWEEKLY') {
      past.add(daysToAdd, 'days');
    } else if (meeting.frequency === 'MONTHLY') {
      past.add(daysToAdd, 'days');
    } else {
      past.add(7, 'days');
    }
  }
  const startingDateTime = moment(
    past.format('YYYY-MM-DD') + ' ' + meeting.startTime,
    'YYYY-MM-DD HH:mm:ss'
  );
  const endingDateTime = moment(
    past.format('YYYY-MM-DD') + ' ' + meeting.endTime,
    'YYYY-MM-DD HH:mm:ss'
  );
  return { startingDateTime, endingDateTime };
}
export class SundayMorningItem extends React.Component<
  SundayMorningItemProps,
  State
> {
  siteListScrollContainer: HTMLDivElement | null = null;
  map: google.maps.Map | undefined;

  constructor(props: SundayMorningItemProps) {
    super(props);
    this.state = {
      selectedPlace: null,
      listData: [],
      origin: ['43', '-79.8707'],
      travelMode: google.maps.TravelMode.DRIVING,
      currentLatLng: DEFAULT_LAT_LNG,
      postalCode: '',
    };

    // const today = moment.tz('America/Toronto').format('YYYY-MM-DD');
    // if (this.props.content.alternate === 'christmas') {
    //   if (today === '2021-12-24')
    //     this.interval = setInterval(() => this.tick(), 1500);
    // }
    // DataLoader.getLocations(this.props.content as LocationQuery).then(
    //   (myJson) => {
    //     if (
    //       this.props.content.alternate === 'christmas' &&
    //       today === '2021-12-24'
    //     ) {
    //       const rightNow = moment().tz('America/Toronto').format('HH:mm');
    //       const filteredEvents = myJson.filter((livestream: any) => {
    //         const endTime = moment(
    //           livestream?.serviceTimes?.[0].split('-')[1],
    //           'HH:mm a'
    //         )
    //           .add(3, 'h')
    //           .format('HH:mm');
    //         if (rightNow >= endTime) {
    //           return false;
    //         } else return true;
    //       });
    //       this.setState({
    //         listData: filteredEvents.map((item: any) => {
    //           return { ...item, live: false };
    //         }),
    //       });
    //     } else this.setState({ listData: myJson });
    //   }
    // );
  }
  /* Used for the christmas page */
  // tick() {
  //   console.log('tick');
  //   const rightNow = moment().tz('America/Toronto').format('HH:mm');
  //   if (this.state.listData.length === 0) {
  //     clearInterval(this.interval);
  //   }
  //   const temp = [...this.state.listData];
  //   temp.forEach((livestream, currentIndex) => {
  //     const startTime = moment(
  //       livestream?.serviceTimes?.[0].split('-')[1],
  //       'HH:mm a'
  //     )
  //       .subtract(15, 'minutes')
  //       .format('HH:mm');
  //     const endTime = moment(
  //       livestream?.serviceTimes?.[0].split('-')[1],
  //       'HH:mm a'
  //     )
  //       .add(2.75, 'h')
  //       .format('HH:mm');
  //     if (
  //       startTime &&
  //       endTime &&
  //       rightNow >= startTime &&
  //       rightNow <= endTime
  //     ) {
  //       if (!temp[currentIndex].live) {
  //         temp[currentIndex].live = true;
  //         this.setState({ listData: temp });
  //       }
  //     }
  //     if (rightNow >= endTime) {
  //       this.setState({
  //         listData: temp.filter((event, index) => {
  //           return index !== currentIndex;
  //         }),
  //       });
  //     }
  //   });
  // }
  // interval: any;

  async componentDidMount() {
    const locations = await DataLoader.listTMHLocations();
    console.log({ locations });
    this.setState(
      {
        listData: locations.filter(
          (location) => location?.showInLocationMap
        ) as TMHLocation[],
      },
      () => this.setGeoLocation()
    );
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
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
    (item: TMHLocation) =>
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
    //this.calculateDistances();
  }

  // private calculateDistances() {
  //   if (this.state.listData) {
  //     console.log('Calculating distances to sites...');
  //     const service = new this.props.google.maps.DistanceMatrixService();
  //     const destinations = this.state.listData.map((item) => {
  //       return new this.props.google.maps.LatLng(
  //         item?.location?.latitude ?? 0,
  //         item?.location?.longitude ?? 0
  //       );
  //     });
  //     const start = new this.props.google.maps.LatLng(
  //       this.state.currentLatLng.lat,
  //       this.state.currentLatLng.lng
  //     );

  //     service.getDistanceMatrix(
  //       {
  //         origins: [start],
  //         destinations: destinations,
  //         travelMode: this.state.travelMode,
  //       },
  //       (res, status) => {
  //         if (status === 'OK') {
  //           for (const distanceItem of res.rows[0].elements) {
  //             const site =
  //               this.state.listData[res.rows[0].elements.indexOf(distanceItem)];
  //             console.log('Site: %o, distance: %o', site, distanceItem);
  //             site.distance = distanceItem;
  //           }
  //           //this.setState({ distances: res })
  //           this.setState({ listData: [...this.state.listData] });
  //         }
  //       }
  //     );
  //   }
  // }

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

  private getSiteClickHandler = (item: TMHLocation | null) => () => {
    this.setState({
      selectedPlaceMarker: undefined,
      selectedPlace: item as unknown as TMHLocation,
    });
  };

  getCalendarEventForMeeting(
    location: TMHLocation,
    meeting: TMHLocationMeeting
  ): Event {
    const { startingDateTime, endingDateTime } = getNextMeetingDate(meeting);
    const event = {
      title: meeting?.name ?? '',
      description: '',
      summary: meeting?.description ?? '',
      location: location.location?.name ?? '',
      start: startingDateTime.format('YYYYMMDDTHHmmssZ'),
      end: endingDateTime.format('YYYYMMDDTHHmmssZ'),
    };
    return event;
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
                            lat: item.location?.latitude ?? 0,
                            lng: item.location?.longitude ?? 0,
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
                          ?.latitude as number,
                        lng: this.state.selectedPlace?.location
                          ?.longitude as number,
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
                            {this.state.selectedPlace.location?.address1 ??
                              this.state.selectedPlace.location?.name}
                          </div>

                          <div className="SundayMorningMapInfoWindowDay">
                            {this.state.selectedPlace.meetings?.map(
                              (meeting) => {
                                if (!meeting) return <></>;
                                const nextMeetingDate =
                                  getNextMeetingDate(meeting);
                                return (
                                  <div key={meeting.startTime}>
                                    {meeting?.frequency === 'WEEKLY'
                                      ? `Every ${nextMeetingDate.startingDateTime.format(
                                          'dddd h:mm a'
                                        )}`
                                      : `Meets on ${nextMeetingDate.startingDateTime.format(
                                          'LLLL'
                                        )}`}
                                  </div>
                                );
                              }
                            )}
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
                  {this.state.listData.map((item) => {
                    console.log({ item });
                    return (
                      <div
                        key={item.id}
                        className="SundayMorningItemDiv5"
                        style={
                          this.props.content.alternate === 'christmas'
                            ? { width: '100%' }
                            : {
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                              }
                        }
                        id={'SITE-' + item.id}
                      >
                        <div className="SundayMorningItemDiv4">
                          <div style={{ flex: 1 }}>
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
                                <div
                                  style={{
                                    flexDirection: 'row',
                                    display: 'flex',
                                    flex: 1,
                                  }}
                                >
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
                                  <div className="SundayMorningItemDiv6">
                                    <LinkButton
                                      id="customBlackButton"
                                      className="SundayMorningButton1"
                                      to={`communities/${item.id}`}
                                    >
                                      Visit Page
                                    </LinkButton>
                                  </div>
                                </div>
                                {item.location?.name?.split(',').map((str) => {
                                  return (
                                    <div
                                      key={str}
                                      className="SundayMorningAddress"
                                      dangerouslySetInnerHTML={{
                                        __html: str,
                                      }}
                                    ></div>
                                  );
                                })}
                              </>
                            )}
                            {/* <div className="SundayMorningDistances" >{this.state.distances != null ? this.state.distances.rows[0].elements[index].distance.text + " away (" + this.state.distances.rows[0].elements[index].duration.text + ")": null}</div> */}
                            <div className="SundayMorningDistances"></div>

                            <div className="SundayMorningServiceTimes">
                              {item.meetings
                                ?.sort((meetingA, meetingB) => {
                                  if (!meetingA || !meetingB) return 0;
                                  const today = moment();
                                  const meetingADate =
                                    getNextMeetingDate(meetingA);
                                  const meetingBDate =
                                    getNextMeetingDate(meetingB);
                                  if (!meetingADate || !meetingBDate) return 0;
                                  return (
                                    meetingADate.startingDateTime.diff(today) -
                                    meetingBDate.startingDateTime.diff(today)
                                  );
                                })
                                .map((meeting) => {
                                  if (!meeting) return <></>;
                                  const nextMeetingDate =
                                    getNextMeetingDate(meeting);
                                  const numMeetings =
                                    item.meetings?.length ?? 0;
                                  return (
                                    <div
                                      key={meeting?.date}
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: 16,
                                        marginBottom: 16,
                                      }}
                                    >
                                      <span
                                        style={{
                                          flexDirection: 'column',
                                          display: 'flex',
                                          marginRight: 8,
                                          flex: 1,
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: 14,
                                            fontWeight: 300,
                                          }}
                                        >
                                          {meeting?.name}
                                        </span>
                                        <span
                                          style={{
                                            fontSize: 14,
                                            color: '#1A1A1A',
                                          }}
                                        >
                                          {meeting?.description ? (
                                            <span
                                              style={{
                                                fontSize: 14,
                                                fontWeight: 300,
                                                color: '#1A1A1A',
                                              }}
                                            >
                                              {meeting?.description}
                                            </span>
                                          ) : null}
                                          <span
                                            style={{
                                              display: 'block',
                                            }}
                                          >
                                            {meeting?.frequency === 'WEEKLY'
                                              ? `Every ${nextMeetingDate.startingDateTime.format(
                                                  'dddd h:mm a'
                                                )}`
                                              : `Meets on ${nextMeetingDate.startingDateTime.format(
                                                  'LLLL'
                                                )}
                                                `}
                                          </span>
                                        </span>
                                      </span>
                                      {numMeetings > 1 && item ? (
                                        <AddToCalendar
                                          style={{ marginRight: 32 }}
                                          textDecoration="always"
                                          color="black"
                                          isIcon={true}
                                          event={this.getCalendarEventForMeeting(
                                            item,
                                            meeting
                                          )}
                                        />
                                      ) : null}
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>

                        <div className="SundayMorningButtonContainer">
                          {item?.meetings?.length === 1 &&
                          item?.meetings?.[0] ? (
                            <AddToCalendar
                              style={{ marginRight: 25 }}
                              textDecoration="hover"
                              color="black"
                              event={this.getCalendarEventForMeeting(
                                item,
                                item?.meetings?.[0]
                              )}
                            />
                          ) : null}
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

function SundayMorningWrapper(props: Props) {
  const navigate = useNavigate();
  return <SundayMorningItem {...props} navigate={navigate} />;
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0',
})(SundayMorningWrapper);
