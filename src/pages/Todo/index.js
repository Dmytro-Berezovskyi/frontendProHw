import {useState, useContext} from "react";
import { v4 as uuid } from "uuid";

import {ThemeContext} from "../../context/ThemeContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFormRedux from "./TodoFormRedux";
import TodoListRedux from "./TodoListRedux";

import './Todo.css';

export default function Todo() {
    const [todos, setTodos] = useState([]);
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
            <div className={`todoList-${theme}`} style={{width: '25%'}}>
                <h1>Todo list</h1>

                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            </div>

            <div className={`todoList-${theme}`} style={{width: '25%'}}>
                <h1>Todo list with Redux</h1>

                <TodoFormRedux />
                <TodoListRedux />
            </div>
        </div>
    );
}