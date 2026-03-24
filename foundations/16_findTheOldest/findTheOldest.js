const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (list) {
  const currentYear = new Date().getFullYear();

  return list.reduce((oldest, person) => {
    const ageOldest = (oldest.yearOfDeath ?? currentYear) - oldest.yearOfBirth;

    const agePerson = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;

    return agePerson > ageOldest ? person : oldest;
  });
};

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
