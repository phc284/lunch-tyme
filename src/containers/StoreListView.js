import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchStores } from '../actions';

import StoreListItem from './StoreListItem'

class StoreListView extends Component {


	componentDidMount() {
		this.props.fetchStores();
	}
	
	renderList() {
		if(this.props.stores.restaurants) {
			return this.props.stores.restaurants.map((store, i) => {
				return (<StoreListItem shop={store} key={i} />)
			})
		}
	}

  render() {
    return (
      <div className="storelist-view">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({ stores }) {
	return stores
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchStores }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreListView);