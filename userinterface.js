const divName = document.getElementById("profile-name");
const divUsername = document.getElementById("profile-username");
const divEmail = document.getElementById("profile-email");
const divNoR = document.getElementById("profile-NofR");

// get active user from ls
// get all users from ls
// loop over all users and find the currentUser
var activeUser = JSON.parse(localStorage.getItem("activeUser"))
var allUsersLS = JSON.parse(localStorage.getItem("users"))

// Create a function to find a product/item based on it's ID
// The function should take both the array and ID as inputs

function findCurrent (){
    console.log("function findCurent is called1")//to make sure it event works
    const currentUser = allUsersLS.find((users) => {
        return users.email === activeUser
    })
    
    divName.innerHTML = 'Name: ' + currentUser.firstName;
    divUsername.innerText = 'Username: ' + currentUser.username;
    divEmail.innerHTML = "Email:" + currentUser.email;
    divNoR.innerText = 'Number of rides: ' + curentUser.NoR
}


//log out function
const logoutButton = document.getElementById("logout-btn");

var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))//
console.log(`Is user logged in? ${isLoggedIn}`)
//could go at the bottom of the .js
logoutButton.onclick = function LogOut(){
    if (isLoggedIn === true){
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn)); // update local storage with setItem(key, value) value has to be string
        logoutButton.style.visibility = 'hidden';//after we log out, we do not want to see the log out button anymore
        console.log(`Is logged in?${isLoggedIn}`);
        window.location.href="./login.html"
    }
}