import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyChHVOaWsOKVOA05RM02MsudBWZmFZ2bMA",
  authDomain: "tempchat-8fc6a.firebaseapp.com",
  databaseURL: "https://tempchat-8fc6a-default-rtdb.firebaseio.com",
  projectId: "tempchat-8fc6a",
  storageBucket: "tempchat-8fc6a.firebasestorage.app",
  messagingSenderId: "400036774127",
  appId: "1:400036774127:web:1523cc0bf2b222f6bb9b1a"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);