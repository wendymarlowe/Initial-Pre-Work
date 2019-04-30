/*Summary: A default statement is executed when no match case statements are found*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
    answer="apple";
    break;

    case "b":
    answer="bird";
    break;

    case "c":
    answer="cat";
    break;

    default:
    answer="stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(switchOfStuff("4"));
