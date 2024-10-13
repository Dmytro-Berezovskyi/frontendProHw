const todoList = document.querySelector('#todo_list');
const inputTodo = document.querySelector('#input');
const btnAdd = document.querySelector('#btn_add_todo');

btnAdd.addEventListener('click', () => {
    const newTodo = document.createElement("span");
    newTodo.textContent = inputTodo.value;
    newTodo.classList.add('todo');

    todoList.appendChild(newTodo);

    inputTodo.value = "";
});