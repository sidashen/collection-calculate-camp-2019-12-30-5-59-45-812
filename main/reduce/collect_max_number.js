'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var maxNum = Math.max.apply(null, collection);
  return maxNum;

}

//另一种方法
// function collect_max_number(collection) {
//   //在这里写入代码
//   var maxNum = 0;
//   collection.forEach(item => {
//     if (item >= maxNum) {
//       maxNum = item;
//     }
//   });
//   return maxNum;
// }

module.exports = collect_max_number;
