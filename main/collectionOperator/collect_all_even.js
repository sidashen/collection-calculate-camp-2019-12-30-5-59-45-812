'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var newArr = [];
    collection.forEach(item => {
      if (item % 2 === 0) { 
        newArr.push(item);
      }
    });
  return newArr;
}

module.exports = collect_all_even;
