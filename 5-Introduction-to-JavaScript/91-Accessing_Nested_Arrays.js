/*Summary: In the same way we access nested objects, we can use dot and bracket
notation to access nested arrays.*/

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line

console.log(secondTree);
