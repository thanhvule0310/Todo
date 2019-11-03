import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'todoapp-vux.firebaseapp.com',
  databaseURL: 'https://todoapp-vux.firebaseio.com',
  projectId: 'todoapp-vux',
  storageBucket: 'todoapp-vux.appspot.com',
  messagingSenderId: '770004612952',
  appId: '1:770004612952:web:88a293893f5c90e11ad72d',
  measurementId: 'G-VZQ2HLZ1TB'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
