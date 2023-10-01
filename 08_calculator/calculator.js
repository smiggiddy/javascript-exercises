const add = function(...num) {
  let sum = 0;
  console.log(num);
  num.forEach(element => {
  	sum += element;
  });
  return sum;
};

const subtract = function(x, y) {
  return x - y;	
};

const sum = function(num) {
  if (num.length === 0) return Number(0);
  let total = 0;
  num.forEach(element => {
      
	console.log(element)
  	total += Number(element);
  });
  return total;
};

const multiply = function(array) {
  let product = 1;
  array.forEach(element => {
    product *= element;
  })
  return product;
};

const power = function(num, power) {
  let result = num;
  for (i=0; i < power-1; i++) {
    result *= num;
  };
  return result;
};

const factorial = function(fact) {
    if (fact === 0) {
      return 1;
    } else {
    return fact * factorial(fact-1);
    } 
};

console.log(sum([7,11]));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
