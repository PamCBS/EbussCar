
console.log("UserDatabase.js loaded")

var  users = []
//equals an empty array to save new users
//users.push adds new users to the array, that means that it will be saved only for one session
// local storage sits in the browser, works like cookies.

users.push(new User("Henrik", "Thorn", "hacker", "henrik.thorn@student.cbs.dk", "01/15/1980", "abc12345", "abc12345"))