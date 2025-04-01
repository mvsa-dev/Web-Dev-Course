// Given an integer array num,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Using for loops...(less efficient)
/*
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
*/

// Using sets...(more efficient)
const num = [1, 3, 5, 3, 4, 1, 7, 2];

const appearsMoreThanOnce = (arr) => {
  const newNum = new Set(arr);
  if (newNum === arr) {
    console.log("false");
  } else {
    console.log("true");
  }
};

appearsMoreThanOnce(num);
