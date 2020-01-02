'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  let len = collection.length;
  let medianNum = 0;

  if (len % 2 == 0) {
    medianNum = Math.ceil((collection[len / 2] + collection[(len / 2) - 1]) / 2);
  } else {
    medianNum = collection[(len - 1) / 2];
  }

  let former = parseInt(medianNum / 26);
  let latter = parseInt(medianNum % 26);
  let item = `${String.fromCharCode(96 + former)}${String.fromCharCode(96 + latter)}`
  return item;
}

module.exports = median_to_letter;
