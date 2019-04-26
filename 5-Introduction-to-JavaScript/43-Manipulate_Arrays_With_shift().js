/*Summary: If we want to retrieve data from the first item of the array, we
can use the .shift() function.  It removes and returns the first element in an
array.*/

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

console.log(myArray);
console.log(removedFromMyArray);
