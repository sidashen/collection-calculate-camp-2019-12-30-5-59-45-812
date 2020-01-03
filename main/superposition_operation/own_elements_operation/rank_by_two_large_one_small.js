'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var orderArr = collection.sort(function (value1, value2) {
    return value1 - value2;
  });
  
}
module.exports = rank_by_two_large_one_small;
