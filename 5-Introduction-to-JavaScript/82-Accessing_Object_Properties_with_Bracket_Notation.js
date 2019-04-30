/*Summary: We can also access property values using bracket notation. This is
particularly useful when the property name contains spaces. You must put the
property name in single or double quotes when using bracket notation to access them.*/

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj['an entree'];   // Change this line
var drinkValue = testObj['the drink'];    // Change this line

console.log(entreeValue);
console.log(drinkValue);
