console.log("routeCreation.js loaded")

var postButton;
var startLocationInput;
var endLocationInput;
var dateInput;
var timeInput;
var driverComissionInput;
var seatsInput;
var payPal;
var resultSpan;
//this is debugging tip
window.addEventListener('DOMContentLoaded', (event) => {
    date.min = new Date().toISOString().split("T")[0];


});



//let basePrice = calcBasePrice()
//let finalPrice = calcFinalPrice();


//console.log(routes)


function calcBasePrice() {

    if (startLocationInput.value == "Valby Station" && endLocationInput.value == "Flintholm") {
        basePrice = 70;
    }
    else if (startLocationInput.value === "Valby Station" && endLocationInput.value === "Solbjerg Plads") {
        basePrice = 50;
    }
    else if (startLocationInput.value === "Amagerbro Station" && endLocationInput.value === "Flintholm") {
        basePrice = 100;
    }
    else if (startLocationInput.value === "Amagerbro Station" && endLocationInput.value === "Solbjerg Plads") {
        basePrice = 80;
    }
    else {
        basePrice = 0;
    }
  return basePrice;
}

function calcDriverComissionInput() {
    var routeCreation = document.forms["route-creation"];
    var driverComission = routeCreation.elements["driver-comission"];
    var howMuch = 0;
    if (driverComission.value != "") {
        howMuch = parseInt(driverComission.value);
    }
    return howMuch;
}

function calcFinalPrice() {
    console.log('called')
    var finalPrice = calcBasePrice() + calcDriverComissionInput();
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display = 'block';
    divFinalPrice.innerHTML = "Route total price is DKK" + finalPrice;
}

function hideFinalPrice()
{
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display='none';
}

var test = () => {
    console.log('clicked')
}

    // Bind the two input fields and get the value. By using var we make the scope of the variables global
    postButton = document.getElementById('post-btn');
    startLocationInput = document.getElementById('start-location');
    endLocationInput = document.getElementById('end-location');
     dateInput = document.getElementById("date");
    timeInput = document.getElementById('time');
    driverComissionInput = document.getElementById('driverComission');
    seatsInput = document.getElementById('seats');
    payPal = document.getElementById('payal')
    resultSpan = document.getElementById('route-creation');