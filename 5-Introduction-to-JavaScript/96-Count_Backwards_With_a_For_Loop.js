/*Summary: We can also count backwards within for loops by changing the conditions
and decrementing our counter.*/

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for(var i = 9; i > 0; i -=2) {
  myArray.push(i);
}
console.log(myArray);
