import {useState, useEffect} from "react";

import {todoBaseURL} from "../../api/apis";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList () {
    const [todos, setTodos] = useState('');

    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch(todoBaseURL);
            const data = await response.json();
            setTodos(data)
        }

        getTodos();
    }, []);

    return (
        <div>

        </div>
    )
}