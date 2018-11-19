// import todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Carissa/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}

let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				todoList = res.data.data
				draw(res.data.data)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {
		todoApi.post('', todo)
			.then(function (res) {
				getTodos()

			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		var todo = todoList.find(i => i._id == todoId)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)

			.then(function (res) {
				getTodos()

			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		todoApi.delete(todoId)
			.then(res => {
				getTodos()
			})
	}

}
