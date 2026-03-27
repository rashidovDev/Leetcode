/*
  05. Async/Await and Promises
  Topics:
  - Promise basics
  - async/await
  - Error handling with try/catch
*/

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function runDemo() {
  try {
    console.log("Start...");
    await wait(1000);
    console.log("1 second passed");

    const data = await Promise.resolve({ message: "Done" });
    console.log("data:", data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

runDemo();

// Exercises
// 1) Create a promise that resolves after 2 seconds.
// 2) Write an async function that awaits that promise.
// 3) Throw an error inside async function and catch it with try/catch.

// Your code below:
