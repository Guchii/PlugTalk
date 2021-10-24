import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
