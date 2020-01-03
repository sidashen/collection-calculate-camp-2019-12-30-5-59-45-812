'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var newArr = collection.split('->').map(item => Number(item));
  var len = newArr.length;
  var medianNum = 0;
  if (len % 2 == 0) {
    medianNum = (newArr[len / 2] + newArr[(len / 2) - 1] - 2) / 2;
  } else {
    medianNum = newArr[(len - 1) / 2];
  }
  return medianNum;
}

module.exports = compute_chain_median;
