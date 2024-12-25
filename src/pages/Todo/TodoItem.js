import { useSelector } from "react-redux";

import { Button } from 'antd';

export default function TodoItem ({todo, deleteTodo, toggleTodo}) {
    const todosObject = useSelector(state => state.todos)

    return (
        <div className='todo-item' >
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
                {todo.title}
            </span>
            <Button
                style={{backgroundColor: 'white'}}
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </Button>
        </div>
    )
}