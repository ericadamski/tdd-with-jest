/**
 * Let's create an add function in JavaScript!
 */
const add = function add(a, b) {
  if (
    a === null || // avoid null
    a === undefined || // avoid undefined
    a instanceof Function || // avoid functions
    Array.isArray(a) || // avoid arrays
    typeof b === "object" // avoid objects
  )
    throw new Error("This isn't a number!");

  return a + b;
};

/**
 * Let's run some examples!
 */
console.log(add(1, 2));
console.log(add(1, "1"));
console.log(add(1, []));
console.log(add(1, {}));
console.log(
  add(1, function() {
    return;
  })
);

/**
 * What about...
 */
console.log(add(true, false));
console.log(add(10, true));
