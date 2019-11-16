import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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

const _getDataAfterFilter = (Data, type) => {
  if (Data) {
    switch (type) {
      case 'finished':
        return Data.filter(task => task.isFinish);
      case 'unfinished':
        return Data.filter(task => !task.isFinish);
      default:
        return Data;
    }
  }
};

const _getCountTasks = todos => {
  if (todos) {
    const all = todos.length;
    const finished = todos.filter(task => task.isFinish).length;
    const unFinish = todos.filter(task => !task.isFinish).length;
    return { all, finished, unFinish };
  } else return { all: 0, finished: 0, unFinish: 0 };
};
const Home = ({
  todos,
  match: {
    params: { type }
  },
  userId
}) => {
  let content;
  if (!todos) {
    console.log('Nothing');
  } else if (!todos[userId] || !todos[userId].todos) {
    console.log('No todo');
  } else if (todos[userId].todos.length === 0) {
    console.log('No todo');
  } else {
    content = todos[userId].todos.slice(0).reverse();
  }

  const Data = _getDataAfterFilter(content, type);
  const count = _getCountTasks(content);
  return (
    <Wrapper>
      <GroupItems count={count} />
      <main>
        <ListItems type={type} todos={Data} />
      </main>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`todos/${props.userId}`])
)(Home);
