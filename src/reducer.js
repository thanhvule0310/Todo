import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

import todo from './reducers/todo';
import darkMode from './reducers/darkMode';
import auth from './reducers/auth';

export default combineReducers({
  todo,
  darkMode,
  auth,
  firebase: firebaseReducer
});
