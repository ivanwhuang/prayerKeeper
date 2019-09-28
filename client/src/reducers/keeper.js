import {
  GET_KEEPER,
  KEEPER_ERROR,
  CLEAR_KEEPER,
  ADD_REQUEST,
  DELETE_REQUEST
} from '../actions/types';

const initialState = {
  prayerList: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_KEEPER:
      return {
        ...state,
        prayerList: payload,
        loading: false
      };
    case ADD_REQUEST:
      return {
        ...state,
        prayerList: payload,
        loading: false
      };
    case DELETE_REQUEST:
      return {
        ...state,
        prayerList: state.prayerList.filter(request => request._id !== payload),
        loading: false
      };
    case CLEAR_KEEPER:
      return {
        ...state,
        keeper: [],
        loading: true
      };
    case KEEPER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
