import * as actionTypes from '../constants/actionTypes';

// Add a todo
export const addTodo = data => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actionTypes.ADD_TODO_START });
  try {
    const res = await firestore
      .collection('todos')
      .doc(userId)
      .get();
    const newTodo = {
      _id: new Date().valueOf(),
      todo: data.todo,
      isFinish: false
    };
    if (!res.data()) {
      firestore
        .collection('todos')
        .doc(userId)
        .set({
          todos: [newTodo]
        });
    } else {
      firestore
        .collection('todos')
        .doc(userId)
        .update({
          todos: [...res.data().todos, newTodo]
        });
    }
    dispatch({ type: actionTypes.ADD_TODO_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.ADD_TODO_FAIL, payload: err.message });
  }
};

// Delete todo
export const deleteTodo = id => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  console.log(id);
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actionTypes.DELETE_TODO_START });
  try {
    const res = await firestore
      .collection('todos')
      .doc(userId)
      .get();
    const previousTodos = res.data().todos;
    const newTodos = previousTodos.filter(todo => !Object.is(todo._id, id));
    console.log(newTodos);
    await firestore
      .collection('todos')
      .doc(userId)
      .update({
        todos: newTodos
      });
    dispatch({ type: actionTypes.DELETE_TODO_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.DELETE_TODO_FAIL, payload: err.message });
  }
};

export const updateTodo = (id, data) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actionTypes.ADD_TODO_START });
  try {
    const res = await firestore
      .collection('todos')
      .doc(userId)
      .get();
    let { todos } = res.data();

    const index = todos.findIndex(todo => todo._id === id);
    console.log({ index });

    if (data.todo) todos[index].todo = data.todo;
    if (typeof data.isFinish !== 'undefined')
      todos[index].isFinish = data.isFinish;
    await firestore
      .collection('todos')
      .doc(userId)
      .update({
        todos
      });
    dispatch({ type: actionTypes.ADD_TODO_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actionTypes.ADD_TODO_FAIL, payload: err.message });
  }
};
