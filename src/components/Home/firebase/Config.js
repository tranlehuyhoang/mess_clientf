// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuYAAdlerMbobgZOAWSIVYNqlwQ0-VuAg",
    authDomain: "messenger-1e3b7.firebaseapp.com",
    projectId: "messenger-1e3b7",
    storageBucket: "messenger-1e3b7.appspot.com",
    messagingSenderId: "218223765134",
    appId: "1:218223765134:web:567d82837808bdb69ecbdf"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);