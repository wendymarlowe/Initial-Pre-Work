/*Summary: You can use multiple ternary operators to check multiple conditions.
Here we check to see if the number is zero, positive or negative.*/

function checkSign(num) {
  return (num === 0) ? "zero" : (num < 0) ? "negative" : "positive";
}

console.log(checkSign(-120));
