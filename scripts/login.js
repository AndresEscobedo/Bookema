
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";


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

 /* LogIn de Usuarios */

 var login_email = document.querySelector("#login-email");
 var login_password = document.querySelector("#login-password");
 var login_form = document.querySelector("#login-form");

 login_form.addEventListener('submit', e =>{
     e.preventDefault()

     signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    window.open("../pages/fyp.html","_self")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert("Usuario o contraseña incorrecta")
  });
 })
