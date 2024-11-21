const apiUrl = 'http://localhost:3000';

async function getTodos() {
    const response = await fetch(`${apiUrl}/todos`);
    const todos = await response.json()
    console.log("Hi");

    //Render todos
}

async function addTodo(e) {
    e.preventDefault();

    const todoValue = document.querySelector('#add-input').value;

    await fetch(`${apiUrl}/todos`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            textTodo,
        })
    });
}

document.querySelector('#btn-add').addEventListener('click', () => {
    document.querySelector('#popup-add').classList.add('show');
});

document.querySelector('#form-add').addEventListener('submit', addTodo);
getTodos();