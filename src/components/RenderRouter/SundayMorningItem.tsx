
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Marker } from 'google-maps-react';
import { Map } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./SundayMorningItem.scss"
import { Button } from 'react-bootstrap';
import { Input } from 'reactstrap';



interface Props extends RouteComponentProps {
  content: any,
  google: any

}
interface State {
  content: any,
  selectedPlace: any,
  listData: any,
  origin: any,
  travelMode: string,
  currentLatLng: any,
  distances: any
}

export class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null,
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

  onMarkerClick() { }
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
      <div className="ContentItem oneImage" style={{ height: "100vh", position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "80vw" }}>
          <div  >
            <h1 style={{ fontSize: "3vw", fontFamily: "Graphik Web" }} >{this.state.content.header1}</h1>

            <div style={{ position: "absolute", left: "40vw", width: "40vw", height: "90vh" }}>
              <Map google={this.props.google} zoom={6} initialCenter={{
                lat: 44,
                lng: -78.0
              }}
                style={{ left: "0vw", width: "40vw", height: "90vh" }}>
                {this.state.listData != null ? this.state.listData.map((item: any, index: any) => {
                  return (<Marker key={index} onClick={this.onMarkerClick}
                    position={{ lat: item.location.latitude, lng: item.location.longitude }} />
                  )
                }) : null}
              </Map>
            </div>
            <div style={{ position: "absolute", left: "0vw", width: "40vw", height: "100vh" }}>
              <div style={{display:"flex", flexDirection:"row"}}>
              <Input placeholder="Current Location" ></Input>
              <Button>Driving</Button> <Button>Transit</Button> <Button>Bike</Button>
              </div>
              <div style={{overflowY:"auto",height:"80vh"}}>
              {this.state.listData != null ? this.state.listData.map((item: any, index: any) => {
                return (
                  <div style={{width:"40vw",borderBottomWidth:"1px", marginBottom:"5px", borderBottomColor:"#C8C8C8", borderBottomStyle:"solid"}}>
                    <div key={index} style={{ display: "flex", flexDirection: "row" }}>

                      <div>
                        <h3 style={{ fontSize: "2vw", fontFamily: "Graphik Web" }}>{item.name}</h3>
                        <div style={{ fontSize: "1vw", fontFamily: "Graphik Web" }}>{item.location.address}</div>
                        <div style={{ fontSize: "1vw", fontFamily: "Graphik Web" }}>{this.state.distances != null ? this.state.distances.rows[0].elements[index].distance.text + " " + this.state.distances.rows[0].elements[index].duration.text : null}</div>

                      </div>
                      <div style={{ marginLeft: "auto",marginRight:"10px", }}>
                        <Button style={{ borderRadius: "0px", borderWidth: "0px", color: "#ffffff", whiteSpace: "nowrap", backgroundColor: "#000000" }} onClick={() => this.navigate(item.id)}>Visit Site Page</Button>
                      </div>
                    </div>
                    <div>
                      <Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderWidth: "0px", borderRadius: 0, fontSize: "1.5vw", fontFamily: "Graphik Web" }} ><img src="./static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>
                      <Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderWidth: "0px", borderRadius: 0, fontSize: "1.5vw", fontFamily: "Graphik Web" }} ><img src="./static/Contact.png" alt="Contact Icon" />Contact the Pastor</Button>
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
