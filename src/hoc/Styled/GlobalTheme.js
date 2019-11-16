import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import lightTheme from '../../utils/styled/lightTheme';
import darkTheme from '../../utils/styled/darkTheme';
import GlobalStyles from '../../utils/styled/global';

const GlobalTheme = ({ children, isDark }) => {
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
const mapStateToProps = ({ darkMode }) => ({
  isDark: darkMode.isDark
});

export default connect(mapStateToProps, null)(GlobalTheme);
