
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANFxlvCN8qItHpX3if1q9pnmHD41AGGtg",
    authDomain: "medical-975e3.firebaseapp.com",
    projectId: "medical-975e3",
    storageBucket: "medical-975e3.appspot.com",
    messagingSenderId: "960056248846",
    appId: "1:960056248846:web:4c556047ea4176b4e4ca5f",
    measurementId: "G-SKQPLZFVJ8"
}

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);



