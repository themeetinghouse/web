
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
}

export class ContentItem extends React.Component<Props, State>  {
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
      currentLatLng: null,
      distances: null
    }
    this.navigate = this.navigate.bind(this);
    this.getGeoLocation()
    fetch('./static/data/locations.json').then(function (response) {
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
 
  getEmailLinkHandler = (item:any) => (
    (event: any) => {
      window.location.href="mailto:" + item.pastorEmail;
    }
  )

  getMarkerClickHandler = (item:any) => (props:any, marker:any) => {
    this.setState({selectedPlaceMarker: marker, selectedPlace: item});
  }

  onInfoWindowClose() { }
  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          }))
        }
      )
    } else {
      console.log("error")
    }
  }

  getCalendarEventForLocation(locationItem:any){
    let nextSunday = (moment().day() === 0 ? moment().add(1, "week") : moment().day(0)).startOf("day");
    let serviceHour = locationItem.serviceTimes[locationItem.serviceTimes.length-1];
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

  render() {
    if (this.state.listData != null && this.state.currentLatLng != null) {
      if (this.state.distances == null) {
        var service = new this.props.google.maps.DistanceMatrixService()
        var destinations = this.state.listData.map((item: any) => {
          return (new this.props.google.maps.LatLng(item.location.latitude, item.location.longitude))
        })
        var start = new this.props.google.maps.LatLng(this.state.currentLatLng.lat, this.state.currentLatLng.lng)

        // service.getDistanceMatrix()
        service.getDistanceMatrix({ origins: [start], destinations: destinations, travelMode: this.state.travelMode }, (res: any, status: any) => {
          console.log(res)
          if (status === "OK")
            this.setState({ distances: res })
        })
      }
    }
    return (
      <div className="SundayMorningItem" >
        <div className="SundayMorningItemDiv1" >
          <div  >
            <h1 className="SundayMorningH1"  >{this.state.content.header1}</h1>

            <div className="SundayMorningItemDiv2" >

            <Map google={this.props.google} zoom={6} initialCenter={{lat: 44, lng: -78.0}} className="SundayMorningMap">
              {this.state.listData != null ? this.state.listData.map((item: any, index: any) => {
                  return (<Marker key={index} onClick={this.getMarkerClickHandler(item)}
                    position={{ lat: item.location.latitude, lng: item.location.longitude }} />
                  )
                }) : null}

              <InfoWindow marker={this.state.selectedPlaceMarker} visible={true}>
                { 
                  this.state.selectedPlace ? (
                    <div>
                      <div className="SundayMorningMapInfoWindowDiv1">{this.state.selectedPlace.name}</div>
                      <div className="SundayMorningMapInfoWindowDiv2">{this.state.selectedPlace.location.address}</div>
                      <div className="SundayMorningMapInfoWindowDiv3">Service times: Sundays @ {this.state.selectedPlace.serviceTimes.map((t:any)=>(t+' am')).join(', ')}</div>
                    </div>
                  ) : <div></div>
                }           
              </InfoWindow>
            </Map>
            </div>
            <div className="SundayMorningItemDiv3" >
              <div className="SundayMorningItemDiv4" >
                <Input placeholder="Current Location" ></Input>
                <button className="SundayMorningButton">Driving</button> 
                <button className="SundayMorningButton">Transit</button> 
                <button className="SundayMorningButton">Bike</button>
              </div>
              <div className="SundayMorningItemListData" >
                {this.state.listData != null ? this.state.listData.sort((a:any,b:any)=>{return a.name>b.name}).map((item: any, index: any) => {
                  return (
                    <div key={item.id} className="SundayMorningItemDiv5" >
                      <div className="SundayMorningItemDiv4" >

                        <div>
                          <h3 className="SundayMorningH3" >{item.name}</h3>
                          <div className="SundayMorningAddress" >{item.location.address}</div>
                          <div className="SundayMorningDistances" >{this.state.distances != null ? this.state.distances.rows[0].elements[index].distance.text + " " + this.state.distances.rows[0].elements[index].duration.text : null}</div>

                        </div>
                        <div className="SundayMorningItemDiv6" >
                          <button className="SundayMorningButton1" onClick={() => this.navigate(item.id)}>Visit Site Page</button>
                        </div>
                      </div>
                      <div>
                        <div className="AddToCalendarButtonContainer">
                          <img className="SundaMorningIcon" src="/static/Calendar.png" alt="Calendar Icon" />                          
                          <AddToCalendar event={this.getCalendarEventForLocation(item)} ></AddToCalendar>
                        </div>
                        <button className="SundayMorningButton2" onClick={this.getEmailLinkHandler(item)}><img className="SundaMorningIcon" src="/static/Contact.png" alt="Contact Icon" />Contact the Pastor</button>
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
