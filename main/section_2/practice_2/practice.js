function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  
  for (let item of collection) {
    var key = item.match(/\d/) ? item.slice(0, 1) : item;
    var num = item.match(/\d/) ? parseInt(item.slice(-1)) : 1;
    let obj = finds(result, key);
      if (obj) {
        obj.count ++;
      } else {
        result.push({key: key, count: num});
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
