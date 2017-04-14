const express     = require('express'),
      app         = express(),
      firebase    = require("firebase");

app.use(express.static(__dirname + '/public'));

var config = {
  apiKey: "AIzaSyAJFz9TdfeLiSRUv7dw_o7nK8_qiKnNeec",
  authDomain: "test-fbfa7.firebaseapp.com",
  databaseURL: "https://test-fbfa7.firebaseio.com",
  projectId: "test-fbfa7",
  storageBucket: "test-fbfa7.appspot.com",
  messagingSenderId: "374271903483"
};
firebase.initializeApp(config);

var database = firebase.database();

app.post("/corousel/prev", (req, res) => {
  // console.log("disini");
  firebase.database().ref('corousel/').set({
    event: "prev"
  });
})

app.post("/corousel/next", (req, res) => {
  firebase.database().ref('corousel/').set({
    event: "next"
  });
})

app.listen(3000, () => {
  console.log(`Hehehe...!`);
})
