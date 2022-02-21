import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC95SdiOkw0jH68a_Bpxy9jJB0k_qx1a_s",
  authDomain: "crwn-db-ariya.firebaseapp.com",
  projectId: "crwn-db-ariya",
  storageBucket: "crwn-db-ariya.appspot.com",
  messagingSenderId: "152241741687",
  appId: "1:152241741687:web:cad0f1fe9ef13a96eecb72",
  measurementId: "G-15LTZPZQRK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
