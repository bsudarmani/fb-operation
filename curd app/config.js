const firebase = require("firebase");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAiHOdo_xhrC4YIvvnqWaz9TsmFVl8BeK4",
    authDomain: "sample-project-13691.firebaseapp.com",
    projectId: "sample-project-13691",
    storageBucket: "sample-project-13691.appspot.com",
    messagingSenderId: "853925934281",
    appId: "1:853925934281:web:c4f3c69d622d447f028918",
    measurementId: "G-XV30HC1RYG"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const User = db.collection("Users");
  module.exports = User;