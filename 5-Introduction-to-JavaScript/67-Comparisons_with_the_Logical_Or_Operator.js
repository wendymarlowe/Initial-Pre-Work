/*Summary: The logical or (||) symbol returns true if either the left or right
operand is true*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
console.log(testLogicalOr(25));
