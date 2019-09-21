import React, { useEffect } from 'react';

// Vanilla Bootstrap stylesheet is requried to use some of React-Boostrap components
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CustomNavbar from './components/layout/CustomNavbar';
import Landing from './components/layout/Landing';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // The useEffect hook  is basically the componentDidMount from Class Components but for functional components
  // The useEffect hook will rerun upon re-render, but we only want to loadUser() only once. To prevent this,
  // pass in an empty array for the second argument, and then this hook basically acts the same as ComponentDidMount
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <CustomNavbar />
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
