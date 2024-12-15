import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/todoSlice';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        counter: counterReducer,
    }
})