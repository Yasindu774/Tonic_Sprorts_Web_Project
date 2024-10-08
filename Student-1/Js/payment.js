
//---- When the page is loading this function will run

function load(){

    // Get the value of parameters from the URL
    var parameter = (new URL(document.location)).searchParams;

    var total = parameter.get('total');
    var email = parameter.get('email');
    var name = parameter.get('name');

    // Display the values on the page
    document.getElementById("total-amount").innerHTML = total;
    document.getElementById("email").value = email;
    document.getElementById("card-name").value = name;

    var randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    document.getElementById('auto-reference').innerHTML = randomNumber;

    let address1 = document.getElementById('address1').value = "115 New Cavendish Street";
    let city = document.getElementById('town-city').value = "London";
    let zipCode = document.getElementById('postal-code').value = "W1W 6UW";
    let country = document.getElementById('country').value = "United Kindgdom";
    let Mobile = document.getElementById('mobile').value;
   

    document.getElementById('bill-address').innerHTML = address1+", "+city+", "+zipCode+", "+country;
    document.getElementById('bill-contact').innerHTML = Mobile+"  "+email; 
}

// error showing when there is any wrong input for the fields

function errorNotification(errorType){
    let notification = document.querySelector(".error-notification");
    notification.innerHTML = errorType;
        notification.classList.add("active");
        setTimeout(()=>{
            notification.classList.remove("active")
        },2000);  
}

// function for validating payment fields

function validate(){
    let cardNumber = document.getElementById('cardNumber');
    let cardHolder = document.getElementById('card-name');
    let expieryMonth = document.getElementById('expiry-month');
    let expieryYear = document.getElementById('expiry-year');
    let securityCode = document.getElementById('cvc-number');
    let address = document.getElementById('address1');
    let city = document.getElementById('town-city');
    let zipCode = document.getElementById('postal-code');
    let country = document.getElementById('country');

    if(cardNumber.value == ""){errorNotification("Card number is required !")}
    else if(isNaN(cardNumber.value)){errorNotification("Card number should be numeric !")}
    else if(cardNumber.value.length != 16){errorNotification("Card number should have 16 digits !")}
    else if(cardHolder.value == ""){errorNotification("Card holder's name is required !")}
    else if(expieryMonth.value == "" ){errorNotification("Expiery month is required !")}
    else if(expieryYear.value == "" ){errorNotification("Expiery year is required !")}
    else if(isNaN(securityCode.value)){errorNotification("Security code should be numeric !")}
    else if(securityCode.value == "" ){errorNotification("Security code is required !")}
    else if(securityCode.value.length != 3 ){errorNotification("Security code should have 3 digits !")}
    else if(address.value == "" ){errorNotification("Address is required !")}
    else if(city.value == "" ){errorNotification("Town / City is required !")}
    else if(zipCode.value == "" ){errorNotification("ZIP Code is required !")}
    else if(country.value == "" ){errorNotification("Country is required !")}
    else{
        errorNotification("Payment Successful !");
        setTimeout(()=>{
            window.location.href="buy.html"
        },1500);
    }
 }
 // ------------- Edit option for billing details------------

