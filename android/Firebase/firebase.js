//Firebase stuff
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//var firebase = require('firebase/app');
import app from 'firebase/app';

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyA5WEhLmHT7WDWo1paGkX7f8o_e1gsIr30',
  authDomain: 'software-engineering-9af8c.firebaseapp.com',
  databaseURL: 'https://software-engineering-9af8c.firebaseio.com',
  projectId: 'software-engineering-9af8c',
  storageBucket: 'software-engineering-9af8c.appspot.com',
  messagingSenderId: '549204690488',
  appId: '1:549204690488:web:6f5af93518accaa16208cd',
  measurementId: 'G-447368E30T',
};
// Initialize Firebase
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  loginFirebase = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email);
  passwordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
