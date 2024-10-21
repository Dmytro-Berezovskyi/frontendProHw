const todoList = document.querySelector('#todo_list');
const inputTodo = document.querySelector('#input');

let todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];

console.log(todoItems);
function saveTodoToLocalStorage() {
    localStorage.setItem('todoItem', JSON.stringify(newTodo));
}

document.querySelector('#btn_add_todo').addEventListener('click', () => {
    const newTodo = document.createElement("div");
    const todoCheckbox = document.createElement("input");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoText.textContent = inputTodo.value;
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
        todoList.removeChild(newTodo)
    });

    const objNewTodo = {newTodo};
    console.log(objNewTodo);
    todoItems.push(objNewTodo);
    console.log(newTodo);
    saveTodoToLocalStorage();
    inputTodo.value = "";
});