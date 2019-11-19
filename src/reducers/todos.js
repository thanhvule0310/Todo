import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../utils/utility';

const initialState = {
  error: null,
  loading: false,
  addTodo: { error: null, loading: false },
  deleteTodo: {
    error: null,
    loading: false
  },
  updateTodo: {
    error: null,
    loading: false
  }
};

const _addStart = (state, action) => {
  return updateObject(state, {
    addTodo: { ...state.addTodo, loading: true }
  });
};
const _addSuccess = (state, action) => {
  return updateObject(state, {
    addTodo: { ...state.addTodo, loading: false, error: false }
  });
};
const _addFail = (state, action) => {
  return updateObject(state, {
    addTodo: { ...state.addTodo, loading: false, error: action.payload }
  });
};

const _deleteStart = (state, action) => {
  return updateObject(state, {
    deleteTodo: { ...state.deleteTodo, loading: true }
  });
};
const _deleteSuccess = (state, action) => {
  return updateObject(state, {
    deleteTodo: { ...state.deleteTodo, loading: false, error: false }
  });
};
const _deleteFail = (state, action) => {
  return updateObject(state, {
    deleteTodo: { ...state.deleteTodo, loading: false, error: action.payload }
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_START:
      return _addStart(state, action);
    case actionTypes.ADD_TODO_SUCCESS:
      return _addSuccess(state, action);
    case actionTypes.ADD_TODO_FAIL:
      return _addFail(state, action);
    case actionTypes.DELETE_TODO_START:
      return _deleteStart(state, action);
    case actionTypes.DELETE_TODO_SUCCESS:
      return _deleteSuccess(state, action);
    case actionTypes.DELETE_TODO_FAIL:
      return _deleteFail(state, action);

    default:
      return state;
  }
};
export default reducer;
