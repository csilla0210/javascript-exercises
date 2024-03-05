const convertToCelsius = function(fahrenheit) {
  if (fahrenheit === 32) {
    return 0;
  }
  return Number(((fahrenheit - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  if (celsius === 0) {
    return 32;
  }
  return Number(((celsius * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
