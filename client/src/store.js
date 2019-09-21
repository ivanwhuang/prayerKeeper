import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// we don't have to specify the exact route inside the reducer's folder since the rootReducer is in the index.js file
import rootReducer from './reducers';

const initialState = {};

// Wrapped in an array, in case we have multiple middleware.
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
