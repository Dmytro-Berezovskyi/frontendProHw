const todoList = document.querySelector('#todo_list');
const inputTodo = document.querySelector('#input');

document.querySelector('#btn_add_todo').addEventListener('click', () => {
    const newTodo = document.createElement("div");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoText.textContent = inputTodo.value;
    deleteBtn.textContent = "Delete";

    newTodo.classList.add('todo');
    deleteBtn.classList.add('btn_delete');

    todoList.appendChild(newTodo);
    newTodo.appendChild(todoText);
    newTodo.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (event) => {
        todoList.removeChild(newTodo)
    });

    inputTodo.value = "";
});