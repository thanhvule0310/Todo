import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import { PublicRoute, PrivateRoute } from './helpers/Route';
import Logout from './containers/Auth/Logout';
class App extends Component {
  render() {
    return (
      <Layout>
        <PrivateRoute exact path={`/home/:type`} component={Home} />
        <PublicRoute exact path={'/signin'} component={SignIn} />
        <PublicRoute exact path={'/signup'} component={SignUp} />
        <PrivateRoute exact path={`/logout`} component={Logout} />
        <Redirect to="/home/all" />
      </Layout>
    );
  }
}

export default App;
