import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthenticationApp = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthenticationApp;