const express = require('express');
const cors = require('cors');
const uuid = require('uuid');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.post('/todos', (req, res) => {
    const newTodo = {...req.body, id:crypto.randomUUID()};

    todos.push(newTodo);

    res.status("200").json(newTodo);
})

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { todoValue } = req.body;

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({massage: 'Завдання не знайжено'})
    } else {
        todo.todoValue = todoValue;

        res.status(200).json(todo)
    }
})

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);

    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({massage: 'Завдання не знайжено!'})
    } else {
        todos.splice(todoIndex, 1);

        res.status(200).json({message: "Завдання видалено"})
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})