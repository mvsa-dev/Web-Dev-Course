// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
// Examples
// .toString()
// //.toString().replaceAll(",", "");
// .split(",")
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps

const reverseWords = (str) => {
  let arr = [];
  let newStr;
  for (i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  newStr = arr
    .reverse()
    .toString()
    .replaceAll(",", "")
    .split(" ")
    .reverse()
    .toString()
    .replaceAll(",", " ");
  return console.log(newStr);
};

reverseWords("This is an example!");
