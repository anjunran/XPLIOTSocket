import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAnBlL5jtoe200Zy7YDkh-puU0FyEBll2w",
  authDomain: "socketio-pro-app.firebaseapp.com",
  projectId: "socketio-pro-app",
  storageBucket: "socketio-pro-app.appspot.com",
  messagingSenderId: "283503683941",
  appId: "1:283503683941:web:9ea23ebd7db0c8beded98c",
  measurementId: "G-QSEM4CV1TY"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export { firebase };
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
export const storage = firebase.storage();
