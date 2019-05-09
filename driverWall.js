console.log("driverWall.js has loaded")
const divOwner = document.getElementById("DW-owner");
const divStartLocation = document.getElementById("DW-startLocation");
const divDestination = document.getElementById("DW-destination");
const divDate = document.getElementById("DW-date");
const divTime = document.getElementById("DW-time");
const divOfferedSeats = document.getElementById("DW-offeredSeats");
const divMarkup = document.getElementById("DW-markup");
const divTotalPrice = document.getElementById("DW-totalPrice");

const allRidesLS = JSON.parse(localStorage.getItem("routes"))
//const currentRideLS = JSON.parse(localStorage.getItem("currentRoute"))
const allUsersLS = JSON.parse(localStorage.getItem("users"))
const activeUser = JSON.parse(localStorage.getItem("activeUser"))

const findActiveUser = () => {
    console.log("function findActiveUser is called00")//to make sure it even works
    const currentUser = allUsersLS.find((users) => {
        return users.email === activeUser
    })

}
findActiveUser()

// Create a function to find a ride based on it's owner email
function findRoutes(){
    const allStoredRoutes = allRidesLS.find((routes) => {
        return allStoredRoutes
    })
    findActiveUser()
    //is statement that prints desired information
    if (currentUser === allStoredRoutes.owner) {
        divOwner.innerHTML = "Route offered by " + routes.owner
        divStartLocation.innerHTML = "Start Location is "
        divDestination.innerHTML = "Destination is "
        divDate.innerHTML = "Date of the ride is "
        divTime.innerHTML = "Time of the ride is "
        divOfferedSeats.innerHTML = "You offered " + + " seats."
        divMarkup.innerHTML = "Your markup is "
        divTotalPrice.innerHTML = "Total price of the offered price is " 
        //i am pretty sure we need to give unique id to each route otherwise we cannot access data of route just by the owner, since he might post more than once
    }
}
findRoutes()
//Function expressions load only when the interpreter reaches that line of code. 
//So if you try to call a function expression before it's loaded, you'll get an error! 
//If you call a function declaration instead, it'll always work, because no code can be called until all declarations are loaded.






const logoutButton = document.getElementById("logout-btn");
var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))//
console.log(`Is user logged in? ${isLoggedIn}`)
//could go at the bottom of the .js
logoutButton.onclick = function LogOut() {
    if (isLoggedIn === true) {
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn)); // update local storage with setItem(key, value) value has to be string
        logoutButton.style.visibility = 'hidden';//after we log out, we do not want to see the log out button anymore
        console.log(`Is logged in?${isLoggedIn}`);
        window.location.href = "./login.html"
    }
}