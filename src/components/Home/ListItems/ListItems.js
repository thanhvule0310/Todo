import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem/ListItem';
import AddTodo from './AddTodo/AddTodo';

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

const ListItems = ({ todos }) => {
  return (
    <Wrapper>
      {todos
        ? todos.map(item => (
            <ListItem key={item._id} id={item._id} isFinish={item.isFinish}>
              {item.todo}
            </ListItem>
          ))
        : null}
      <AddTodo />
    </Wrapper>
  );
};

export default ListItems;
