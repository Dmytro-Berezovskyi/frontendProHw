import {useEffect} from "react";

import {todoBaseURL} from "../../api/apis";

import TodoItem from "./TodoItem";

export default function TodoList ({todos, setTodos, deleteTodo, toggleTodo}) {
    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch(todoBaseURL + '?_limit=5');
            const data = await response.json();

            setTodos([...todos, ...data])
        }

        getTodos()
    }, [])

    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
        </div>
    )
}