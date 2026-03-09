const reverseString = function (word) {
  let wordList = word.split("").reverse();
  let reverseWord = wordList.join("");
  return reverseWord;
};
// reverseString("hello there"); // returns 'ereht olleh'
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
