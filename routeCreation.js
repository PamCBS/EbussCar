//this is debugging tip

console.log("routeCreation.js loaded")

// by using const we make the scope of the variables global
// it makes is it easier to code by calling variable name and not getElementByID every time.
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


const activeUser = JSON.parse(localStorage.getItem("activeUser"))
const allUsersLS = JSON.parse(localStorage.getItem("users"))

// create a function to find a ride based on it's owner email

const findCurrent = () => {
    console.log("function findCurent is called1")//to make sure it event works
    const currentUser = allUsersLS.find((users) => {
        return users.email === activeUser
    })
    return currentUser
}

// to limit the miniminum date available for choosing  to the present day the following method was used (source: https://stackoverflow.com/questions/32192922/how-do-i-get-a-date-in-yyyy-mm-dd-format)
date.min = new Date().toISOString().split("T")[0];


// to calculate the base price we used set values dependent on the available locations

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
// driver users can input their own commission values which will be added later on to the final price of the created route

function calcDriverComissionInput() {

    var howMuch = 0;
    if (driverComission.value != "") {
        howMuch = parseInt(driverComission.value);
    }
    return howMuch;
}

// in order to get the final price, the base price and driver commission had to be added up
// it is displayed as the users selects the options (source: http://javascript-coder.com/javascript-form/javascript-calculator-script.phtml)

function calcFinalPrice() {
    console.log('called')
    var finalPriceInput = calcBasePrice() + calcDriverComissionInput();
    divFinalPrice.style.display = 'block';
    divFinalPrice.innerHTML = "Route total price is " + finalPriceInput + " DKK";
    return finalPrice;
}

// in order to hide the final price if nothing is selected

function hideFinalPrice()
{
    var divFinalPrice = document.getElementById('finalPrice');
    divFinalPrice.style.display='none';
}

// in order to register a new route, the post button needs to be pressed

postButton.onclick = function postRoute () {

// defining the base price value as the option for detecting whether any of the start or destination options were selected

    var basePrice = calcBasePrice()
    
// unfortunately the same method used for making sure all the user fills all fields in the user registration step cannot work here fully
// it does however work up until the end and start location selection, otherwise the route is sent to the local storage with the existing values
// possible errors start from the date selection onwards, identical date selection based on .value.length (used in user registration) ignores the function all together
   
if (basePrice != 0 || dateInput.value != 0 || driverComissionInput.value === 0 || seatsInput.value === 0 || payPalInput.value === 0) {
        
        var startLocation = startLocationInput.value;
        var endLocation = endLocationInput.value;
        var date = dateInput.value;
        var time = timeInput.value;
        var driverComission = driverComissionInput.value;
        var finalPrice = calcFinalPrice();
        var seats = seatsInput.value;
        var payPal = payPalInput.value;
        var owner = JSON.parse(localStorage.getItem("activeUser"))


        routes.push(new Route(startLocation, endLocation, date, time, driverComission, basePrice, finalPrice, seats, payPal))
        localStorage.setItem("routes", JSON.stringify(routes));
        console.log(routes)
        window.location.href = "./userinterface.html"
    } else {
        displaySpan.innerText = "You must fill out all fields"
        return false
    }
}
console.log("postButton works")//debugger

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