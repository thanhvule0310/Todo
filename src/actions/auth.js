import * as actionTypes from '../constants/actionTypes';

//* Signup
export const signUp = (data, history) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const { email, password, name } = data;
  dispatch({ type: actionTypes.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    //? Send Verify Email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        name
      });
    await localStorage.setItem('token', res.user.uid);
    history.push('/home/all');
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actionTypes.AUTH_END });
};

//* Signin
export const signIn = (data, history) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const { email, password } = data;
  dispatch({ type: actionTypes.AUTH_START });
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    await localStorage.setItem('token', res.user.uid);
    history.push('/home/all');
    dispatch({ type: actionTypes.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actionTypes.AUTH_END });
};

//* Logout

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    await localStorage.removeItem('token');
  } catch (err) {
    console.log(err.message);
  }
};

//* Clear message
export const cleanMessage = () => ({
  type: actionTypes.CLEAN_MESSAGE
});

//* Vertify Email

export const vertifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: actionTypes.VERTIFY_START });
  const firebase = getFirebase();
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: actionTypes.VERTIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.VERTIFY_FAIL, payload: err.message });
  }
};

//* Recovery Password

export const recoveryPassword = data => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch({ type: actionTypes.RECOVERY_START });
  const firebase = getFirebase();
  try {
    const { email } = data;
    await firebase.auth().sendPasswordResetEmail(email);
    dispatch({ type: actionTypes.RECOVERY_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.RECOVERY_FAIL, payload: err.message });
  }
};
