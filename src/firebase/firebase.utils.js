import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANHaVtkb2JeyaYqXecL1ZHKmEjxmT6-74",
  authDomain: "e-commerce-app-ebd7a.firebaseapp.com",
  projectId: "e-commerce-app-ebd7a",
  storageBucket: "e-commerce-app-ebd7a.appspot.com",
  messagingSenderId: "906617600839",
  appId: "1:906617600839:web:74e8a02aa2e1da5b906a62",
  measurementId: "G-LYLDPKZSZQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth(); 
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;