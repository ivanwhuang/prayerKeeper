import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import profiles from './profiles';
import keeper from './keeper';
import prayers from './prayers';
import posts from './posts';

export default combineReducers({
  alert,
  auth,
  profile,
  profiles,
  keeper,
  prayers,
  posts
});
