/*
  03. Objects and Arrays
  Topics:
  - Creating objects: Using object literals {}
  - Accessing/updating object properties: dot notation or bracket notation
  - Basic array operations: push, pop, shift, unshift, indexOf, slice
  - Iteration: for...of, forEach, map, filter
*/

// ===== OBJECT BASICS =====
console.log("===== CREATING & ACCESSING OBJECTS =====");

const person = {
  name: "Amina",
  age: 22,
  skills: ["JavaScript", "HTML", "CSS"],
  address: {
    city: "Baku",
    country: "Azerbaijan"
  }
};

console.log(person.name);
// Output: Amina

console.log(person["age"]);
// Output: 22

console.log(person.skills);
// Output: [ 'JavaScript', 'HTML', 'CSS' ]

console.log(person.address.city);
// Output: Baku

// ===== MODIFYING OBJECTS =====
console.log("\n===== MODIFYING OBJECTS =====");

// Update existing property
person.age = 23;
console.log(person.age);
// Output: 23

// Add new property
person.email = "amina@example.com";
console.log(person.email);
// Output: amina@example.com

// Delete property
delete person.email;
console.log(person.email);
// Output: undefined

// ===== OBJECT METHODS & KEYS =====
console.log("\n===== OBJECT METHODS =====");

const keys = Object.keys(person);
console.log(keys);
// Output: [ 'name', 'age', 'skills', 'address' ]

const values = Object.values(person);
console.log(values);
// Output: [ 'Amina', 23, [ 'JavaScript', 'HTML', 'CSS' ], { city: 'Baku', country: 'Azerbaijan' } ]

const hasName = "name" in person;
console.log(hasName);
// Output: true

// ===== ARRAY BASICS =====
console.log("\n===== ARRAY CREATION & ACCESS =====");

const numbers = [10, 20, 30];
console.log(numbers);
// Output: [ 10, 20, 30 ]

console.log(numbers[0]);
// Output: 10

console.log(numbers.length);
// Output: 3

// ===== ARRAY MODIFICATION METHODS =====
console.log("\n===== ARRAY MODIFICATION METHODS =====");

// Add to end
numbers.push(40);
console.log(numbers);
// Output: [ 10, 20, 30, 40 ]

// Remove from end
const popped = numbers.pop();
console.log(popped, numbers);
// Output: 40 [ 10, 20, 30 ]

// Add to beginning
numbers.unshift(5);
console.log(numbers);
// Output: [ 5, 10, 20, 30 ]

// Remove from beginning
const shifted = numbers.shift();
console.log(shifted, numbers);
// Output: 5 [ 10, 20, 30 ]

// Find index
const index = numbers.indexOf(20);
console.log(index);
// Output: 1

// Slice (extract portion without modifying original)
const slice = numbers.slice(0, 2);
console.log(slice, numbers);
// Output: [ 10, 20 ] [ 10, 20, 30 ]

// ===== ARRAY ITERATION =====
console.log("\n===== ARRAY ITERATION =====");

const fruits = ["apple", "banana", "cherry"];

console.log("--- for...of loop ---");
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// cherry

console.log("\n--- forEach method ---");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});
// Output:
// Index 0: apple
// Index 1: banana
// Index 2: cherry

// ===== ARRAY TRANSFORMATION METHODS =====
console.log("\n===== ARRAY TRANSFORMATION METHODS =====");

const nums = [1, 2, 3, 4];

// map: transform each element
const doubled = nums.map(n => n * 2);
console.log(nums, doubled);
// Output: [ 1, 2, 3, 4 ] [ 2, 4, 6, 8 ]

// filter: keep elements that match condition
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);
// Output: [ 2, 4 ]

// reduce: combine all elements into single value
const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum);
// Output: 10

// ===== EXERCISES =====
// 1) Create an object for a book with title, author, and pages properties.
// 2) Create an array of 5 numbers and find the sum using reduce.
// 3) Add a new property to your book object and delete one.
// 4) Filter an array to keep only numbers greater than 10.
// 5) Map an array of names to uppercase using .map().

// Your code below:
