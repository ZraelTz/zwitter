// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyB5izsTx2XkRCbbl3OKCl6J37GYbeHqFww",
    authDomain: "zweeter-60683.firebaseapp.com",
    projectId: "zweeter-60683",
    storageBucket: "zweeter-60683.appspot.com",
    messagingSenderId: "688685579110",
    appId: "1:688685579110:web:ad2ee51632dc5537fe66a7",
    measurementId: "G-NDQDFD1G5C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export default db