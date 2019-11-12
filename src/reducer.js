import { combineReducers } from "redux";

import todos from "./reducers/todos";
import darkMode from "./reducers/darkMode";
import auth from "./reducers/auth";

export default combineReducers({
  todos,
  darkMode,
  auth
});