function billingDropdownHide(){
    var icon = document.getElementById('icon');
    var billingDetails = document.querySelector('.billing-details');
    billingDetails.classList.remove("hide");
    document.getElementById('edit-text').innerText = "Edit ";
    icon.classList.replace('fa-times','fa-caret-down');
}
function billingDropdownAdd(){

    var icon = document.getElementById('icon');
    var billingDetails = document.querySelector('.billing-details');

    if(document.getElementById('edit-text').innerText == "Edit "){
   
        billingDetails.classList.add("hide");
        document.getElementById('edit-text').innerText = "Close ";
        icon.classList.replace('fa-caret-down','fa-times');
    }
    else{
        billingDropdownHide();
    }
        
 }

 function validateBill(){
    let address = document.getElementById('address1').value;
    let city = document.getElementById('town-city').value;
    let zipCode = document.getElementById('postal-code').value;
    let country = document.getElementById('country').value;

    if(address == "" ){errorNotification("Address is required !")}
    else if(city == "" ){errorNotification("Town / City is required !")}
    else if(zipCode == "" ){errorNotification("ZIP Code is required !")}
    else if(country == "" ){errorNotification("Country is required !")}
    else{
        document.getElementById('bill-address').innerHTML = address+", "+city+", "+zipCode+", "+country;
        billingDropdownHide();
    }
 }
 // ------------- Edit option for contact details------------

 function contactDropdownHide(){
    var icon = document.getElementById('icon2');
    var contactDetails = document.querySelector('.sixth-row');
    var buttons = document.querySelector('.seventh-row');

    contactDetails.classList.remove("hide");
    buttons.classList.remove("hide");
    document.getElementById('edit-text2').innerText = "Edit ";
    icon.classList.replace('fa-times','fa-caret-down');
}

 function contactDropdownAdd(){

    var icon = document.getElementById('icon2');
    var contactDetails = document.querySelector('.sixth-row');
    var contact = document.getElementById('sixth-row');
    var buttons = document.querySelector('.seventh-row');

    if(document.getElementById('edit-text2').innerText == "Edit "){
   
        contactDetails.classList.add("hide");
        buttons.classList.add("hide");
        document.getElementById('edit-text2').innerText = "Close ";
        icon.classList.replace('fa-caret-down','fa-times');
    }
    else{
        contactDropdownHide();
    }
        
 }

 function validateContact(){
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    var emailValidation = /^[A-Za-z._0-9]{3,}@[A_Za-z]{2,}[.]{1}[A-Za-z.]{2,6}$/;
    // var emailValidation = RegExp("^([a-z][A-Z][0-9]@[a-z][A-Z].[a-z][A-Z])$");
    if(mobile == "" && email == ""){errorNotification("Mobile and email Id is required !")}
    else if(mobile == ""){errorNotification("Mobile number is required !")}
    else if(isNaN(mobile)){errorNotification("Mobile number should be numeric !")}
    else if(mobile.length != 10){errorNotification("Mobile number should have 10 digits !")}
    else if(!(email.match(emailValidation))){errorNotification("Invalid email ID !")}
    else{
        document.getElementById('bill-contact').innerHTML = mobile+"  "+email;
        contactDropdownHide();
    }
 }
//---------------------------------------------------------------
 // Show ok symbol when input is given correctly

 function rightButtoncheck(checkitem){
    let cardNumber = document.getElementById('cardNumber').value;
    let cardHolder = document.getElementById('card-name').value;
    let expieryMonth = document.getElementById('expiry-month').value;
    let expieryYear = document.getElementById('expiry-year').value;
    let securityCode = document.getElementById('cvc-number').value;

    var cardNumberCheck = document.getElementById('right-icon1');
    var cardNameCheck = document.getElementById('right-icon2');
    var ExpDateCheck = document.getElementById('right-icon3');
    var cvvCodeCheck = document.getElementById('right-icon4');

    let payNowButton = document.getElementById('pay-now');

    if(checkitem == "cardCheck"){
        if(cardNumber != "" && !isNaN(cardNumber) && cardNumber.length == 16){
            cardNumberCheck.style.visibility = "visible";
        }else{
            cardNumberCheck.style.visibility = "hidden";
        }
    }
    else if(checkitem == "cardNameCheck"){
        if(cardHolder != ""){
            cardNameCheck.style.visibility = "visible";
        }else{
            cardNameCheck.style.visibility = "hidden";
        }
    }
    else if(checkitem == "ExpDateCheck"){
        if(expieryMonth != "" && expieryYear != ""){
            ExpDateCheck.style.visibility = "visible";
        }else{
            ExpDateCheck.style.visibility = "hidden";
        }
    }
    else if(checkitem == "cvvCodeCheck"){
        if(securityCode != "" && !isNaN(securityCode) && securityCode.length == 3){
            cvvCodeCheck.style.visibility = "visible";
        }else{
            cvvCodeCheck.style.visibility = "hidden";
        }
    }
    if(cardNumber != "" && !isNaN(cardNumber) && cardNumber.length == 16 && cardHolder != "" &&  expieryMonth != "" && expieryYear != "" && securityCode != "" && !isNaN(securityCode) && securityCode.length == 3){
        payNowButton.style.opacity = "1";
    }
    else{
        payNowButton.style.opacity = "0.3";
    }
 }