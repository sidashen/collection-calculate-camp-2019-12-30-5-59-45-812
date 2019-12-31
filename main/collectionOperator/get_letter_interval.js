'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var newArr = [];
  var item;
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      item = String.fromCharCode(96 + i);
      newArr.push(item);
    }
} else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      item = String.fromCharCode(96 + i);
      newArr.push(item);
    }
  } else if (number_a = number_b) {
    item = String.fromCharCode(96 + number_a);
    newArr.push(item);
  }
  return newArr;
}

module.exports = get_letter_interval;
