
console.log("registration.js loaded")//this is debugging tip

// Bind the two input fields and get the value. By using const we make the scope of the variables global
const submitButton = document.getElementById('submit-btn')
const firstNameInput = document.getElementById("first-name")
//this is not a var that holds value but a variable that binds the documents.
//it make is it easier to code by calling var name and not getElementByID every time.
const lastNameInput = document.getElementById("last-name")
const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("email")
const DofBInput = document.getElementById("date-of-birth")
const passwordInput = document.getElementById("password")
const repeatPasswordInput = document.getElementById("repeat-password")
const termsInput = document.getElementById("terms")
var resultSpan = document.getElementById('signinResult');

console.log(users)
//just to check that we have at least one registered user (hardcoded)

//triger the click button
//create a new user and add to array
submitButton.onclick = function () {
    console.log("clicked")//debugger
    // make sure that user fills all fields  
    if (firstNameInput.value.length === 0 || lastNameInput.value.length === 0 || usernameInput.value.length === 0 || emailInput.value.length === 0 || DofBInput.value.length === 0 || passwordInput.value.length === 0 || repeatPasswordInput.value.length === 0) {
        resultSpan.innerText = 'You need to fill out all fields in order to sign up';
        return false;
    };


    //validating email in a kinda primitive way. We could play with .val method but I am not sure how.
    if (emailInput.value.endsWith("@student.cbs.dk") === false) {
        resultSpan.innerText = "This is not CBS student email. Please try again."
        return false
    }

    // check if the email address is already stored in local storage
    //we need to make sure that email is unique because we will assign the created value to a given user by email identification
    for (let i = 0; i < users.length; i++) {
        if (emailInput.value === users[i].email) {
            resultSpan.innerText = "The email has already been used, try to log in"
            return false
        };
    };

    // checking for conditions that password must meet
    //We already checked if there is any password entered but now we check if the password has at least 8 characters
    if (passwordInput.value.length <= 7) {
        resultSpan.innerText = "The password must be at least 8 characters."
        return false
    }

    // check if password and confirm password match  
    //If the passwords do not match, both fields are erased    
    if (passwordInput.value !== repeatPasswordInput.value) {
        passwordInput.value = ""
        repeatPasswordInput.value = ""
        resultSpan.innerText = "Your password does not match. Please try again."
        return false
    };

    if (termsInput.checked) {
        var firstName = firstNameInput.value
        var lastName = lastNameInput.value
        var username = usernameInput.value
        var email = emailInput.value
        var DofB = DofBInput.value
        var password = passwordInput.value

        users.push(new User(firstName, lastName, username, email, DofB, User.prototype.hashPassword(password)));//we hash the password here and not in the userDatabase.js so we can still access the value of password, we do not hash it right away
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users)
        window.location.href = "./login.html"; //for some reason href method worsk but assign method does not
    } else {
        resultSpan.innerText = "You must accept Terms and Conditions to complete registration"
        return false
    }

}//close registration function