'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  var newArr = collection.map(item => item * 3 + 2);
  var sum = 0;
  newArr.forEach(item => {
    sum += item;
  });
  return sum;
}

module.exports = hybrid_operation;

