'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var number_a = 20;
  var number_b = 53;
  var newArr = [];
  var item;
  if (number_a < number_b) {
    for (i = number_a; i <= number_b; i++) {
      item = String.fromCharCode(96 + i);
      newArr.push(item);
    }
  } else if (number_a > number_b) {
    for (i = number_a; i >= number_b; i--) {
      item = String.fromCharCode(96 + i);
      newArr.push(item);
    }
  } else if (number_a = number_b) {
    item = String.fromCharCode(96 + number_a);
    newArr.push(item);
  }
  return newArr;
}

module.exports = get_letter_interval_2;

