/*Summary: Using the var keyword to declare variables allows developers to
accidentally overwrite variables, making it difficult to find bugs. In ES6, the
'let' keyword was introduced that prevents this problem and will throw an error
if a variable with the same name is declared.*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
console.log(quote);
