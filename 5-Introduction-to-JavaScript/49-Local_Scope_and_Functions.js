/*Summary: Variables that are declared within a function block have local scope,
meaning that variable can only be seen within that function.*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "hi";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//

// Now remove the console log line to pass the test
