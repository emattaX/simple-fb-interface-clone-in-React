import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDvnkr3GwO5ju0us_NyVauUhKaX5_WO85w",
  authDomain: "react-clones-2699e.firebaseapp.com",
  projectId: "react-clones-2699e",
  storageBucket: "react-clones-2699e.appspot.com",
  messagingSenderId: "410503656505",
  appId: "1:410503656505:web:6527dea5a033c24a2789e8"
};

//Initialize the Firebase and its DB

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

// Connect to auth and provide a Google login option
const auth = firebase.auth()
const provider  = new firebase.auth.GoogleAuthProvider()


//To access these file outside, we export
export { auth, provider } //explicit export
export default db



