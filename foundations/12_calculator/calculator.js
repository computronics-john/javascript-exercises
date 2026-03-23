const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;  
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => {
    return product * current;
  },1);
};

const power = function(baseNumber, exponentNumber) {
	return baseNumber ** exponentNumber;
};

const factorial = function(baseNumber) {
  let finalResult = 1;
  for (let number = baseNumber; number > 0; number--) {
    finalResult *= number;
  }
  return finalResult;
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
