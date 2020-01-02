function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  for (let item of collection) {
    let obj = finds(result,item);
      if (obj) {
        obj.count ++;
      } else {
          result.push({key: item, count: 1});
        }
  }
  return result;
}

function finds(result, element) {
  for (let item of result) {
    if (item.key === element) {
      return item;
    }
  }
  return null;
}

module.exports = count_same_elements;
