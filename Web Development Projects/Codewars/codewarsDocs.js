// JavaScript Cheat Sheet for Codewars (8-6 kyu) - With Examples

// -------------------- Basic Syntax --------------------

// Variables:
let myVariable = "Hello"; // Mutable variable
console.log(myVariable); // Output: Hello
myVariable = "World";
console.log(myVariable); // Output: World

const MY_CONSTANT = 10; // Immutable constant
console.log(MY_CONSTANT); // Output: 10
// MY_CONSTANT = 20; // Error: Assignment to constant variable.

// Data Types:
// Primitive: string, number, boolean, null, undefined, symbol
// Object: object, array, function

// Operators:
// Arithmetic: +, -, *, /, %
console.log(5 + 3); // Output: 8
console.log(10 % 3); // Output: 1
// Assignment: =, +=, -=, *=, /=
let x = 5;
x += 2; // x = x + 2
console.log(x); // Output: 7
// Comparison: ==, ===, !=, !==, >, <, >=, <=
console.log(5 == "5"); // Output: true (loose equality)
console.log(5 === "5"); // Output: false (strict equality)
// Logical: && (AND), || (OR), ! (NOT)
console.log(true && false); // Output: false
console.log(true || false); // Output: true
console.log(!true); // Output: false

// Control Flow:
if (5 > 3) {
  console.log("5 is greater than 3"); // Output: 5 is greater than 3
} else {
  console.log("5 is not greater than 3");
}

for (let i = 0; i < 3; i++) {
  console.log(i); // Output: 0, 1, 2
}

let j = 0;
while (j < 3) {
  console.log(j); // Output: 0, 1, 2
  j++;
}

// Functions:
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// -------------------- String Methods --------------------

let myString = "  Hello World!  ";

console.log(myString.length); // Output: 15
console.log(myString.toUpperCase()); // Output:   HELLO WORLD!
console.log(myString.toLowerCase()); // Output:   hello world!
console.log(myString.trim()); // Output: Hello World!
console.log(myString.substring(0, 5)); // Output:   Hel
console.log(myString.slice(2, 7)); // Output: Hello
console.log(myString.replace("World", "Codewars")); // Output:   Hello Codewars!
console.log(myString.replaceAll("l", "1")); // Output:   He11o Wor1d!
console.log(myString.includes("Hello")); // Output: true
console.log(myString.startsWith("  ")); // Output: true
console.log(myString.endsWith("!")); // Output: false
console.log(myString.indexOf("l")); // Output: 4
console.log(myString.lastIndexOf("l")); // Output: 9
console.log(myString.split(" ")); // Output: [ '', '', 'Hello', 'World!', '', '' ]

// Template Literals (String Interpolation):
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

// -------------------- Number Methods --------------------

let myNumber = 123.456;

console.log(parseInt("10")); // Output: 10
console.log(parseFloat("10.5")); // Output: 10.5
console.log(myNumber.toFixed(2)); // Output: 123.46 (string)
console.log(Number(myNumber)); // Output: 123.456
console.log(isNaN("hello")); // Output: true

console.log(Math.round(myNumber)); // Output: 123
console.log(Math.ceil(myNumber)); // Output: 124
console.log(Math.floor(myNumber)); // Output: 123
console.log(Math.abs(-5)); // Output: 5
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.random()); // Output: (random number between 0 and 1)

// -------------------- Array Methods --------------------

let myArray = [1, 2, 3, 4, 5];

console.log(myArray.length); // Output: 5
myArray.push(6);
console.log(myArray); // Output: [ 1, 2, 3, 4, 5, 6 ]
myArray.pop();
console.log(myArray); // Output: [ 1, 2, 3, 4, 5 ]
myArray.unshift(0);
console.log(myArray); // Output: [ 0, 1, 2, 3, 4, 5 ]
myArray.shift();
console.log(myArray); // Output: [ 1, 2, 3, 4, 5 ]
console.log(myArray.indexOf(3)); // Output: 2
console.log(myArray.includes(3)); // Output: true
console.log(myArray.slice(1, 3)); // Output: [ 2, 3 ]
myArray.splice(2, 1, 10);
console.log(myArray); // Output: [ 1, 2, 10, 4, 5 ]
console.log(myArray.join("")); // Output: 121045
console.log(myArray.reverse()); // Output: [ 5, 4, 10, 2, 1 ]
console.log(myArray.sort()); // Output: [ 1, 10, 2, 4, 5 ] (lexicographical)
console.log(myArray.sort((a, b) => a - b)); // Output: [ 1, 2, 4, 5, 10 ] (numerical ascending)
console.log(myArray.sort((a, b) => b - a)); // Output: [ 10, 5, 4, 2, 1 ] (numerical descending)

// Iterating through arrays:
myArray.forEach((element) => {
  console.log(element * 2);
}); // Output: 2, 4, 8, 10, 20

console.log(myArray.map((element) => element * 2)); // Output: [ 2, 4, 8, 10, 20 ]
console.log(myArray.filter((element) => element > 2)); // Output: [ 4, 5, 10 ]
console.log(
  myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
); // Output: 22

// -------------------- Object Methods --------------------

let myObject = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(myObject.name); // Output: John
console.log(myObject["age"]); // Output: 30
console.log(Object.keys(myObject)); // Output: [ 'name', 'age', 'city' ]
console.log(Object.values(myObject)); // Output: [ 'John', 30, 'New York' ]
console.log(Object.entries(myObject)); // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// -------------------- Common Techniques --------------------

// String to Array:
let str = "abc";
let arr = str.split("");
console.log(arr); // Output: [ 'a', 'b', 'c' ]

// Array to String:
let arr2 = ["a", "b", "c"];
let str2 = arr2.join("");
console.log(str2); // Output: abc

// Palindrome Check:
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("Racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Frequency Counter:
function frequencyCounter(arr) {
  const counts = {};
  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
  }
  return counts;
}
console.log(frequencyCounter([1, 2, 2, 3, 3, 3])); // Output: { '1': 1, '2': 2, '3': 3 }

// --------------------  ES6+ Features --------------------

// Spread Operator:
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [ 1, 2, 3, 4, 5 ]

// Destructuring:
let person = { firstName: "John", lastName: "Doe" };
let { firstName, lastName } = person;
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe

// Ternary Operator:
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // Output: adult

// Optional Chaining (?.)
let obj = {};
let name2 = obj?.property?.name;
console.log(name2); // Output: undefined

// Nullish Coalescing Operator (??)
let value = null;
let displayValue = value ?? "Default Value";
console.log(displayValue); // Output: Default Value
