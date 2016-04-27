$(document).ready(function () {
    "use strict";

    var x = new Object();
    var y = {};
    console.log(x);
    console.log(y);
    console.dir(x);
    console.dir(y);

    var pizza = {
        crust: 'thick',
        toppings: 3,
        hasTopping: true,
        howManyToppings: function () {
            return this.toppings;
        }
    };

    pizza.price = '12 RS';

    delete pizza.crust;
    console.log(pizza);

    console.log(pizza.howManyToppings()); 
});