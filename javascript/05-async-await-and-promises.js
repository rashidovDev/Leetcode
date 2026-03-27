/*
  05. Async/Await and Promises
  Topics:
  - Promise basics: Creating and handling promises
  - .then() and .catch(): Promise chaining
  - async/await: Syntactic sugar for promises
  - Error handling with try/catch/finally
*/

// ===== PROMISES BASICS =====
console.log("===== PROMISE BASICS =====");

// Create a promise that resolves after 1 second
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 1 second!");
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
  // Output (after 1 second): Promise resolved after 1 second!
}).catch((error) => {
  console.error(error);
});

// ===== PROMISE STATES =====
console.log("\n===== PROMISE STATES =====");

// Pending -> Resolved
const resolvedPromise = Promise.resolve("Immediate resolution");
console.log(resolvedPromise);
// Output: Promise { 'Immediate resolution' }

// Pending -> Rejected
const rejectedPromise = Promise.reject("Immediate rejection");
// .catch(err => console.log("Caught:", err));

// ===== HELPER FUNCTION =====
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// ===== PROMISE CHAINING =====
console.log("\n===== PROMISE CHAINING =====");

Promise.resolve(5)
  .then((num) => {
    console.log("Step 1: num =", num);
    // Output: Step 1: num = 5
    return num * 2;
  })
  .then((num) => {
    console.log("Step 2: num =", num);
    // Output: Step 2: num = 10
    return num + 3;
  })
  .then((num) => {
    console.log("Step 3: num =", num);
    // Output: Step 3: num = 13
  });

// ===== ASYNC/AWAIT BASICS =====
console.log("\n===== ASYNC/AWAIT BASICS =====");

async function asyncDemo() {
  console.log("Start async function");
  // Output: Start async function

  const result = await Promise.resolve("Awaited result");
  console.log(result);
  // Output: Awaited result

  return "Function completed";
}

asyncDemo().then((result) => {
  console.log(result);
  // Output: Function completed
});

// ===== ASYNC/AWAIT WITH TIMING =====
console.log("\n===== ASYNC/AWAIT WITH TIMING =====");

async function timedDemo() {
  console.log("START (time: 0ms)");
  await wait(1000);
  console.log("WAITING for 1 second completed");
  // Output (after 1s): WAITING for 1 second completed

  await wait(500);
  console.log("WAITING for 500ms completed");
  // Output (after 1.5s total): WAITING for 500ms completed
}

timedDemo();

// ===== ERROR HANDLING WITH TRY/CATCH =====
console.log("\n===== ERROR HANDLING =====");

async function errorDemo() {
  try {
    console.log("Inside try block");
    // Output: Inside try block

    const result = await Promise.reject("Something went wrong!");
    console.log("This won't print");
  } catch (error) {
    console.error(error);
    // Output: Something went wrong!
  } finally {
    console.log("Finally block always runs");
    // Output: Finally block always runs
  }
}

errorDemo();

// ===== PRACTICAL ASYNC EXAMPLE =====
console.log("\n===== PRACTICAL EXAMPLE =====");

async function fetchUserData() {
  try {
    console.log("Fetching user data...");
    // Simulate API call
    await wait(1000);
    const userData = { id: 1, name: "John", email: "john@example.com" };
    console.log(userData);
    // Output (after 1s): { id: 1, name: 'John', email: 'john@example.com' }

    console.log("Fetching user posts...");
    await wait(500);
    const posts = [{ id: 1, title: "First Post" }];
    console.log(posts);
    // Output (after 1.5s): [ { id: 1, title: 'First Post' } ]

    return { user: userData, posts };
  } catch (error) {
    console.error(error);
  }
}

fetchUserData().then((data) => {
  console.log(data);
  // Output (after 1.5s): { user: {...}, posts: [...] }
});

// ===== PROMISE.ALL =====
console.log("\n===== PROMISE.ALL =====");

async function parallelDemo() {
  const p1 = wait(1000).then(() => "Result 1");
  const p2 = wait(500).then(() => "Result 2");
  const p3 = wait(800).then(() => "Result 3");

  const results = await Promise.all([p1, p2, p3]);
  console.log(results);
  // Output (after 1 second): [ 'Result 1', 'Result 2', 'Result 3' ]
}

parallelDemo();

// ===== EXERCISES =====
// 1) Create a promise that resolves after 2 seconds with a message.
// 2) Write an async function that awaits that promise and logs the result.
// 3) Add error handling: throw an error and catch it with try/catch.
// 4) Create an async function that calls multiple promises in sequence.
// 5) Use Promise.all() to wait for multiple promises simultaneously.

// Your code below:
