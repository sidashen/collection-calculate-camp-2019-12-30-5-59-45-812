'use strict';

function amount_even(collection) {
  //在这里写入代码
  var sum = 0;
  var collection = [1,2,3,4,5,6,7,8,9,10];
  collection.forEach(item => {
    if (item % 2 == 0) {
      sum += item;
    }
  });
  return sum;
}

module.exports = amount_even;
