import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDestination = createAsyncThunk('cities/fetchDestination', async (_, { rejectWithValue }) => {
    try {
        const destination = await axios.get('http://localhost:3001/destination');
    } catch (e) {
       return rejectWithValue(e.response?.data?.message || e.message);
    }
});