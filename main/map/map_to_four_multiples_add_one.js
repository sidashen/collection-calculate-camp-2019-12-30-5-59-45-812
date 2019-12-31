'use strict';
function map_to_four_multiples_add_one(collection) {
  var newArr = collection.map(item => item * 4 + 1);
  return newArr;
}

module.exports = map_to_four_multiples_add_one;
