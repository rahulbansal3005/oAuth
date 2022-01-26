import { initializeApp } from 'firebase/app';
import firebaseConfig from './config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;