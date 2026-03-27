/*
  01. Variables and Data Types
  Topics:
  - let, const, var: Declaration keywords with different scope and mutability rules
  - Primitive types: Boolean, Number, String, null, undefined, Symbol, BigInt
  - Type conversion: Explicitly converting between types
*/

// ===== VARIABLE DECLARATIONS =====
// let: Block-scoped, can be reassigned
let age = 25;
age = 26; // OK - let can be reassigned

// const: Block-scoped, cannot be reassigned (but properties can be modified)
const name = "Rashid";
// name = "Ali"; // ERROR: Cannot assign to const variable

// var: Function-scoped, can be reassigned (avoid in modern JS)
var decade = "2020s";
decade = "2030s"; // OK

console.log("===== VARIABLE TYPES =====");
console.log(age, typeof age);
// Output: 26 'number'

console.log(name, typeof name);
// Output: Rashid 'string'

// ===== PRIMITIVE DATA TYPES =====
console.log("\n===== PRIMITIVE DATA TYPES =====");

let isStudent = true;            // Boolean
let score = null;               // null (absence of value)
let city;                       // undefined (not initialized)
let amount = 42.5;              // Number (includes decimals)
let email = "user@example.com"; // String

console.log(isStudent, typeof isStudent);
// Output: true 'boolean'

console.log(score, typeof score);
// Output: null 'object' (historical JS quirk)

console.log(city, typeof city);
// Output: undefined 'undefined'

console.log(amount, typeof amount);
// Output: 42.5 'number'

console.log(email, typeof email);
// Output: user@example.com 'string'

// ===== TYPE CONVERSION =====
console.log("\n===== TYPE CONVERSION =====");

// String to Number
const numberFromString = Number("42");
console.log(numberFromString, typeof numberFromString);
// Output: 42 'number'

// Number to String
const stringFromNumber = String(42);
console.log(stringFromNumber, typeof stringFromNumber);
// Output: 42 'string'

// String to Boolean
const boolFromString = Boolean("hello");
console.log(boolFromString, typeof boolFromString);
// Output: true 'boolean'

// Falsy values: 0, "", null, undefined, NaN, false
console.log(Boolean(0));           // false
console.log(Boolean(""));         // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false

// ===== TYPE COERCION (Implicit) =====
console.log("\n===== TYPE COERCION =====");
const result1 = "5" + 3;  // "53" (string concatenation)
const result2 = "5" - 3;  // 2 (numeric subtraction)
const result3 = "5" * "2"; // 10 (numeric multiplication)
console.log(result1); // Output: 53
console.log(result2); // Output: 2
console.log(result3); // Output: 10

// ===== EXERCISES =====
// 1) Create variables for your favorite color, birth year, and if you like coding.
// 2) Convert "100" to a number and add 50.
// 3) Check type of: null, undefined, true, "hello", 123.
// 4) What is Boolean("")? What is Boolean(" ")? Why different?

// Your code below:
