//Summary: Else statements are code that is run when the if statement is false

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(testElse(16));
