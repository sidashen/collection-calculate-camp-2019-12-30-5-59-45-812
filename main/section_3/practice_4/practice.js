function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newCollection = [];
  var newB = [];

  createNewCollection(collection_a, newCollection);

  object_b.value.forEach(item => {
    newB.push(item);
  });

  var newArr = newCollection.map(item => {
    for (var i = 0; i < newB.length; i++) {
      if (item.key == newB[i]) {
        item.count = item.count - parseInt(item.count / 3) * 1;
        return item;
      }
    }
    return item;
  })
  return newArr;
}

function createNewCollection(collection_a, newCollection) {
  for (let item of collection_a) {
    let obj = finds(newCollection, item);
    let key = item.match(/\d/) ? item.slice(0, 1) : item;
    let num = item.match(/\d/) ? parseInt(item.slice(-1)) : 1;
    if (obj) {
      obj.count++;
    }
    else {
      newCollection.push({key: key, count: num});
    }
  }
}

function finds(newCollection, key) {
  for (let item of newCollection) {
    if (item.key == key) {
      return item;
    } 
  }
  return null;
}

module.exports = create_updated_collection;
