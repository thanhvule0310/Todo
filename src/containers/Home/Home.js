import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import GroupItems from "../../components/Home/GroupItems/GroupItems";
import ListItems from "../../components/Home/ListItems/ListItems";

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
  _getDataAfterFilter = (Data, type) => {
    switch (type) {
      case "finished":
        return Data.filter(task => task.isFinish);
      case "unfinished":
        return Data.filter(task => !task.isFinish);
      case "importance":
        return Data.filter(task => task.isImportance);
      default:
        return Data;
    }
  };

  _sortData = Data => {
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

  _getCountTasks = todos => {
    const all = todos.length;
    const importance = todos.filter(task => task.isImportance).length;
    const finished = todos.filter(task => task.isFinish).length;
    const unFinish = todos.filter(task => !task.isFinish).length;
    return { all, importance, finished, unFinish };
  };

  render() {
    const { todos } = this.props;
    const count = this._getCountTasks(todos);
    const {
      match: {
        params: { type }
      }
    } = this.props;

    const Data = this._getDataAfterFilter(todos, type);
    const DataAfterSort = this._sortData(Data);

    return (
      <Wrapper>
        <GroupItems count={count} />
        <main>
          <ListItems type={type} todos={DataAfterSort} />
        </main>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, null)(Home);
