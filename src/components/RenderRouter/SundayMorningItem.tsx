
import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
//import {ProviderProps} from 'google-maps-react';
import { Marker }from 'google-maps-react';
import {Map} from 'google-maps-react';
import "./SundayMorningItem.scss"



interface Props  {
  content: any,
  google:any

}
interface State {
  content: any,
  selectedPlace: any
}

export class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    console.log(props)
    this.state = {
      content: props.content,
      selectedPlace: null
    }
  }

  onMarkerClick() { }
  onInfoWindowClose() { }

  render() {
    return (
      <div className="ContentItem oneImage" style={{ height:"100vw", position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "80vw" }}>
          <div  >
            <h1  >{this.state.content.header1}</h1>
            <Map google={this.props.google} zoom={14} className="sunday-morning-map" style={{left:"40vw",width:"40vw",height:"40vw"}}>

              <Marker onClick={this.onMarkerClick}
              />


            </Map>
          </div>
        </div>
      </div>
    )

  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0')
})(ContentItem)
