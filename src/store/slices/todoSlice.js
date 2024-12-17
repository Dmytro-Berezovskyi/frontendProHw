import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from "../thunks/todoThunk";

const initialState = {
    todos: [],
    loading: false,
    error: '',
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.todos = action.payload;
            })
        builder
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const {
    addTodoRedux,
    deleteTodoRedux,
    toggleTodoRedux
} = todosSlice.actions;

export default todosSlice.reducer;