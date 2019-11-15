import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../utils/utility';

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  },
  recoveryPassword: { error: null, loading: false }
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
  return updateObject(state, {
    error: null,
    loading: false,
    verifyEmail: { ...state.verifyEmail, loading: false, error: null },
    recoveryPassword: { ...state.recoveryPassword, loading: false, error: null }
  });
};

const _verifyStart = (state, action) => {
  return updateObject(state, {
    verifyEmail: { ...state.verifyEmail, loading: true }
  });
};

const _verifySuccess = (state, action) => {
  return updateObject(state, {
    verifyEmail: { ...state.verifyEmail, loading: false, error: false }
  });
};

const _verifyFail = (state, action) => {
  return updateObject(state, {
    recoveryEmail: {
      ...state.verifyEmail,
      loading: false,
      error: action.payload
    }
  });
};

const _recoveryStart = (state, action) => {
  return updateObject(state, {
    recoveryPassword: { ...state.recoveryPassword, loading: true }
  });
};

const _recoverySuccess = (state, action) => {
  return updateObject(state, {
    recoveryPassword: {
      ...state.recoveryPassword,
      loading: false,
      error: false
    }
  });
};

const _recoveryFail = (state, action) => {
  return updateObject(state, {
    recoveryPassword: {
      ...state.recoveryPassword,
      loading: false,
      error: action.payload
    }
  });
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
    case actionTypes.VERTIFY_START:
      return _verifyStart(state, action);
    case actionTypes.VERTIFY_SUCCESS:
      return _verifySuccess(state, action);
    case actionTypes.VERTIFY_FAIL:
      return _verifyFail(state, action);
    case actionTypes.RECOVERY_START:
      return _recoveryStart(state, action);
    case actionTypes.RECOVERY_SUCCESS:
      return _recoverySuccess(state, action);
    case actionTypes.RECOVERY_FAIL:
      return _recoveryFail(state, action);
    default:
      return state;
  }
};

export default reducer;
