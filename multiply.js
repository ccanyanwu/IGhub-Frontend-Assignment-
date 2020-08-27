//select elements from the DOM
const multiplier = document.querySelector('#multiplier'),
      range = document.querySelector('#range'), 
      multiplyBtn = document.querySelector('#button'),
      table = document.querySelector('table'),
      thead = document.querySelector('thead'), 
      article = document.querySelector('article');

//event listener to listen for button click 
multiplyBtn.addEventListener('click', generateTable);

//generate table 
function generateTable(){
  //declare variable of range 
  let UIrange =Number(range.value),
      result;
  
  //condition to check for empty input or exceeded limit 
  if (multiplier.value === '' || range.value === '' || Number(range.value) > 12) {
    alert('Figures must be provided in both fields and range must not be more than 12');
    
  } else {
    //loop through the range to generate individual result 
    for (let i = 1 ; i <= UIrange; i++) {
      result = Number(multiplier.value) * i;
      //p = document.createElement("p");
      //p.innerText = `${multiplier.value} X ${i} = ${result}` ;
      //article.appendChild(p);
      tr = document.createElement("tr");
      tr.classList = 'roww';
      tr.innerHTML = `<td>${multiplier.value} X ${i}</td>
                      <td>${result}</td>`;
      table.appendChild(tr);
      
      console.log(tr);
    }
    //clears the input field 
    multiplier.value = '';
    range.value = '';
    multiplyBtn.disabled = true;
  }

}


//clear result 
multiplier.addEventListener('keydown', function(){
  table.innerText = '';
  table.innerHTML = `<thead>
          <th>MULTIPLICATION </th>
          <th>RESULT </th>
        </thead>`
  multiplyBtn.disabled = false;
} )
      
 