import {renderTodo} from "./DOM.js";

export const apiUrl = 'http://localhost:3000';

export async function getTodos() {
    try {
        const response = await fetch(`${apiUrl}/todos`);
        const todos = await response.json()

        renderTodo(todos)
    } catch (error) {
        console.log(error)
    }
}

export async function addTodo(e, todoValue) {
    try {
        await fetch(`${apiUrl}/todos`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                todoValue,
            })
        });

        await getTodos();
    } catch (error) {
        console.log(error)
    }
}

export async function editTodo (e, id, todoValue, updateTodo) {
    try {
        await fetch(`${apiUrl}/todos/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateTodo)
        })

        await getTodos();
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTodo(todoId) {
    try {
        await fetch(`${apiUrl}/todos/${todoId}`, {
            method: 'DELETE'
        });

        await getTodos()
    } catch (error) {
        console.log(error)
    }
}