'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var newArr = [];
  var item;
  var itemFormer;
  var itemLatter;
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
  var itemFormer = Math.floor((i - 1) / 26);
  var itemLatter = i - itemFormer * 26;
  item = `${String.fromCharCode(96 + itemFormer)}${String.fromCharCode(96 + itemLatter)}`;
  newArr.push(item);
  return newArr;
}

module.exports = get_letter_interval_2;


