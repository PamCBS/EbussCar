
console.log("registration.js loaded")
//this is debugging tip

 // Bind the two input fields and get the value
var submitButton=document.getElementById('submit-btn')
var firstNameInput=document.getElementById("first-name")
//this is not a var that holds value but a variable that binds the documents
//it make is it easier to code by calling var name and not getElementByID evvery time.
var lastNameInput=document.getElementById("last-name")
var usernameInput=document.getElementById("username")
var emailInput=document.getElementById("email")
var DofBInput=document.getElementById("date-of-birth")
var passwordInput=document.getElementById("password")
var repeatPasswordInput=document.getElementById("repeat-password")
var termsInput=document.getElementById("terms")
console.log(users)
//just to check that we have at least one registered user (hardcoded)


//triger the click button
//create a new user and add to array

submitButton.onclick = function(){
    console.log("clicked")
    // make sure that user fills out all fields  
    if (firstNameInput.value.length === 0 || lastNameInput.value.length === 0 ||usernameInput.value.length === 0 || emailInput.value.length === 0 || DofBInput.value.length === 0 || passwordInput.value.length === 0 || repeatPasswordInput.value.length === 0) {
        alert('You need to fill out all fields in order to sign up');
        return false;
    }
        //why does that block the rest of my code?
    else if (passwordInput==""){
        alert("Please enter a password. The password must be at least 8 characters.")
    }

    //this does not work either 
    else if(passwordInput.value.length <=7){
        alert("The password must be at least 8 characters.")
      return false  
    };
    

    if(passwordInput.value !== repeatPasswordInput.value){
        alert("Your password does not match. Please try again.")
        
    };
 
    
    if(emailInput.value.endsWith("@student.cbs.dk")!==false){
        return true
        }
    else
    alert("This is not CBS student email. Please try again.")
        
    function termsChecked
    if(termsInput==false){
        alert ("You must accept Terms and Conditions to complete registration")
        
    }

 //   if(termsInput=true && repeatPasswordInput==passwordInput) {
    users.push(new User(firstNameInput.value, lastNameInput.value, usernameInput.value, emailInput.value, DofBInput.value, passwordInput.value, repeatPasswordInput.value))
    console.log(users)
    
 
}


