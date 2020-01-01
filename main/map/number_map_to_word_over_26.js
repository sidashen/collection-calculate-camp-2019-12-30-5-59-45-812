'use strict';
function number_map_to_word_over_26(collection) {
  var newArr = collection.map(item => {
    if (item <= 26) {
      item = String.fromCharCode(96 + item);
    } else if (item >= 27) {
      var itemFormer = Math.floor((item - 1) / 26);
      var itemLatter = item - itemFormer * 26;
      item = `${String.fromCharCode(96 + itemFormer)}${String.fromCharCode(96 + itemLatter)}`;
    }
    return item;
  });
  return newArr;
}

module.exports = number_map_to_word_over_26;
