import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAAevX6L03nV7fU1m3Hvqap3AodjYDTDQY',
  authDomain: 'seed-tt-16.firebaseapp.com',
  projectId: 'seed-tt-16',
  storageBucket: 'seed-tt-16.appspot.com',
  messagingSenderId: '295207744728',
  appId: '1:295207744728:web:76257d93062f51af0f53ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;