/*
  02. Functions and Scope
  Topics:
  - Function declaration vs expression
  - Parameters and return values
  - Block scope (let/const)
  - Function scope (var)
*/

// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const multiply = function (a, b) {
  return a * b;
};

console.log("add(3, 4):", add(3, 4));
console.log("multiply(3, 4):", multiply(3, 4));

// Scope example
function scopeDemo() {
  var functionScoped = "I am function-scoped";

  if (true) {
    let blockScoped = "I am block-scoped";
    const alsoBlockScoped = "Me too";
    console.log(blockScoped);
    console.log(alsoBlockScoped);
  }

  console.log(functionScoped);
}

scopeDemo();

// Exercises
// 1) Write a function `greet` that returns: "Hello, <name>!".
// 2) Write a function `isEven` that returns true for even numbers.
// 3) Create a block and declare one `let` variable. Try to access it outside the block.

// Your code below:
