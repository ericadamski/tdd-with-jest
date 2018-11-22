/**
 * Let's TDD a multiply function in JavaScript!
 */
const multiply = function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("This isn't a number!");

  return a * b;
};

module.exports = multiply;
