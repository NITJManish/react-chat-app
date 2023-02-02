import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

//stack solution
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcJA4JEjOoKh-ZO4fg72dloEmSXneeYe0",
  authDomain: "react-chat-app-2ddce.firebaseapp.com",
  projectId: "react-chat-app-2ddce",
  storageBucket: "react-chat-app-2ddce.appspot.com",
  messagingSenderId: "519108395274",
  appId: "1:519108395274:web:3a6ada5fc775b575bd7af3"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();

//stack solution
// const storage = firebase.storage();