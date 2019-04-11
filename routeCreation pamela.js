console.log("routeCreation.js loaded")



// Bind the two input fields and get the value. By using var we make the scope of the variables global
const postButton = document.getElementById('post-btn');
const startLocationInput = document.getElementById('start-location');
const endLocationInput = document.getElementById('end-location');
const dateInput = document.getElementById("date");
const timeInput = document.getElementById('time');
const driverComissionInput = document.getElementById('driver-comission');
const seatsInput = document.getElementById('seats');
const paypalInput = document.getElementById('paypal')
const resultSpan = document.getElementById('route-creation');
const displaySpan = document.getElementById("display")

//this is debugging tip
window.addEventListener('DOMContentLoaded', (event) => {
    date.min = new Date().toISOString().split("T")[0];
});

//let basePrice = calcBasePrice()
//let finalPrice = calcFinalPrice();
//console.log(routes)

// localStorage.setItem("startLocationInput.value", JSON.stringify(startLocationInput.value)), localStorage.setItem("endLocationInput.value", JSON.stringify(endLocationInput.value))

function calcBasePrice() {

    if (startLocationInput.value == "Valby Station" && endLocationInput.value == "Flintholm") {
        basePrice = 70;
        //   storeLocations
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
    
    var finalPrice = calcBasePrice() + calcDriverComissionInput();
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display = 'block';
    divFinalPrice.innerHTML = "Route total price is DKK" + finalPrice;
//    localStorage.setItem("finalPrice", JSON.stringify(finalPrice));//price in local storage
}

function hideFinalPrice() {
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display = 'none';
}

var test = () => {
    console.log('clicked')
}


postButton.onclick = function postRoute () {
    console.log("print")

    if (startLocationInput.value !== undefined && endLocationInput.value !== undefined, dateInput.value !== undefined, driverComissionInput.value !== undefined, seatsInput.value !== undefined, paypalInput.value !== undefined) {
        var startLocation = startLocationInput.value
        var endLocation = endLocationInput.value
        var date = dateInput.value
        var time = timeInput.value
        var driverComission = driverComissionInput.value
        var basePrice = calcBasePrice()
        var finalPrice = calcFinalPrice()
        var seats = seatsInput.value
        var paypal = paypalInput.value

        routes.push(new Route(startLocation, endLocation, date, time, driverComission, basePrice, finalPrice, seats, paypal))
        localStorage.setItem("routes", JSON.stringify(routes));
        console.log(routes)
        window.location.href = "./availableRoutes.html"
    } else {
        displaySpan.innerText = "You must fill out all fields"
        return false
    }
}



//logout function:
const logoutButton = document.getElementById("logout-btn");
var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))//
console.log(`Is user logged in? ${isLoggedIn}`)
logoutButton.onclick = function LogOut() {
    if (isLoggedIn === true) {
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn)); // update local storage to logged out with setItem(key, value) value has to be string
        logoutButton.style.visibility = 'hidden';//after we log out, we do not want to see the log out button anymore
        console.log(`Is logged in?${isLoggedIn}`);//updating the status
        window.location.href = "./login.html"
    }
}

