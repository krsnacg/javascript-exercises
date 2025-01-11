const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  // this is for many arguments, not a single array
  // return elements.reduce((total, element) => total * element, 1);
  return arr.reduce((product, item) => product * item, 1)
};

const power = function(base, power) {
  let x = 1
  for (let index = 0; index < power; index++) x *= base;
  return x;
};

const factorial = function(number) {
  let fact = 1;
  for (let index = number; index > 0; index--) fact *= index;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
