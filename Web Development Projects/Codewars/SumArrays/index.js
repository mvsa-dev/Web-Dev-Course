function sum(numbers) {
  let arraySum = 0;
  for (let i = 0; i < numbers.length; i++) {
    arraySum = arraySum + numbers[i];
  }
  return arraySum;
}

sum([1, 2, 3, 4, 5]);
