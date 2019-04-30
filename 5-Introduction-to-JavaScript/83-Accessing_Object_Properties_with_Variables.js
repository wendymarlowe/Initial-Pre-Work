/*Summary: Variables can be used with bracket notation to access properties.
Using variables to access properties is much more flexible than using string
literals and bracket notation allows this, dot notation does not.  */

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

console.log(playerNumber);
console.log(player);
