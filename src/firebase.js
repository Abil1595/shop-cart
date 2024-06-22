import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSDeUpf54H02VfIei08E4R0lypbUjOv6U",
    authDomain: "newproject-337b0.firebaseapp.com",
    projectId: "newproject-337b0",
    storageBucket: "newproject-337b0.appspot.com",
    messagingSenderId: "41361049028",
    appId: "1:41361049028:web:61d5792b2394ce84b95091"
  };  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export { auth, provider, fbProvider, githubProvider };

// id=856809891347-5s8jd5si88qi9lrhoed0j3ha911kj4pf.apps.googleusercontent.com
// secret=YE8cvauW4NSZ1aZxnEsQ4TV_