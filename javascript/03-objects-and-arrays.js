/*
  03. Objects and Arrays
  Topics:
  - Creating objects
  - Accessing/updating object properties
  - Basic array operations
  - Iteration
*/

const person = {
  name: "Amina",
  age: 22,
  skills: ["JavaScript", "HTML", "CSS"],
};

console.log(person.name);
person.age = 23;
person.city = "Baku";
console.log(person);

const numbers = [10, 20, 30];
numbers.push(40);
const first = numbers[0];

console.log("numbers:", numbers);
console.log("first:", first);

for (const skill of person.skills) {
  console.log("skill:", skill);
}

// Exercises
// 1) Create an object for a book with title, author, and pages.
// 2) Create an array of 5 numbers and find the sum.
// 3) Add a new property to your book object.

// Your code below:
