import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import todos from './reducers/todos';
import darkMode from './reducers/darkMode';
import auth from './reducers/auth';

export default combineReducers({
  todos,
  darkMode,
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
