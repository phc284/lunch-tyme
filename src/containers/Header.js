import React, { Component } from 'react';
import MapIcon from '../Cuts/icon_map@2x.png';
import BackIcon from '../Cuts/ic_webBack@2x.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeDetails } from '../actions'

class Header extends Component {

	render(){
		if(this.props.details) {
	    return (
	      <div className="header">
	      	<img className="back" src={BackIcon} alt="" onClick={() => {this.props.closeDetails()}}/>
	      	<span>Lunch Tyme</span>
	      	<img className="map" src={MapIcon} alt=""/>
	      </div>
	    );
		} else {
			return (
	      <div className="header">
	      	<span>Lunch Tyme</span>
	      	<img className="map" src={MapIcon} alt=""/>
	      </div>
	    );
		}
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ closeDetails }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)					