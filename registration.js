
console.log("registration.js loaded")
//this is debugging tip

var submitButton=document.getElementById('submit-btn')
var firstNameInput=document.getElementById("first-name")
//this is not a var that holds value but a variable that binds the documents
//ot make is it easier to code by calling var name and not getElementByID evvery time.
var lastNameInput=document.getElementById("last-name")
var usernameInput=document.getElementById("username")
var emailInput=document.getElementById("email")
var DofBInput=document.getElementById("date-of-birth")
var passwordInput=document.getElementById("password")
var repeatPasswordInput=document.getElementById("repeat-password")
var termsInput=document.getElementById("terms")
console.log(users)
//just to check


//triger the click button
//create a new user and add to array

submitButton.onclick = function(){
    console.log("clicked")

    if (passwordInput==""){
        alert("Please enter a password. The password must be at least 8 characters.")
    }
    var passwordInputValue=passwordInput.value
    if(passwordInputValue.lenght <=7){
        alert("The password must be at least 8 characters.")
        
    };
    

    if(passwordInput.value !== repeatPasswordInput.value){
        alert("Your password does not match. Please try again.")
        
    };
 


    var emailInputValue=emailInput.value;
    
    if(emailInputValue.endsWith("@student.cbs.dk", 15)!==false){}
    else
    alert("This is not CBS student email. Please try again.")
        
    
    if(termsInput=false){
        alert ("You must accept Terms and Conditions to complete registration")
        
    }

    else{
    users.push(new User(firstNameInput.value, lastNameInput.value, usernameInput.value, emailInput.value, DofBInput.value, passwordInput.value, repeatPasswordInput.value))
    console.log(users)
    location="./driverWall.html";
    }
}


