import { createAsyncThunk } from "@reduxjs/toolkit";

import {todoBaseURL} from "../../api/apis";

export const fetchTodos =
    createAsyncThunk(
        'todos/fetchTodos',
        async (_,
               { rejectWithValue }) => {
    try {
        const response = await fetch(todoBaseURL + '?_limit=5')

        if (!response.ok) {
            throw new Error('Failed to fetch todos')
        }

        return await response.json();
    } catch (e) {
        return rejectWithValue(e.message);
    }
})