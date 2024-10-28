import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, initializeApp } from "firebase/auth"; // imports for email, login, and logout from firebase

// initializing the firebase app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_jV58v1F17ZsKavcjFddZ2R2gcRw3mZA",
  authDomain: "todo-app-8cb52.firebaseapp.com",
  projectId: "todo-app-8cb52",
  storageBucket: "todo-app-8cb52.appspot.com",
  messagingSenderId: "307664578019",
  appId: "1:307664578019:web:84f74e33e327fdf19aacd6",
  measurementId: "G-RQ501VYGL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// For creating a user

const auth = getAuth(); // getAuth handled by firebase, not sure specifically what it does, but important
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// For signing into existing user

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

// For signing out

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

export default function Home() {
  return (
    <div>
      <h1>Todo App</h1>
      <form>
        <label for='email'>Email:</label>
        <br></br>
        <input type='text' id='email' name='email'></input>
        <br></br>
        <label for='pass'>Password:</label>
        <br></br>
        <input type='text' id='pass' name='pass'></input>
        <br></br><br></br>
        <input type='submit' value='Submit'></input>
      </form>
    </div>
  );
}
