'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var newArr = collection_a.filter(function (item) {
    return collection_b.indexOf(item) !== -1;
  });
  return newArr;
}

module.exports = choose_common_elements;
