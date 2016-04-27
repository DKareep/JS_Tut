var pizza = function() {
    "use strict";
  this.crust = 'thin';
  this.toppings = 3;
  this.hasBacon = true;

};
//this.propertyName makes it public if are using var we will get a private one
var pizza1 = new pizza();
pizza1.crust = 'pan';
console.log(pizza);
console.dir(pizza);
console.log(pizza1);
//gives you an object

console.log(pizza1 instanceof pizza); //returns true
console.log(pizza1.constructor); // returns base object/func
