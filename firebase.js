// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkK5vxJ7jmm9y6RUmfbZ7F7dsObXD18hg",
  authDomain: "rn-app-tong-hop.firebaseapp.com",
  projectId: "rn-app-tong-hop",
  storageBucket: "rn-app-tong-hop.appspot.com",
  messagingSenderId: "851582207241",
  appId: "1:851582207241:web:d1945747a512be71ca7fd8",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase();
export const auth = getAuth();
export {
  ref,
  set,
  get,
  child,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
