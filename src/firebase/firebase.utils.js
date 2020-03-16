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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;