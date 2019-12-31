'use strict';
var map_to_three_multiples = function(collections){
  var newArr = collections.map(item => item * 3);
  return newArr;
};

module.exports = map_to_three_multiples;
