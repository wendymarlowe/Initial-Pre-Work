/*Summary: Ternary operators are conditional operators and they can condense long
if/else statments into one line. It checks to see if a condition is true or false
and either returns or does an operation based on the condition.  In this example,
the ternary operator is saying: Is a equal to b? true or false*/


//https://scotch.io/tutorials/understand-the-javascript-ternary-operator-like-abc
function checkEqual(a, b) {
  //? - IF : - ELSE
return (a === b ? true : false );
}

console.log(checkEqual(1, -1));
