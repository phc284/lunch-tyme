import React, { Component } from 'react'

import config from '../config.js'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
 
 
export class MapContainer extends Component {
	render() {
		console.log(this.props)
		const style = {
			width: '100%',
			height: '180px'
		}
    return (
      <Map 
      	google={this.props.google} 
      	zoom={14}
      	style={style}
      	initialCenter={{
      		lat: this.props.lat,
      		lng: this.props.lng
      	}}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
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
  apiKey: (config.API_KEY)
})(MapContainer)