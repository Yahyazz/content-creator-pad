import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
    getAuth
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyATD-LhE5zGLaGenUvek3NJxiCJOo3iPp8",
    authDomain: "ccpad-780f2.firebaseapp.com",
    projectId: "ccpad-780f2",
    storageBucket: "ccpad-780f2.appspot.com",
    messagingSenderId: "535545863055",
    appId: "1:535545863055:web:1b3298c78face1c35249fa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);