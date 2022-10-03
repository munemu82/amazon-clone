//import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


 const firebaseConfig = {
    apiKey: "AIzaSyAbspEHLsiWABHE6l0zGNsyIoAymxmSX9s",
    authDomain: "clone-111ba.firebaseapp.com",
    databaseURL: "",
    projectId: "clone-111ba",
    storageBucket: "clone-111ba.appspot.com",
    messagingSenderId: "133265965134",
    appId: "1:133265965134:web:c6cfcbea3f748edcec031f",
    measurementId: "G-TCNS1160NJ"
  };

const firebaseApp = initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
//const auth = firebase.auth();
const auth = getAuth(firebaseApp);

export { db, auth, signInWithEmailAndPassword, createUserWithEmailAndPassword};