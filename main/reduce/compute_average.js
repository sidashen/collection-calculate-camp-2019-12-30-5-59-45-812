'use strict';

function compute_average(collection) {
  //在这里写入代码
  var totalNum = 0;
  var count = collection.length;
  for (var i = 0; i < count; i++) {
    totalNum += collection[i];
  }
  return totalNum / count;
}

module.exports = compute_average;

