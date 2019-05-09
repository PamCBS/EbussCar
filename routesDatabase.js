
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
        routes[i] = new Route(routes[i].startLocation, routes[i].endLocation, routes[i].date, routes[i].time, routes[i].driverComission, routes[i].basePrice, routes[i].finalPrice, routes[i].seats, routes[i].payPal);
    }
}

