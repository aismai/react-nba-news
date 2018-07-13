import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAr5VvsWcdRvuGJNKpDBBeO9dfQw57Uz30",
  authDomain: "aismai-nba-news.firebaseapp.com",
  databaseURL: "https://aismai-nba-news.firebaseio.com",
  projectId: "aismai-nba-news",
  storageBucket: "aismai-nba-news.appspot.com",
  messagingSenderId: "310357263360"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebasevideos = firebaseDB.ref("videos");

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebasevideos
};
