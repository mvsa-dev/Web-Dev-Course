// Given an array of integers your solution should find the smallest integer.
const findSmallestInt = (arr) => {
  let newArr = arr.sort(function (a, b) {
    return a - b;
  });
  return console.log(newArr[0]);
};

findSmallestInt([78, 56, 232, 12, 8]);
