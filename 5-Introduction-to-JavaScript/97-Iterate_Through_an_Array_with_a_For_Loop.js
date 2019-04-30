/*Summary: For loops can be used to iterate through arrays*/

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++){
  //add each item in the array to the variable 'total' - should equal 20
  total += myArr[i];
}
console.log(total);
