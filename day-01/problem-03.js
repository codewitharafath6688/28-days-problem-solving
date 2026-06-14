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