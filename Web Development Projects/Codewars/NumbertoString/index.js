/*We need a function that can transform a number (integer) into a string.
123  --> "123"
999  --> "999"
-100 --> "-100"
What ways of achieving this do you know?*/
function numToString(num) {
  let str = num.toString();
  return str;
}

numToString(5);
