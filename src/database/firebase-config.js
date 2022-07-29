import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  get,
  push,
  update,
  remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";

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

// create data
export function writeUserData(userId, name, email) {
  const db = getDatabase();
  const reference = ref(db, "test/" + userId);
  set(reference, {
    username: name,
    email: email,
  });
}

// get data
export function testUsersData() {
  const db = getDatabase();
  const testRef = ref(db, "/test/anyadpicsaja");
  onValue(testRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

// get data
export function getUsersData() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `test/anyadpicsaja`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Read data once with an observer

export function readOnce() {
  const db = getDatabase();
  const auth = getAuth();

  const userId = "anyadpicsaja";
  return onValue(
    ref(db, "/test/" + userId),
    (snapshot) => {
      // pl username && snapshot.val().username
      const username = snapshot.val() || "Anonymous";
      console.log(username);
    },
    {
      onlyOnce: true,
    }
  );
}

// update data

// uid: ne változtasd meg mert akkor újat hoz létre.
export function writeNewPost(uid, username, email) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    uid: uid,
    email: email,
    username: username,
  };

  // Get a key for a new Post.
  // const newPostKey = push(child(ref(db), "test")).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/test/" + uid] = postData;
  // updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return update(ref(db), updates);
}

// delete data
// export function deleteData(path) {
//   var db = getDatabase();
//   ref(db, path).remove();
// }

export function deleteData(path) {
  const db = getDatabase();
  const updates = {};
  updates[path] = null;
  return update(ref(db), updates);
}
