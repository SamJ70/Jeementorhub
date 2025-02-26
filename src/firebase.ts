import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBV6hEkEBhvxty3w4ZEx7RSgt0T3dj_PTQ",
  authDomain: "rsmp-9ec8c.firebaseapp.com",
  projectId: "rsmp-9ec8c",
  storageBucket: "rsmp-9ec8c.appspot.com",
  messagingSenderId: "502925953825",
  appId: "1:502925953825:web:67421acd2a2c3afec60c60"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);