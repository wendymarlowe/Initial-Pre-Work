/*Summary: the 'var' keyword has a global scope, or local scope if declared
within a function.  The 'let' keword behaves the same way, but when you declare
a variable within a block using the keyword 'let', that variable is only available
to that block of code.*/

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
