// closure

 var addTo = function(passed) {
     "use strict";
     var add  = function(inner) {
     return passed + inner;
     }
     return add;
 };

var x = addTo(3);
var xx = x(3);
console.dir(addTo(3));

console.log(xx);
console.dir(x(3));
