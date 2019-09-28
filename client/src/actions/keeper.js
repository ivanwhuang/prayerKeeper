import axios from 'axios';
import { setAlert } from './alert';

import { GET_KEEPER, KEEPER_ERROR, ADD_REQUEST, DELETE_REQUEST } from './types';

// Get current user's keeper
export const getMyKeeper = () => async dispatch => {
  try {
    const res = await axios.get('/api/keeper');

    dispatch({
      type: GET_KEEPER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: KEEPER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add prayer request to Keeper
export const addRequest = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post('/api/keeper', formData, config);

    dispatch({
      type: ADD_REQUEST,
      payload: res.data
    });

    dispatch(setAlert('New Prayer Request Added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: KEEPER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete prayer request from Keeper
export const deleteRequest = requestId => async dispatch => {
  try {
    await axios.delete(`/api/keeper/${requestId}`);

    dispatch({
      type: DELETE_REQUEST,
      payload: requestId
    });

    dispatch(setAlert('Prayer request removed', 'success'));
  } catch (err) {
    dispatch({
      type: KEEPER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
