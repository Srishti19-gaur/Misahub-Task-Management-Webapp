
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA7IPl4K0htPzX31GtQkVW8S-Hs3oMU8H4",
  authDomain: "misahub-task-manager-1.firebaseapp.com",
  projectId: "misahub-task-manager-1",
  storageBucket: "misahub-task-manager-1.firebasestorage.app",
  messagingSenderId: "179566910478",
  appId: "1:179566910478:web:679ee4fbc6bb024e0ff05f"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}