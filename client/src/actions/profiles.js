import axios from 'axios';

import { GET_PROFILES, PROFILES_ERROR } from './types';

// Get profiles
export const getProfiles = () => async dispatch => {
  try {
    // dispatch({ type: CLEAR_PROFILE });

    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
