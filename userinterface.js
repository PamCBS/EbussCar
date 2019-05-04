console.log("Userinterface.js is connected")

const divName = document.getElementById("profile-name");
const divUsername = document.getElementById("profile-username");
const divEmail = document.getElementById("profile-email");
const divNoR = document.getElementById("profile-NofR");
const deleteButton = document.getElementById("delete-btn")
const resultSpan = document.getElementById("resultSpan")

// get active user from ls
// get all users from ls
// loop over all users and find the currentUser
const activeUser = JSON.parse(localStorage.getItem("activeUser"))
const allUsersLS = JSON.parse(localStorage.getItem("users"))
const allRidesLS = JSON.parse(localStorage.getItem("routes"))


// Create a function to find a ride based on it's owner email

const findCurrent = () => {
    console.log("function findCurent is called1")//to make sure it event works
    const currentUser = allUsersLS.find((users) => {
        return users.email === activeUser
    })

    divName.innerHTML = 'Name: ' + currentUser.firstName;
    divUsername.innerHTML = 'Username: ' + currentUser.username;
    divEmail.innerHTML = "Email: " + currentUser.email;
    divNoR.innerHTML = 'Number of rides offered so far: ' + currentUser.NoR
    //InnerText will only return the text value of the page with each element on a newline in plain text, 
    //while innerHTML will return the HTML content of everything inside the body tag,
}
findCurrent()

if (users.email === activeUser) {
    for (let counter = 0; counter < allRidesLS.length; counter++) {
        divNoR = counter;
    }
}

deleteButton.onclick = function () {
    console.log("delete button works")
    confirm(`Hi ${divName}, are you sure you want to delete your account?`)
    // the confirmation popup https://www.w3schools.com/jsref/met_win_confirm.asp
    if (confirm == true) {
        let indexcurrent = users.indexOf(currentUser)//syntax arr.indexOf(searchElement[, fromIndex])
        if (indexcurrent > -1) {
            users.splice(indexcurrent, 1);
            window.location.href = "./registration.html";
            return true
        }
    } else {
        resultSpan.innerHTML = "Thank you for staying with us"
        return false
    }
}


//log out function
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