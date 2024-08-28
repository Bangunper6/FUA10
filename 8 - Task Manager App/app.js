// Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// create event listener
todoButton.addEventListener("click", addTodo) // Step 2: Attaching event listener to the add button to add the task

// Step 1: Function to add a new task
function addTodo(e){
    // prevent form submission
    e.preventDefault();

    // save the task to local storage // Step 4.
    saveLocalTodos(todoInput.value);

    // Create a new todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create a new list item to task
    const newTodo =document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    // Create a button to mark the task as completed
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completedButton);

    // Create a buttom to delete the task
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    // Append the todo div container to the todo list
    todoList.appendChild(todoDiv);
    todoInput.value=""
}

// Step 3 : Function to save task to LocalStorage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos));
}