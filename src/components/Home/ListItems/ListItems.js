import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem/ListItem';
import AddTodo from './AddTodo/AddTodo';
import Heading from '../../UI/Heading/Heading';
import Loader from '../../UI/Loader/Loader';

const Wrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1.5rem 4rem var(--shadow);
  transition: all 0.2s;
  color: var(--color-text-lighter) !important;
  font-size: 2rem;
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

const ListItems = ({ todos, userId, type }) => {
  let content;
  if (!todos) {
    content = (
      <Wrapper>
        <Loader isWhite />
      </Wrapper>
    );
  } else if (!todos[userId] || !todos[userId].todos) {
    content = (
      <Wrapper>
        <Heading color="white" size="h2">
          You have no todos!
        </Heading>
      </Wrapper>
    );
  } else if (todos[userId].todos.length === 0) {
    content = (
      <Wrapper>
        <Heading color="white" size="h2">
          You have no todos!
        </Heading>
      </Wrapper>
    );
  } else {
    const Data = todos[userId].todos.slice(0).reverse();
    const DataAfterFilter = _getDataAfterFilter(Data, type);
    content = (
      <Wrapper>
        {DataAfterFilter.map(todo => (
          <ListItem key={todo._id} id={todo._id} isFinish={todo.isFinish}>
            {todo.todo}
          </ListItem>
        ))}
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      {content}
      <AddTodo />
    </Wrapper>
  );
};

export default ListItems;
