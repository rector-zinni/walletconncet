// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDBPeMnWhxs-AhBKZub7-JcQFC_rWb0Ps",
    authDomain: "wallet-f1431.firebaseapp.com",
    projectId: "wallet-f1431",
    storageBucket: "wallet-f1431.appspot.com",
    messagingSenderId: "397094444719",
    appId: "1:397094444719:web:8285beea058627f8f97e5a",
    measurementId: "G-VEGDNVPGH7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fb =firebase.firestore();
const auth =firebase.auth();
const storage= firebase.storage();
fb.settings({timestampInsnapshot:true})
export default {fb,auth,storage};