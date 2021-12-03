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
  updateDoc,
  setDoc
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
const randGenere4 = document.querySelector("#randGenere2")

const gustos = document.querySelector("#gustos")
const otherGenere = document.querySelector("#otherGenere")

const dispMain = document.querySelector("#mainBook")

const userSec = document.querySelector("#userSec")

const adminSec = document.querySelector("#adminSec")

const welcome = document.querySelector("#welcome")

const deleteBooks = document.querySelector("#delete")

const addBooks = document.querySelector("#add")

const nav = document.querySelector("#menu")



window.onload = function logedIn() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;



      const starCountRef = ref(database, 'users/' + uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        console.log(data.tipo)

        

        if(data.tipo == "Admin"){

          adminSec.style.display = "block"
          userSec.style.display = "none"

          nav.innerHTML = ` 

          <li class="nav-item">
              <a id="nav-delete" class="nav-link active" href="#">Borrar Libros</a>
            </li>
            <li class="nav-item">
              <a id="nav-add" class="nav-link" href="#">Añadir Libros</a>
            </li>
          
          
          
          `

          const nav_delete = document.querySelector("#nav-delete")
        const nav_add = document.querySelector("#nav-add")

          nav_delete.addEventListener("click", e =>{
            e.preventDefault()
  
            deleteBooks.style.display = "block"
            addBooks.style.display = "none"

            console.log("hhh")
  
          });
  
          nav_add.addEventListener("click", e =>{
            e.preventDefault()
  
            deleteBooks.style.display = "none"
            addBooks.style.display = "block"
  
          });


        }else {

          adminSec.style.display = "none"
          userSec.style.display = "block"

        }

        

        

        const save = document.querySelector("#save-btn")

        var bookdb = document.querySelector("#add-genere")

        console.log(bookdb)

        

        save.addEventListener("click", e =>{
          e.preventDefault()

          const add_title = document.querySelector("#add-titulo").value
          const add_image = document.querySelector("#add-image").value
          const add_autor = document.querySelector("#add-autor").value

          console.log(add_title, add_image, add_autor)

          setDoc(doc(db, bookdb.value, add_title), {
            titulo: add_title,
            imagen: add_image,
            autor: add_autor
          });

          alert("Libro creado con datos: ", add_title, add_image, add_autor)
        })

        var nombre = data.name

        welcome.innerHTML = `

        <h3 class="p-3 mt-5">👋 Bienvenido: <b>${nombre}</b></h3>
        
        
        `

        const misterioCards = document.querySelector("#misterioCards")
        const onGetMisterio = (callback) => onSnapshot(collection(db, "misterio"), callback);
        onGetMisterio((querySnapshot) => {
       
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());
      
            const libro = doc.data();
            libro.id = doc.id;
      
            misterioCards.innerHTML += `
            <div class="col-12 col-md-3">
            <div class="cardLibro card card-body mt-2 
                  border-primary">
                  <img class="bookImg img-fluid" src="${libro.imagen}" alt="">
                  <h3  class="h5 p-3"> ${libro.titulo}</h3>
                  
                  <div>
                      <button data-id="${libro.id}" class="m-3 btn btn-danger btn-edit btn-del" > Eliminar </buttton>
                  </div>
                  </div>
          </div>
          `;
          });
        });

        const scifiCards = document.querySelector("#scifiCards")
        const onGetScifi = (callback) => onSnapshot(collection(db, "Scifi"), callback);
        onGetScifi((querySnapshot) => {
       
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());
      
            const libro = doc.data();
            libro.id = doc.id;
      
            scifiCards.innerHTML += `
            <div class="col-12 col-md-3">
            <div class="cardLibro card card-body mt-2 
                  border-primary">
                  <img class="bookImg img-fluid" src="${libro.imagen}" alt="">
                  <h3  class="h5 p-3"> ${libro.titulo}</h3>
                  
                  <div>
                      <button data-id="${libro.id}" class="m-3 btn btn-danger btn-edit btn-del" > Eliminar </buttton>
                  </div>
                  </div>
          </div>
          `;
          });
        });

        const policiacoCards = document.querySelector("#policiacoCards")
        const onGetPoliciaco = (callback) => onSnapshot(collection(db, "misterio"), callback);
        onGetPoliciaco((querySnapshot) => {
       
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());
      
            const libro = doc.data();
            libro.id = doc.id;
      
            policiacoCards.innerHTML += `
            <div class="col-12 col-md-3">
            <div class="cardLibro card card-body mt-2 
                  border-primary">
                  <img class="bookImg img-fluid" src="${libro.imagen}" alt="">
                  <h3  class="h5 p-3"> ${libro.titulo}</h3>
                  
                  <div>
                      <button data-id="${libro.id}" class="m-3 btn btn-danger btn-edit btn-del" > Eliminar </buttton>
                  </div>
                  </div>
          </div>
          `;
          });
        });


        const terrorCards = document.querySelector("#terrorCards")
        const onGetTerror = (callback) => onSnapshot(collection(db, "terror"), callback);
        onGetTerror((querySnapshot) => {
       
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());
      
            const libro = doc.data();
            libro.id = doc.id;
      
            terrorCards.innerHTML += `
            <div class="col-12 col-md-3">
            <div class="cardLibro card card-body mt-2 
                  border-primary">
                  <img class="bookImg img-fluid" src="${libro.imagen}" alt="">
                  <h3  class="h5 p-3"> ${libro.titulo}</h3>
                  
                  <div>
                      <button data-id="${libro.id}" class="m-3 btn btn-danger btn-edit btn-del" > Eliminar </buttton>
                  </div>
                  </div>
          </div>
          `;
          });
        });

        const romanticoCards = document.querySelector("#romanticoCards")
        const onGetRomantico = (callback) => onSnapshot(collection(db, "Romantico"), callback);
        onGetRomantico((querySnapshot) => {
       
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());
      
            const libro = doc.data();
            libro.id = doc.id;

            
      
            romanticoCards.innerHTML += `
            <div class="col-12 col-md-3">
            <div class="cardLibro card card-body mt-2 
                  border-primary">
                  <img class="bookImg img-fluid" src="${libro.imagen}" alt="">
                  <h3  class="h5 p-3"> ${libro.titulo}</h3>
                  
                  <div>
                      <button data-id="${libro.id}" class="m-3 btn btn-danger btn-edit btn-del" > Eliminar </buttton>
                  </div>
                  </div>
          </div>
          `;
          });
        });

        const btn_delete = document.querySelectorAll(".btn-del")

        

        btn_delete.forEach((book) =>{
          
          book.addEventListener("click", e => {
            console.log("aaaaaa")
            
          })
        })

        const GetMainBooks = (callback) => onSnapshot(collection(db, "libro"), callback);

        GetMainBooks((querySnapshot) => {
         
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
           for(var i = 0; i<1; i++){
             rand = Math.floor(Math.random()*urls.length)
     
             console.log(rand)
             index.push(rand)
            
           }
     
           index.forEach((value) =>{
             console.log(urls[value])
     
            dispMain.style.backgroundImage = `url('${urls[value]}')`
             
           })
     
     
           
         });

        var genere = data.generos.split(",")


      

        console.log(genere)

          var antiguita = Math.floor(Math.random() * genere.length)

      

        var randGenere = genere[antiguita]

     

        if(randGenere == ""){
          location.reload();
        }


        randGenere2.innerHTML = `

             <h3> Porque te gusta el: <b>${randGenere}</b> </h3>
             
             `

        
        const GetBooks = (callback) => onSnapshot(collection(db, randGenere), callback);

        GetBooks((querySnapshot) => {
         
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());

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



        var antiguita2 = Math.floor(Math.random() * genere.length)

   

        var randGenere3 = genere[antiguita2]

        

        if(randGenere3 == ""){
          location.reload();
        }


        randGenere4.innerHTML = `

             <h3> <b>${randGenere3}</b> </h3>
             
             `

        
        const GetBooks2 = (callback) => onSnapshot(collection(db, randGenere3), callback);

        GetBooks2((querySnapshot) => {
         
          querySnapshot.forEach((doc) => {
            //console.log(doc.data());

            const book = doc.data();
            book.id = doc.id;

            otherGenere.innerHTML += `
            
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
        



        

      

        



      });


      
      






      console.log(uids)
      console.log("User Logeado")


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



