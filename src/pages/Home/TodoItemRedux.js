export default function TodoItemRedux (todo, deleteTodo, toggleTodo) {
    return (
        <div className='todo-item' >
            <span
                onClick={() => {toggleTodo(todo.id)}}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
                {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}