//call, apply, bind
var obj1 = {num: 2};
var addToThis = function(a,b,c) {
    return this.num +  a + b + c;
};
console.log(addToThis.call(obj1,2,3,4));
var arr = [5,16,8];
console.log(addToThis.apply(obj1, arr));
var bound = addToThis.bind(obj1);
console.dir(bound);
console.log(bound(12,3,4));
console.dir(bound);
