'use strict';
var single_element = function (collection) {
  var collection = [11, 11, 22, 11, 33, 11];
  const newArr = collection.filter(function (item, index) {
    if (index % 2 !== 0) {
      return item;
    }
  });

  let newResult = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newResult.indexOf(newArr[i]) === -1) {
      newResult.push(newArr[i]);
    } else {
        for (let j = 0; j < newResult.length; j++) {
          if (newResult[j] == newArr[i]) {
            newResult.splice(j, 1);
          }
        }
      }
  }
  return newResult;
};

module.exports = single_element;
