import { FETCH_STORES } from '../actions'

export default function (state = {stores: {}}, action) {
  switch (action.type) {
    case FETCH_STORES:
      return {...state, stores: action.payload.data};
    default:
      return state;
  }
}
