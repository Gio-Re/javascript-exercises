const convertToCelsius = function(temp) {
  return Math.round((temp - 32) * 50 / 9) / 10; //Math.round(num * 10) / 10 returns the number rounded to 1 decimal
};

const convertToFahrenheit = function(temp) {
  return Math.round(((temp * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
