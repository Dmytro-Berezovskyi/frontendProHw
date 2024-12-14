import {useState, useContext} from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import {ThemeContext} from "../../context/ThemeContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFormRedux from "./TodoFormRedux";

import './Todo.css';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const todosObject = useSelector(state => state.todos)
    console.log(todosObject.todos);
    const {theme} = useContext(ThemeContext);

    const addTodo = (title) => {
        const newTodo = {
            title,
            completed: false,
            id: uuid(),
        }

        setTodos([...todos, newTodo]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? {...todo, completed: !todo.completed} : todo
        }))
    }

    return (
        <div className={`todo-container`}>
            <div className={`todoList-${theme}`}>
                <h1>Todo list</h1>

                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            </div>

            <div className={`todoList-${theme}`}>
                <h1>Todo list with Redux</h1>

                <TodoFormRedux />
                <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            </div>
        </div>
    );
}