import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../utils/utility';

const initialState = {
  error: null,
  loading: false
};

const _authStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const _authFail = (state, action) => {
  return updateObject(state, { error: action.payload });
};
const _authSuccess = (state, action) => {
  return updateObject(state, { error: false });
};
const _authEnd = (state, action) => {
  return updateObject(state, { loading: false });
};
const _cleanMessage = (state, action) => {
  return updateObject(state, { error: null, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return _authStart(state, action);
    case actionTypes.AUTH_FAIL:
      return _authFail(state, action);
    case actionTypes.AUTH_SUCCESS:
      return _authSuccess(state, action);
    case actionTypes.AUTH_END:
      return _authEnd(state, action);
    case actionTypes.CLEAN_MESSAGE:
      return _cleanMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
