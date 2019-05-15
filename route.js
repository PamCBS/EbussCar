//for users' data: 
//route is an object, where we store information about name, birthdate, car, email etc
//for every class that you create, build a individual JS.

console.log("Route.js loaded")


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
        this.payPal = payPal;
        this.owner = owner;

    }

}



