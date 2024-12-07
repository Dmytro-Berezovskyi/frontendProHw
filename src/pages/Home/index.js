import {useState} from "react";

import { v4 as uuid } from "uuid";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Home() {
    const [todos, setTodos] = useState('');

    const handleChange = (e) => {
        setTodos(e.target.value);
    }

    const handleSubmit = (e) => {
        addTodo(task);
        setTodos('');
    }

    const addTodo = (task) => {
        const newTodo = {
            task,
            completed: false,
            id: uuid(),
        }

        setTodos(...todos, newTodo);
    }

    return (
     <div>
        <h1>Todo list</h1>

         <TodoForm />
         <TodoList />
     </div>
    );
}