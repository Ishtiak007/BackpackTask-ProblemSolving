const people = [
  { name: "John", age: 30, gender: "male" },
  { name: "Jane", age: 25, gender: "female" },
  { name: "Sam", age: 40, gender: "male" },
  { name: "Anna", age: 22, gender: "female" },
  { name: "Tom", age: 35, gender: "male" },
];

const filterAndMapNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const result = filterAndMapNames(people);
console.log(result);
