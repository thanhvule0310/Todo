import React, { Component } from 'react';
import styled from 'styled-components';
import GroupItems from '../../components/Home/GroupItems/GroupItems';
import ListItems from '../../components/Home/ListItems/ListItems';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 70%;
  justify-content: center;
  grid-gap: 3rem;
  padding: 2rem;

  @media ${props => props.theme.mediaQueries.medium} {
    padding: 2rem;
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

class Home extends Component {
  render() {
    const {
      match: {
        params: { type }
      }
    } = this.props;

    return (
      <Wrapper>
        <GroupItems />
        <main>
          <ListItems type={type} />
        </main>
      </Wrapper>
    );
  }
}

export default Home;
