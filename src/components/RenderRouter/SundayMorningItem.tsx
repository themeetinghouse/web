
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';

import { Marker } from 'google-maps-react';
import { Map, InfoWindow } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import AddToCalendar from 'react-add-to-calendar';

import "./SundayMorningItem.scss"
import { Input } from 'reactstrap';
import moment from 'moment';



interface Props extends RouteComponentProps {
  content: any,
  google: any

}
interface State {
  content: any,
  selectedPlace: any,
  selectedPlaceMarker: any
  listData: any,
  origin: any,
  travelMode: string,
  currentLatLng: any,
  distances: any,
  postalCode: string,
}

declare var google: any;

const SITE_PIN_URL = "/static/svg/SiteLocationPin.svg";
const SITE_PIN_SELECTED_URL = "/static/svg/SiteLocationPin-selected.svg";
const CURRENT_LOCATION_URL = "/static/svg/CurrentLocation.svg";
const DEFAULT_LAT_LNG = { lng: -79.685926, lat: 43.511459 };

export class ContentItem extends React.Component<Props, State>  {

  inputControl: any;
  siteListScrollContainer: any;

  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null,
      selectedPlaceMarker: null,
      listData: null,
      origin: ["43", "-79.8707"],
      travelMode: "DRIVING",
      currentLatLng: DEFAULT_LAT_LNG,
      distances: null,
      postalCode: "",
    }
    this.navigate = this.navigate.bind(this);
    var jsonFile;
    if (this.state.content.alternate === "christmas")
      jsonFile = "./static/data/christmas.json"
    else if (this.state.content.alternate === "easter")
      jsonFile = "./static/data/easter.json"
    else
      jsonFile = "./static/data/locations.json"
    fetch(jsonFile).then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ listData: myJson });
      })
  }

  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  componentDidMount() {
    this.setGeoLocation();
  }

  componentDidUpdate() {
    if (this.state.selectedPlace) {
      let siteListingDOM = document.getElementById("SITE-" + this.state.selectedPlace.id);
      console.log("siteListingDOM = %o, selectedPlace.id = %o", siteListingDOM, this.state.selectedPlace.id);
      if (siteListingDOM) {
        this.siteListScrollContainer.scrollTop = siteListingDOM.offsetTop - this.siteListScrollContainer.offsetTop;
        //hcListingDOM.scrollIntoView();
      }
    }
  }

  getEmailLinkHandler = (item: any) => (
    (event: any) => {
      window.location.href = "mailto:" + item.pastorEmail;
    }
  )

  getMarkerClickHandler = (item: any) => (props: any, marker: any) => {
    this.setState({ selectedPlaceMarker: marker, selectedPlace: item });
  }

  async setGeoLocation(postalCode?: any) {
    return new Promise((resolve, reject) => {
      let newLatLng = DEFAULT_LAT_LNG;
      if (postalCode) {
        new google.maps.Geocoder().geocode({ 'address': postalCode }, (results: any, status: any) => {
          if (status === 'OK') {
            newLatLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
          }
          this.setState({ currentLatLng: newLatLng });
          this.calculateDistances();
          resolve(newLatLng);
        });
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            newLatLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            this.setState({ currentLatLng: newLatLng });
            this.calculateDistances();
            resolve(newLatLng);
          }, error => {
            this.setState({ currentLatLng: newLatLng });
            this.calculateDistances();
            resolve(newLatLng);
          })
        } else {
          console.log("Could not get current location.  Using default");
          this.setState({ currentLatLng: newLatLng });
          this.calculateDistances();
          resolve(newLatLng);
        }
      }
    })
  }

  calculateDistances() {
    if (this.state.listData) {
      console.log("Calculating distances to sites...");
      var service = new this.props.google.maps.DistanceMatrixService()
      var destinations = this.state.listData.map((item: any) => {
        return (new this.props.google.maps.LatLng(item.location.latitude, item.location.longitude))
      })
      var start = new this.props.google.maps.LatLng(this.state.currentLatLng.lat, this.state.currentLatLng.lng)

      service.getDistanceMatrix({ origins: [start], destinations: destinations, travelMode: this.state.travelMode }, (res: any, status: any) => {
        console.log(res)
        if (status === "OK") {
          for (let distanceItem of res.rows[0].elements) {
            let site = this.state.listData[res.rows[0].elements.indexOf(distanceItem)];
            console.log("Site: %o, distance: %o", site, distanceItem);
            site.distance = distanceItem;
          }
          //this.setState({ distances: res })
          this.setState({ listData: this.state.listData.concat() })
        }
      })
    }
  }

  handlePostalCodeChange = async (event: any) => {
    const value = event.target.value;
    this.setState({ postalCode: value });
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    const isValid = regex.test(value);
    console.log("SundayMorningItemItem.handlePostalCodeChange(): Postal Code value: %o.  Valid? %b", value, regex.test(value));
    if (isValid) {
      await this.setGeoLocation(value);
    } else if (!value) {
      await this.setGeoLocation();
    }
  }

  clearLocationSelection = async () => {
    this.setState({ postalCode: "" });
    await this.setGeoLocation();
  }

  getSiteClickHandler = (item: any) => (
    () => {
      this.setState({ selectedPlaceMarker: null, selectedPlace: item })
    }
  )

  getCalendarEventForLocation(locationItem: any) {
    if (this.state.content.alternate === "christmas") {
      let nextSunday = moment(locationItem.serviceTimes, "MMMM D, h:mma");
      console.log(nextSunday)
      let event = {
        title: 'Christmas at The Meeting House',
        description: 'Join us at The Meeting House for Christmas!',
        location: locationItem.location.address,
        startTime: nextSunday.format(),
        endTime: moment(nextSunday).add(90, "minutes").format()
      }
      return event;
    }
    else {
      let nextSunday = (moment().day() === 0 ? moment().add(1, "week") : moment().day(0)).startOf("day");
      let serviceHour = locationItem.serviceTimes[locationItem.serviceTimes.length - 1];
      serviceHour = serviceHour.substr(0, serviceHour.indexOf(":"));
      nextSunday = nextSunday.hour(+serviceHour);
      let event = {
        title: 'Church at The Meeting House',
        description: 'Join us at The Meeting House on Sunday!',
        location: locationItem.location.address,
        startTime: nextSunday.format(),
        endTime: moment(nextSunday).add(90, "minutes").format()
      }
      return event;
    }
  }

  render() {
    // if (this.state.listData != null && this.state.currentLatLng != null) {
    //   if (this.state.distances == null) {
    //     var service = new this.props.google.maps.DistanceMatrixService()
    //     var destinations = this.state.listData.map((item: any) => {
    //       return (new this.props.google.maps.LatLng(item.location.latitude, item.location.longitude))
    //     })
    //     var start = new this.props.google.maps.LatLng(this.state.currentLatLng.lat, this.state.currentLatLng.lng)

    //     // service.getDistanceMatrix()
    //     service.getDistanceMatrix({ origins: [start], destinations: destinations, travelMode: this.state.travelMode }, (res: any, status: any) => {
    //       console.log(res)
    //       if (status === "OK")
    //         this.setState({ distances: res })
    //     })
    //   }
    // }
    return (
      <div className="SundayMorningItem" >
        <div className="SundayMorningItemDiv1" >
          <div>
            <h1 className="SundayMorningH1"  >{this.state.content.header1}</h1>

            <div className="SundayMorningItemDiv2" >

              <Map google={this.props.google} zoom={6} initialCenter={{ lat: 44, lng: -78.0 }} className="SundayMorningMap" mapTypeControl={false}>
                <Marker icon={CURRENT_LOCATION_URL} position={{ lat: this.state.currentLatLng.lat, lng: this.state.currentLatLng.lng }} />
                {this.state.listData != null ? this.state.listData.map((item: any, index: any) => {
                  return (<Marker key={index} onClick={this.getMarkerClickHandler(item)} icon={this.state.selectedPlace === item ? SITE_PIN_SELECTED_URL : SITE_PIN_URL}
                    position={{ lat: item.location.latitude, lng: item.location.longitude }} />
                  )
                }) : null}

                <InfoWindow marker={this.state.selectedPlaceMarker} visible={true}>
                  {
                    this.state.selectedPlace ? (
                      <div>
                        <div className="SundayMorningMapInfoWindowSiteName">{this.state.selectedPlace.name}</div>
                        <div className="SundayMorningMapInfoWindowAddress">{this.state.selectedPlace.location.address}</div>
                        {this.state.content.alternate === "christmas" ? null : <div className="SundayMorningMapInfoWindowDay">Sundays</div>}
                        {this.state.content.alternate === "christmas" ? <div className="SundayMorningServiceTimes">{this.state.selectedPlace.serviceTimes}</div> :
                          <div className="SundayMorningMapInfoWindowTimes">{this.state.selectedPlace.serviceTimes.map((t: any) => (t + ' am')).join(', ')}</div>}
                      </div>
                    ) : <div></div>
                  }
                </InfoWindow>
              </Map>
            </div>
            <div className="SundayMorningItemDiv3" >

              <div className="SundayMorningFormItemContainer" >
                <Input className="PostalCodeInput" placeholder="Add postal code" onChange={this.handlePostalCodeChange} value={this.state.postalCode} ref={(ref: any) => this.inputControl = ref}></Input>
                <a className="ClearAllButton" onClick={this.clearLocationSelection} tabIndex={0}>Use current location</a>
              </div>

              <div className="SundayMorningItemListData" ref={(ref) => this.siteListScrollContainer = ref}>
                {this.state.listData != null ? this.state.listData.sort((a: any, b: any) => {
                  if (a.distance && b.distance) {
                    return a.distance.duration.value < b.distance.duration.value ? -1 : 1;
                  } else {
                    return a.name.localeCompare(b.name);
                  }
                })
                  .map((item: any, index: any) => {
                    return (
                      <div key={item.id} className="SundayMorningItemDiv5" id={"SITE-" + item.id}>
                        <div className="SundayMorningItemDiv4" >

                          <div>
                            <h3 className={"SundayMorningH3 " + (this.state.selectedPlace === item ? "selected " : " ") + (this.state.content.alternate === "christmas" ? "christmas " : " ")} onClick={this.getSiteClickHandler(item)}>{item.name}</h3>
                            <div className="SundayMorningAddress" dangerouslySetInnerHTML={{ __html: item.location.address.split(",").join("<br/>") }}></div>
                            {/* <div className="SundayMorningDistances" >{this.state.distances != null ? this.state.distances.rows[0].elements[index].distance.text + " away (" + this.state.distances.rows[0].elements[index].duration.text + ")": null}</div> */}
                            <div className="SundayMorningDistances" >{item.distance != null ? item.distance.distance.text + " away (" + item.distance.duration.text + ")" : null}</div>
                            {this.state.content.alternate === "christmas" || this.state.content.alternate === "easter" ? null : <div className="SundayMorningServiceDay">Sundays</div>}
                            {this.state.content.alternate === "christmas" || this.state.content.alternate === "easter" ?
                              <div className="SundayMorningServiceTimes">{item.serviceTimes.map((val: any) => { return <div>{val}</div> })}</div>
                              : <div className="SundayMorningServiceTimes">{item.serviceTimes.map((t: any) => (t + ' am')).join(', ')}</div>}
                          </div>
                          <div className="SundayMorningItemDiv6" >
                            <button className="SundayMorningButton1" onClick={() => this.navigate(item.id)}>Visit Site Page</button>
                          </div>
                        </div>
                        <div className="SundayMorningButtonContainer">
                          <div className="AddToCalendarButtonContainer">
                            <img className="AddToCalendarIcon" src="/static/Calendar.png" alt="Calendar Icon" />
                            <AddToCalendar buttonLabel="Add to Calendar" event={this.getCalendarEventForLocation(item)} ></AddToCalendar>
                          </div>
                          <a href={"mailto:"+item.pastorEmail}><button className="emailButton"><img className="calendarImage"  src="/static/svg/Contact.svg" alt="Contact Icon" />Contact the Pastor</button></a>
                        </div>
                      </div>

                    )
                  }) : null}
              </div>
            </div>
          </div>
        </div>
      </div >
    )

  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0')
})(withRouter(ContentItem))
