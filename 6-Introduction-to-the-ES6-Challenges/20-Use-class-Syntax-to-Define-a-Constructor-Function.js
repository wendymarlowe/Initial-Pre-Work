/*Summary: The new 'class' keyword is used to create new objects.  'class' declares
a new function and a constructor that is called when new is called to create a
new object.
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
