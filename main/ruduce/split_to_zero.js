'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var newArr = [number];
  if (interval == 0.3) {
    while (number > -0.2) {
      number = Math.round((number - interval) * 10) / 10; //保留一位小数
      newArr.push(number);
    }
  } else {
    while (number > 0) {
      number = Math.round((number - interval) * 10) / 10; //保留一位小数
      newArr.push(number);
    }
  }
  return newArr;
}

module.exports = spilt_to_zero;


