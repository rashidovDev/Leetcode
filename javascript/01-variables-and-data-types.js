/*
  01. Variables and Data Types
  Topics:
  - let, const, var
  - Primitive types
  - Type conversion
*/

// Examples
let age = 25;
const name = "Rashid";
let isStudent = true;
let score = null;
let city;

console.log("age:", age, "type:", typeof age);
console.log("name:", name, "type:", typeof name);
console.log("isStudent:", isStudent, "type:", typeof isStudent);
console.log("score:", score, "type:", typeof score); // historical JS quirk: object
console.log("city:", city, "type:", typeof city);

const numberFromString = Number("42");
const stringFromNumber = String(42);

console.log("numberFromString:", numberFromString, "type:", typeof numberFromString);
console.log("stringFromNumber:", stringFromNumber, "type:", typeof stringFromNumber);

// Exercises
// 1) Create variables for your favorite color, birth year, and if you like coding.
// 2) Convert "100" to a number and add 50.
// 3) Check type of: null, undefined, true, "hello", 123.

// Your code below:
