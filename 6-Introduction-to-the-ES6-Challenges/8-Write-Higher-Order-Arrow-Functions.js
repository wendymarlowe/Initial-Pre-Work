/*Summary: This problem set was difficult for me, I spent a lot of time researching
and tried using Number.isInteger(), reduce() without much luck. We apply the
.filter() method to the realNumberArray to retrieve only the positive integers
from the array. Then use Math.pow to find the square of the filtered results. We
store this result in a new array called 'squaredIntegers'.
The .map() method creates a new array with the results of the Math.pow() on each
element.

Questions:
1) I thought parseInt was used to parse a string and return an integer
The array contains numbers not strings so not sure why that works.

I used many websites for extra help, here is a couple:
https://developer.mozilla.org/en-US/
https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
