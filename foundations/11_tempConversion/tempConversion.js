const convertToCelsius = function (fah) {
  const celsius = (fah - 32) / 1.8;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (cel) {
  const fahrenheit = cel * 1.8 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
