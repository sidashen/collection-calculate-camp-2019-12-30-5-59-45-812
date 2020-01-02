'use strict';
var calculate_median = function(collection){
// 我个人感觉本题题目是有问题的，所以就只好分情况写
var newArr = [];

  if (collection.length <= 6) {
    newArr = collection.filter(function (item, index) {
      if (index % 2 == 0 && index != 0) {
        return item;
      }
    })
  } else {
    newArr = collection.filter(function (item, index) {
      if (index % 2 == 0) {
        return item;
      }
    })
  }
  
  var len = newArr.length;
  return len % 2 == 0 ? (newArr[len / 2] + newArr[(len / 2) - 1]) / 2 : newArr[(len - 1) / 2];
};

module.exports = calculate_median;
