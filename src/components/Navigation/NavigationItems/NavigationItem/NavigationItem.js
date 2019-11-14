import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  width: 100%;
  color: var(--color-main);
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  &:hover,
  &:active {
    color: var(--color-green);
    box-shadow: 0 1rem 2rem var(--shadow);
    transform: rotate(-3deg) scale(1.2);
  }
`;

export default class NavigationItem extends Component {
  render() {
    return (
      <NavLinkStyled
        exact
        activeStyle={{ fontWeight: 'bold' }}
        to={this.props.to}
      >
        {this.props.children}
      </NavLinkStyled>
    );
  }
}
