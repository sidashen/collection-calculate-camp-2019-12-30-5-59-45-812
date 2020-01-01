'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var firstEvenNum;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      firstEvenNum = collection[i];
      break;
    }
  }
  return firstEvenNum;
}

module.exports = find_first_even;

