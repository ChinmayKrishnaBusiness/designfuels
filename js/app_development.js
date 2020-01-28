var service="_app_development";

eval('var '+'emailInput'+ service+'= '+'document.querySelector("#email"+service);')
eval('var '+'emailInputLabel'+ service+'= '+'document.querySelector("#email-label"+service);')
eval('var '+'emailSuccessMessage'+ service+'= '+'document.querySelector("#email_success_message"+service);')
eval('var '+'phoneInput'+ service+'= '+'document.querySelector("#phone"+service);')
eval('var '+'phoneInputLabel'+ service+'= '+'document.querySelector("#phone-label"+service);')
eval('var '+'bookNowButton'+ service+'= '+'document.querySelector("#book_now"+service);')
eval('var '+'bookNowEmailButton'+ service+'= '+'document.querySelector("#book_now_email"+service);')
eval('var '+'submitButton'+ service+'= '+'document.querySelector("#submit"+service);')

eval('bookNowButton'+ service +'.addEventListener("click", function(){'+
  'emailInput'+ service +'.style.display="block";'+
  'emailInputLabel'+ service +'.style.display="block";'+
  'bookNowButton'+ service +'.style.display="none";'+
  'bookNowEmailButton'+ service +'.style.display="block";'+
'})')

eval('bookNowEmailButton'+service+'.addEventListener("click", function(){'+

  'var email'+service+'= emailInput'+service+'.value;'+
  'if(emailInput'+service+'.checkValidity()){'+

    'db.collection(email_production_collection).add({'+
        'email: email'+service+','+
        'service: "'+service+'",'+

    '})'+
    '.then(function(docRef) {'+
        'emailInput'+service+'.value="";'+
        'emailInput'+service+'.style.display="none";'+
        'emailInputLabel'+service+'.style.display="none";'+
        'emailSuccessMessage'+service+'.style.display="block";'+
        'setTimeout(function(){'+
          'emailSuccessMessage'+service+'.style.display="none";'+
        '}, 3000);'+
        'phoneInputLabel'+service+'.style.display="block";'+
        'phoneInput'+service+'.style.display="block";'+
        'bookNowEmailButton'+service+'.style.display="none";'+
        'submitButton'+service+'.style.display="block";'+
    '})'+
    '.catch(function(error) {'+
      'bookNowEmailButton'+service+'.innerHTML="START NOW";'+
        'console.error("Error adding document: ", error);'+
    '});'+

  '}'+
'})')

eval('submitButton'+service+'.addEventListener("click", function(){'+
  'var phone'+service+'= phoneInput'+service+'.value;'+
  'if(phoneInput'+service+'.checkValidity()){'+

    'db.collection(phone_production_collection).add({'+
        'phone: phone'+service+','+
        'service: "'+service+'",'+
    '})'+
    '.then(function(docRef) {'+
        'phoneInput'+service+'.value="";'+
        'phoneInput'+service+'.style.display="none";'+
        'phoneInputLabel'+service+'.style.display="none";'+
        'emailSuccessMessage'+service+'.style.display="block";'+
        'emailSuccessMessage'+service+'.innerHTML="Congrats ! We will contact you soon ";'+
        'setTimeout(function(){'+
          'emailSuccessMessage'+service+'.style.display="none";'+
        '}, 3000);'+
        'submitButton'+service+'.style.display="none";'+
    '})'+
    '.catch(function(error) {'+
      'submitButton'+service+'.innerHTML="SUBMIT";'+
        'console.error("Error adding document: ", error);'+
    '});'+
  '}'+
'})')
