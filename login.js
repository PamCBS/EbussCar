var emailLoginInput=document.getElementById("login-email");
var passwordLoginInput=document.getElementById("login-password");
var resultSpan = document.getElementById("resultSpan");
var loginButton = document.getElementById("login-btn");


loginButton.onlick = function(){

  if(emailLoginInput.value.length == 0 || passwordLoginInput.value.length == 0){
    // We set the resultspan with a new text (old is in html) and return false to get out of this function
    resultSpan.innerText = "You need to enter a username and password in order to use our system";
    return false;
  }
  //a functionality that checks if the email address already exists
  for (let i=0; i<users.length; i++){
    if(emailLoginInput.value === users[i].email){
      return true;
    } else {
      resultSpan.innerText ="Email address is not registered"
    }
  }    	
  //a functionality that checks if the input password is the same as registered password
  for (let i=0; i<users.length; i++){
    if (passwordLoginInput.value===users[i].password){
      return true
    } else{
      resultSpan.innerText="Wrong password, try again."
    }
  }

  showPassword()
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
