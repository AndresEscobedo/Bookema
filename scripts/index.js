import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAhJiwFArdnCVyoOLdyZ-XCWy2R3QhBPJo",
  authDomain: "bookema-a21a4.firebaseapp.com",
  projectId: "bookema-a21a4",
  storageBucket: "bookema-a21a4.appspot.com",
  messagingSenderId: "282745133676",
  appId: "1:282745133676:web:41190dadd95b764edd5649"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


window.onload = function logedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log("User Logeado")
          // ...
        } else {
          // User is signed out
          // ...

          window.open("../pages/signin.html","_self")
        }
      });
    
}

const logout = document.getElementById("logout");

logout.onclick = function signOutFunc() {
    signOut(auth).then(() => {

    }).catch((error) =>{

    })
}
