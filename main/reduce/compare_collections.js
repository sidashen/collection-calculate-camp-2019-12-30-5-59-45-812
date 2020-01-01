'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var flag = true;
  if (collection_a.length == collection_b.length) {
    for (var i = 0; i < collection_a.length; i++) {
      if (collection_a[i] == collection_b[i]) {
        flag = true;
      } else {
        flag = false;
      }
    }
  } else {
    flag = false;
  }
  return flag;
}

module.exports = compare_collections;


