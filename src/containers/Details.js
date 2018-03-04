import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeDetails } from '../actions'

import Header from './Header';
import Map from '../components/Map'


class Details extends Component {
	render(){
		let visible = "details hide";
		if (this.props.visible === true) {
			visible = "details show"
		}
		// console.log(this.props)
		if(this.props.details.name) {
			const { name, category } = this.props.details;
			let phoneNumber, twitter = '';
			if (this.props.details.contact) {
				phoneNumber = this.props.details.contact.formattedPhone;
				twitter = this.props.details.contact.twitter;			
			}
			const { address, city, postalCode, lat, lng, state } = this.props.details.location;
			return (
				<div className={visible}>
					<Header details={this.props.visible} />
					<div className="gmap">
						<Map 
							lat={lat}
							lng={lng}
						/>
					</div>
					<div className="detail-title">
						<div>{name}</div>
						<div>{category}</div>
					</div>
					<div className="detail-info">
						<div className="address">{address}</div>
						<div className="phone-number">{phoneNumber}</div>
						<div className="twitter">{twitter}</div>
					</div>
				</div>
				)
		}

		return <div className={visible}></div>
	}
}

function mapStateToProps({ details }) {
	return details
}


export default connect(mapStateToProps)(Details);