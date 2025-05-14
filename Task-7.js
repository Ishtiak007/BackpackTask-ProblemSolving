// 7. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 5];

const getUniqueNumbers = (arr) => {
  return [...new Set(arr)];
};

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
