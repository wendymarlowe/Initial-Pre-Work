/*Summary: parseInt also takes radix for the second argument. This is used to
indicate which number base system to use to parse the string. */

function convertToInteger(str) {
  return parseInt(str, 2)
}

console.log(convertToInteger("JamesBond"));
