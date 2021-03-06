import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; 
 
export class MapContainer extends Component {
	render() {
		const style = {
			width: '100%',
			height: '180px'
		}
    return (
      <Map 
      	google={this.props.google} 
      	zoom={14}
      	style={style}
      	center={{
      		lat: this.props.lat,
      		lng: this.props.lng
      	}}
      >
        <Marker 
        	onClick={this.onMarkerClick}
          name={'Current location'} 
          position={{lat: this.props.lat, lng: this.props.lng}}
        />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)