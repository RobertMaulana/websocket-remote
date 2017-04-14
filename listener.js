let firebase = require("firebase");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAJFz9TdfeLiSRUv7dw_o7nK8_qiKnNeec",
  authDomain: "test-fbfa7.firebaseapp.com",
  databaseURL: "https://test-fbfa7.firebaseio.com",
  projectId: "test-fbfa7",
  storageBucket: "test-fbfa7.appspot.com",
  messagingSenderId: "374271903483"
};
firebase.initializeApp(config);

var starCountRef = firebase.database().ref('access/1');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});
