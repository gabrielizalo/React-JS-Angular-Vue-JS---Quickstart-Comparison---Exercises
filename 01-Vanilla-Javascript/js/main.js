var inputEl = document.querySelector('input')
var buttonEl = document.querySelector('button')
var ulEl = document.querySelector('ul')
var todos = []
buttonEl.addEventListener('click', addTodo)

function addTodo () {
  // Verify user input to do an action
  var userInput = inputEl.value
  if (userInput.trim() === '') {
    return
  }

  var newTodo = {id: Math.random(), value: userInput}
  todos.push(newTodo)
  var todoLi = document.createElement('li')
  todoLi.textContent = userInput
  todoLi.addEventListener('click', removeTodo)
  todoLi.dataset.id = newTodo.id
  ulEl.appendChild(todoLi)
  console.log(todos)
}

function removeTodo (event) {
  var clickedLi = event.target
  var itemId = clickedLi.dataset.id
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {   /// With === Don't works the finding!
      todos.splice(i, 1)
      break
    }
  }
  clickedLi.parentNode.removeChild(clickedLi)
  console.log(todos)
}
