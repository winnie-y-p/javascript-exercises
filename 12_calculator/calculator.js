const add = function(a, b) {
	return a + b;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(multiplyArr) {
    return multiplyArr.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(num) {
  let result = 1;
  while (num > 0) {
      result *= num;
      num--;
    }
  return result;
};

console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
