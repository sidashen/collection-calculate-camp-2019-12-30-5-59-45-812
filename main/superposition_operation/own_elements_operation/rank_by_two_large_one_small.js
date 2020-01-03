'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  var orderArr = collection.sort(function (value1, value2) {
    return value1 - value2;
  });
  var newArr = orderArr.filter(function (item, index) {
    if (index % 3 !== 0 || index == 6) {
      return item;
    }
  });

  newArr.splice(2, 0, orderArr[0]);
  newArr.splice(5, 0, orderArr[3]);
  return newArr;
}

module.exports = rank_by_two_large_one_small;
