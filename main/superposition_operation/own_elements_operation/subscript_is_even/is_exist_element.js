'use strict';
var is_exist_element = function(collection,element){
  const newArr = collection.filter(function (item, index) {
    if (index % 2 == 0) {
      return item;
    }
  });

  let flag = true;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == element) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  return flag;
};

module.exports = is_exist_element;
