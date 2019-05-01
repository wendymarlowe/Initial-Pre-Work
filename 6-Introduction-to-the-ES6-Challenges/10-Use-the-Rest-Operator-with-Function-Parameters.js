/*Summary: The rest parameter allows us to have an indefinite number of arguments.
These arguments are stored in an array*/

const sum = (function() {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum());
