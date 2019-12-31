'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var newArr = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] instanceof Array) {
      for (var j = 0; j < collection[i].length; j++) {
        newArr.push(collection[i][j]);
      }
    } else {
        newArr.push(collection[i]);
    }
  }
  return newArr;
}

module.exports = double_to_one;
