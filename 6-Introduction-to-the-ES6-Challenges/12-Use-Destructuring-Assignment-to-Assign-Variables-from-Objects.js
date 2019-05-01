/*Summary: destructuring refers to unpacking properties from an object and
assigning them to variables. */

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // assign the tomorrow property to tempOfTomorrow variable
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
