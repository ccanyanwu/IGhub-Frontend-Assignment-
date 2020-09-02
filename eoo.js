//select elements from the DOM
const form = document.querySelector('#form'),
      status = document.querySelector('.status'), 
      input = document.querySelectorAll('input'), 
      btn = document.querySelector('#submit');
      
 //add a submit event listener to the dom
 document.addEventListener('DOMContentLoaded', setTimeout(validateNumber, 3000) );
 
 //validate number function 
 function validateNumber(){
   let numbers = 50,
       ol = document.querySelector('ol');
  for (let i = 1; i <= numbers; i++){
    if (i % 2 !== 0) {
      ol.innerHTML += `<li>YES</li>`;
    } else {
      ol.innerHTML += `<li>NO</li>`;
    }
  } 
} 