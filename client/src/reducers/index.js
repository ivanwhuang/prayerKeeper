import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import keeper from './keeper';

export default combineReducers({
  alert,
  auth,
  profile,
  keeper
});
