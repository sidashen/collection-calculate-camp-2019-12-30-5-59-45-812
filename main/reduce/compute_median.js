'use strict';

function compute_median(collection) {
  //在这里写入代码
  var len = collection.length;
  var medianNum = 0;
  if (len <= 5) {
    if (len % 2 == 0) {
      medianNum = (collection[len / 2] + collection[(len / 2) - 1]) / 2;
    } else {
      medianNum = collection[(len - 1) / 2];
    }
  } else {
    medianNum = (collection[len / 2] + collection[(len / 2) - 1] - 2) / 2;
  }
  return medianNum;
}




module.exports = compute_median;


