'use strict';

function average_uneven(collection) {
  //在这里写入代码
  var newArr = collection.filter(item => {
    return item % 2 !== 0;
  });

  var sum = 0;
  var len = newArr.length;
  newArr.forEach(item => {
    sum += item;
  });
  return sum / len;
}

module.exports = average_uneven;
