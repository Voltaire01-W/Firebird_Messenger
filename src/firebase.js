import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDSn70Y-ZsaRo_MbrlMas2eWMpJxM29voM",
    authDomain: "firebird-messenger.firebaseapp.com",
    projectId: "firebird-messenger",
    storageBucket: "firebird-messenger.appspot.com",
    messagingSenderId: "287681162713",
    appId: "1:287681162713:web:ec75cff6f02c0a5022bdc8",
    measurementId: "G-R6THHMJQKK"
  }).auth();