/*Summary: Strictly Not Equal (!==) will not convert data types and returns true
where strict equality would be false and returns false where strict equality would
be true*/

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(17)); //Evaluates to false
console.log(testStrictNotEqual(19)); //Evaluates to true
