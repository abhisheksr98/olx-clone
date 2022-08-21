import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAr8KpsScYAmSL1aQH-pgnr-4BB27PNtHk",
  authDomain: "olx-clone-f87c1.firebaseapp.com",
  databaseURL: "https://olx-clone-f87c1-default-rtdb.firebaseio.com",
  projectId: "olx-clone-f87c1",
  storageBucket: "olx-clone-f87c1.appspot.com",
  messagingSenderId: "170572455725",
  appId: "1:170572455725:web:9994620382138be43bfda4",
  measurementId: "G-8HMP4EJGM1"
}
export default firebase.initializeApp(firebaseConfig);

