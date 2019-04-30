/*Summary: We can use the hasOwnProperty method of objects to find out if an object
has a particular property or not.  This method returns true if the property exists
and false if it does not*/

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
console.log(checkObj("house"));
