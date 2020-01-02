'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  let newArr = [];

  collection.forEach(item => {
    if (item % 2 == 0) {
      newArr.push(String.fromCharCode(96 + item));
    }
  });
  return newArr;
}

module.exports = even_to_letter;
