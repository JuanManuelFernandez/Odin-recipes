const add = function(num1, num2) {
	const total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
  const total = num1 - num2;
  return total;
};

const sum = function(arr) {
	const total = arr.reduce((acumulador, arr) => acumulador + arr, 0);
  return total; 
};

const multiply = function(arr) {
  const total = arr.reduce((acumulador, arr) => acumulador * arr, 1);
  return total; 
};

const power = function(num1, num2) {
  const total = num1 ** num2;
  return total;
};

const factorial = function(num) {
  let resultado = 1;
  for(let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
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
