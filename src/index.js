document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    buildList(e.target.newTaskDescription.value);
    form.reset()
  });
  
  function buildList(todo) {
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.textContent = 'x'; 
    btn.addEventListener('click', toDelete)
    p.textContent = `${todo} `;
    p.appendChild(btn);
    console.log(p);
    document.querySelector('#list').appendChild(p);
  }
  function toDelete(e){
    e.target.parentNode.remove()
  }
});

