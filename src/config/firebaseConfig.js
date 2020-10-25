import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBnFKd4mvpVToa5NLeHvnVotjXqi3xk-8s",
  authDomain: "dsc-web-ccc87.firebaseapp.com",
  databaseURL: "https://dsc-web-ccc87.firebaseio.com",
  projectId: "dsc-web-ccc87",
  storageBucket: "dsc-web-ccc87.appspot.com",
  messagingSenderId: "486291685658",
  appId: "1:486291685658:web:9396bc1b7b428db5042ca3",
  measurementId: "G-LGBZ87HBNG",
};

firebase.initializeApp(config);
firebase.analytics();

export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
