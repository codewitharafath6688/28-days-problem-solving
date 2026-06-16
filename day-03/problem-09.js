// Problem 9: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.

const isPalindrome = (str) => {
  const forwards = str;
  const backwards = str.split("").reverse().join("");
  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }
};

const result = isPalindrome("hello");

console.log(`Palindrome is ${result}`);
