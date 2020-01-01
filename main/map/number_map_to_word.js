'use strict';
function number_map_to_word(collection) {
  var newArr = collection.map(item => {
    return item = String.fromCharCode(96 + item);
  });
  return newArr;
};

module.exports = number_map_to_word;
