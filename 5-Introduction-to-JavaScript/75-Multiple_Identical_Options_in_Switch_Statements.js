/*Summary: Case statements will run until a break statement is found.  If
mulitple case statements have the same output, you can eliminate any results
and break statements so the code will run until it hits the break*/

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer="Low";
      break;

    case 4:
    case 5:
    case 6:
      answer="Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer="High";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(9));
