import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHfu6uc7vp6RktzBv2DF_NsQT4rwFW5iU",
    authDomain: "crwn-db-f7834.firebaseapp.com",
    databaseURL: "https://crwn-db-f7834.firebaseio.com",
    projectId: "crwn-db-f7834",
    storageBucket: "",
    messagingSenderId: "795551851584",
    appId: "1:795551851584:web:77398d9a12907b2a"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    console.log(firestore.doc('user/128jfsfhdgfu'));
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
