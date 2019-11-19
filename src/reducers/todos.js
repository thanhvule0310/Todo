import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../utils/utility';

const initialState = {
  todos: [
    { _id: 1, text: 'Do home work', isImportance: true, isFinish: false },
    { _id: 2, text: 'Play chess', isImportance: false, isFinish: true },
    { _id: 3, text: 'Go to work', isImportance: true, isFinish: true },
    { _id: 4, text: 'Take out gabage', isImportance: false, isFinish: false },
    { _id: 5, text: 'Push to github', isImportance: true, isFinish: true },
    { _id: 6, text: 'Turn off my pc', isImportance: true, isFinish: false },
    { _id: 7, text: 'Drop windows 10', isImportance: true, isFinish: false },
    { _id: 8, text: 'Newest', isImportance: true, isFinish: false },
    { _id: 9, text: 'Haha that is', isImportance: true, isFinish: false }
  ],
  error: null,
  loading: false,
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
  return updateObject(state, { loading: true });
};
const _addSuccess = (state, action) => {
  return updateObject(state, { loading: false, error: false });
};
const _addFail = (state, action) => {
  return updateObject(state, { loading: false, error: action.payload });
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
