// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.

const numberSwaping = (num1, num2) => {
  [num1, num2] = [num2, num1];
  return `${num1}, ${num2}`;
};

const swaping =  numberSwaping(10, 20);

console.log(`After swaping : ${swaping}`);

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

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.

const largestNumber = (numbers) => {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const numbers = [45, 66, 90, 33];

const maxNumber = largestNumber(numbers);

console.log(`Largest number is ${maxNumber}`);
