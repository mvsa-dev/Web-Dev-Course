// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = (num) => {
  return num > 0 ? num * -1 : num;
};

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
