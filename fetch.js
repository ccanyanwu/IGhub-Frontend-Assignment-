const btn = document.querySelector('button'),
      ul = document.querySelector('ul');

btn.addEventListener('click', getThem);
function getThem(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
  xhr.onload = function (){
    alert('this will take 10 seconds to fetch')

    if (this.status === 200) {
      const comments = JSON.parse(this.responseText)
      comments.forEach(comment => {
        ul.innerHTML += `<h2>${comment.email}</h2>
        <li>${comment.body}</li>`;
    });
    
    }
  }
  xhr.send();
  e.preventDefault();
}