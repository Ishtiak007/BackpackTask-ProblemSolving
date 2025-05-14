// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Ishtiak", age: 30, gender: "male" },
  { name: "Sayma", age: 25, gender: "female" },
  { name: "Ruhit", age: 40, gender: "male" },
  { name: "Fahim", age: 22, gender: "female" },
  { name: "Rafsan", age: 35, gender: "male" },
];

const filterAndMapNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const result = filterAndMapNames(people);
console.log(result);
