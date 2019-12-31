'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var collection = [1, 1, 1, 2, 2, 3, 4];
  var newString = new Set(collection);
  var newArr = Array.from(newString);
  return newArr;
}

module.exports = choose_no_repeat_number;
