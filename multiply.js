//select elements from the DOM
const multiplier = document.querySelector('#multiplier'),
      range = document.querySelector('#range'), 
      multiplyBtn = document.querySelector('#button'),
      clear = document.querySelector('#clear'),
      article = document.querySelector('article');


      
//event listener to listen for button click 
multiplyBtn.addEventListener('click', generateTable);

//generate table 
function generateTable(){
  //declare variable of range 
  let UIrange =Number(range.value),
      result;
  
  //condition to check for empty input
  if (multiplier.value === '' || range.value === '' || Number(range.value) > 100) {
    alert('Figures must be provided in both fields');
    
  } else {
    //loop through the range to generate individual result 
    for (let i = 1 ; i <= UIrange; i++) {
      result = Number(multiplier.value) * i;
      p = document.createElement("p");
      p.innerText = `${multiplier.value} X ${i} = ${result}` ;
      article.appendChild(p);
      
    }
    //clears the input field 
    multiplier.value = '';
    range.value = '';
    multiplyBtn.disabled = true;
  }

}

//clear result 
clear.addEventListener('click', function(){
  article.innerText = '';
  multiplyBtn.disabled = false;
} )
      
 