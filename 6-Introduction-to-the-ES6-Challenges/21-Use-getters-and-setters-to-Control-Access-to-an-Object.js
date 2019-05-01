/*Summary:Getter functions return the value of an object's private variable.
Setter functions modify the value.  These functions abstract the inner workings
of objects from the user. In this example we take in temperature in F, the
getter returns the temp in Celsius and the setter takes in the temp in C, converts
and sets the temp to F*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temp) {
      this.temp = temp;
    }

    get temperature() {
      return 5 / 9 * (this.temp - 32);
    }

    set temperature(C) {
      this.temp = C * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

console.log(temp);
