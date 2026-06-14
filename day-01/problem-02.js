// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.

const checkEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const checkOdd = (number) => {
  if (number % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

const evenFinder = checkEven(556);

const oddFinder = checkOdd(13);

console.log(`Is the number even : ${evenFinder} & the number odd : ${oddFinder}`);