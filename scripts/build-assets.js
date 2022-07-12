'use strict';

const renderAssets = require('./render-assets');

rend// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx8Uhh3i5ZZzzHVfGXpbqyn_S7L5iKSgU",
  authDomain: "saurabh-9cb43.firebaseapp.com",
  projectId: "saurabh-9cb43",
  storageBucket: "saurabh-9cb43.appspot.com",
  messagingSenderId: "816302718256",
  appId: "1:816302718256:web:1322a00711e276c5c25cf5",
  measurementId: "G-GSBK9THKLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);erAssets();
