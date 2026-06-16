// Problem 7: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.

const reverseString = (str) => {
  const revString = str.split("").reverse().join("");
  return revString;
};

const stringValue = "hello";

const result = reverseString(stringValue);

console.log(`Reverse string output is ${result}`);
