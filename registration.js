
console.log("registration.js loaded")
//this is debugging tip

var submitButton =document.getElementById('submit-btn')
var firstNameInput= document.getElementById("first-name")
//this is not a var that holds value but a variable that binds the documents
//ot make is it easier to code by calling var name and not getElementByID evvery time.
var lastNameInput= document.getElementById("last-name")


console.log(users)
//just to check


//triger the click buttono
submitButton.onclick = function(){
    console.log("clicked")

    users.push(new User(firstNameInput.value, lastNameInput.value))
    console.log(users)

}



//create a new user and add to array
//users.push(new User(firstName, lastName, username, password))
