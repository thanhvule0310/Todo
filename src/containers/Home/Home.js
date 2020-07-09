import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import GroupItems from '../../components/Home/GroupItems/GroupItems';
import ListItems from '../../components/Home/ListItems/ListItems';

const Wrapper = styled.div`
  height: calc(100vh - 5rem);
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

const _getCountTasks = (data, userId) => {
  if (!data) {
    return { all: 0, finished: 0, unFinish: 0 };
  } else if (!data[userId] || !data[userId].todos) {
    return { all: 0, finished: 0, unFinish: 0 };
  } else if (data[userId].todos.length === 0) {
    return { all: 0, finished: 0, unFinish: 0 };
  } else {
    const todos = data[userId].todos.slice(0);
    const all = todos.length;
    const finished = todos.filter(task => task.isFinish).length;
    const unFinish = todos.filter(task => !task.isFinish).length;
    return { all, finished, unFinish };
  }
};
const Home = ({
  todos,
  match: {
    params: { type }
  },
  userId
}) => {
  const count = _getCountTasks(todos, userId);
  return (
    <Wrapper>
      <GroupItems count={count} />
      <main>
        <ListItems type={type} todos={todos} userId={userId} />
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
