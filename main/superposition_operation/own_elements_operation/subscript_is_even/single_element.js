'use strict';
var single_element = function (collection) {
  const newArr = collection.filter(function (item, index) {
    if (index % 2 !== 0) {
      return item;
    }
  });

  const repeatArr = newArr.filter(function (item, index, array) {
    return array.indexOf(item) !== index;
  });

  return newArr.filter(item => !repeatArr.includes(item));
};

module.exports = single_element;
