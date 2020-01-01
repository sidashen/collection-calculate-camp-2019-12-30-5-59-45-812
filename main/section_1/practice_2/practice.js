function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var newCollection_b = [];
  for (var i = 0; i < collection_b.length; i++) {
      for (var j = 0; j < collection_b[i].length; j++) {
        newCollection_b.push(collection_b[i][j]);
      }
    } 
  var newArr = collection_a.filter(function (item) {
    return newCollection_b.indexOf(item) !== -1;
  });
  return newArr;
}

module.exports = collect_same_elements;
