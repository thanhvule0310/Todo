import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import Logout from './containers/Auth/Logout';
import VerifyEmail from './containers/Auth/VerifyEmail';
import RecoverPassword from './containers/Auth/RecoverPassword';

const App = ({ loggedIn, emailVerified }) => {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/home/:type" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/home/all" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recover-password" component={RecoverPassword} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
