


import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBkA7CkSQNZzOvswXPyzCPkp-qUA9eXqJc",
    authDomain: "messenger-84b0b.firebaseapp.com",
    projectId: "messenger-84b0b",
    storageBucket: "messenger-84b0b.appspot.com",
    messagingSenderId: "634700587126",
    appId: "1:634700587126:web:b7ce7c72a3aee8e0c07f57"
};
firebase.initializeApp(firebaseConfig);

 const storage = firebase.storage()
// Upload file lên Firebase Storage và lấy reference của file đã upload
export default storage
 