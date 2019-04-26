/*Summary: Created a silly sentence using string literals concatenated with variables
that were passed into a function.*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "It was really " + myNoun + " and we " + myAdjective + " ourselves " + myVerb + " it was crazy " + myAdverb;

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
