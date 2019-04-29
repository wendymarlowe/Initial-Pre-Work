/*Summary: The inequality operator (!=) means not equal and will return true when
two values are not equal.  It will return false two values are equal.*/

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testNotEqual(99)); //this evaluates to false since val DOES equal 99
