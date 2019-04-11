console.log("routeCreation.js loaded")

const postButton = document.getElementById('post-btn');
const startLocationInput = document.getElementById('start-location');
const endLocationInput = document.getElementById('end-location');
const dateInput = document.getElementById("date");
const timeInput = document.getElementById('time');
const driverComissionInput = document.getElementById('driver-comission');
const seatsInput = document.getElementById('seats');
const payPal = document.getElementById('paypal')
const resultSpan = document.getElementById('route-creation');
const routeCreation = document.forms["route-creation"];
const driverComission = routeCreation.elements["driver-comission"];
const divFinalPrice = document.getElementById('finalPrice');


//this is debugging tip
window.addEventListener('DOMContentLoaded', (event) => {
    date.min = new Date().toISOString().split("T")[0];
});



//let basePrice = calcBasePrice()
//let finalPrice = calcFinalPrice();


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

    var howMuch = 0;
    if (driverComission.value != "") {
        howMuch = parseInt(driverComission.value);
    }
    return howMuch;
}

function calcFinalPrice() {
    console.log('called')
    var finalPrice = calcBasePrice() + calcDriverComissionInput();
    divFinalPrice.style.display = 'block';
    divFinalPrice.innerHTML = "Route total price is " + finalPrice + " DKK";
}

function hideFinalPrice()
{
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display='none';
}


postButton.onclick = function(){
    console.log("postButton works")


}