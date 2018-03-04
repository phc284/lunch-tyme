import { OPEN_DETAILS } from '../actions'

export default function (state = {details: {}, visible: false}, action) {
  switch (action.type) {
    case OPEN_DETAILS:
      return {...state, details: action.payload.data, visible: true};
    default:
      return state;
  }
}
