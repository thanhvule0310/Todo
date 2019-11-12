import * as actionTypes from "../constants/actionTypes";
import { updateObject } from "../utils/utility";

const initialState = {
  isDark: false
};

const _toggleDarkMode = (state, action) => {
  return updateObject(state, { isDark: !state.isDark });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DARKMODE:
      console.log(action.payload);
      return _toggleDarkMode(state, action);
    default:
      return state;
  }
};

export default reducer;
