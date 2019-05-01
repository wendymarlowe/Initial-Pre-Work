/*Summary: When using 'const' to declare an array, the array is still mutable,
only the variable name given to the array cannot be reassigned to point to a
different array.  In this example, we were able to change the items in the 's'
array, but not reassign 's'*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

   s[0] = 2;
   s[1] = 5;
   s[2] = 7;


  // change code above this line
}
editInPlace();
console.log(s);
