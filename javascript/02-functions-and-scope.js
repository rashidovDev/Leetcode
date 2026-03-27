/*
  02. Functions and Scope
  Topics:
  - Function declaration vs expression: Different syntax, hoisting behavior
  - Parameters and return values: Passing data in, getting results out
  - Block scope (let/const): Variables only exist within their block {}
  - Function scope (var): Variables exist throughout the entire function
*/

// ===== FUNCTION DECLARATION =====
// Can be called BEFORE it's defined (hoisted)
function add(a, b) {
  return a + b;
}

console.log("===== FUNCTION DECLARATION =====");
console.log(add(3, 4));
// Output: 7

console.log(add(10, 20));
// Output: 30

// ===== FUNCTION EXPRESSION =====
// Cannot be called BEFORE it's defined
const multiply = function (a, b) {
  return a * b;
};

console.log("\n===== FUNCTION EXPRESSION =====");
console.log(multiply(3, 4));
// Output: 12

console.log(multiply(5, 6));
// Output: 30

// ===== ARROW FUNCTION (ES6) =====
const subtract = (a, b) => a - b;

console.log("\n===== ARROW FUNCTION =====");
console.log(subtract(10, 4));
// Output: 6

// ===== FUNCTION WITH MULTIPLE PARAMETERS =====
function calculateGrade(score, maxScore = 100) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  return "F";
}

console.log("\n===== FUNCTIONS WITH DEFAULT PARAMETERS =====");
console.log(calculateGrade(85));
// Output: B

console.log(calculateGrade(95, 100));
// Output: A

// ===== SCOPE DEMONSTRATION =====
console.log("\n===== SCOPE EXAMPLES =====");

// Global scope
const globalVar = "I am global";

function scopeDemo() {
  // Function scope
  var functionScoped = "I am function-scoped (var)";
  let functionBlock = "I am block-scoped (let inside function)";

  console.log("\n--- Inside function ---");
  console.log(globalVar);
  // Output: I am global
  console.log(functionScoped);
  // Output: I am function-scoped (var)
  console.log(functionBlock);
  // Output: I am block-scoped (let inside function)

  if (true) {
    var blockVar = "var inside if block";
    let letInBlock = "let inside if block";
    const constInBlock = "const inside if block";
    
    console.log("\n--- Inside if block ---");
    console.log(blockVar);
    // Output: var inside if block
    console.log(letInBlock);
    // Output: let inside if block
    console.log(constInBlock);
    // Output: const inside if block
  }

  console.log("\n--- After if block (still in function) ---");
  console.log(blockVar);
  // Output: var inside if block
  // console.log(letInBlock); // ERROR: letInBlock is not defined
  // console.log(constInBlock); // ERROR: constInBlock is not defined
}

scopeDemo();

// ===== BLOCK SCOPE EXAMPLE =====
console.log("\n===== BLOCK SCOPE (for loop) =====");

for (var i = 0; i < 3; i++) {
  // var is function-scoped
}
console.log(i);
// Output: 3

for (let j = 0; j < 3; j++) {
  // let is block-scoped
}
// console.log(j); // ERROR: j is not defined - it's scoped to the loop block

// ===== CLOSURE EXAMPLE =====
console.log("\n===== CLOSURE =====");

function createCounter() {
  let count = 0; // This variable is closed over by the returned function
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// ===== EXERCISES =====
// 1) Write a function `greet` that takes a name and returns "Hello, <name>!".
// 2) Write a function `isEven` that returns true if a number is even, false otherwise.
// 3) Create a function with a let variable inside. Try to access it outside (see the error).
// 4) Write a function that returns another function (closure example).

// Your code below:
