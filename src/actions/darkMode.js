import * as actionTypes from '../constants/actionTypes';

export const toogleDarkMode = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.TOGGLE_DARKMODE
    });
  };
};
