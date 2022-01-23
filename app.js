//select items from DOM 
const numbers = document.querySelectorAll('.number'),
      clear = document.querySelector('.clear'), 
      decimal = document.querySelector('#symbol'), 
      operators = document.querySelectorAll('.operators'), 
      calculate = document.querySelector('#result'),
      operationDisplay = document.querySelector('.first'), 
      resultDisplay = document.querySelector('.second');
      
 operators.forEach(button => button.addEventListener('click', (e)=>console.log(e.target.value)));
 calculate.addEventListener('click', (e) => console.log(e.target.value))
 //operationDisplay.textContent = 5
 //resultDisplay.textContent = 5544