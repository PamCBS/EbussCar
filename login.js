//by using const, we have variables with global scope.
const emailLoginInput = document.getElementById("login-email");
const passwordLoginInput = document.getElementById("login-password");
const resultSpan = document.getElementById("resultSpan");
const loginButton = document.getElementById("login-btn");
const rememberMe = document.getElementById("remember-me");
const logoutButton = document.getElementById("logout-btn");

console.log("login.js is loaded")//debugger

// creating variable that stores whether the user is logged in or not. Starts as false, changes to true on successful log in 
var isLoggedIn = false;
console.log(`Is logged in? ${isLoggedIn}`); //to check if the variable reflects the truth
// stringify isLoggedIn and put into localStorage
var isLoggedInStringified = JSON.stringify(isLoggedIn);//local scope, as the variable's value changes accordingly to situation
localStorage.setItem('isLoggedIn', isLoggedInStringified);//setItem(key, value) value can only be a string
console.log(isLoggedInStringified)
//making sure the logout button is hidden, when user isn't logged in (changed to visible after logging in)
logoutButton.style.visibility = 'hidden';

loginButton.onclick = function () {
  console.log("loaded0")//debugger
  if (emailLoginInput.value.length == 0 || passwordLoginInput.value.length == 0) {
    // We set the resultspan with a new text (old is in html) and return false to get out of this function
    resultSpan.innerText = "You need to enter a username and password in order to use our platform.";
    return false;
  }

  //this functionality checks if the email address and email are registered in our system with the loop function
  for (let i = 0; i < users.length; i++) {
    try {//simple explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
      // We try to create a variable with the hashed version of the inputPassword
      var hashedInputPassword = users[i].hashPassword(passwordLoginInput.value);//we hash password here so we still are able to access its value and compare it with input value
    } catch (error) {
      // We console log any error that might have been thrown
      console.log(error);
    }

    if (emailLoginInput.value === users[i].email && hashedInputPassword === users[i].password) {
      localStorage.setItem("users", JSON.stringify(users));
      console.log('here')
      logoutButton.style.visibility = 'visible'; // show logout button
      isLoggedIn = true
      isLoggedInStringified = JSON.stringify(isLoggedIn);
      localStorage.setItem("isLoggedIn", isLoggedInStringified);
      window.location.href = "./driverWall.html";

    } else {
      resultSpan.innerText = "Email address and/or password is not registered in our system."
    }
  }

  //we are calling fucntion showPassword, which is written below, to make the password visible after checking the button
  showPassword()

  //this is the last condition for login, which does nothing
  //if (rememberMe.checked){
  //e.preventDefault(); //to tell the browser not to refresh
  //it's a little joke, we cannot remember users without a database
  //}
  return false;
}//login fun ends


function showPassword() {
  //this function allows User to see the password that he/she typed 
  //by changing the type of input from password to text (both are strings though)
  if (passwordLoginInput.type === "password") {
    passwordLoginInput.type = "text";
  } else {
    passwordLoginInput.type = "password";
  }
}

