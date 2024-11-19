
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
export const firebaseConfig ={
    apiKey: "AIzaSyANFxlvCN8qItHpX3if1q9pnmHD41AGGtg",
    authDomain: "medical-975e3.firebaseapp.com",
    projectId: "medical-975e3",
    storageBucket: "medical-975e3.appspot.com",
    messagingSenderId: "960056248846",
    appId: "1:960056248846:web:4c556047ea4176b4e4ca5f",
    measurementId: "G-SKQPLZFVJ8"   
}
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}