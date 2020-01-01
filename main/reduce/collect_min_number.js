'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var minNum = Math.min.apply(null, collection);
  return minNum;
}

module.exports = collect_min_number;

