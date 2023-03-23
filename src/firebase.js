import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNbPXw3gwbqvF6lIu_i-OVkozb57RaSFE",
    authDomain: "resepi-ka-chenom.firebaseapp.com",
    projectId: "resepi-ka-chenom",
    storageBucket: "resepi-ka-chenom.appspot.com",
    messagingSenderId: "351071555122",
    appId: "1:351071555122:web:8d002a567cc98ae67db62b",
    measurementId: "G-R1H9JZPPTR"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth };