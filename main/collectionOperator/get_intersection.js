'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var newArr = [];
  var length_a = collection_a.length;
  var length_b = collection_b.length;
  for (var i = 0; i < length_b; i++) {
    for (var j = 0; j < length_a; j++) {
      if (collection_a[j] === collection_b[i]) {
        newArr.push(collection_a[j]);
      }
    }
  }
  return newArr;
}

module.exports = get_intersection;
