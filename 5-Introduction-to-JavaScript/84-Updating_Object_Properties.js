/*Summary: Object properties can be updated using either dot notation or
bracket notation.  Here we updated the name property of the myDog object from
Coder to Happy Coder. */

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog.name = "Happy Coder";

//or - myDog["name"] = "Happy Coder";
