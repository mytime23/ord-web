import * as firebase from 'firebase/app';
// import firestore from 'firebase/firestore'
import 'firebase/firestore';

// const settings = {timestampsInSnapshots: true};

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB7C7h-gZRHtIbBnUTLxdiF_iFeBTFadPY",
    authDomain: "ocean-358c2.firebaseapp.com",
    databaseURL: "https://ocean-358c2.firebaseio.com",
    projectId: "ocean-358c2",
    storageBucket: "ocean-358c2.appspot.com",
    messagingSenderId: "233581114598"
  };
  firebase.initializeApp(config);

// firebase.firestore().settings(settings);
  // Get a reference to the database service

export default firebase;