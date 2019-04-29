/*Summary: The logical and operator(&&) test whether two statements are true.  It
will return true only if both operands the the left and right are true. Otherwise
it returns false.*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <=50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
console.log(testLogicalAnd(50));
