/*Summary: Destructuring an array allows us to pick and choose which items get assigned
to particular variables.*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b]; //swapped a & b values
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
