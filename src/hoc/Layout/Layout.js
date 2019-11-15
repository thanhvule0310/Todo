import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Toolbar/Toolbar';
import lightTheme from '../../utils/styled/lightTheme';
import darkTheme from '../../utils/styled/darkTheme';
import GlobalStyles from '../../utils/styled/global';

export const Layout = ({ isDark, loggedId, children }) => {
  return (
    <Aux>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Toolbar loggedId={loggedId} />
        <main>{children}</main>
        <GlobalStyles />
      </ThemeProvider>
    </Aux>
  );
};

const mapStateToProps = ({ darkMode, firebase }) => ({
  isDark: darkMode.isDark,
  loggedId: firebase.auth
});

export default connect(mapStateToProps, null)(Layout);
