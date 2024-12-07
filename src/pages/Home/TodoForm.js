import {useState} from "react";

import Home from "./index";


export default function TodoForm ({addTodo, handleChange, handleSubmit}) {
    return (
        <div>
            <input
                type='text'
                value={task}
                placeholder='Enter new task'
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Add todo</button>
        </div>
    )
}