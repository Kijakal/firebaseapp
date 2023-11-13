import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwP4xE1COVJtsIbH6iVllfnwX12i-ze-A",
  authDomain: "subscriptions-2d2a7.firebaseapp.com",
  projectId: "subscriptions-2d2a7",
  storageBucket: "subscriptions-2d2a7.appspot.com",
  messagingSenderId: "940677850445",
  appId: "1:940677850445:web:c1c87b899ad84e28c304"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();
