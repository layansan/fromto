require([
    "dojo/on"
    
    , "dojo/dom"
    
    , "dojox/validate"
    
    , "dojox/validate/web"
    
    , "dojox/validate/check"
    ], function (on, dom, validate) {

    var btn = dom.byId('submitBooking');
    on(btn, "click", function () {
                var emailAddr = dom.byId('email');
                var phoneNum = dom.byId('phone');
        
                var isValidMail = validate.isEmailAddress(emailAddr.value);
        
                var errorLabel = dom.byId('errormsg');

                if (!isValidMail) {
                    errorLabel.innerHTML = "Email address <b>" + emailAddr.value + "</b> is not valid";
                }
        

    });
});