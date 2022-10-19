// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQgMjWtlVrcemcWqYFicp2rmpxKGvpEL4",
    authDomain: "deliciosos-mimos-e1696.firebaseapp.com",
    projectId: "deliciosos-mimos-e1696",
    storageBucket: "deliciosos-mimos-e1696.appspot.com",
    messagingSenderId: "756089571906",
    appId: "1:756089571906:web:6e6711cbacaf7b5ef53bdb"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAedbdr009KWFtHgn3wDHYE66d7G8yqhvE",
//     authDomain: "deliciosos-mimos-f2331.firebaseapp.com",
//     projectId: "deliciosos-mimos-f2331",
//     storageBucket: "deliciosos-mimos-f2331.appspot.com",
//     messagingSenderId: "213616449852",
//     appId: "1:213616449852:web:c4ccc306bd782df34ae639"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app)

export default bd