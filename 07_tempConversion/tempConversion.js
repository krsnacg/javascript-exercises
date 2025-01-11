const convertToCelsius = function(temperature) {
  // Converts from Fahrenheit to Celsius
  return Math.round(((temperature - 32) * 5 / 9) * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  // Converts from Celsius to Fahrenheit
  return Math.round(((temperature * 9 / 5) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
