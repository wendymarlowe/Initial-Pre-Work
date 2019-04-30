/*Summary: For loops run through code for a specific number of times. We first
have 'initialization - used to set up the variable. Then 'conditional' - if the
condition is true the loop will run. Then 'final-expression' - this is executed
at the end of the loop and increments/decrements the loop counter.*/

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
//variable starts at 1, loop continues as long as i is less than 6, increment i
//at the end of the iteration
for(var i = 1; i < 6; i++) {
    myArray.push(i);
}
console.log(myArray);
