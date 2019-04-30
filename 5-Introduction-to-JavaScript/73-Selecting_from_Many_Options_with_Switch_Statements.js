/*Summary: Switch statements are used when we have many options to decide from.
A case statement will execute when the value matches that case.  They continue
executing until a break statement is reached.  It will then break out of the switch
statement.*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer="alpha";
      break;
    case 2:
      answer="beta";
      break;
    case 3:
      answer="gamma";
      break;s
    case 4:
      answer="delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(caseInSwitch(3));
