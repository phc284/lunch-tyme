import axios from 'axios';

export const FETCH_STORES = 'FETCH_STORES';
export const OPEN_DETAILS = 'OPEN_DETAILS';

export function fetchStores() {
	const request = axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json');

	return {
		type: FETCH_STORES,
		payload: request
	}
}

export function openDetails (store) {
	console.log(store)
	return {
		type: OPEN_DETAILS,
		payload: store
	} 
}