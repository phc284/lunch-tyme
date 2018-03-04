import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openDetails } from '../actions';

import BG_Gradient from '../Cuts/cellGradientBackground@2x.png';

class StoreListItem extends Component {

  	render() {
  		const {backgroundImageURL, name, category} = this.props.shop;
  		const restaurant = this.props.shop;
	    return (
	      <div className="storelist-item" onClick={() => {this.props.openDetails(restaurant)}}>
	      	<div className="image-container">
	      		<img className="store-img" src={backgroundImageURL} alt="" />
	      		<img className="gradient" src={BG_Gradient} alt="" />
	      	</div>
	      	<div className="store-labels">
		      	<div>{name}</div>
		      	<div>{category}</div>
		      </div>
	      </div>
	    );
  	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openDetails }, dispatch)
}

export default connect(null, mapDispatchToProps)(StoreListItem);
