const todoList = document.querySelector('#todo_list');
const inputTodo = document.querySelector('#input');

//Function
function addTodo(text, isChecked = false) {
    const newTodo = document.createElement("div");
    const todoCheckbox = document.createElement("input");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoText.textContent = text;
    deleteBtn.textContent = "Delete";

    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = isChecked;

    newTodo.classList.add('todo');
    deleteBtn.classList.add('btn_delete');
    todoCheckbox.classList.add('checkbox');

    todoList.appendChild(newTodo);
    newTodo.appendChild(todoCheckbox);
    newTodo.appendChild(todoText);
    newTodo.appendChild(deleteBtn);

    todoCheckbox.addEventListener('change', () => {
        saveToLocalStorage();
    });

    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(newTodo);
        saveToLocalStorage();
    });
}

function saveToLocalStorage() {
    const todos = [];

    document.querySelectorAll('.todo').forEach(todo => {
        const text = todo.querySelector('span').textContent;
        const isChecked = todo.querySelector('input[type="checkbox"]').checked;

        todos.push({text, isChecked});
    });

    localStorage.setItem('todoItems', JSON.stringify(todos));
}

function renderLocalStorageItems() {
    const savedTodos = JSON.parse(localStorage.getItem('todoItems')) || [];

    savedTodos.forEach(todo => addTodo(todo.text, todo.isChecked));
}

//Main
inputTodo.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const text = inputTodo.value.trim();

        if (text) {
            addTodo(text);
            saveToLocalStorage();
            inputTodo.value = "";
        }
    }
})
document.querySelector('#btn_add_todo').addEventListener('click', () => {
    const text = inputTodo.value.trim();

    if (text) {
        addTodo(text);
        saveToLocalStorage();
        inputTodo.value = "";
    }
});

renderLocalStorageItems();