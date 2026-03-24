const palindromes = function (msg) {
  let clean = msg.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");

  let reversed = clean.split("").reverse().join("");

  return clean === reversed;
};

console.log(palindromes("racecar")); // true
console.log(palindromes("tacos")); // false

// Do not edit below this line
module.exports = palindromes;
