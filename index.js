// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAMrJu8jukN9jRTGKabtqDD84xuCrWlH0",
  authDomain: "fir-login-2bdf8.firebaseapp.com",
  projectId: "fir-login-2bdf8",
  storageBucket: "fir-login-2bdf8.appspot.com",
  messagingSenderId: "835910311443",
  appId: "1:835910311443:web:c7c9a71d0b5c1bbdc9e9e6",
  measurementId: "G-DH9NWNDE1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const auth = getAuth();

document.getElementById("signUpButton").addEventListener("click", (event) => {
  event.preventDefault();
  const signUpEmail = document.getElementById("signUpEmail").value;
  const signUpPassword = document.getElementById("signUpPassword").value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      console.log(userCredential);
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log("error");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

document.getElementById("signInButton").addEventListener("click", (event) => {
  event.preventDefault();

  const signInEmail = document.getElementById("signInEmail").value;
  const signInPassword = document.getElementById("signInPassword").value;

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      console.log(userCredential);
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log("로그인 실패");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
