/*Summary: It is important to pay attention to the order of if/else if statements.
Functions are executed top to bottom so you have to make sure the statements
are in logical order */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
console.log(orderMyLogic(11));
