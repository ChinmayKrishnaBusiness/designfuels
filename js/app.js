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
var emailInputLabel= document.querySelector("#email-label");
var emailSuccessMessageTop = document.querySelector("#email_success_message_top");
var phoneInput= document.querySelector("#phone");
var phoneInputLabel= document.querySelector("#phone-label");
var startNowButton= document.querySelector("#start_now");
var submitButton= document.querySelector("#submit");

startNowButton.addEventListener("click", function(){
  var email= emailInput.value;
  db.collection("emails").add({
      email: email,

  })
  .then(function(docRef) {
      emailInput.value='';
      emailInput.style.display="none";
      emailInputLabel.style.display="none";
      emailSuccessMessageTop.style.display="block";
      setTimeout(function(){
        emailSuccessMessageTop.style.display="none";
      }, 3000);
      phoneInputLabel.style.display="block";
      phoneInput.style.display="block";
      startNowButton.style.display="none";
      submitButton.style.display="inline-block";
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
})

submitButton.addEventListener("click", function(){
  var phone= phoneInput.value;
  db.collection("phone_numbers").add({
      email: phone,

  })
  .then(function(docRef) {
      phoneInput.value='';
      phoneInput.style.display="none";
      phoneInputLabel.style.display="none";
      emailSuccessMessageTop.style.display="block";
      emailSuccessMessageTop.innerHTML="Congrats ! We will contact you soon ";
      setTimeout(function(){
        emailSuccessMessageTop.style.display="none";
      }, 3000);
      submitButton.style.display="none";
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
})
