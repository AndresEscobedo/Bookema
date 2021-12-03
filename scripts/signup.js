
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";


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

  



  /* Registro de usuarios con correo y contraseña */

  var signup_name = document.querySelector('#signup-name');
  var signup_email = document.querySelector("#signup-email");
  var signup_password = document.querySelector("#signup-password");
  var signup_form = document.querySelector("#signup-form");

  var name = signup_name.value
  var email = signup_email.value


  function openFYP() {
      setTimeout(() => {

        window.open("../pages/fyp.html","_self")
       
      }, 200);
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

      name: name,
      email: email

 
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


  /* JS STUFF */

  function terminos() {

   
    
  }


 