var emailLoginInput=document.getElementById("login-email")
var passwordLoginInput=document.getElementById("login-password")

if(inputLoginUsername.value.length == 0 || inputLoginPassword.value.length == 0){
    // We set the resultspan with a new text and return false to get out of this function
    resultSpan.innerText = "You need to enter a username and password in order to use our system";
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