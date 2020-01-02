function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newB = [];

  object_b.value.forEach(item => {
    newB.push(item);
  });

  var newArr = collection_a.map(item => {
    for (var i = 0; i < newB.length; i++) {
      if (item.key == newB[i]) {
        item.count --;
        return item;
      }
    }
    return item;
  })
  return newArr;
}

module.exports = create_updated_collection;
