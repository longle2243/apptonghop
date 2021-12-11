// Import the functions you need from the SDKs you need
import * as firebase from "firebase/";

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
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
