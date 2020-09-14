//select from the DOM 
const addBtn = document.querySelector('.add'),
      addTaskInput = document.querySelector('#add-task'),
      filter = document.querySelector('#filter'),
      taskList = document.querySelector('ol'),
      mainBody = document.querySelector('main');
      
// add task function 
const addTask = () => {
  if(addTaskInput.value === ''){
    alert('add a task');
  }else{
      taskList.innerHTML += `<li>*  ${addTaskInput.value} <a class="delete" href="#"><i class="fas fa-trash-alt"></i></a></li>`;
      addTaskInput.value = '';
  }
}
//delete individual task 
const removeTask = (e) =>{
  if(e.target.parentElement.classList.contains('delete')){
    if(confirm('You mean this thing wey you wan do so?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

//filter task 
const filterTask = (e) =>{
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('li').forEach(task =>{
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  })
  console.log(text)
}


//event listeners
addBtn.addEventListener('click', addTask);
mainBody.addEventListener('click', removeTask);
filter.addEventListener('keyup', filterTask);