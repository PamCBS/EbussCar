const logoutButton = document.getElementById("logout-btn");


var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))//
console.log(`Is user logged in? ${isLoggedIn}`)
//could go at the bottom of the .js
logoutButton.onclick = function LogOut(){
    if (isLoggedIn === true){
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn)); // update local storage with setItem(key, value) value has to be string
        logoutButton.style.visibility = 'hidden';//after we log out, we do not want to see the log out button anymore
        console.log(`Is logged in?${isLoggedIn}`);
        window.location.href="./login.html"
    }
}
//function display(user){
    //var 