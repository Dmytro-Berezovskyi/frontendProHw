import { useSelector, useDispatch } from "react-redux";

import TodoItemRedux from "./TodoItem";
import { deleteTodoRedux, toggleTodoRedux } from "../../store/slices/todoSlice";

export default function TodoList () {
    const todosObject = useSelector(state => state.todos.todos)
    const dispatch = useDispatch();

    const deleteTodo = (id) => {
        dispatch(deleteTodoRedux(id))
    }

    const toggleTodo = (id) => {
        dispatch(toggleTodoRedux(id));
    };

    return (
        <div>
            {todosObject.map(todo =>
                <TodoItemRedux key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            )}
        </div>
    )
}