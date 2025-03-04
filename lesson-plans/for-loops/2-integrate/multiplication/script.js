import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const num1 = document.getElementById('left').value;
  const num2 = document.getElementById('right').value;
  console.log(num1, num2);
  // use a for loop to multiply the two numbers
  let sum = 0;
  for (let i = 1; i <= Number(num2); i++) {
    sum += Number(num1);
  }
  
  // display the product
  document.getElementById('product').innerText = sum;
});
