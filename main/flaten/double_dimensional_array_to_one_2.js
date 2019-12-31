'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var newArr = [];
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      newArr.push(collection[i][j]);
    }
  }
  var newStr = new Set(newArr);
  var newArray = Array.from(newStr);

  return newArray;
}

module.exports = double_to_one;
