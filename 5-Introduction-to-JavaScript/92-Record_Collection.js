/*Summary: This exercise was designed to help solidify the previous lessons on working
with objects. We needed to get a key's value, update a key, add a key and delete a key. 
*/

function updateRecords(id, prop, value) {
//first - check if prop equals 'tracks' and value is not empty
  if(prop === 'tracks' && value !== "") {
    //if we pass that condition, push the value to the existing array, if it
    //doesn't exist, create a new array with the value as the only item
    if(collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = [value];
    }
    // if the value isn't empty push the value on to the array
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    //if the value is empty, delete the property
    delete collection[id][prop];
  }

  return collection;
}
