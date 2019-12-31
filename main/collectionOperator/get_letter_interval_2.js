'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var newArr = [];
  var item;
  var itemTens;
  var itemOnes;
  if (number_a < number_b) {
    for (var i = number_a; i <= 26; i++) {
      item = String.fromCharCode(96 + i);
      newArr.push(item);
    }
    for (var i = 27; i <= number_b; i++) {
      newArr = doubleWords(i, item, newArr);
    }
  } else if (number_a > number_b) {
    for (var i = number_a; i >= 27; i--) {
      newArr = doubleWords(i, item, newArr);
    }
    for (var i = 26; i >= number_b; i--) {
      item = String.fromCharCode(96 + i);
      newArr.push(item);
    }
  } else if (number_a = number_b) {
      var i = number_a;
      if (i <= 26) {
        item = String.fromCharCode(96 + i);
        newArr.push(item);
      } else if (i > 26) {
        newArr = doubleWords(i, item, newArr);
      }
  }
  return newArr;
}

function doubleWords(i, item, newArr) {
  var itemTens = Math.floor((i - 1) / 26);
  var itemOnes = i - itemTens * 26;
  item = `${String.fromCharCode(96 + itemTens)}${String.fromCharCode(96 + itemOnes)}`;
  newArr.push(item);
  return newArr;
}

module.exports = get_letter_interval_2;


