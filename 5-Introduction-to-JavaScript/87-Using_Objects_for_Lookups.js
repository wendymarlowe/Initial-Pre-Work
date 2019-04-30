/*Summary: Objects are useful for looking up data from a table, instead of using
an if/else or switch statement. In this example we have an object named 'lookup'
that contains the names of cities. We pass a key into the function, that key is
used to retrieve and return the value, or city name. */

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  };
  result = lookup[val]
  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("foxtrot"));
