console.log("routeCreation.js loaded")

const postButton = document.getElementById('post-btn');
const startLocationInput = document.getElementById('start-location');
const endLocationInput = document.getElementById('end-location');
const dateInput = document.getElementById("date");
const timeInput = document.getElementById('time');
const driverComissionInput = document.getElementById('driver-comission');
const seatsInput = document.getElementById('seats');
const payPalInput = document.getElementById('paypal')
const resultSpan = document.getElementById('route-creation');
const routeCreation = document.forms["route-creation"];
const driverComission = routeCreation.elements["driver-comission"];
const divFinalPrice = document.getElementById('finalPrice');
const displaySpan = document.getElementById("display");

//this is debugging tip
window.addEventListener('DOMContentLoaded', (event) => {
    date.min = new Date().toISOString().split("T")[0];
});


//let basePrice = calcBasePrice()
//let finalPrice = calcFinalPrice();

const activeUser = JSON.parse(localStorage.getItem("activeUser"))
const allUsersLS = JSON.parse(localStorage.getItem("users"))

// Create a function to find a ride based on it's owner email

const findCurrent = () => {
    console.log("function findCurent is called1")//to make sure it event works
    const currentUser = allUsersLS.find((users) => {
        return users.email === activeUser
    })
    return currentUser
}


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
    return finalPrice;
}

function hideFinalPrice()
{
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display='none';
}


postButton.onclick = function postRoute () {
    
    if (startLocationInput.value === 0 || endLocationInput.value === 0 || dateInput.value === 0 || driverComissionInput.value === 0 || seatsInput.value === 0 || payPalInput.value === 0) {
        
        var startLocation = startLocationInput.value
        var endLocation = endLocationInput.value
        var date = dateInput.value
        var time = timeInput.value
        var driverComission = driverComissionInput.value
        var basePrice = calcBasePrice()
        var finalPrice = calcFinalPrice()
        var seats = seatsInput.value
        var payPal = payPalInput.value
        var owner = JSON.parse(localStorage.getItem("activeUser"))

        routes.push(new Route(startLocation, endLocation, date, time, driverComission, basePrice, finalPrice, seats, payPal, owner))
        localStorage.setItem("routes", JSON.stringify(routes));
        //let currentRide = route[i]
        //localStorage.setItem("currentRoute", JSON.stringify(currentRide));
        console.log(routes)
        window.location.href = "./driverWall.html"
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