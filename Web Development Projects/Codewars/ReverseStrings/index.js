function solution(str) {
  let arr = [];
  for (i = 1; i < str.length; i++) {
    arr.push(str[str.length - i]);
  }
  arr.push(str[0]);
  let reverseStr = arr.toString();
  reverseStr = reverseStr.replaceAll(",", "");
  return console.log(reverseStr);
}

solution("world");
