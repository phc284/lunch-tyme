import { OPEN_DETAILS } from '../actions'
import { CLOSE_DETAILS } from '../actions'

export default function (state = {details: {}, visible: false}, action) {
  switch (action.type) {
    case OPEN_DETAILS:
      return {...state, details: action.payload, visible: true};
    case CLOSE_DETAILS:
    	return {...state, visible: false}
    default:
      return state;
  }
}
