var pizza = function () {
    var crust = 'thin';
    this.hasBacon = true;
    var toppings = 3;
    var retObj = {
        crust :'thin',
        toppings :3
    };
    this.getHasBacon = function() {
        "use strict";
        return this.hasBacon;
    };
    this.getCrust = function() {
        "use strict";
        return crust;
    };
    var getTopping = function(){
        "use strict";
        return toppings;
    };
    return{
        getTopping: getTopping
    }

};

var pizza1 = new pizza;
console.log(pizza1);

console.log(pizza1);
