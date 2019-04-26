/*Summary: We can append data to the end of any array using the .push function.
It takes one or more parameters and adds the data to the end of the array*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);
console.log(myArray);
