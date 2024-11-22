const apiUrl = 'http://localhost:3000';

const popupEdit = document.querySelector('#popup-edit');
const editId = document.querySelector('#edit-id');
const editInput = document.querySelector('#edit-input');
const popupAdd = document.querySelector('#popup-add');
const addInput = document.querySelector('#add-input');

//API
async function getTodos() {
    const response = await fetch(`${apiUrl}/todos`);
    const todos = await response.json()

    renderTodo(todos)
}

async function deleteTodo(todoId) {
    await fetch(`${apiUrl}/todos/${todoId}`, {
        method: 'DELETE'
    });

    await getTodos()
}

async function addTodo(e) {
    e.preventDefault();

    const todoValue = addInput.value;

    await fetch(`${apiUrl}/todos`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            todoValue,
        })
    });

    getTodos();
}

async function editTodo (e) {
    e.preventDefault();

    const id = editId.value;
    const todoValue = editInput.value

    const updateTodo = {todoValue};

    await fetch(`${apiUrl}/todos/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateTodo)
    })

    popupEdit.classList.remove('show');

    await getTodos();
}

//DOM
function renderTodo(todos) {
    const todoList = document.querySelector('#todo-list');

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const containerTodo = document.createElement('div');
        containerTodo.className = 'container-todo';
        containerTodo.idName = 'container-todo';

        containerTodo.innerHTML = `
                <div class="txt-box">
                    <input type="checkbox">
                    <span>${todo.todoValue}</span>
                </div>
                
                <div class="btn-box">
                    <button class="edit">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 4.00001L12 6.00001M8.66666 13.3333H14M3.33333 10.6667L2.66666 13.3333L5.33333
                            12.6667L13.0573 4.94267C13.3073 4.69264 13.4477 4.35356 13.4477 4.00001C13.4477 3.64645
                            13.3073 3.30738 13.0573 3.05734L12.9427 2.94267C12.6926 2.69271 12.3535 2.55229 12 2.55229C11.6464
                            2.55229 11.3074 2.69271 11.0573 2.94267L3.33333 10.6667Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                       
                    <button class="delete" id="delete">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_51_14)">
                            <path d="M7.07692 -0.0190735C5.872 -0.0190735 4.904 0.982157 4.904 2.19262V2.46154H2.46154C2.12246
                            2.46154 1.84615 2.73785 1.84615 3.07693V3.69231H1.23077V4.92308H2.46154V14.1539C2.46154 15.1662
                            3.29539 16 4.30769 16H11.6923C12.7046 16 13.5385 15.1662 13.5385
                            14.1539V4.92308H14.7692V3.69231H14.1538V3.07693C14.1538 2.73785 13.8775
                            2.46154 13.5385 2.46154H11.096V2.192C11.096 0.982157 10.128 -0.0190735 8.92308
                            -0.0190735H7.07692ZM7.07692 1.24985H8.92308C9.41785 1.24985 9.82708 1.65354 9.82708
                            2.192V2.46154H6.17231V2.192C6.17231 1.65354 6.58154 1.25047 7.07631 1.25047L7.07692 1.24985ZM3.69231
                            4.92308H6.84616C6.92246 4.93108 6.99816 4.94216 7.07692 4.94216H8.92308C9.00185 4.94216 9.07692 4.93108
                            9.15385 4.92308H12.3077V14.1539C12.3077 14.5003 12.0388 14.7692 11.6923 14.7692H4.30769C3.96123 14.7692
                            3.69231 14.5003 3.69231 14.1539V4.92308ZM4.92308 6.15385V13.5385H6.15385V6.15385H4.92308ZM7.38462
                            6.15385V13.5385H8.61539V6.15385H7.38462ZM9.84616 6.15385V13.5385H11.0769V6.15385H9.84616Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_51_14">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
        `
        const deleteBtn = containerTodo.querySelector('.delete');
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

        const editBtn = containerTodo.querySelector('.edit');
        editBtn.addEventListener('click', () => {
            openEditPopup(todo.id, todo.todoValue)
        })

        todoList.appendChild(containerTodo);
    })
}

function openEditPopup (id, todoValue) {
    popupEdit.classList.add('show');

    editId.value = id;
    editInput.value = todoValue;
}

//Main
document.querySelector('#btn-add').addEventListener('click', () => {
    popupAdd.classList.add('show');
});

document.querySelector('#form-add').addEventListener('submit', (e) => {
    addTodo(e);

    addInput.value = '';

    popupAdd.classList.remove('show');
});

document.querySelector('#form-edit').addEventListener('submit', (e) => {
    editTodo(e)
})

document.querySelector('#btn-close').addEventListener('click', (e) => {
    popupAdd.classList.remove('show');
})

document.querySelector('#btn-close-edit').addEventListener('click', (e) => {
    popupEdit.classList.remove('show');
})


getTodos();