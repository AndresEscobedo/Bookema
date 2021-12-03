import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
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


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const db = getFirestore(app);



var uids

const randGenere2 = document.querySelector("#randGenere")

const gustos = document.querySelector("#gustos")



window.onload = function logedIn() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;



      const starCountRef = ref(database, 'users/' + uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        console.log(data)

        var genere = data.generos.split(",")

      

        console.log(genere)

        for(var i = 0; i < 2; i++){
          var antiguita = Math.floor(Math.random() * genere.length)

        console.log(antiguita)

        var randGenere = genere[antiguita]

        console.log(randGenere)

        if(randGenere == ""){
          location.reload();
        }


        randGenere2.innerHTML = `

             <h3> Porque te gusta el: <b>${randGenere}</b> </h3>
             
             `

        
        const GetBooks = (callback) => onSnapshot(collection(db, randGenere), callback);

        GetBooks((querySnapshot) => {
         
          querySnapshot.forEach((doc) => {
            console.log(doc.data());

            const book = doc.data();
            book.id = doc.id;

            gustos.innerHTML += `
            
            <div class="col-md-3">
            <div class="card card-body mt-3 border-primary cardLibro">
              <img class="text-center img-fluid bookImg" src="${book.imagen}" />
              <div class="text-center">
                <h4 class="p-3" id="titleBook">
                  ${book.titulo}
                </h4>
                <p>${book.autor}</p>
        
              </div>
            </div>
          </div>

                        `;
          });
        });
        }



        

      

        



      });


      
      






      console.log(uids)
      console.log("User Logeado")
      console.log(genere)


      // ...
    } else {
      // User is signed out
      // ...

      window.open("../pages/signin.html", "_self")
    }
  });

}





const logout = document.getElementById("logout");

logout.onclick = function signOutFunc() {
  signOut(auth).then(() => {

  }).catch((error) => {

  })
}
const displayTop = document.getElementById("display");



