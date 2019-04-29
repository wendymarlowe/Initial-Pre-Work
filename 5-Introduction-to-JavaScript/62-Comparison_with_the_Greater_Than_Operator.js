/*Summary: The greater than operator (>) compares the value of two numbers.  It
will perform type conversion. If number to the left is greater than the number
on the right it will return true*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
console.log(testGreaterThan(1010));
