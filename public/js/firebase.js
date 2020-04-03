import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBivht94AsRuJuTJ8-fWTmPYmTB1dKj7Ts",
    authDomain: "school70site.firebaseapp.com",
    databaseURL: "https://school70site.firebaseio.com",
    projectId: "school70site",
    storageBucket: "school70site.appspot.com",
    messagingSenderId: "481783476446",
    appId: "1:481783476446:web:1fcd6e8ab35c806cf0124f",
    measurementId: "G-ZN9R0YQ7GB"
  };


if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase;