'use strict';
var rank_asc = function(collection) {
  collection.sort(function (value1, value2) {
    return value2 - value1;
  })
  return collection;
};

module.exports = rank_asc;
