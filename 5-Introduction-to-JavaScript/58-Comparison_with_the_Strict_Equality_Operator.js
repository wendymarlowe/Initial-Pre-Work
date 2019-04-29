/*Summary: The strict equality operator (===) will not perform type conversion.
If two different data types are compared they are considered unequal and
it will return false */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict('7'));
