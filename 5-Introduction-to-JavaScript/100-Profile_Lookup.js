/*Summary: We are first looping through the contacts array of objects. Then we
check to see if 'name' matches any firstName keys in the list and
if 'prop' match a property of that firstName. If they are both true we return the
value of that property. If the name is not found in the list, we return a message,
and if the property is not matched to that name a different message is returned */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for(var i = 0; i < contacts.length; i++) {
   if (name === contacts[i].firstName) {
     if (contacts[i].hasOwnProperty(prop)) {
       return contacts[i][prop];
     } else {
        return "No such property"
      }
   }
  }
  return "No such contact"
// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "address"));
