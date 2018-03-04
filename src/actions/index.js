import axios from 'axios';

export const FETCH_STORES = 'FETCH_STORES';
export const OPEN_DETAILS = 'OPEN_DETAILS';
export const CLOSE_DETAILS = 'CLOSE_DETAILS';

export function fetchStores() {
	const request = axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json');

	return {
		type: FETCH_STORES,
		payload: request
	}
}

export function openDetails (store) {
	return {
		type: OPEN_DETAILS,
		payload: store
	} 
}

export function closeDetails () {
	return {
		type: CLOSE_DETAILS,
	} 
}