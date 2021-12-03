
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
   
    onGetImages((querySnapshot) => {
      diplayBook.innerHTML = " ";
     var urls = []
     var ids = []
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());

        const image = doc.data();

        urls.push(image.url)

        ids.push(image.id)

       
  
       
       
      });

      var index = []
      var rand = 0
      for(var i = 0; i<3; i++){
        rand = Math.floor(Math.random()*urls.length)

        console.log(rand)
        index.push(rand)
       
      }

      index.forEach((value) =>{

        diplayBook.innerHTML += `
  
                <button type="button" data-id="${value}" class="card cardBook m-3 p-2" style="width: 18rem;">
                    <img class="card-img-top img-fluid" src="${urls[value]}" alt="Book">
                    
                  </button>
                
                
                `;
        
      })

     const bookCard = document.querySelectorAll(".cardBook")

     bookCard.forEach((book) => {
       
       book.addEventListener("click", e =>{
         e.preventDefault()
        var btn = e.target.dataset.id

        console.log(btn)

        
       })
     })
      
    });
  });




  



  /* Registro de usuarios con correo y contraseña */

  var signup_name = document.querySelector('#signup-name');
  var signup_email = document.querySelector("#signup-email");
  var signup_password = document.querySelector("#signup-password");
  var signup_form = document.querySelector("#signup-form");
  var preferences_form = document.querySelector("#preferences-form")
  var preferences_button = document.querySelector("#preferences-button")

  var name = signup_name.value
  var email = signup_email.value


  function openFYP() {
      setTimeout(() => {

        window.open("../pages/fyp.html","_self")
       
      }, 200);
  }




  signup_form.addEventListener('submit', e =>{
      e.preventDefault();

      preferences_form.style.display = "block"

      signup_form.style.display = "none"



  })

  var generos = ""

  var drama = document.querySelector("#Cat1")
  var terror = document.querySelector("#Cat2")
  var scifi = document.querySelector("#Cat3")
  var romance = document.querySelector("#Cat4")
  var policiaco = document.querySelector("#Cat6")
  var select = document.querySelector("#select")

  drama.addEventListener("click", e =>{
    e.preventDefault()

    
    if((generos.split("misterio,").length == 1 || generos == "")){

      generos += "misterio,"

      select.innerHTML = `
    
      <p class="pt-3">Seleccionados: ${generos} </p>
      
      
      `

    }
    
  })

  terror.addEventListener("click", e =>{
    e.preventDefault()

    if((generos.split("terror,").length == 1 || generos == "")){

      generos += "terror,"

      select.innerHTML = `
    
      <p class="pt-3">Seleccionados: ${generos} </p>
      
      
      `

    }
    



  })

  scifi.addEventListener("click", e =>{
    e.preventDefault()

    if((generos.split("Scifi,").length == 1 || generos == "")){

      generos += "Scifi,"

      select.innerHTML = `
    
      <p class="pt-3">Seleccionados: ${generos} </p>
      
      
      `

    }
    

  })

  romance.addEventListener("click", e =>{
    e.preventDefault()


    if((generos.split("Romantico,").length == 1 || generos == "")){

      generos += "Romantico,"

      select.innerHTML = `
    
      <p class="pt-3">Seleccionados: ${generos} </p>
      
      
      `

    }
    

  })

  policiaco.addEventListener("click", e =>{
    e.preventDefault()

    

    if((generos.split("policial,").length == 1 || generos == "")){

      generos += "policial,"

      select.innerHTML = `
    
      <p class="pt-3">Seleccionados: ${generos} </p>
      
      
      `

    }

   
 

    console.log(generos)

  })
 

  preferences_button.addEventListener("click", e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {

    var signup_age = document.querySelector('#signup-age').value;

    name = signup_name.value
    email = signup_email.value
    
    

    // Signed in
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid), {

      name: name,
      email: email,
      edad:  signup_age,
      generos:  generos,

 
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


 