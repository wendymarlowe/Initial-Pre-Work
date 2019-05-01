/*Summary: Since 'const' doesn't really protect data from being changed, we can
use Object.freeze to prevent data changing.  Once this is invoked upon an object,
you can no longer add, delete or update object properties.*/

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
    Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
