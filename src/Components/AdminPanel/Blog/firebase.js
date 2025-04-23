import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

firebase.initializeApp({
    apiKey: "AIzaSyDp2oa8qlo5WY3x8S5efWFTkwIsFuu_sEg",
    authDomain: "wisefunds-88562.firebaseapp.com",
    projectId: "wisefunds-88562",
    storageBucket: "wisefunds-88562.appspot.com",
    messagingSenderId: "84701836840",
    appId: "1:84701836840:web:70260e4e65caae2268e71d",
    measurementId: "G-SC5JEC2C1P"
});

const fb = firebase;

export default fb;