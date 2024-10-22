const todoList = document.querySelector('#todo_list');
const inputTodo = document.querySelector('#input');

//Function
function addTodo(text) {
    const newTodo = document.createElement("div");
    const todoCheckbox = document.createElement("input");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoText.textContent = text;
    deleteBtn.textContent = "Delete";

    newTodo.classList.add('todo');
    deleteBtn.classList.add('btn_delete');
    todoCheckbox.name = "checkbox";
    todoCheckbox.type = "checkbox";

    todoList.appendChild(newTodo);
    newTodo.appendChild(todoCheckbox);
    newTodo.appendChild(todoText);
    newTodo.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (event) => {
        todoList.removeChild(newTodo);
        saveToLocalStorage();
    });
};

function saveToLocalStorage() {
    const todos = [];

    document.querySelectorAll('.todo span').forEach(todo => {
        todos.push(todo.textContent);
    });
    console.log(todos);

    localStorage.setItem('todoItems', JSON.stringify(todos));
};

function renderLocalStorageItems() {
    const savedTodos = JSON.parse(localStorage.getItem('todoItems')) || [];
    savedTodos.forEach(todo => addTodo(todo));
};

function iteration() {
    let counter = 0;

    for (let i = 0; i < 100; i++) {
        counter += 1;
        break;
    }
    return counter;
};
console.log(iteration(), iteration());

//Main
document.querySelector('#btn_add_todo').addEventListener('click', () => {
    const text = inputTodo.value.trim();

    if (text !== "") {
        addTodo(iteration() + ` ${text}`);
        saveToLocalStorage();
        inputTodo.value = "";
    }
});

renderLocalStorageItems();