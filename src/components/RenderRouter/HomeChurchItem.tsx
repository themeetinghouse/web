
import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Marker } from 'google-maps-react';
import { Map } from 'google-maps-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import "./HomeChurchItem.scss"



interface Props extends RouteComponentProps  {
  content: any,
  google: any

}
interface State {
  content: any,
  selectedPlace: any,
  listData: any
}

export class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null,
      listData: null
    }
    this.navigate = this.navigate.bind(this);

  /*  fetch('./static/data/locations.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ listData: myJson });
      })*/
  }
  navigate(to: string) {
    this.props.history.push(to, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

  }

  onMarkerClick() { }
  onInfoWindowClose() { }

  render() {
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
              {this.state.listData != null ? this.state.listData.map((item: any) => {
                return (
                  <div onClick={() => this.navigate(item.id)}>{item.name}</div>
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
