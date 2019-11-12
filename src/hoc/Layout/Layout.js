import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Aux from "../Auxilary/Auxilary";
import Toolbar from "../../components/Toolbar/Toolbar";
import lightTheme from "../../utils/styled/lightTheme";
import darkTheme from "../../utils/styled/darkTheme";
import GlobalStyles from "../../utils/styled/global";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    const { isDark } = this.props;
    return (
      <Aux>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Toolbar />
          <main>{this.props.children}</main>
          <GlobalStyles />
        </ThemeProvider>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  isDark: state.darkMode.isDark
});

export default connect(mapStateToProps, null)(Layout);
