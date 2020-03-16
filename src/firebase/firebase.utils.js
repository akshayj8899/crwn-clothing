import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBPTABAzvOHdg05G01Qgj6MhGPBbPI8iTw",
    authDomain: "crwn-clothingshop.firebaseapp.com",
    databaseURL: "https://crwn-clothingshop.firebaseio.com",
    projectId: "crwn-clothingshop",
    storageBucket: "crwn-clothingshop.appspot.com",
    messagingSenderId: "310510079822",
    appId: "1:310510079822:web:5275d9da010b9ff72a181f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;