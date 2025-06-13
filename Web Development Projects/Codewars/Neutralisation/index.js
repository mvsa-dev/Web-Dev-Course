/* 
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

The two strings will be the same length.
*/

const neutralize = (str1, str2) => {
  let string1 = str1.split("");
  let string2 = str2.split("");
  let string3 = "";
  //string1 = [ '-', '+', '-' ]
  // string2 = [ '-', '+', '-' ]
  for (let i = 0; i < str1.length; i++) {
    if (string1[i] == "+" && string2[i] == "+") {
      string3 += "+";
    } else if (string1[i] == "-" && string2[i] == "-") {
      string3 += "-";
    } else {
      string3 += "0";
    }
  }
  console.log(string3);
};

neutralize("--++--", "++--++");
