import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBpK7GxsVcb6yabh22YcGQs5S6z6p7KH-0",
  authDomain: "betty-rossa.firebaseapp.com",
  databaseURL: "https://betty-rossa.firebaseio.com",
  projectId: "betty-rossa",
  storageBucket: "betty-rossa.appspot.com",
  messagingSenderId: "85739106364",
  appId: "1:85739106364:web:5843de49a70c0abb09d339",
  measurementId: "G-9P7K9D9W8G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
console.log("se configuro");
