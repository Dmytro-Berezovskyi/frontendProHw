import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../store/thunks/todoThunk";

import TodoItemRedux from "./TodoItem";
import { deleteTodoRedux, toggleTodoRedux } from "../../store/slices/todoSlice";

export default function TodoList () {
    const { todos, loading, error } = useSelector(state => state.todos)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchTodos());
    },[])

    const deleteTodo = (id) => {
        dispatch(deleteTodoRedux(id))
    }

    const toggleTodo = (id) => {
        dispatch(toggleTodoRedux(id));
    };

    return (
        <div>
            {loading && <div className='loading'>Loading...</div>}
            {todos.map(todo =>
                <TodoItemRedux key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            )}
        </div>
    )
}