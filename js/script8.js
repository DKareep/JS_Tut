// function expressions

function f(i) {
    "use strict";
    return i * i;
}

// not used if its single time execution
var f = function (i) {
    "use strict";
    return i * i;
};
f();

//(function(){})()
(function (i) {
    "use strict";
    return i * i;
})(2);
// (function(){}())
(function (i) {
    "use strict";
    return i * i;
}(3));

!function () {
}();
// can be used  !/ ~ / +/ -

//scope lookup is avoided
(function ($) {
})(window.jQuery);


// simple lib

var counter = (function () {
    "use strict";
    var i = 2;
    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        inc: function () {
            return i++;
        }
    }
})();

console.log(counter.get());
counter.set(12);
console.log(counter.inc());
console.log(counter.get());
