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
  padding: 0.5rem;
  box-sizing: border-box;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover,
  &:active {
    border-bottom: 2px solid var(--color-main);
  }
`;

export default class NavigationItem extends Component {
  render() {
    return (
      <NavLinkStyled exact to={this.props.to}>
        {this.props.children}
      </NavLinkStyled>
    );
  }
}
