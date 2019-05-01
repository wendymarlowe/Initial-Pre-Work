/*Summary: When creating object properties from variables we can avoid repetition
with simpler code in ES6 */

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line, it is implied here that name : name
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
