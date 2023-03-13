import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8pI4dUy5BrToRtrLqkkc11dHjrW0azMc",
  authDomain: "playcoins-assembler.firebaseapp.com",
  projectId: "playcoins-assembler",
  storageBucket: "playcoins-assembler.appspot.com",
  messagingSenderId: "176975227829",
  appId: "1:176975227829:web:45e1e672ce130d3fed87fc",
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getFirestore(app);

export {auth, database}
