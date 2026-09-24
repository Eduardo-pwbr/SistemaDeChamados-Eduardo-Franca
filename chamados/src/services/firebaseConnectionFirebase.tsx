import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyAjfY7htholeWuzokHuOO2wGotPVPDrlDo",
  authDomain: "tickets-1157a.firebaseapp.com",
  projectId: "tickets-1157a",
  storageBucket: "tickets-1157a.firebasestorage.app",
  messagingSenderId: "763835558531",
  appId: "1:763835558531:web:1d1da278849b4dbcebc9b6",
  measurementId: "G-H8Z2HF421Q",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
