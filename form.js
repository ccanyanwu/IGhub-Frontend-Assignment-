//select elements from the DOM
const form = document.querySelector('#form'),
      status = document.querySelector('.status'), 
      input = document.querySelectorAll('input'), 
      btn = document.querySelector('#submit');
      
 //add a submit event listener to the register button 
 form.addEventListener('submit', validateForm);
 
 //validate form function 
 function validateForm(e){
   //application start date 
   const commenceDate = new Date('08-29-2020 00:00:00');
   //application close date
   const endDate = new Date('08-31-2020 23:59:59');
   //current date 
   const todaysDate = new Date();
   //condition to check for before and after registration
   if (todaysDate < commenceDate && input.value !== null || input.value !== '' ) {
     statusMessage("Registration hasn't commenced",'white', 'red');
   } 
   //condition to check for registration within open window
   if (todaysDate > commenceDate && todaysDate < endDate) {
     statusMessage("Submitted successfully!",'black', 'green');
   }else if(todaysDate > endDate ) {
     statusMessage("Registration has ended",'white', 'red');
   }
   e.preventDefault();
 }
 
 //error notice 
 function statusMessage(message,color,background){
   status.classList.remove('hide');
   status.textContent = message ;
   status.style.color = color ;
   status.style.background = background;
   setTimeout(removeMessage, 3000);
 }
 
 //remove message 
 function removeMessage(){
   status.classList.add('hide');
 } 