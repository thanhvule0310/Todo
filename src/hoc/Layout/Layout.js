import React from 'react';
// import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Toolbar/Toolbar';

export const Layout = ({ isDark, loggedId, children }) => {
  return (
    <Aux>
      <Toolbar loggedId={loggedId} />
      <main>{children}</main>
    </Aux>
  );
};

const mapStateToProps = ({ darkMode, firebase }) => ({
  isDark: darkMode.isDark,
  loggedId: firebase.auth
});

export default connect(mapStateToProps, null)(Layout);
