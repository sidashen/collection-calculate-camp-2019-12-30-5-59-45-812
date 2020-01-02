'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  var oddUnion = collection.filter(item => {
    return item % 2 !== 0;
  });
  var newArr = oddUnion.map(item => item * 3 + 5);
  var sum = 0;
  newArr.forEach(item => {
    sum += item;
  });
  return sum;
}

module.exports = hybrid_operation_to_uneven;

