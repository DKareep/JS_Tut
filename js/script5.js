 var add = function(a){
     "use strict";
     return function(b){
         return a+b;
     }
 };

 var addToFive = add(5);

 /*
 *      return function() {
 *          return 5 + b;
 *      }
 * */

 console.log(addToFive(1));


 var avg = function(...n) {
     var total = 0;
     for(var i =0; i<n.length; i++) {
         total += n[i];
     }
     return total/n.length;
 };

 var spiceUp = function(fn,...n){
     return function(...m){
         return fn.apply(this, n.concat(m));
     }
 };

 var doAvg = spiceUp(avg, 1,2,3);
 console.log(doAvg(2,3,10));

 var sayWhat = function(a) {
     return function(b) {
         return function (c){
             console.log('yo', a ,' i am ', b, ' this is my friend ', c)
         }
     }
 };


 sayWhat('sangeet') ('otakalana') ('Anshad');
 var friendName = sayWhat('sangett');
 var myname = friendName('otaklana');
 var myfriendsname = myname('anshad');