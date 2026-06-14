// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.

const numberSwaping = (num1, num2) => {
  [num1, num2] = [num2, num1];
  return `${num1}, ${num2}`;
};

const swaping =  numberSwaping(10, 20);

console.log(`After swaping : ${swaping}`);