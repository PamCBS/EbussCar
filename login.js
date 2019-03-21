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
  console.log("loaded1")
  //a functionality that checks if the email address already exists
  for (let i=0; i<users.length; i++){
    if(emailLoginInput.value === users[i].email){
    } else {
      resultSpan.innerText ="Email address is not registered in our system."
    }
  }    	
  console.log("loaded2")
  //a functionality that checks if the input password is the same as registered password
  for (let i=0; i<users.length; i++){
    if (passwordLoginInput.value===users[i].password){
      window.location.href="./driverWall.html"
    } else{
      resultSpan.innerText="Wrong password, try again."
    }
  }

  showPassword()

  if (rememberMe.checked){
    e.preventDefault(); //to tell the browser not to refresh
  }
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
