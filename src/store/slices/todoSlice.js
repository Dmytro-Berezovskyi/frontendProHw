import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoRedux: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodoRedux: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodoRedux: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    }
})

export const {
    addTodoRedux,
    deleteTodoRedux,
    toggleTodoRedux
} = todosSlice.actions;

export default todosSlice.reducer;