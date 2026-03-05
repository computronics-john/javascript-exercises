const convertToCelsius = function(fahrenheitValue) {
  let finalFahrenheitValue = (fahrenheitValue - 32) * (5 / 9);
  return Math.round(finalFahrenheitValue * 10) / 10;
};

const convertToFahrenheit = function(celsiusValue) {
  let finalCelsiusValue = (celsiusValue * (9 / 5)) + 32;
  return Math.round(finalCelsiusValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
