'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  var oddUnion = collection.filter(item => {
    return item % 2 !== 0;
  });
  var newArr = oddUnion.map(item => item * 3 + 2);
  return newArr;
}

module.exports = hybrid_operation_to_uneven;

