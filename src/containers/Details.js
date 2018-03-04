import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeDetails } from '../actions'


class Details extends Component {
	render(){
		let visible = "details hide";
		if (this.props.visible === true) {
			visible = "details show"
		}
		console.log(this.props)
		return (
			<div className={visible} onClick={() => {this.props.closeDetails()}}>
			</div>
			)
	}
}

function mapStateToProps({ details }) {
	return details
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ closeDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)