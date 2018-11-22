/**
 * Let's create a safe tested add function in JavaScript!
 */
const add = function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error("This isn't a number!");

  return a + b;
};

module.exports = add;
