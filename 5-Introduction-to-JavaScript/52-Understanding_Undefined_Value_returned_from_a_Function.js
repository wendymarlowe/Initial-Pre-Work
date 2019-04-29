/*Summary: Not all functions have a return statement.  With no return statement
a function will run the code, but the returned value will be 'undefined'.  Here
we don't return a value, but the code changes the value of the 'sum' variable.*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();

console.log(returnedValue);
console.log(sum);
