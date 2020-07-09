import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Toggle from '../UI/Toggle/Toggle';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 2rem;
  background-color: var(--color-white);
  box-shadow: 0 1.5rem 4rem var(--shadow);
`;

const Toolbar = ({ loggedId }) => (
  <Header>
    <Link to='/home/all'>
      <Logo />
    </Link>
    <NavigationItems loggedId={loggedId} />
    <Toggle />
  </Header>
);

export default Toolbar;
