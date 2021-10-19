import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialFirebase = () => {
    return initializeApp(firebaseConfig);
}

export default initialFirebase;