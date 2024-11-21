const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.post('/todos', (req, res) => {
    console.log(req);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})