//spread parameter or rest parameter
var x = function() {
    console.log(Array.prototype.slice.call(arguments, 0));
};
var x1 = function(...n) {
    console.log(n);
};
var x2 = function(a, ...n) {
    console.log(n);
};

x(1,'tada', true);
x1(1,'tada', true);
x2(1,'tada', true);

var number = [6,7];
var life = [1,2,3,4,5,...number,8];
console.log(life);

var a = [1, 2, 3];
var b = [4, 5, 6];
//a.push(b); //returns [1, 2, 3, [array 3]]
//Array.prototype.push.apply(a,b) //[1,2,3,4,5,6]
a.push(...b); //[1,2,3,4,5,6]


console.log(a);