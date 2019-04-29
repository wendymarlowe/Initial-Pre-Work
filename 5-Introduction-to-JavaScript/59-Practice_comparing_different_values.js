/*Summary: practice with equality and strict-equality operators. '==' will
perform type conversion to be able to compare two different data types, '===' will
not. */

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));
