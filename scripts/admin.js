
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
  import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc
  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAhJiwFArdnCVyoOLdyZ-XCWy2R3QhBPJo",
    authDomain: "bookema-a21a4.firebaseapp.com",
    projectId: "bookema-a21a4",
    storageBucket: "bookema-a21a4.appspot.com",
    messagingSenderId: "282745133676",
    appId: "1:282745133676:web:41190dadd95b764edd5649"
  };

  /* Checkbox */

 

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
  const db = getFirestore(app);

  const diplayBook = document.getElementById("bookCard");

  const onGetImages = (callback) => onSnapshot(collection(db, "libro"), callback);

  window.addEventListener("DOMContentLoaded", async (e) => {
   
    
  });




  



  /* Registro de admins con correo y contraseña */

  var signup_name = document.querySelector('#signup-name');
  var signup_email = document.querySelector("#signup-email");
  var signup_password = document.querySelector("#signup-password");
  var signup_form = document.querySelector("#signup-form");

  var name = signup_name.value
  var email = signup_email.value


  function openFYP() {
      setTimeout(() => {

        window.open("../pages/fyp.html","_self")
       
      }, 400);
  }




  signup_form.addEventListener('submit', e =>{
      e.preventDefault();

      createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
      .then((userCredential) => {
    
    
        name = signup_name.value
        email = signup_email.value
        
        
    
        // Signed in
        const user = userCredential.user;
    
        set(ref(database, 'users/' + user.uid), {

        
    
          tipo: "Admin",
          name: name,
          email: email,
    
     
          });
    
        console.log(name)
        console.log(email)
    
        openFYP()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        alert(errorMessage);
        // ..
      });
    



  })


 

 



 
 