import TodoService from "./todo-service.js";

var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	let template = `<div>totalTodos: ${todos.length}</div>`
	todos.forEach(todo => {
		template += `
	 <div>
				<input checkbox class="box" type="checkbox" ${todo.completed ? "checked" : ''} onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')" <h5>Check Box If Completed</h5>
				<p>To Do: ${todo.description}</p>
				<button type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
				</div>
	 `
	})
	document.getElementById("todo-list").innerHTML = template;
}


export default class TodoController {
	constructor() {
		getTodos()
	}

	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO 
			description: form.description.value
		}

		todoService.addTodo(todo, getTodos)
	}

	toggleTodoStatus(todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
	}

	removeTodo(todoId) {
		todoService.removeTodo(todoId, getTodos)
	}


}
