import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_MY_REQUESTS,
  ADD_MY_REQUEST,
  DELETE_MY_REQUEST,
  PRAYERS_ERROR,
  GET_USER_REQUESTS
} from './types';

// Get current user's prayer requests
export const getMyRequests = () => async dispatch => {
  try {
    const res = await axios.get('/api/prayers');

    dispatch({
      type: GET_MY_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRAYERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get a user's prayer requests by userId
export const getUserRequests = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/prayers/user/${userId}`);

    dispatch({
      type: GET_USER_REQUESTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRAYERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a prayer request for current user
export const addMyRequest = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/prayers', formData, config);

    dispatch({
      type: ADD_MY_REQUEST,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PRAYERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete a prayer request for current user
export const deleteMyRequest = requestId => async dispatch => {
  try {
    await axios.delete(`/api/prayers/${requestId}`);

    dispatch({
      type: DELETE_MY_REQUEST,
      payload: requestId
    });
  } catch (err) {
    dispatch({
      type: PRAYERS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
