// Given an integer array num, return true if any value appears at least twice in the array, and return false if every element is distinct.
const num = [4, 6, 3, 3, 2];

const appearsMoreThanOnce = (arr) => {
  let distinct = false;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] === num[i]) {
        distinct = true;
      }
    }
  }
  console.log(distinct);
};

appearsMoreThanOnce(num);
