function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var newA = [];
  var newB = [];

  collection_a.forEach(item => {
    newA.push(item.key);
  });

  object_b.value.forEach(item => {
    newB.push(item);
  });

  var newArr = newA.filter(function (item) {
    return newB.indexOf(item) !== -1;
  });
  return newArr;
}

module.exports = collect_same_elements;
