import * as actionTypes from "../constants/actionTypes";
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: actionTypes.CREATE_PROJECT, project });
  };
};
