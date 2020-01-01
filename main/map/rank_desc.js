'use strict';
var rank_desc = function(collection){
  collection.sort(function (value1, value2) {
    return value1 - value2;
  })
  return collection;
};

module.exports = rank_desc;
