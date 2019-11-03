import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from './ListItem/ListItem';
import Input from '../../UI/Input/Input';
import AddButton from '../../UI/Button/AddButton';

import MockData from '../../../utils/MockData';

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

const Form = styled.form`
  display: flex;
`;

const _getDataAfterFilter = type => {
  switch (type) {
    case 'finished':
      return MockData.filter(task => task.isFinish);
    case 'unfinished':
      return MockData.filter(task => !task.isFinish);
    case 'importance':
      return MockData.filter(task => task.isImportance);
    default:
      return MockData;
  }
};

const _sortData = Data => {
  return Data.reverse().sort(function(a, b) {
    if (a.isFinish > b.isFinish) {
      return 1;
    }
    if (b.isFinish > a.isFinish) {
      return -1;
    }
    return 0;
  });
};

export default class ListItems extends Component {
  render() {
    const { type } = this.props;
    const Data = _getDataAfterFilter(type);
    const DataAfterSort = _sortData(Data);

    return (
      <Wrapper>
        {DataAfterSort.map(item => (
          <ListItem
            key={item._id}
            isFinish={item.isFinish}
            isImportance={item.isImportance}
          >
            {item.text}
          </ListItem>
        ))}
        <Form>
          <Input placeholder="Add task" type="text" />
          <AddButton type="submit">+</AddButton>
        </Form>
      </Wrapper>
    );
  }
}
