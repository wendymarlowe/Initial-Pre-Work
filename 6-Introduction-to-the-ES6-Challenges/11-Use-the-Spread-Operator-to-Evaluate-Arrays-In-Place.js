/*Summary: The spread operator unpacks an array.  Therefore each item in the
array becomes an argument in the function in which the items were unpacked.
Array items are unpacked into a comma separated list*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; //receiver and function, each item from arr1 is unpacked into the receiver - an array in this case
})();
console.log(arr2);

https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831
