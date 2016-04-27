"user strict";
let b = 36;
let getA = a => a * a;
let getB = _ => b * b;

console.log(getA(5));
console.log(getB());

let mult = (a, b) => {return a*b};
console.log(mult(9,8));

let logger = function() {
    "use strict";
    let that = this;
  this.val = 1;
    setTimeout(function(){
       that.val++;
        console.log(that.val);
    },1)
};

var xx = new logger();


let logger2 = function() {
    "use strict";
  this.val = 5;
// bind this to setTimeout do not use if you want parents this
    setTimeout(() =>{
       this.val++;
        console.log(this.val);
    },1)
};

var xxx = new logger2();

let testOld = function() {
    console.log(arguments[2])
};
testOld(44,33,22);
let test = (...n) => {
    console.log(n[2]);
};
test(1,2,33);