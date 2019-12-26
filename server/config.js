import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBH2wnEV1I1vrVfBuE3x6-J1qPJT2SgJv8",
  authDomain: "twitter-scraper-d26a1.firebaseapp.com",
  databaseURL: "https://twitter-scraper-d26a1.firebaseio.com",
  projectId: "twitter-scraper-d26a1",
  storageBucket: "twitter-scraper-d26a1.appspot.com",
  messagingSenderId: "793563415882",
  appId: "1:793563415882:web:85318899ca83b4b0b36db3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();
