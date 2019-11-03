import * as actionTypes from '../constants/actionTypes.js';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFailure = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
