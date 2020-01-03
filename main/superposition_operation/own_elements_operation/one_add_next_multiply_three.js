'use strict';
function one_add_next_multiply_three(collection) {
  var newArr = [];
  var newItem = 0;
  for (let i = 0; i < collection.length - 1; i++) {
    newItem = collection[i] + collection[i + 1];
    newArr.push(newItem);
  }
  return  newArr.map(item => item * 3);
}

module.exports = one_add_next_multiply_three;
