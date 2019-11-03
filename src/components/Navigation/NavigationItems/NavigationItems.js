import React, { Component } from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem/NavigationItem';

const Ul = styled.ul``;

const Li = styled.li`
  list-style: none;
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    padding-right: 7rem;
    &::after {
      content: '/';
      color: var(--color-main);
      font-size: 1.6rem;
      font-weight: 900;
      position: absolute;
      top: 0%;
      right: calc(7rem / 2);
    }

    @media ${props => props.theme.mediaQueries.medium} {
      padding-right: 2rem;
      &::after {
        right: calc(2rem / 2);
      }
    }
  }
`;

export default class NavigationItems extends Component {
  render() {
    return (
      <div>
        <Ul>
          <Li>
            <NavigationItem to="/home/all">home</NavigationItem>
          </Li>
          <Li>
            <NavigationItem to="/signin">login</NavigationItem>
          </Li>
          <Li>
            <NavigationItem to="/signup">sign up</NavigationItem>
          </Li>
        </Ul>
      </div>
    );
  }
}
