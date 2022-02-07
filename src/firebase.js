import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCypiMXcQENJGfbXkwAfFvCxrk8c5aLK9M",
  authDomain: "react-todo-app-ae7bb.firebaseapp.com",
  projectId: "react-todo-app-ae7bb",
  storageBucket: "react-todo-app-ae7bb.appspot.com",
  messagingSenderId: "597086166317",
  appId: "1:597086166317:web:aeaf6dfb18e9757d0807a4",
  measurementId: "G-Z3E5QG3EGX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
