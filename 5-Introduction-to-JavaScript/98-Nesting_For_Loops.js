/*Summary: We can also loop through nested arrays by using nested for loops.
In the second loop, we have to check the length of the first loop since that
is also an array.*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      console.log(product);
    }
  }
    // Only change code above this line
    return product;

}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
