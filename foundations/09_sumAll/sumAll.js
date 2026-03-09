const sumAll = function (num1, num2) {
  let total = 0;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR"; // no son enteros
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR"; // son negativos
  }

  if (num1 > num2) {
    for (let x = num2; x <= num1; x++) {
      total = x + total;
    }
    return total;
  } else {
    for (let i = num1; i <= num2; i++) {
      total = i + total;
    }
    return total;
  }
};

console.log(sumAll(1, 4000)); // returns the sum of 1 + 2 + 3 + 4 which is 10
// Do not edit below this line
module.exports = sumAll;
