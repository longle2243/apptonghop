// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// import { getDatabase, ref, set, get, child } from "firebase/database"; (realtime database)
import Constants from "expo-constants";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const fdatabase = getDatabase(); // (realtime database)
export const database = getFirestore();
export const auth = getAuth();
export {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
};
