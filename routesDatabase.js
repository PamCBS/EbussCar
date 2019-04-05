
console.log("routesDatabase.js loaded")

var  routes = []
//equals an empty array to save new users
//users.push adds new users to the array, that means that it will be saved only for one session
// local storage sits in the browser, works like cookies.


if (localStorage.getItem("routes") === null) {
    routes = [new Route("Valby", "Flintholm", "01/06/2019", "12:00", 70, 70, 140, 4, "henrik.thorn@student.cbs.dk")];
} else {
    routes = JSON.parse(localStorage.getItem("routes"));
    for (let i = 0; i < routes.length; i++) {
        route[i] = new Route(route[i].startLocation, route[i].endLocation, route[i].date, route[i].time, route[i].driverComission, route[i].basePrice, route[i].finalPrice, route[i].seats, route[i].payPal);
    }
}

