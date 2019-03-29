//for users' data: 
//driver is an object, where we store information about name, birthdate, car, email etc
//for every class that you create, build a individual JS.

console.log("User.js loaded")
class User{
    constructor(firstName, lastName, username, email, DofB, password){
        //in the brackets we write it to specify order of input
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email= email;
        this.DofB= DofB;
        this.password = password;        
    }
    
    hashPassword(rawPassword){//function copy pasted from Jan, I asked and he said it's fine if we get his code.
        var a = 1, c = 0, h, o;
        if (rawPassword) {
          a = 0;
          for (h = rawPassword.length - 1; h >= 0; h--) {
            o = rawPassword.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
          }
        }else {
          // If the password is not valid, we'll throw and error we're able to catch
          throw new Error("The password supplied is not valid");
        }
        return String(a);
        }
}
