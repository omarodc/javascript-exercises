const repeatString = function (string, num) {
  let resultado = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i < num + 1; i++) {
      resultado += string;
    }
    return resultado;
  }
};

// console.log(repeatString("hola", 3));
// Do not edit below this line
module.exports = repeatString;
