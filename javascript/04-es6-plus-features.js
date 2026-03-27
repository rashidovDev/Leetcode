/*
  04. ES6+ Features
  Topics:
  - Arrow functions
  - Template literals
  - Destructuring
  - Spread/rest operators
*/

const square = (n) => n * n;
console.log("square(5):", square(5));

const user = { id: 1, username: "devUser", country: "AZ" };
const { username, country } = user;
console.log(`User: ${username}, Country: ${country}`);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("arr2:", arr2);

function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log("sumAll(1,2,3,4):", sumAll(1, 2, 3, 4));

// Exercises
// 1) Convert a regular function to an arrow function.
// 2) Use destructuring to extract values from an object.
// 3) Merge two arrays using spread syntax.

// Your code below:
