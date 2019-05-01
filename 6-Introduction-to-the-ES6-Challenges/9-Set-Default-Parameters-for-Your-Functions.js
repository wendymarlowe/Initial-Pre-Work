/*Summary: You can add default parameters to a function to be used if an argument
is not passed in.  Default values can be added for as many parameters as you want.
The default value will be used when an argument is not specified.*/

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
