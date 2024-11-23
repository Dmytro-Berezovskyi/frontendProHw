import {addTodo ,deleteTodo, editTodo} from "./API.js";

export const popupEdit = document.querySelector('#popup-edit');
const editId = document.querySelector('#edit-id');
const editInput = document.querySelector('#edit-input');
const popupAdd = document.querySelector('#popup-add');
export const addInput = document.querySelector('#add-input');

export function renderTodo(todos) {
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
                            <path d="M10.4118 4.6114L12.7059 6.83753M8.88235 15H15M2.76471 12.0318L2 15L5.05882 
                            14.258L13.9187 5.66065C14.2054 5.38234 14.3665 5.00493 14.3665 4.6114C14.3665 4.21787 
                            14.2054 3.84046 13.9187 3.56215L13.7872 3.43452C13.5004 3.1563 13.1114 3 12.7059 3C12.3003 
                            3 11.9114 3.1563 11.6246 3.43452L2.76471 12.0318Z" stroke="white" stroke-linecap="round" 
                            stroke-linejoin="round"/>
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
        editBtn.addEventListener('click', () => openEditPopup(todo.id, todo.todoValue))

        todoList.appendChild(containerTodo);
    })
}
export function openAddPopup() {
    document.querySelector('#btn-add').addEventListener('click', () => {
        popupAdd.classList.add('show');
    });
}

export function closeAddPopup() {
    popupAdd.classList.remove('show');
    document.querySelector('#error-add').classList.remove('show');
}

export function submitFormAdd() {
    document.querySelector('#form-add').addEventListener('submit', (e) => {
        e.preventDefault();

        const todoValue = addInput.value;
        if (todoValue.trim()) {
            addTodo(e, todoValue);

            addInput.value = '';

            closeAddPopup();
        } else {
            document.querySelector('#error-add').classList.add('show');
        }
    });
}

function openEditPopup (id, todoValue) {
    popupEdit.classList.add('show');

    editId.value = id;
    editInput.value = todoValue;
}

export function closeEditPopup() {
    popupEdit.classList.remove('show');
}

export function submitFormEdit() {
    document.querySelector('#form-edit').addEventListener('submit', (e) => {
        e.preventDefault();

        const id = editId.value;
        const todoValue = editInput.value

        const updateTodo = {todoValue};

        if (updateTodo.todoValue.trim()) {
            editTodo(e, id, todoValue, updateTodo);

            closeEditPopup();
        }
    })
}
