import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeDetails } from '../actions'

import Header from './Header'


class Details extends Component {
	render(){
		let visible = "details hide";
		if (this.props.visible === true) {
			visible = "details show"
		}
		console.log(this.props)
		if(this.props.details.name) {
			const { name, category } = this.props.details;
			const { formattedPhone, twitter } = this.props.details.contact;
			const { address, city, postalCode, lat, lng, state } = this.props.details.location;
			return (
				<div className={visible}>
					<Header details={this.props.visible} />
					<div className="gmap"></div>
					<div className="detail-title">
						<div>{name}</div>
						<div>{category}</div>
					</div>
					<div className="detail-info">
						<div className="address">{address}</div>
						<div className="phone-number">{formattedPhone}</div>
						<div className="twitter">{twitter}</div>
					</div>
				</div>
				)
		}

		return <div></div>
	}
}

function mapStateToProps({ details }) {
	return details
}


export default connect(mapStateToProps)(Details);