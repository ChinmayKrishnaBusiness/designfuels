// Your web app's Firebase configuration


var emailInput= document.querySelector("#email");
var emailInputLabel= document.querySelector("#email-label");
var emailSuccessMessageTop = document.querySelector("#email_success_message_top");
var phoneInput= document.querySelector("#phone");
var phoneInputLabel= document.querySelector("#phone-label");
var startNowButton= document.querySelector("#start_now");
var submitButton= document.querySelector("#submit");


startNowButton.addEventListener("click", function(){

  var email= emailInput.value;
  if(emailInput.checkValidity()){
    //startNowButton.innerHTML='<img style="height:10px; width:10px;" src="svg/loading.svg">';
    db.collection(email_production_collection).add({
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
        submitButton.style.display="block";
    })
    .catch(function(error) {
      startNowButton.innerHTML='START NOW';
        console.error("Error adding document: ", error);
    });

  }
})

submitButton.addEventListener("click", function(){
  var phone= phoneInput.value;
  if(phoneInput.checkValidity()){
    //startNowButton.innerHTML='<img style="height:10px; width:10px;" src="svg/loading.svg">';
    db.collection(phone_production_collection).add({
        phone: phone,

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
      submitButton.innerHTML='SUBMIT';
        console.error("Error adding document: ", error);
    });
  }
})
