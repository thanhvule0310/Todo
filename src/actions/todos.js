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
