const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]


const getTheTitles = function (list) {
  return list.map((item) => item.title);
};

console.log(getTheTitles(books)); // ['Book','Book2']
// Do not edit below this line
module.exports = getTheTitles;
