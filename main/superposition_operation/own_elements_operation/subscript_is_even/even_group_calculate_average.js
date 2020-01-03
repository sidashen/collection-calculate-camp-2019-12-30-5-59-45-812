'use strict';
var even_group_calculate_average = function(collection){
  var newArr = [];
  var sumOnes = 0;
  var sumTens = 0;
  var sumHuns = 0;
  var evenIndexArr = getOddIndexItem(collection);
  var evenNum = getEvenNum(evenIndexArr);
  ({ sumOnes, sumTens, sumHuns } = oddIndex(evenNum, sumOnes, newArr, sumTens, sumHuns));
  return newArr;
};

function oddIndex(evenNum, sumOnes, newArr, sumTens, sumHuns) {
  if (evenNum != 0) {
    var { ones, tens, hundreds } = getGroupByGigits(evenNum);
    if (ones.length == 0 && tens.length == 0) {
      hundreds.forEach(item => {
        sumHuns += item;
      });
      newArr.push(sumHuns / hundreds.length);
    } else {
        ones.forEach(item => {
          sumOnes += item;
        });
        newArr.push(sumOnes / ones.length);
        tens.forEach(item => {
          sumTens += item;
        });
        newArr.push(sumTens / tens.length);
        hundreds.forEach(item => {
          sumHuns += item;
        });
        newArr.push(sumHuns / hundreds.length);
      }
    }
  else {
    newArr.push(0);
  }
  return { sumOnes, sumTens, sumHuns };
}

function getOddIndexItem(collection) {
  return collection.filter(function (item, index) {
    if (index % 2 !== 0) {
      return item;
    }
  });
}

function getEvenNum(evenIndexArr) {
  return evenIndexArr.filter(item => {
    if (item % 2 == 0) {
      return item;
    } else {
      return 0;
    }
  });
}

function getGroupByGigits(evenNum) {
  let ones = [];
  let tens = [];
  let hundreds = [];
  evenNum.forEach(item => {
    let len = item.toString().length;
    if (len == 1) {
      ones.push(item);
    }
    else if (len == 2) {
      tens.push(item);
    }
    else {
      hundreds.push(item);
    }
  });
  return {ones, tens, hundreds};
}

module.exports = even_group_calculate_average;