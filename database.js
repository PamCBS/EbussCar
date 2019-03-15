
console.log("database.js loaded")

var  users = []
//equals an empty array to save new users
//users.puch adds new users to the array, that means that it will be saved only for one session
// local storage sits in the browser, works like cookies.

users.push(new User("Henrik", "Thorn", "hacker", "abc123"))