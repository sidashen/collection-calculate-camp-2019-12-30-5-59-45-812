'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var newObj = {};
  var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
	collection.forEach(function(e){
    newObj[e] = newObj[e] >= 1 ? newObj[e] + 1 : 1;
  });
  return newObj;
}

module.exports = grouping_count;
