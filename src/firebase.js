
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgcqkR3mMFYgJlxijnPZD3VIzn6-FnwRs",
  authDomain: "gamemarket-110f0.firebaseapp.com",
  projectId: "gamemarket-110f0",
  storageBucket: "gamemarket-110f0.appspot.com",
  messagingSenderId: "801071630309",
  appId: "1:801071630309:web:42e399de2e92d1e983910c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;