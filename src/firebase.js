import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBnUZvhmgiyOQy7F5CD1XcjvfP8fo-Cp5U",
    authDomain: "chat-app-7ba24.firebaseapp.com",
    projectId: "chat-app-7ba24",
    storageBucket: "chat-app-7ba24.appspot.com",
    messagingSenderId: "898989898294",
    appId: "1:898989898294:web:89adaaa86fe26e43cdb697"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db

