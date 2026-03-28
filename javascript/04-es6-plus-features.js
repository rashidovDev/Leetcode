/*
  04. ES6+ Features
  Topics:
  - Arrow functions: Concise syntax, lexical this binding
  - Template literals: String interpolation with backticks
  - Destructuring: Extract values from objects and arrays
  - Spread/rest operators: Expand or collect elements
*/

// ===== ARROW FUNCTIONS =====
console.log("===== ARROW FUNCTIONS =====");

// Regular function
function addRegular(a, b) {
  return a + b;
}

// Arrow function (1 parameter, implicit return)
const square = (n) => n * n;
console.log(square(5));
// Output: 25

// Arrow function (2 parameters, explicit return)
const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(3, 4));
// Output: 7

// Arrow function (implicit return)
const multiply = (a, b) => a * b;
console.log(multiply(6, 7));
// Output: 42

// Arrow function (no parameters)
const getTime = () => new Date().getHours();
console.log(getTime());
// Output: (current hour)

// ===== TEMPLATE LITERALS =====
console.log("\n===== TEMPLATE LITERALS =====");

const firstName = "Alice";
const lastName = "Johnson";
const age = 28;

// Old way with string concatenation
const oldWay = "Hello, " + firstName + " " + lastName + "! You are " + age + " years old.";
console.log(oldWay);
// Output: Hello, Alice Johnson! You are 28 years old.

// New way with template literals
const newWay = `Hello, ${firstName} ${lastName}! You are ${age} years old.`;
console.log(newWay);
// Output: Hello, Alice Johnson! You are 28 years old.

// Template literals with expressions
const math = `5 + 3 = ${5 + 3}`;
console.log(math);
// Output: 5 + 3 = 8

// Template literals with multiline
const multiline = `
This is line 1
This is line 2
This is line 3
`;
console.log("Multiline:", multiline);
// Output:
// This is line 1
// This is line 2
// This is line 3

// ===== DESTRUCTURING (Objects) =====
console.log("\n===== OBJECT DESTRUCTURING =====");

const user = { id: 1, username: "devUser", country: "AZ", email: "dev@example.com" };

// Extract username and country
const { username, country } = user;
console.log(`User: ${username}, Country: ${country}`);
// Output: User: devUser, Country: AZ

// Rename variables during destructuring
const { username: name, id } = user;
console.log(`Name: ${name}, ID: ${id}`);
// Output: Name: devUser, ID: 1

// Extract with default value
const { email, phone = "N/A" } = user;
console.log(`Email: ${email}, Phone: ${phone}`);
// Output: Email: dev@example.com, Phone: N/A

// ===== DESTRUCTURING (Arrays) =====
console.log("\n===== ARRAY DESTRUCTURING =====");

const rgb = [255, 128, 64];
const [red, green, blue] = rgb;
console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// Output: Red: 255, Green: 128, Blue: 64

// Skip elements
const [first, , third] = rgb;
console.log(`First: ${first}, Third: ${third}`);
// Output: First: 255, Third: 64

// Swap values
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(`x: ${x}, y: ${y}`);
// Output: x: 10, y: 5

// ===== SPREAD OPERATOR (...) =====
console.log("\n===== SPREAD OPERATOR =====");

// Spread in arrays: combine/expand arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
// Output: [ 1, 2, 3, 4, 5, 6 ]

// Add elements while spreading
const withExtra = [0, ...arr1, 3.5, ...arr2, 7];
console.log(withExtra);
// Output: [ 0, 1, 2, 3, 3.5, 4, 5, 6, 7 ]

// Spread in objects: merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// Output: { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const override = { ...user, username: "newUser" };
console.log(override.username);
// Output: newUser

// ===== REST OPERATOR (...) =====
console.log("\n===== REST OPERATOR =====");

// Collect remaining arguments
function sumAll(...nums) {
  console.log(nums);
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(sumAll(1, 2, 3, 4));
// Output:
// [ 1, 2, 3, 4 ]
// 10

// Rest in destructuring
const [first1, ...rest] = [10, 20, 30, 40];
console.log(first1, rest);
// Output: 10 [ 20, 30, 40 ]

// ===== EXERCISES =====
// 1) Convert a regular function to an arrow function.
// 2) Use destructuring to extract values from an object and rename them.
// 3) Merge two arrays using spread syntax.
// 4) Use rest operator to create a function that accepts any number of arguments.
// 5) Create a template literal that calculates and displays: "The sum of 5 and 3 is 8".

// Your code below:
