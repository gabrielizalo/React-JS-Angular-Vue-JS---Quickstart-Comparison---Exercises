var inputEl = $('input')
var buttonEl = $('button')
var ulEl = $('ul')
var todos = []
buttonEl.click(addTodo)

function addTodo () {
  // Verify user input to do an action
  var userInput = inputEl.val()
  if (userInput.trim() === '') {
    return
  }

  var newTodo = {id: Math.random(), value: userInput}
  todos.push(newTodo)
  $('<li>' + userInput + '</li>')
    .appendTo(ulEl)
    .attr('dataset-id', newTodo.id)
    .click(removeTodo)
  console.log(todos)
}

function removeTodo (event) {
  var clickedLi = $(this)
  var itemId = clickedLi.attr('dataset-id')
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == itemId) {   /// With === Don't works the finding!
      todos.splice(i, 1)
      break
    }
  }
  clickedLi.remove()
  console.log(todos)
}
