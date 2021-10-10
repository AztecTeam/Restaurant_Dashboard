import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDGPRxZAid1crhkZW0yp6T3t8RStFSc_wE",
  authDomain: "kerzner-uj-82346.firebaseapp.com",
  databaseURL: "https://kerzner-uj-82346-default-rtdb.firebaseio.com",
  projectId: "kerzner-uj-82346",
  storageBucket: "kerzner-uj-82346.appspot.com",
  messagingSenderId: "33228726875",
  appId: "1:33228726875:web:a2760b0b73a2367116557e",
  measurementId: "G-8043JD937M"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
//export  {db};
export default firebase;


