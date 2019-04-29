/* Summary: A queue refers to a Data Structure where items are kept in order. New
items are added to back of the queue and old items are removed from the front
of the queue. */

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift(0);  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 0)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
