// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBOTRe97AKfR6Pm4xRCSC-upWj52u8GQT8",
  authDomain: "designfuels-inbound-contacts.firebaseapp.com",
  databaseURL: "https://designfuels-inbound-contacts.firebaseio.com",
  projectId: "designfuels-inbound-contacts",
  storageBucket: "designfuels-inbound-contacts.appspot.com",
  messagingSenderId: "651473861313",
  appId: "1:651473861313:web:ef192d166dc77b04437240",
  measurementId: "G-G283LEL7PS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

var emailInput= document.querySelector("#email");
var startNowButton= document.querySelector("#start_now");

startNowButton.addEventListener("click", function(){
  var email= emailInput.value;
  db.collection("emails").add({
      email: email,

  })
  .then(function(docRef) {
      emailInput.value='';
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
})
