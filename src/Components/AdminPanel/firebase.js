import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDp2oa8qlo5WY3x8S5efWFTkwIsFuu_sEg",
    authDomain: "wisefunds-88562.firebaseapp.com",
    projectId: "wisefunds-88562",
    storageBucket: "wisefunds-88562.appspot.com",
    messagingSenderId: "84701836840",
    appId: "1:84701836840:web:70260e4e65caae2268e71d",
    measurementId: "G-SC5JEC2C1P"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
