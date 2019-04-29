/*Summary: We use comparison operators in decision making to determine if a
condition is  true or false. In this example we used the equality operator,
'=='. This compares two values and returns true if they are equivalent and false
if they are not. The equality operator will also perform type conversion to convert
two different data types so it can compare them.*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(16);
