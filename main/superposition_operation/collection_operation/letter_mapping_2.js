'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var sum = 0;
  var count = collection.length;
  collection.forEach(item => {
    sum += item;
  })
  var average = Math.ceil(sum / count); 
  return String.fromCharCode(96 + average);
}

module.exports = average_to_letter;

