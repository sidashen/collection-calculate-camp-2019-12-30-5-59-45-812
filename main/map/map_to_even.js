'use strict';
function map_to_even(collection) {
  var newArr = collection.map(item => item * 2)
  return newArr;
}

module.exports = map_to_even;
