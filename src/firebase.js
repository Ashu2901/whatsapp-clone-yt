import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCNqGJIFbiXivrxJzlaU3aMDmZCY2mrKQ",
  authDomain: "whatsapp-clone-f8edc.firebaseapp.com",
  projectId: "whatsapp-clone-f8edc",
  storageBucket: "whatsapp-clone-f8edc.appspot.com",
  messagingSenderId: "469808054135",
  appId: "1:469808054135:web:8a3295eadb2e71f797eb72",
  measurementId: "G-CX8Q2JZT4E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
