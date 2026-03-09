const removeFromArray = function (list, ...items) {
  return list.filter((i) => !items.includes(i));
};
// console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]
console.log(removeFromArray([1, 2, 3, 4], 3, 2)); //[1,4]
// Do not edit below this line
module.exports = removeFromArray;
