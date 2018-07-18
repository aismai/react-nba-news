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
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
  const data = [];

  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
};
