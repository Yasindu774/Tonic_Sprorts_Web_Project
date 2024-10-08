
// function for opening cart slide bar

function cartOpen(){
    let containerItems = document.getElementsByClassName("items");
    let cart = document.querySelector('.card');
    cart.classList.add("active");
    for(var i = 0; i < containerItems.length; i++){
        containerItems[i].classList.add("active");
    }   
}

// function for closing cart

function cartClose(){
    let containerItems = document.getElementsByClassName("items");
    let cart = document.querySelector('.card');
    cart.classList.remove("active");
    for(var i = 0; i < containerItems.length; i++){
        containerItems[i].classList.remove("active");
    }
}

// function which makes the place order button clickcble and non clickable

function placeOrderButtonCheck(){
    var placeOrderLink = document.getElementById("place-order-button");
    var total = document.getElementById('totalCost');

    if(total.innerText > 0) {
        placeOrderLink.style.pointerEvents="auto";
        // placeOrderLink.disabled = false;
        placeOrderLink.style.cursor = 'pointer';
        placeOrderLink.style.opacity = '1';
    }
    else{
        placeOrderLink.style.pointerEvents = 'none'
        // placeOrderLink.disabled = true;
        placeOrderLink.style.opacity = '0.4';
    }
}

// function for updating values of product prices 

function totalClicks(clickChange,className,price,PriceResult){

    var number = document.getElementsByClassName(className);
    var priceOfAProduct = document.getElementsByClassName(price)[0];
    var totalCostForOneProduct = document.getElementById(PriceResult);
    var totalCostForAllProducts = document.getElementById('totalCost');
    var temp = 0;
    var totalCost = 0;

    if(number[0].innerText > 0){
        temp = parseInt(number[0].innerText) + clickChange ;
        number[0].innerHTML = temp;
        number[1].innerHTML = temp;
        
    }
    else if(number[0].innerText == 0 && clickChange == 1){
        temp = parseInt(number[0].innerText) + clickChange;
        number[0].innerHTML = temp;
        number[1].innerHTML = temp;
    }
    else{
        number[0].innerHTML = 0;
        number[1].innerHTML = 0;
    }
    totalCostForOneProduct.innerHTML = parseFloat(priceOfAProduct.innerHTML) * temp;
    totalCostForAllProducts.innerHTML =   parseFloat(totalCostForOneProduct.innerHTML);
    for(var i=0 ; i< 6 ; i++){
        var tempName = 'result'+(i+1);
        totalCost += parseFloat(document.getElementById(tempName).innerHTML);
    }
    totalCostForAllProducts.innerHTML = totalCost;
    placeOrderButtonCheck();
}

// function for validating email and name

function errorNotification(errorType){
    let notification = document.querySelector(".error-message-name");
    notification.innerHTML = errorType;
        notification.classList.add("visible");
        setTimeout(()=>{
            notification.classList.remove("visible")
        },1800);  
}

// function for passing data from one page to another page

function passDataToPaymentPage(){
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    // var emailValidation = RegExp("^([a-z][A-Z][0-9]@[a-z][A-Z].[a-z][A-Z])$");
    var emailValidation = /^[A-Za-z._0-9]{3,}@[A_Za-z]{2,}[.]{1}[A-Za-z.]{2,6}$/;

    if( name == ""){
          errorNotification("Name is required !");
    }
    else if(email == ""){
        errorNotification("Email is required !");  
    }
    else if(!(email.match(emailValidation))){
        errorNotification("Invalid email Id !")
    }
    else{
        var total = document.getElementById("totalCost");
        var url = "payment.html?total="+encodeURIComponent(total.innerText)+"&email="+encodeURIComponent(email)+"&name="+encodeURIComponent(name);
        window.location.href = url;
    }
}
