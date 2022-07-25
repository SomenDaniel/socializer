import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKHWmwv8T_-_9YVs4T1URrgpuIgJNftjA",
  authDomain: "socializer-4dfbb.firebaseapp.com",
  databaseURL:
    "https://socializer-4dfbb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socializer-4dfbb",
  storageBucket: "socializer-4dfbb.appspot.com",
  messagingSenderId: "932860342645",
  appId: "1:932860342645:web:d7af908a87fabe5c4ce33c",
  measurementId: "G-W0JQ8JGNNP",
};

const app = initializeApp(firebaseConfig);

export function writeUserData(userId, name, email) {
  const db = getDatabase();
  const reference = ref(db, "test/" + userId);
  set(reference, {
    username: name,
    email: email,
  });
}
