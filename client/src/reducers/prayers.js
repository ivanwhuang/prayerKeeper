import {
  GET_MY_REQUESTS,
  GET_USER_REQUESTS,
  ADD_MY_REQUEST,
  DELETE_MY_REQUEST,
  PRAYERS_ERROR
} from '../actions/types';

const initialState = {
  prayerRequests: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MY_REQUESTS:
    case GET_USER_REQUESTS:
      return {
        ...state,
        prayerRequests: payload,
        loading: false
      };
    case ADD_MY_REQUEST:
      return {
        ...state,
        prayerRequests: [payload, ...state.prayerRequests],
        loading: false
      };
    case DELETE_MY_REQUEST:
      return {
        ...state,
        prayerRequests: state.prayerRequests.filter(req => req._id !== payload),
        loading: false
      };
    case PRAYERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
