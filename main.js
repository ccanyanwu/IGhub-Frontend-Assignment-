//select elements from the DOM
const button = document.querySelector('button'),
      template = document.querySelector('template');
      
button.addEventListener('click', () => {
  temp = template.content.cloneNode(true);
  document.body.insertBefore(temp, button)
});
