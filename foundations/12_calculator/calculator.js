const add = function (numA, numB) {
  return numA + numB;
};

const subtract = function (numA, numB) {
  return numA - numB;
};

const sum = function (array) {
  let sumAll = array.reduce((total, num) => total + num, 0);
  return sumAll;
};

const multiply = function (array) {
  let multiAll = array.reduce((total, num) => total * num, 1);
  return multiAll;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let fact = num;
  for (let i = 1; i < num; i++) {
    fact *= i;
  }
  return fact;
};

// local test:
// console.log(add(1, 1)); //2
// console.log(subtract(1, 2)); // 1
// console.log(sum(1, 2, 3)); //6
// console.log(multiply(1, 2, 3)); //6
// console.log(power(2, 2)); //4
// console.log(power(2, 3)); //8
// console.log(factorial(5)); //120

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
