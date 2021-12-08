import { getApp, getApps, initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import dotenv from 'dotenv';
const firebaseConfig = {
    apiKey: "AIzaSyCI9ImquGpQOuzhChXpuEGM8QDlbA1VTDI",
    authDomain: "easybloc-ae557.firebaseapp.com",
    projectId: "easybloc-ae557",
    storageBucket: "easybloc-ae557.appspot.com",
    messagingSenderId: "953377501282",
    appId: "1:953377501282:web:0ee270c86b1212aa8e613b "
  };
  const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();

  const db = getFirestore();
  
  const storage = getStorage();
  
  export { app, db, storage };

