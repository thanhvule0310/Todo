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

export const signOut = history => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    await localStorage.removeItem('token');
    history.push('/signin');
  } catch (err) {
    console.log(err.message);
  }
};

//* Clear message
export const cleanMessage = () => ({
  type: actionTypes.CLEAN_MESSAGE
});
