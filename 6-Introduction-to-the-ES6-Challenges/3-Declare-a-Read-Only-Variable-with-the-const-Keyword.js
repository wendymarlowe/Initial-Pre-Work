/*Summary: 'const' is also a new keyword with the same benefits of 'let', however
const makes a variable read-only.  Since it is a constant, it cannot be reassigned.*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
