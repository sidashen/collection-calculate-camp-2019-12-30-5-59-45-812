'use strict';

function get_union(collection_a, collection_b) {
  var newSet = new Set([...collection_a, ...collection_b]);
  var newArr = Array.from(newSet);
  return newArr;
}

module.exports = get_union;

