// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.

const cTof = (celsiusValue) => {
  const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  return fahrenheitValue;
};

const fScale = cTof(100);

console.log(`Fahrenheit scale value is ${fScale} F`);
