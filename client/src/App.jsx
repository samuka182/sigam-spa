import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import HomePage from './components/home/HomePage';
import RegistrationForm from './components/auth/RegistrationForm';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';

import config from './app.config';

import './css/bootstrap.min.css';
import './css/bootstrap-reset.css';
import './css/font-awesome.min.css'; 
import './css/style.css';

require('jquery');
require('bootstrap');
require('jquery.easing');
require('smoothscroll');

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </main>
      </div>
    );
  }
}