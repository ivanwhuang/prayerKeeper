import React, { Fragment } from 'react';

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

import './App.css';

const App = () => {
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
