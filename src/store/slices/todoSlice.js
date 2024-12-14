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
        }
    }
})

export const { addTodoRedux } = todosSlice.actions;

export default todosSlice.reducer;