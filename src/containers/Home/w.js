import React, { Component } from 'react';
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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  async componentDidMount() {
    const { todos, userId } = this.props;
    await this.setState({ data: todos[userId].todos });
  }

  _getDataAfterFilter = (Data, type) => {
    switch (type) {
      case 'finished':
        return Data.filter(task => task.isFinish);
      case 'unfinished':
        return Data.filter(task => !task.isFinish);
      case 'importance':
        return Data.filter(task => task.isImportance);
      default:
        return Data;
    }
  };

  _getCountTasks = todos => {
    if (todos) {
      const all = todos.length;
      const finished = todos.filter(task => task.isFinish).length;
      const unFinish = todos.filter(task => !task.isFinish).length;
      return { all, finished, unFinish };
    } else return { all: 0, finished: 0, unFinish: 0 };
  };

  render() {
    const { data } = this.state;
    console.log(data);
    const count = this._getCountTasks(data);
    const {
      match: {
        params: { type }
      }
    } = this.props;

    const Data = this._getDataAfterFilter(data, type);

    return (
      <Wrapper>
        <GroupItems count={count} />
        <main>
          <ListItems type={type} todos={Data} />
        </main>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`todos/${props.userId}`])
)(Home);
