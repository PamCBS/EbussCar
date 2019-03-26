//by using const, we have variables with global scope.
const emailLoginInput=document.getElementById("login-email");
const passwordLoginInput=document.getElementById("login-password");
const resultSpan = document.getElementById("resultSpan");
const loginButton = document.getElementById("login-btn");
const rememberMe=document.getElementById("remember-me");

console.log("login.js is loaded")

loginButton.onclick = function(){

  console.log("loaded0")//debugger

  if(emailLoginInput.value.length == 0 || passwordLoginInput.value.length == 0){
    // We set the resultspan with a new text (old is in html) and return false to get out of this function
    resultSpan.innerText = "You need to enter a username and password in order to use our platform.";
    //alert("You need to enter a username and password in order to use our platform.")
    return false;
  }
  
  //this functionality checks if the email address and email are registered in our system with the loop function
  for (let i=0; i<users.length; i++){
    if(emailLoginInput.value === users[i].email && passwordLoginInput.value===users[i].password){
      localStorage.setItem("users", JSON.stringify(users));
      console.log(
        'here'
      )
      window.location.href="./driverWall.html";
    } else {
      resultSpan.innerText ="Email address and/or password is not registered in our system."
      
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
}
function showPassword() {
    //this function allows User to see the password that he/she typed 
    //by changing the type of input from password to text (both are strings though)
    if (passwordLoginInput.type === "password") {
      passwordLoginInput.type = "text";
    } else {
      passwordLoginInput.type = "password";
    }
  } 
