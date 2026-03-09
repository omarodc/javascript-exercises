const leapYears = function(year) {
  if (year % 400 === 0) {
    return true; // divisible por 400 → bisiesto
  }
  if (year % 100 === 0) {
    return false; // divisible por 100 pero no por 400 → no bisiesto
  }
  if (year % 4 === 0) {
    return true; // divisible por 4 → bisiesto
  }
  return false; // cualquier otro caso → no bisiesto
};

// Do not edit below this line
module.exports = leapYears;
