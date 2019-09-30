import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import keeper from './keeper';
import prayers from './prayers';
import posts from './posts';

export default combineReducers({
  alert,
  auth,
  profile,
  keeper,
  prayers,
  posts
});
