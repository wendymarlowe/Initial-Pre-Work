/*Summary: The parseInt function takes a string and returns an integer.  It returns
NaN if it can't convert the first character into an integer*/

function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("JamesBond")); //returns NaN
