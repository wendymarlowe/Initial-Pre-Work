/*Summary: if statements are used to make decisions.  When the keyword 'if' is
used it tells JS to execute the following code if certain conditions are met. In this
case we are returning one statement if the condition is true, and another statement
if the condition is false.*/

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if (wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
