function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var newB = [];
  object_b.value.forEach(item => {
    newB.push(item);
  });
  var newArr = collection_a.filter(function (item) {
    return newB.indexOf(item) !== -1;
  });
  return newArr;
}

module.exports = collect_same_elements;
