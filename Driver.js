//for driver's data: 
//driver is an object, where we store information about name, birthdate, car, email etc
//for every class that you create, build a individual JS.

console.log("Driver.js loaded")
class User{
    constructor(firstName, lastName, username, email, DofB, password, repeatPassword){
        //in the brackets we write it to specify order of input
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email= email;
        this.DofB= DofB;
        this.password = password;
        this.repeatPassword=repeatPassword
        // we didn't create a checkbox constructor to minimize coding. If user didn't check it, he would't create account
    }
}
