'use strict';
var even_asc_odd_desc = function(collection){
  const oddArr = collection.filter(item => item % 2 !== 0);
  const evenArr = collection.filter(item => item % 2 == 0);
  const newOddArr = oddArr.sort(function (value1, value2) {
    return value2 - value1;
  });
  const newEvenArr = evenArr.sort(function (value1, value2) {
    return value1 - value2;
  });
  return newEvenArr.concat(newOddArr);
};

module.exports = even_asc_odd_desc;
