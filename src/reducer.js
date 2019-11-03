import { combineReducers } from 'redux';

import todo from './reducers/todo';
import darkMode from './reducers/darkMode';
import auth from './reducers/auth';

export default combineReducers({
  todo,
  darkMode,
  auth
});
