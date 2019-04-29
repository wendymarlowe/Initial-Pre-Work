/*Summary: When dealing with multiple conditions we can combine mulitple if
statements using the else if statement.*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

// Change this value to test
console.log(testElseIf(6));
