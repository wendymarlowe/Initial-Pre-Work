/*Summary: The less than operator (<) compares two values. If the number on the
left is less than the number on the right it will return true.*/

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
console.log(testLessThan(54));
