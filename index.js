function calculate(num1, num2, operation) {
  return operation(num1, num2);
}
function add(num1, num2) {
  return (num1 + num2);
}

function multiply(num1, num2) {
  return (num1 * num2);
}
//  in here changes the operation method in both add and multiply Higher order function is same .
 let sum = calculate(4, 5, add);  
console.log(sum);
console.log(calculate(3, 4, multiply));


// A callback is function which is use as an arguments in another function which is higher order function and perform after parent functon run.