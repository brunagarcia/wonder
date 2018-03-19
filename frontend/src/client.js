import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDp0LTmwBS1LYJ5nkBasRQFU7f_-yGqRDc",
  authDomain: "wonder-88a2a.firebaseapp.com",
  databaseURL: "https://wonder-88a2a.firebaseio.com",
  projectId: "wonder-88a2a",
  storageBucket: "wonder-88a2a.appspot.com",
  messagingSenderId: "215941752195"
};

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth
export const provider = new firebase.auth.GoogleAuthProvider();