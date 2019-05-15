//for route's data: 
//route is an object, where we store information about start location, end location, date, price etc.

console.log("Route.js loaded")//debugger


class Route{
    constructor(startLocation, endLocation, date, time, driverComission, basePrice, finalPrice, seats, payPal, owner){
        //in the brackets we write it to specify order of input
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.date = date;
        this.time = time;
        this.driverComission = driverComission;
        this.basePrice = basePrice;
        this.finalPrice = finalPrice;
        this.seats = seats;
        //just a dummy string input, it can be linked to the PayPal api in order to be used as a payment method
        this.payPal = payPal;
        //owner will help attach the created route to the currently logged in user
        this.owner = owner;

    }

}



