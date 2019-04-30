/*Summary: We can access nested objects and properties using a combination of
dot and bracket notation. In this example we drilled down through the myStorage
object until we were able to access the glove box property.*/

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

console.log(gloveBoxContents);
