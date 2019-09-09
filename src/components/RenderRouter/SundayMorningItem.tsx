
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Marker } from 'google-maps-react';
import { Map } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./SundayMorningItem.scss"



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
          if (status == "OK")
            this.setState({ distances: res })
        })
      }
    }
    return (
      <div className="ContentItem oneImage" style={{ height: "100vw", position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "80vw" }}>
          <div  >
            <h1  >{this.state.content.header1}</h1>
            <div style={{ position: "absolute", left: "40vw", width: "40vw", height: "40vw" }}>
              <Map google={this.props.google} zoom={6} initialCenter={{
                lat: 44,
                lng: -78.0
              }}
                style={{ left: "0vw", width: "40vw", height: "40vw" }}>
                {this.state.listData != null ? this.state.listData.map((item: any) => {
                  return (<Marker onClick={this.onMarkerClick}
                    position={{ lat: item.location.latitude, lng: item.location.longitude }} />
                  )
                }) : null}
              </Map>
            </div>
            <div style={{ position: "absolute", left: "0vw", width: "40vw", height: "40vw" }}>
              {this.state.listData != null ? this.state.listData.map((item: any, index: any) => {
                return (
                  <div onClick={() => this.navigate(item.id)}>{item.name}{this.state.distances != null ? " - " + this.state.distances.rows[0].elements[index].distance.text + " " + this.state.distances.rows[0].elements[index].duration.text : null}</div>
                )
              }) : null}
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
