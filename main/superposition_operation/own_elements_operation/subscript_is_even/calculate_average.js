'use strict';
var calculate_average = function(collection){
  var newArr = collection.filter(function (item, index) {
    if (index % 2 == 0 && index !== 0) {
      return item;
    }
  });

  var len = newArr.length;
  var sum = 0;
  newArr.forEach(item => {
    sum += item;
  })
  return sum / len;
};

module.exports = calculate_average;
